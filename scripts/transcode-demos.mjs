#!/usr/bin/env node
/**
 * Transcodes the legacy Angular demo screencasts into web-deliverable assets.
 *
 * The originals live in `old emalyami/public/` (gitignored, ~550 MB, some files
 * over 100 MB each). They are portrait phone screen captures at 720x1488, with
 * no meaningful audio. This script scales them to 480px wide, strips audio,
 * encodes H.264 at CRF 32, and writes a WebP poster frame per clip so nothing
 * downloads until the visitor presses play.
 *
 * Output lands in `public/demos/<moduleId>/<slug>.mp4` (+ `.webp`) and is
 * committed; the originals are not.
 *
 *   node scripts/transcode-demos.mjs          # encode everything missing
 *   node scripts/transcode-demos.mjs --force  # re-encode everything
 */

import { execFile } from "node:child_process";
import { mkdir, stat, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { promisify } from "node:util";
import { fileURLToPath } from "node:url";

const run = promisify(execFile);
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = path.join(ROOT, "old emalyami", "public");
const OUT = path.join(ROOT, "public", "demos");
const FORCE = process.argv.includes("--force");

/** Curated: the clips worth shipping, mapped to the module they document. */
const MANIFEST = {
  emapos: [
    ["videos/Point_Of_Sale/1-Accessing_menu.mp4", "accessing-the-menu"],
    ["videos/Point_Of_Sale/2-Adding_stock.mp4", "adding-stock"],
    ["videos/Point_Of_Sale/3-Make _sale.mp4", "making-a-sale"],
    ["videos/Point_Of_Sale/4-Viewing_sales.mp4", "viewing-sales"],
    ["videos/Point_Of_Sale/5-Dashboard.mp4", "the-dashboard"],
    ["videos/Point_Of_Sale/6-deleting_and_adding_cashier.mp4", "managing-cashiers"],
  ],
  ewallet: [
    ["Emalyami_videos/1-Registering_Emalyami_Account.mp4", "registering"],
    ["Emalyami_videos/5-Updating_profile_for_KYC.mp4", "kyc-profile"],
    ["Emalyami_videos/2-Transfering_Or_Sending_Money_On_Emalaymi.mp4", "sending-money"],
    ["Emalyami_videos/7-Depositing_money_into_emalyami.mp4", "depositing-money"],
    ["Emalyami_videos/6-Your_QRcode.mp4", "your-qr-code"],
    ["Emalyami_videos/9-Payout.mp4", "payout"],
    ["Emalyami_videos/3-Cash_withdrawal.mp4", "cash-withdrawal"],
    ["Emalyami_videos/4-Changing_Password.mp4", "changing-password"],
  ],
  paymate: [
    ["Emalyami_videos/5-Applying_to_become_a_Paymate.mp4", "becoming-a-paymate"],
    ["Emalyami_videos/8-Withdrawing_money_from_Paymate.mp4", "withdrawing-at-a-paymate"],
  ],
  siba: [["Emalyami_videos/10-Creating_a_Stokvel_Account.mp4", "creating-a-group"]],
  emamall: [["videos/mall/emamall.mp4", "using-emamall"]],
  emaserve: [["videos/serve/emaserve.mp4", "using-emaserve"]],
  emasave: [
    ["videos/save/emasave_module.mp4", "opening-emasave"],
    ["videos/save/emasave.mp4", "using-emasave"],
  ],
  emafunding: [
    ["videos/funding/emafunding1.mp4", "opening-emafunding"],
    ["videos/funding/emafunding3.mp4", "adding-a-campaign"],
    ["videos/funding/emafunding2.mp4", "using-emafunding"],
  ],
  ematuma: [
    ["videos/tuma/ematuma_module1.mp4", "opening-ematuma"],
    ["videos/tuma/ematuma_module2.mp4", "using-ematuma"],
  ],
  emacom: [["videos/updated videos/emacom.mp4", "using-emacom"]],
  patele: [["videos/patele.mp4", "using-patele"]],
  emaexpo: [["videos/expo/eMaExpo.mp4", "inside-emaexpo"]],
};

const VIDEO_ARGS = (input, output) => [
  "-y", "-i", input,
  "-vf", "scale=480:-2",
  "-c:v", "libx264",
  "-preset", "slow",
  "-crf", "32",
  "-profile:v", "main",
  "-pix_fmt", "yuv420p",
  "-movflags", "+faststart",
  "-an",
  output,
];

const POSTER_ARGS = (input, output) => [
  "-y", "-i", input,
  "-vf", "scale=480:-2",
  "-frames:v", "1",
  "-ss", "1",
  "-c:v", "libwebp",
  "-quality", "72",
  output,
];

const mb = (bytes) => (bytes / 1024 / 1024).toFixed(1);

async function sizeOf(file) {
  try {
    return (await stat(file)).size;
  } catch {
    return 0;
  }
}

async function main() {
  if (!existsSync(SRC)) {
    console.error(
      `\n  Source not found: ${SRC}\n` +
        `  The legacy Angular project must be present locally to (re)generate demos.\n` +
        `  Already-encoded files in public/demos/ are committed and need no action.\n`
    );
    process.exit(1);
  }

  let encoded = 0;
  let skipped = 0;
  let failed = 0;
  let srcTotal = 0;
  let outTotal = 0;

  for (const [moduleId, clips] of Object.entries(MANIFEST)) {
    const dir = path.join(OUT, moduleId);
    await mkdir(dir, { recursive: true });

    for (const [relative, slug] of clips) {
      const input = path.join(SRC, relative);
      const video = path.join(dir, `${slug}.mp4`);
      const poster = path.join(dir, `${slug}.webp`);

      if (!existsSync(input)) {
        console.warn(`  ! missing source: ${relative}`);
        failed += 1;
        continue;
      }

      srcTotal += await sizeOf(input);

      if (!FORCE && existsSync(video) && existsSync(poster)) {
        outTotal += (await sizeOf(video)) + (await sizeOf(poster));
        skipped += 1;
        continue;
      }

      process.stdout.write(`  ${moduleId}/${slug} … `);
      try {
        await run("ffmpeg", VIDEO_ARGS(input, video), { maxBuffer: 1 << 26 });
        await run("ffmpeg", POSTER_ARGS(input, poster), { maxBuffer: 1 << 26 });
        const size = (await sizeOf(video)) + (await sizeOf(poster));
        outTotal += size;
        encoded += 1;
        console.log(`${mb(await sizeOf(input))} MB → ${mb(size)} MB`);
      } catch (error) {
        failed += 1;
        console.log(`FAILED — ${error.message.split("\n")[0]}`);
      }
    }
  }

  console.log(
    `\n  encoded ${encoded}, skipped ${skipped}, failed ${failed}` +
      `\n  ${mb(srcTotal)} MB of source → ${mb(outTotal)} MB shipped\n`
  );
  if (failed) process.exitCode = 1;
}

main();
