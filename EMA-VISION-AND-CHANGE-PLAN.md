# eMa / eMalyami — Vision & Change Plan
**Prepared for approval. No code has been written yet.**
Branch: `arabic` · Date: 2026-08-27 · Author: Claude (for yara@sobek.group)

---

## How to use this document

Every proposed change has an ID (`A1`, `C3`, …) and a checkbox.

- Leave `- [ ]` → **I will implement it.**
- Change to `- [x] DELETE` → I will drop it.
- Write notes under any item → I will follow them.

Send the file back (or just tell me "do everything except C5, D5"). Then I start implementation.

---

# ✅ IMPLEMENTATION STATUS — built 2026-08-27, branch `arabic`

All approved changes are implemented. `npm run build` passes, `npm run lint` reports **0 errors**, and a Playwright pass over **all 19 routes** found no page errors, no console errors and no horizontal overflow.

| Group | Status |
|---|---|
| **A — Foundation** | ✅ `src/content/` layer (9 files, EN + AR side by side) · 14-module registry · `/modules` + `/modules/:id` routes · 6 shared primitives |
| **B — Narrative** | ✅ Hero rewritten · Problem section · Architecture diagram · Difference stats replaced · Vision & mission restored |
| **C — Modules** | ✅ Money Stack (7) · Business Stack (7) · eMaClinic + eMaCargo + eMaExpo added · 14 detail pages · `/modules` index |
| **D — Proof** | ✅ 9 industry recipes · Paymate loop · Security section · Per-module fee table · FAQ (23 Q&A) + `/faq` |
| **E — Surround** | ✅ Services refocused · White label enriched · 4 partner tracks · Footer rebuilt with real data · Chatbot fed from registry · `/help` wired to the live ticket API |
| **F — Polish** | ✅ Bug fixes · SEO + JSON-LD + sitemap · reduced-motion support |
| **G — Demos** | ✅ 29 clips transcoded **589.3 MB → 22.2 MB**, in-repo per your choice (a) |

### Beyond the plan (found during implementation)

| # | What | Why it mattered |
|---|---|---|
| 1 | **SPA fallback for nginx** (`nginx.conf` + Dockerfile) | Every new route (`/modules/:id`, `/faq`, `/help`) would have returned **404 in production** on direct visit, refresh or shared link. The default nginx config has no `try_files`. ⚠️ Docker and nginx are not installed on this machine, so the config is **not verified locally** — please check the first deploy. |
| 2 | **`toast` was never defined** | `toast.success/error` was called 8× across `useNews.js` and `NewsPage.jsx` with no import and no library installed — every one of those paths threw `ReferenceError`. Added a dependency-free `src/lib/toast.js`. |
| 3 | **`handleLike` was never defined** | `NewsPage.jsx` called it from an `onClick` while its implementation sat commented out — clicking Like crashed the page. Restored. |
| 4 | **`eslint-plugin-react` was undeclared** | `eslint.config.js` imported it but it was not in `package.json`; `npm run lint` failed outright. Added, plus an ignore for the legacy folder (it was linting 2019 jQuery bundles and reporting ~470 phantom errors). |
| 5 | **Dead `<link href="/src/style.css">`** | Referenced a file that does not exist — a 404 on every page load. Removed. |
| 6 | **Floating logo could swallow clicks** | `AnimatedLogo` is `fixed z-50` over the bottom corner, which now overlaps the module card grid. Made it `pointer-events-none`. |

### Still open

- **`hreflang` alternates** — each language is its own branch and image, but the public URL per language is recorded nowhere in the repo. Left a `TODO` in `index.html` rather than inventing domains.
- **Legal pages (`E6` partial)** — `/help` is live and wired to the real API. The Terms (53 KB), Privacy (33 KB) and Fraud-awareness (15 KB) pages are footer-linked but **not yet ported**; they are large verbatim legal documents and want a review pass before publishing.
- **Verify CORS on the ticket endpoint after deploy** — `/news` already fails CORS from non-production origins; `/help` posts to the same API host, so confirm it is allowed from the live domain.

---

# PART 1 — WHAT I FOUND

## 1.1 What the two versions actually are

| | Old (Angular) | New (React) |
|---|---|---|
| Type | Multi-page product site | Single-page marketing landing |
| Routes | 22 routes: `/home`, `/ema-pos`, `/ema-mall`, `/ema-serve`, `/ema-save`, `/ema-tuma`, `/ema-funding`, `/ema-com`, `/siba`, `/ewallet`, `/patele`, `/paymate`, `/partners`, `/faq`, `/news`, `/complaints`, `/fraud-awareness`, `/terms-conditions`, `/privacy-policy`, … | 2 routes: `/`, `/news` |
| Per-module content | A dedicated page each, with demo videos + Lottie animations ("How to open", "How to use", "Add stock", "Make order", "View sales", "Cashier login"…) | One card with a 1-sentence description |
| Depth pages | 22K FAQ, 53K terms, 33K privacy, 15K fraud-awareness, ticket/complaint system, paymate directory, user transactions | None |
| Tone | Consumer: *"Baby steps to financial freedom"* | Same slogan, translated |
| Design | 2019-era jQuery/Owl carousel/WOW.js | Tailwind 4 + shadcn + framer-motion — **much better** |

**Verdict:** the new site's *design* is a clear upgrade, but it lost roughly **90% of the product substance**. It reads as a fintech landing page. The old site read as a product. Neither one reads as *"the platform SMEs run their business on"* — which is what you asked for.

## 1.2 The positioning problem

Three sources describe eMa three different ways:

| Source | Positioning |
|---|---|
| Old Angular home | *"Save, pay and get paid… build wealth with friends and family"* → **consumer wallet** |
| New React hero | *"خطوات صغيرة نحو الحرية المالية"* → **consumer wallet** |
| `Ema descr.pdf` | *"eMa — AFRICA'S Commerce Super-App · 14 Interoperable Tools"* → **commerce platform** |
| Gemini chatbot prompt (buried in `src/services/geminiService.js`) | *"eMalyami is a complete business suite for Small and Medium-sized Enterprises"* → **SME operating system** |

The single richest, clearest, most business-focused description of eMa in this entire repository **is hidden inside a chatbot prompt that no visitor ever reads.** That is the core finding of this review. The plan below is essentially: *take what the chatbot knows and put it on the page.*

The PDF's positioning + the chatbot's SME framing = the direction you asked for. Everything below builds on that.

## 1.3 Module inventory — what's missing

The PDF lists **14 interoperable tools**. The site shows **11**, split across two sections (`OurComponents` 5 + `WhatElse` 6) with **no stated logic** for the split.

| Module | In PDF | On site now | Depth on site |
|---|---|---|---|
| eWallet | ✅ | ✅ | 1 line |
| PAYMATE | ✅ | ✅ | 1 line |
| eMaTuma | ✅ | ✅ | 1 line |
| SIBA | ✅ | ✅ | 1 line |
| eMaSave | ✅ | ✅ | 1 line |
| eMaFunding | ✅ | ✅ | 1 line |
| PATELE | ✅ | ✅ | 1 line |
| eMaMall | ✅ | ✅ | 1 line |
| eMaPOS / "PAYMATE POS" | ✅ | ✅ | 1 line |
| eMaServe | ✅ | ✅ | 1 line |
| eMaCom | ✅ | ✅ | 1 line |
| **eMaCargo** | ✅ | ❌ **missing** | — → now documented from `ema cargo.docx` |
| **eMaClinic** | ✅ | ❌ **missing** | — → now documented from `eMaClinic presentaion.pptx` (30 slides) |
| **eMaExpo** | ✅ | ❌ **missing** | — → **planned**; a demo video exists (`videos/expo/eMaExpo.mp4`) |

Meanwhile the PowerPoint and chatbot prompt contain **detailed, per-module transaction flows** (eMaPOS has 10 documented sub-flows; eMaMall 7; eMaServe 7; eMaSave 5; eMaTuma 5; eMaFunding 5) plus a documented **fee model per module**, **6 security features**, and **7 industry case studies**. None of it is on the site.

## 1.4 Issues — all resolved ✅ (answers received 2026-08-27)

| # | Issue | Resolution |
|---|---|---|
| **I1** | **Unsourced statistics.** `60k transactions`, `58% cost reduction`, `50% of Africa's GDP`, `125M market`, `99% customer satisfaction`, `10+ years`, `50 million youth`, `12-module ecosystem` (PDF says 14). | ✅ **Replace per `B4`** with structurally-true claims. Unverifiable numbers come off the site. |
| **I2** | **Geographic contradiction.** Footer says Lagos, Nigeria; the product is South African. | ✅ **Confirmed South Africa.** Real address recovered from the Angular footer: **Sobek House, 452 Ontdekkers Rd., Florida Park, Roodepoort, Gauteng, South Africa, 1709**. Powered by **SobekIMF (Pty) Ltd**. Patent No. **2020/06393**. |
| **I3** | **eMaCom marketed as live but chatbot prompt says unavailable.** | ✅ **eMaCom is LIVE.** The chatbot prompt is out of date — `E5` fixes it at the source. Demo videos exist (`emacom.mp4`, `emacom1.mp4`). |
| **I4** | **Naming collision:** PAYMATE POS / eMa(POS) / eMaPos. | ✅ **Official name is `eMaPOS`.** Normalised everywhere. |
| **I5** | **Typo:** `eMaTuna` → `eMaTuma`. | ✅ Fix in `F1`. |
| **I6** | **Dead footer links** (`href="#"`). | ✅ **Real URLs recovered** — see `E4`. |
| **I7** | **PDF marked `Confidential`.** | ✅ **Cleared for use.** |
| **I8** | **Four branches, zero shared content.** Every copy change is 4 manual edits across 18 files. | ✅ **`A1` approved in principle** — English on `master` is the source of truth, the other three translate from it (`Q9`). |

### 🔴 New issue found while collecting your answers

| # | Issue | Action |
|---|---|---|
| **I9** | **Live API keys are sitting in plaintext on disk.** `old emalyami/src/environments/environment.ts` contains three live **Google Gemini** API keys and a live **Google Maps** API key, unencrypted. That folder is currently **untracked** (`?? "old emalyami/"`) — so it hasn't leaked into this repo yet, but one `git add .` would commit them permanently into history. They're also presumably in the old Angular repo's history already. | **Recommend: rotate all four keys now**, and add `old emalyami/` to `.gitignore` before any commit. I've added this to `F1`. I have not printed or copied the key values into this document. |
| **I10** | **Ticket form has whitespace bugs in its module codes.** Two `<option>` values ship with a leading space — `" EMY_SAVE"` and `" EMY_TUMA"` — which almost certainly means eMaSave and eMaTuma support tickets have been hitting the wrong endpoint path. | Fixed during the `E6` port. Worth telling your backend team to check for orphaned tickets. |
| **I11** | **550 MB of demo video.** The old project holds 37 MP4s totalling ~550 MB (one is 112 MB on its own) plus 41 Lottie files (9 MB). This cannot go into the Vite bundle or the nginx Docker image as-is. | New change **`G1`** covers the compression + delivery pipeline. |

---

# PART 2 — THE VISION

## 2.1 The one sentence

> **eMa is the operating system for Africa's small and medium enterprises: one account to sell, get paid, restock, borrow, save, ship, and trade across borders.**

**AR:** **eMa هو النظام التشغيلي للمشاريع الصغيرة والمتوسطة في أفريقيا: حساب واحد للبيع، والقبض، وإدارة المخزون، والتمويل، والادّخار، والشحن، والتجارة عبر الحدود.**

## 2.2 The structural idea that makes it clear

Right now the 11 modules are a flat, unexplained list. The fix is to give them an **architecture the visitor can see in one glance**:

```
                      ONE IDENTITY  —  KYC · OTP · geo-tag · one phone number
                                    │
                      ONE BALANCE   —  eWallet (multi-currency)
                                    │
              ┌─────────────────────┴─────────────────────┐
              │                                           │
     💰 THE MONEY STACK                        🏪 THE BUSINESS STACK
     (how value moves)                         (how you trade)
              │                                           │
     PAYMATE   — cash in / cash out            eMaPOS    — sell in person
     eMaTuma   — send across borders           eMaMall   — sell online
     SIBA      — rotating savings group        eMaServe  — sell your skills
     eMaSave   — joint strongbox               eMaExpo   — get discovered
     eMaFunding— raise capital                 eMaCargo  — ship it
     PATELE    — insure & auto-collect         eMaCom    — talk to customers
                                               eMaClinic — care for your people
              │                                           │
              └─────────────────────┬─────────────────────┘
                                    │
                      ONE LEDGER  —  every module settles into the same wallet
```

That last line is the actual product argument and **nobody has ever written it down**: rival tools make an SME run a POS from company A, a wallet from company B, a loan from company C, and reconcile by hand. In eMa, a sale in eMaPOS, a payout from eMaServe, and a contribution to SIBA all land in the **same balance, on the same phone number, under the same KYC**. That's what "interoperable" in the PDF means, and it's the whole pitch.

## 2.3 What changes for the visitor

| Today they ask | After this plan they see |
|---|---|
| "What is this? A wallet? An app store?" | "It's the system I run my shop on." |
| "What is SIBA/PATELE/eMaTuma?" | A full module page: what it does, who it's for, how it works step by step, what it costs |
| "Does this apply to *my* business?" | An industry picker: bakery / retailer / taxi / artisan / lodge / insurer → their exact module recipe |
| "What does it cost?" | A per-module fee table saying exactly *when* the fee is taken |
| "Is my money safe?" | A security section: KYC, OTP, geo-tagging, 2-min auto-logout, 3-strike lockout |

---

# PART 3 — THE CHANGES

> **Design promise:** every change reuses the existing design system — the `--primary` `#CA823D` / `--accent` `#45241B` palette, the Degular Display font, the shadcn `Card` / `Badge` / `Button` / `Drawer` primitives, the `framer-motion` blur-up + stagger + float pattern, the SVG-illustration style, and RTL. **No new visual language. No new dependencies.** Same design, same architecture — richer content.

---

## GROUP A — Foundation (do these first)

### `A1` — Move all copy into a content layer
- [ ] **Approve**

**What:** Create `src/content/` holding every string as data:

```
src/content/
  modules.js      ← the 14 modules, single source of truth
  sections.js     ← headings, subheadings, body copy per section
  industries.js   ← the 7 industry case studies
  pricing.js      ← fee model
  faq.js          ← 17 Q&A
  security.js     ← 6 security features
  index.js
```

Components import from `@/content` instead of hardcoding Arabic in JSX.

**Why:** You have 4 language branches. Today a copy change = 4 manual edits inside JSX across ~18 files, which is exactly how the branches drift. After this, a translation = editing **one folder**. This is the single highest-value change in the document and everything else gets cheaper if it goes first.

**Risk:** Touches every section file. Zero visual change — pure refactor. I'd do it as its own commit so it's easy to review/revert.

---

### `A2` — Build the module registry
- [ ] **Approve**

**What:** One canonical record per module in `src/content/modules.js`:

```js
{
  id: "emapos",
  family: "business",          // "money" | "business"
  name: "eMaPOS",
  tagline: "…",                // 4–6 words
  summary: "…",                // 1 sentence, for cards
  description: "…",            // 2–3 sentences, for the detail view
  capabilities: [ … ],         // 6–12 bullets
  audience: [ … ],             // which industries
  howItWorks: [ … ],           // 3–5 numbered steps
  fee: { when: "…", rate: "…" },
  status: "live" | "beta" | "coming-soon",
  links: { android: "…", web: "…" },
  icon: …
}
```

**Why:** Right now the same module is described differently in `OurComponents.jsx`, `WhatElse.jsx`, `OurPlans.jsx`, `Footer.jsx` **and** the chatbot prompt — five places, five wordings, guaranteed to drift. One registry feeds the cards, the detail pages, the pricing table, the industry recipes, **and the chatbot** (see `E5`). Fixes `I3`, `I4`, `I5` structurally.

---

### `A3` — Add module detail routes
- [ ] **Approve**

**What:** Add `/modules` (index) and `/modules/:id` (detail) to `App.jsx`, inside the existing `<Layout />`. On mobile, opening a module card uses the existing `vaul` `Drawer` instead of a full navigation — the drawer component is already installed and used by the header.

**Why:** Deep module content can't live on a single scrolling page without burying the top-of-funnel. This restores what the Angular site had (`/ema-pos`, `/ema-mall`, …) — good for SEO too, since those URLs already exist in the old `sitemap.xml`.

**Note:** Keeps the SPA feel. No router change beyond two `<Route>` lines.

---

### `A4` — Add 6 shared UI primitives
- [ ] **Approve**

**What:** `ModuleCard`, `StatTile`, `StepList`, `CapabilityGrid`, `TabSwitcher`, `Accordion` — built on the existing `Card`/`Badge`/`Button` and styled with existing tokens.

**Why:** Every section below needs them; building them once keeps the site visually consistent and keeps the diff small. `Accordion` is the only genuinely new interaction (needed for the FAQ) — I'll build it on `@radix-ui` primitives already in the tree, no new dependency.

---

## GROUP B — Narrative & top of page

### `B1` — Rewrite the Hero for SMEs
- [ ] **Approve**

**Why:** Current hero sells a personal savings app. The PDF and the business case sell an SME commerce platform. This is the single most important copy change on the site.

**Design:** identical layout — same `hero_bg.svg`, same needle underline SVG, same two-button row, same stagger animation. Only the words change, **plus** a small kicker line above the H1 to preserve the historic slogan, and a trust-chip row below the buttons.

**Copy — EN:**
> **Kicker:** Small steps to financial freedom
> **H1:** Everything your business needs. **One account.**
> **Sub:** eMa is the digital operating system for Africa's small and medium enterprises. Sell in your shop and online, take payments by QR or cash, restock, raise capital, save with your group, and trade across borders — all settling into one wallet, on one phone number.
> **Primary CTA:** Start free
> **Secondary CTA:** See the 14 modules
> **Trust chips:** KYC verified · Cash-in at any Paymate · Works on any Android phone

**Copy — AR:**
> **الكِيكر:** خطوات صغيرة نحو الحرية المالية
> **العنوان:** كل ما يحتاجه عملك. **في حساب واحد.**
> **الوصف:** eMa هو النظام التشغيلي الرقمي للمشاريع الصغيرة والمتوسطة في أفريقيا. بِع في متجرك وعلى الإنترنت، واقبض المدفوعات برمز QR أو نقدًا، وأعِد التخزين، واحصل على التمويل، وادّخر مع مجموعتك، وتاجر عبر الحدود — وكل ذلك يستقرّ في محفظة واحدة، على رقم هاتف واحد.
> **الزر الأساسي:** ابدأ مجانًا
> **الزر الثانوي:** استعرض الوحدات الـ14
> **شارات الثقة:** تحقّق KYC · إيداع نقدي لدى أي وكيل Paymate · يعمل على أي هاتف أندرويد

---

### `B2` — NEW section: "One business. Six apps. Six invoices." *(the problem)*
- [ ] **Approve**

**Placement:** directly after Hero, before `EmaDifference`.

**Why:** Nowhere does the site state the *problem* eMa solves. Without a problem, 14 modules look like feature bloat instead of a solution. This section is what makes the rest of the page land.

**Design:** a before/after split — reuses the exact visual pattern already built in `white-label-solutions/BeforeAfter.jsx`, with the existing `before-white-label-solutions.svg` / `after-white-label-solutions.svg` treatment. Left column red-tinted, right column `--primary`.

**Copy — EN:**
> **H2:** Running a small business shouldn't take six apps
> **Sub:** Most African SMEs stitch together tools that don't talk to each other. eMa replaces the stack with one account.
>
> **WITHOUT eMa**
> - A card machine from the bank, a wallet from the telco, a loan from a lender who can't see your sales
> - Cash takings that never become digital balance
> - Stock counted on paper, sales counted in a notebook
> - No trading history, so no credit — even after ten profitable years
> - Cross-border payments that cost 8–12% and take days
> - Reconciliation by hand, every single night
>
> **WITH eMa**
> - One balance behind every module — POS, marketplace, savings, loans
> - Any Paymate turns cash into digital balance in seconds
> - Stock, sales, cashiers and suppliers in one back office
> - Your transaction history *is* your credit record
> - Cross-border transfer in real time, at a fraction of the cost
> - Reconciliation happens automatically, because it's one ledger

**Copy — AR:**
> **العنوان:** إدارة مشروع صغير لا ينبغي أن تتطلّب ستة تطبيقات
> **الوصف:** معظم المشاريع الصغيرة والمتوسطة في أفريقيا تجمع أدوات لا يتحدّث بعضها إلى بعض. eMa يستبدل هذه المنظومة بحساب واحد.
>
> **بدون eMa**
> - جهاز دفع من البنك، ومحفظة من شركة الاتصالات، وقرض من ممول لا يرى مبيعاتك
> - متحصّلات نقدية لا تتحوّل أبدًا إلى رصيد رقمي
> - مخزون يُحصى على الورق، ومبيعات تُسجَّل في دفتر
> - لا سجل تجاري، وبالتالي لا تمويل — حتى بعد عشر سنوات من الربح
> - مدفوعات عبر الحدود تكلّف 8–12% وتستغرق أيامًا
> - تسوية حسابات يدوية، كل ليلة
>
> **مع eMa**
> - رصيد واحد خلف كل وحدة — نقطة البيع، والسوق، والادّخار، والتمويل
> - أي وكيل Paymate يحوّل النقد إلى رصيد رقمي في ثوانٍ
> - المخزون والمبيعات والكاشيرات والموردون في لوحة تحكّم واحدة
> - سجلّ معاملاتك **هو** سجلّك الائتماني
> - تحويل عبر الحدود في الوقت الفعلي وبجزء من التكلفة
> - التسوية تتمّ تلقائيًا، لأنه دفتر حسابات واحد

---

### `B3` — NEW section: Platform architecture diagram *(the "vision is clear" section)*
- [ ] **Approve**

**Placement:** after `B2`, before the module sections.

**Why:** This is the direct answer to *"the idea from eMalyami is more clear and the vision is more clear for all."* One diagram does more than 14 cards. It also visually justifies the two-family split used in `C1`/`C2`.

**Design:** a hand-authored, animated **inline SVG** (not an image) matching the existing SVG-illustration style, in `--primary`/`--accent`. Layers draw in on scroll using the site's existing `useInView` + stagger pattern. Fully RTL-mirrored. Collapses to a vertical stack on mobile.

**Copy — EN:**
> **H2:** One identity. One balance. Fourteen tools.
> **Sub:** Every eMa module settles into the same wallet, under the same verified identity. That is what makes the platform interoperable — and what makes your business finally legible to lenders, partners and buyers.
>
> - **Layer 1 — Identity:** One verified phone number. KYC, OTP, geo-tagging.
> - **Layer 2 — Balance:** One multi-currency eWallet. Load by card, EFT or Paymate.
> - **Layer 3 — The Money Stack:** Move, save, borrow, insure.
> - **Layer 3 — The Business Stack:** Sell, serve, promote, ship, communicate.
> - **Layer 4 — Ledger:** Every transaction in every module lands in the same statement.

**Copy — AR:**
> **العنوان:** هوية واحدة. رصيد واحد. أربع عشرة أداة.
> **الوصف:** كل وحدة في eMa تستقرّ في المحفظة نفسها، تحت الهوية المُوثَّقة نفسها. هذا ما يجعل المنصّة متكاملة — وما يجعل عملك أخيرًا مقروءًا أمام المموّلين والشركاء والمشترين.
>
> - **الطبقة 1 — الهوية:** رقم هاتف واحد مُوثَّق. تحقّق KYC ورمز OTP وتحديد الموقع.
> - **الطبقة 2 — الرصيد:** محفظة eMa واحدة متعددة العملات. الشحن ببطاقة أو تحويل بنكي أو عبر وكيل Paymate.
> - **الطبقة 3 — المنظومة المالية:** حرِّك أموالك، وادّخر، واقترض، وأمِّن.
> - **الطبقة 3 — المنظومة التجارية:** بِع، وقدِّم خدماتك، وروّج، واشحن، وتواصل.
> - **الطبقة 4 — دفتر الحسابات:** كل معاملة في كل وحدة تظهر في كشف حساب واحد.

---

### `B4` — Rework "The eMa Difference" stats
- [ ] **Approve**

**Why:** See issue `I1` — the four current numbers are unsourced. I propose replacing them with claims that are **structurally true and defensible** (module counts, network model, capability facts) rather than metrics we can't back up. If you can source the originals, I'll keep them instead — tell me under this item.

**Design:** unchanged. Same 4 cards, same emoji SVGs, same spring stagger, same `man-woman.svg`.

**Proposed replacements — EN / AR:**

| # | Value | EN label | AR label |
|---|---|---|---|
| 1 | **14** | interoperable modules on one account | وحدة متكاملة على حساب واحد |
| 2 | **1** | wallet behind every module — no reconciliation | محفظة واحدة خلف كل وحدة — بلا تسوية يدوية |
| 3 | **Cash → Digital** | every Paymate is a branch | كل وكيل Paymate هو فرع |
| 4 | **SMEs** | the customer we were built for | المشاريع الصغيرة والمتوسطة — العميل الذي بُنينا من أجله |

---

### `B5` — Add Vision & Mission to "Who Are We"
- [ ] **Approve**

**Why:** The old Angular `features` page had a real vision/mission statement. The new site dropped it. It's short, it's good, and it belongs on the page.

**Design:** appended inside the existing `WhoAreWe` section as a two-column block under the Sobek Group statement. Same map illustration, same badge, same crown SVG. No new layout.

**Copy — EN:**
> **Our mission:** To become the trusted financial home for every community burdened by the cost and complexity of conventional banking — creating jobs and improving lives, inclusively and credibly.
> **Our vision:** Africa's leading digital commerce and finance platform — connecting SMEs, cutting cross-border transaction costs, and bringing the unbanked into the formal economy through mobile-first tools, microfinance and crowdfunding.
> **Who builds it:** eMa is developed by **Sobek IT** in association with **Sobek IMF**, members of the Sobek Group.

**Copy — AR:**
> **رسالتنا:** أن نصبح البيت المالي الموثوق لكل مجتمع أنهكته تكاليف الخدمات المصرفية التقليدية وتعقيدها — عبر خلق فرص العمل وتحسين حياة من نخدمهم، بشمولٍ ومصداقية.
> **رؤيتنا:** أن نكون المنصّة الرائدة للتجارة والتمويل الرقمي في أفريقيا — نربط المشاريع الصغيرة والمتوسطة، ونخفّض تكاليف المعاملات عبر الحدود، وندخل غير المتعاملين مع البنوك إلى الاقتصاد الرسمي عبر أدوات تعمل على الهاتف أولًا، والتمويل الأصغر، والتمويل الجماعي.
> **من يبنيها:** eMa تطوير **Sobek IT** بالتعاون مع **Sobek IMF**، من شركات مجموعة Sobek.

---

## GROUP C — The module system *(the core of this plan)*

### `C1` — Replace "Our Components" with **The Money Stack** (7 financial modules)
- [ ] **Approve**

**Replaces:** `sections/our-components/OurComponents.jsx` (currently 5 modules: PAYMATE, SIBA, eWALLET, eMaSave, eMaTuma)
**Becomes:** 7 modules — adds **eMaFunding** and **PATELE**, which are currently misfiled under "What Else" even though they're financial products, not commercial ones.

**Design:** keeps the signature radial layout — the big `--primary` circle with the phone prototype floating above it, cards orbiting left and right. Extends from a 2+2+1 to a 3+3+1 arrangement. Each card gains: a status badge, a 3-bullet capability list, and a "Learn more →" link to its detail page. Same `ComponentContainer`, same blur-up stagger.

**Section copy — EN:**
> **H2:** The Money Stack
> **Sub:** Seven ways value moves in, around and out of your business — all settling into the same wallet.

**Section copy — AR:**
> **العنوان:** المنظومة المالية
> **الوصف:** سبع طرق تتحرك بها الأموال داخل عملك وخارجه — وكلها تستقرّ في المحفظة نفسها.

**Module copy:**

| Module | EN tagline / summary | AR tagline / summary |
|---|---|---|
| **eWallet** | *Your digital balance* — Load funds by card, EFT or Paymate. Get paid by QR code or phone number, pay bills, and buy airtime on any network — all from one multi-currency balance. | *محفظتك الرقمية* — اشحن رصيدك ببطاقة أو تحويل بنكي أو عبر وكيل Paymate. اقبض المدفوعات برمز QR أو رقم الهاتف، وادفع الفواتير، واشترِ رصيد اتصال لجميع الشبكات — من رصيد واحد متعدد العملات. |
| **PAYMATE** | *Cash becomes digital* — A network of local partners — spaza shops, service stations, traders — who load cash into wallets and pay out withdrawals. Every Paymate is a branch, without the branch. | *النقد يصبح رقميًا* — شبكة من الشركاء المحليين — متاجر الحي ومحطات الخدمة والتجار — يشحنون النقد في المحافظ ويصرفون السحوبات. كل وكيل Paymate هو فرع، بلا مبنى فرع. |
| **eMaTuma** | *Money across borders* — Send internationally in real time at a fraction of bank cost. Live exchange rates, a built-in currency calculator, and cash pickup at any registered Paymate. | *الأموال عبر الحدود* — أرسل دوليًا في الوقت الفعلي وبجزء من تكلفة البنوك. أسعار صرف حيّة، وحاسبة عملات مدمجة، واستلام نقدي لدى أي وكيل Paymate مسجّل. |
| **SIBA** | *The rotating savings circle* — The stokvel, digitised. A group contributes a fixed amount on a set cycle, and each month one member collects the whole pool. Discipline, community, and a lump sum when your turn comes. | *الجمعية الدوّارة* — نظام الجمعية التقليدي، رقميًا. تساهم المجموعة بمبلغ ثابت في دورة محددة، ويستلم عضو واحد المبلغ المجمّع كل شهر. انضباط، وتكافل، ومبلغ كبير عندما يأتي دورك. |
| **eMaSave** | *The joint strongbox* — Save toward a goal with people you trust. Daily, weekly or monthly cycles; every member sees every contribution; withdrawals require unanimous agreement. | *الصندوق المشترك* — ادّخر نحو هدف مع من تثق بهم. دورات يومية أو أسبوعية أو شهرية؛ كل عضو يرى كل مساهمة؛ والسحب يتطلب موافقة جماعية بالإجماع. |
| **eMaFunding** | *Raise the capital* — Publish a campaign with your documents and funding goal, receive offers from backers, sign the agreement in-app, and draw down the funds. Crowdfunding for businesses that banks won't score. | *احصل على رأس المال* — انشر حملتك مع مستنداتك وهدفك التمويلي، واستقبل عروض الداعمين، ووقّع الاتفاقية داخل التطبيق، واسحب الأموال. تمويل جماعي للمشاريع التي لا تصنّفها البنوك. |
| **PATELE** | *Cover and auto-collect* — A financial-services marketplace where institutions offer loans, insurance and funeral cover, with policy sharing, automated monthly repayments and secure communication built in. | *التغطية والتحصيل الآلي* — سوق للخدمات المالية تقدّم فيه المؤسسات القروض والتأمين وتغطية الجنازات، مع مشاركة الوثائق والسداد الشهري الآلي والتواصل الآمن. |

---

### `C2` — Replace "What Else" with **The Business Stack** (7 commercial modules)
- [ ] **Approve**

**Replaces:** `sections/what-else/WhatElse.jsx`
**Becomes:** 7 commercial modules — moves eMaFunding and PATELE out (to `C1`), and adds the three missing ones from the PDF: **eMaExpo, eMaCargo, eMaClinic** (see `C3`).

**Design:** same grid + floating phone prototype (`what-else-mobile-prototype.svg`), same `ComponentContainer` cards, extended to a 7-card responsive grid. Cards gain status badges, capability bullets, and detail links.

**Section copy — EN:**
> **H2:** The Business Stack
> **Sub:** Everything you need to trade — in person, online, and across the continent.

**Section copy — AR:**
> **العنوان:** المنظومة التجارية
> **الوصف:** كل ما تحتاجه للتجارة — وجهًا لوجه، وعبر الإنترنت، وعبر القارة.

**Module copy:**

| Module | EN tagline / summary | AR tagline / summary |
|---|---|---|
| **eMaPOS** | *Your shop, on your phone* — Run one shop or many. Take stock, scan QR codes, issue receipts, process refunds, log damaged goods, create cashier accounts, and get alerted when stock runs low — with a full web back office for the owner. | *متجرك في هاتفك* — أدِر متجرًا واحدًا أو عدة متاجر. جرد المخزون، وامسح رموز QR، وأصدر الإيصالات، وعالج المرتجعات، وسجّل التالف، وأنشئ حسابات للكاشيرات، واستقبل تنبيهات نفاد المخزون — مع لوحة تحكّم كاملة على الويب للمالك. |
| **eMaMall** | *Your storefront, online* — Open a virtual shop in minutes. List products, receive and negotiate offers, chat with buyers, track every order from packing to delivery, and settle safely through built-in escrow. | *واجهتك على الإنترنت* — افتح متجرًا افتراضيًا في دقائق. اعرض منتجاتك، واستقبل العروض وتفاوض عليها، وتحدّث مع المشترين، وتتبّع كل طلب من التغليف إلى التسليم، واستلم أموالك بأمان عبر نظام الضمان المدمج. |
| **eMaServe** | *Get hired, get done* — Post the job or find the work. Bid on nearby jobs, hire the right agent, track progress from start to completion, keep it all on a shared calendar, and rate each other at the end. | *وظِّف وأنجِز* — انشر المهمة أو ابحث عن العمل. قدّم عروضك على الوظائف القريبة، ووظّف الشخص المناسب، وتابع التقدّم من البداية إلى الإنجاز، وأدر كل ذلك على تقويم مشترك، وقيّموا بعضكم في النهاية. |
| **eMaExpo** | *Get discovered* — Digital advertising and virtual exhibition space that puts your products in front of buyers already inside the eMa network. | *كن مرئيًا* — إعلان رقمي ومساحة معارض افتراضية تضع منتجاتك أمام مشترين موجودين أصلًا داخل شبكة eMa. |
| **eMaCargo** | *Ship it, bid it, track it* — Post a shipment once and let carriers compete for it. Pick the best offer on price, date and rating for the international leg and both local legs, pay once, and track the whole chain in one place. | *اشحن، وقارن العروض، وتتبّع* — انشر شحنتك مرة واحدة ودع شركات الشحن تتنافس عليها. اختر أفضل عرض بالسعر والتاريخ والتقييم للمرحلة الدولية وللمرحلتين المحليتين، وادفع مرة واحدة، وتتبّع السلسلة كاملة في مكان واحد. |
| **eMaCom** | *Talk to your customers* — Pay-as-you-go VoIP, video conferencing and encrypted messaging, plus a hosted call centre for your business — no PBX, no contract. | *تواصل مع عملائك* — اتصال صوتي عبر الإنترنت ومؤتمرات فيديو ورسائل مشفّرة بنظام الدفع حسب الاستخدام، إضافة إلى مركز اتصال مُدار لشركتك — بلا سنترال وبلا عقود. |
| **eMaClinic** | *Your doctor, one click away* — Search by specialty or availability, book a verified doctor, consult by video, and get your prescription by email — paid from the wallet your PATELE cover sits in. | *طبيبك على بُعد نقرة واحدة* — ابحث بالتخصص أو بالتوافر، واحجز مع طبيب موثّق، واستشره بالفيديو، واستلم وصفتك على بريدك — بالدفع من المحفظة نفسها التي تحمل تغطية PATELE الخاصة بك. |

---

### `C3` — Add the 3 missing modules (eMaClinic, eMaCargo, eMaExpo) ✅ *source material received*
- [ ] **Approve**

**Why:** The PDF says 14 tools; the site shows 11. Presenting 11 undercuts the "super-app" claim in your own deck.

**Status confirmed:** eMaClinic **live** · eMaCargo **live** · eMaExpo **planned**.

**Design:** identical `ModuleCard`; eMaExpo carries a `Planned` / `قريبًا` badge in `--muted`.

> **These two turned out to be far more substantial than the PDF one-liners suggested.** eMaClinic is a complete two-sided telemedicine platform (30 slides of documented flows) and eMaCargo is a multi-phase international freight bidding marketplace. Neither is a minor add-on — both deserve full detail pages, and eMaCargo in particular strengthens the whole SME story, because it closes the loop between selling on eMaMall and physically delivering the goods.

---

#### `C3a` — eMaClinic *(live)*

**Copy — EN:**
> ### eMaClinic — *Your doctor, one click away*
> `Live` `Business Stack`
>
> **What it is**
> eMaClinic is a telemedicine platform that connects patients with verified doctors — booking, video consultation, prescriptions, medical records and payment, all in one place. It works both ways: patients find and book care; doctors manage appointments, consultations and their practice.
>
> **How it works — for patients**
> 1. **Find your doctor** — search by specialty or by the date you're free, and browse verified, experienced professionals.
> 2. **Book** — pick the specialisation, the date, then the doctor available on that date; view their profile and available times, and choose the slot that suits you.
> 3. **Pay** — choose your payment method and confirm. Settles from your eMa wallet.
> 4. **Consult** — open the video call straight from the reservation, or chat with your doctor beforehand. The meeting link is also emailed to you.
> 5. **Get your prescription** — the doctor uploads the prescription report; you can view it, download it, and it arrives in your email.
>
> **How it works — for doctors**
> 1. **Dashboard** — a calendar view of the day's reservations.
> 2. **Consult** — open every patient's details, chat, share files, and start the video call from the reservation card.
> 3. **Act on a reservation** — complete it, cancel it, or **refer the patient onward** to another specialisation. Pick the specialty, date and doctor; the original reservation is marked *Redirected*, a new one is created, and the patient is notified.
> 4. **Prescriptions carry over** — any report uploaded to the redirected reservation appears on the new one too, so the second doctor sees the full picture.
> 5. **Manage your practice** — set and update your available appointments, maintain your profile and upload your licence, and search your full reservation history by name or date.
>
> **Everything it does**
> Search by specialty or availability · verified professional profiles · appointment booking with live availability · in-app payment · secure doctor–patient chat with file sharing · one-click video consultation with link emailed · prescription reports, downloadable and emailed · patient personal, medical and insurance records · specialisation directory · doctor calendar dashboard · referral to another specialisation with history carried across · doctor licence management · searchable reservation history
>
> **Who it's for**
> Patients anywhere · GPs and specialists · clinics · medical schemes and insurers (pairs with PATELE cover)
>
> **Where it settles**
> Consultations are paid from the same eMa wallet as everything else — so cover bought through PATELE can actually be spent on care.
>
> **Works well with:** PATELE (medical cover and auto-collection) · eWallet (payment) · eMaCom (calls)

**Copy — AR:**
> ### eMaClinic — *طبيبك على بُعد نقرة واحدة*
> `متاح` `المنظومة التجارية`
>
> **ما هي**
> eMaClinic منصّة طب عن بُعد تربط المرضى بأطباء موثّقين — الحجز، والاستشارة بالفيديو، ووصفات الدواء، والسجلات الطبية، والدفع، كلها في مكان واحد. وهي تعمل في الاتجاهين: المريض يجد الرعاية ويحجزها، والطبيب يدير مواعيده واستشاراته وعيادته.
>
> **كيف تعمل — للمريض**
> 1. **اعثر على طبيبك** — ابحث بالتخصص أو بالتاريخ المتاح لديك، وتصفّح نخبة من المهنيين المُوثَّقين وذوي الخبرة.
> 2. **احجز** — اختر التخصص ثم التاريخ ثم الطبيب المتاح في ذلك اليوم؛ واطّلع على ملفه وأوقاته المتاحة، واختر الموعد المناسب لك.
> 3. **ادفع** — اختر وسيلة الدفع وأكّد. تُخصم من محفظة eMa الخاصة بك.
> 4. **استشِر** — افتح مكالمة الفيديو مباشرة من الحجز، أو تحدّث مع طبيبك قبلها. ويصلك رابط الاجتماع على بريدك أيضًا.
> 5. **استلم وصفتك** — يرفع الطبيب تقرير الوصفة، فتطّلع عليه وتحمّله، ويصلك كذلك على بريدك الإلكتروني.
>
> **كيف تعمل — للطبيب**
> 1. **لوحة التحكّم** — عرض تقويمي لحجوزات اليوم.
> 2. **الاستشارة** — اطّلع على بيانات كل مريض، وتحدّث معه، وشارك الملفات، وابدأ مكالمة الفيديو من بطاقة الحجز.
> 3. **التصرّف في الحجز** — أنجِزه، أو ألغِه، أو **حوّل المريض** إلى تخصص آخر. اختر التخصص والتاريخ والطبيب؛ فيُوسَم الحجز الأصلي بـ*مُحوَّل*، ويُنشأ حجز جديد، ويُخطَر المريض بذلك.
> 4. **الوصفات تنتقل معه** — أي تقرير مرفوع على الحجز المُحوَّل يظهر على الحجز الجديد أيضًا، ليرى الطبيب الثاني الصورة كاملة.
> 5. **أدِر عيادتك** — حدّد مواعيدك المتاحة وحدّثها، وتابع ملفك الشخصي وارفع ترخيصك، وابحث في سجل حجوزاتك بالاسم أو التاريخ.
>
> **كل ما تقدّمه**
> بحث بالتخصص أو بالتوافر · ملفات مهنيين موثّقين · حجز مواعيد بتوافر حيّ · دفع داخل التطبيق · محادثة آمنة بين الطبيب والمريض مع مشاركة الملفات · استشارة فيديو بنقرة واحدة مع إرسال الرابط بالبريد · تقارير وصفات قابلة للتحميل وتُرسل بالبريد · سجلات المريض الشخصية والطبية والتأمينية · دليل التخصصات · لوحة تقويم للطبيب · التحويل إلى تخصص آخر مع نقل السجل · إدارة ترخيص الطبيب · سجل حجوزات قابل للبحث
>
> **لمن هي**
> المرضى في أي مكان · أطباء الأسرة والاختصاصيون · العيادات · شركات التأمين والبرامج الطبية (تتكامل مع تغطية PATELE)
>
> **أين تستقرّ الأموال**
> تُدفع الاستشارات من محفظة eMa نفسها — فتُصرَف التغطية المشتراة عبر PATELE فعليًا على الرعاية.
>
> **تعمل جيدًا مع:** PATELE (التغطية الطبية والتحصيل الآلي) · eWallet (الدفع) · eMaCom (المكالمات)

---

#### `C3b` — eMaCargo *(live)*

**Copy — EN:**
> ### eMaCargo — *Ship it, bid it, track it*
> `Live` `Business Stack`
>
> **What it is**
> eMaCargo is a competitive freight marketplace. You post a shipment once; carriers bid for it. Instead of phoning around for quotes, you receive offers and pick the best one on price, delivery date, rating and feedback — for the international leg **and** the local collection and delivery at both ends.
>
> **How it works**
> 1. **Post the shipment** — origin, destination, sender, recipient, package details and any special requirements.
> 2. **Phase 1 — international carriers bid** — cargo companies see your shipment and submit offers. You compare on price, estimated delivery date, feedback and rating, and select the best.
> 3. **Phase 2 — local carriers bid at both ends** — once the international leg is locked, local companies in the origin country and the destination country bid for first-mile pickup and last-mile delivery. Their dates are generated automatically to line up with the cargo provider's schedule, so the chain can't break.
> 4. **Pay once** — with all three offers selected, the shipment moves to payment. One payment from your eMa wallet accepts every selected offer at once.
> 5. **Track end to end** — every company on the chain posts tracking records to the same shipment.
> 6. **Rate them** — once delivered, you submit feedback, which feeds the ratings the next shipper bids against.
>
> **Everything it does**
> Structured shipment creation · competitive carrier bidding · multi-phase award (international + origin-local + destination-local) · automatic schedule synchronisation between legs · selection on price, date, feedback and rating · single consolidated payment · shared multi-carrier tracking log · post-delivery feedback and carrier ratings
>
> **Why it matters**
> Freight is where most small exporters lose their margin — and it's the reason a good product never leaves the country. eMaCargo turns an opaque, phone-based quoting process into a competitive market, and syncs the legs so a shipment can't strand between carriers.
>
> **Who it's for**
> Exporters and importers · eMaMall sellers shipping across borders · manufacturers · cargo and freight companies · local courier and delivery firms
>
> **Works well with:** eMaMall (ship what you sell) · eMaTuma (pay across borders) · eMaPOS (restock from abroad)

**Copy — AR:**
> ### eMaCargo — *اشحن، وقارن العروض، وتتبّع*
> `متاح` `المنظومة التجارية`
>
> **ما هي**
> eMaCargo سوق تنافسي للشحن. تنشر شحنتك مرة واحدة، فتتنافس شركات الشحن عليها. وبدلًا من الاتصال بعشرات الجهات لطلب عروض الأسعار، تصلك العروض وتختار أفضلها بحسب السعر وتاريخ التسليم والتقييم وآراء العملاء — للمرحلة الدولية **وكذلك** للتحصيل والتسليم المحلي في الطرفين.
>
> **كيف تعمل**
> 1. **انشر الشحنة** — بيانات المصدر والوجهة والمُرسِل والمُستلِم وتفاصيل الطرد وأي متطلبات خاصة.
> 2. **المرحلة 1 — عروض شركات الشحن الدولية** — تطّلع الشركات على شحنتك وتقدّم عروضها. تقارنها بالسعر وتاريخ التسليم المتوقع والتقييم وآراء العملاء، وتختار الأفضل.
> 3. **المرحلة 2 — عروض الشركات المحلية في الطرفين** — بعد اعتماد المرحلة الدولية، تتقدّم شركات محلية في بلد المصدر وبلد الوجهة بعروض للتحصيل من الباب وللتسليم النهائي. وتُولَّد تواريخها تلقائيًا لتتوافق مع جدول شركة الشحن الدولية، فلا تنقطع السلسلة.
> 4. **ادفع مرة واحدة** — بعد اختيار العروض الثلاثة تنتقل الشحنة إلى الدفع. دفعة واحدة من محفظة eMa تعتمد كل العروض المختارة دفعة واحدة.
> 5. **تتبّع من الطرف إلى الطرف** — كل شركة في السلسلة تسجّل تحديثات التتبّع على الشحنة نفسها.
> 6. **قيّمهم** — بعد التسليم تقدّم تقييمك، فيغذّي التقييمات التي يعتمد عليها الشاحن التالي.
>
> **كل ما تقدّمه**
> إنشاء شحنة ببيانات منظّمة · مزايدة تنافسية بين الناقلين · ترسية متعددة المراحل (دولية + محلية عند المصدر + محلية عند الوجهة) · مزامنة تلقائية للجداول بين المراحل · الاختيار بحسب السعر والتاريخ والتقييم والآراء · دفعة واحدة موحّدة · سجل تتبّع مشترك بين كل الناقلين · تقييم وآراء بعد التسليم
>
> **لماذا تهمّ**
> الشحن هو ما يلتهم هامش ربح صغار المصدّرين، وهو السبب في أن منتجًا جيدًا قد لا يغادر بلده أبدًا. تحوّل eMaCargo عملية تسعير غامضة تعتمد على المكالمات إلى سوق تنافسي، وتزامن مراحل الرحلة حتى لا تعلق الشحنة بين ناقلين.
>
> **لمن هي**
> المصدّرون والمستوردون · بائعو eMaMall الذين يشحنون عبر الحدود · المصنّعون · شركات الشحن والنقل · شركات التوصيل المحلية
>
> **تعمل جيدًا مع:** eMaMall (اشحن ما تبيعه) · eMaTuma (ادفع عبر الحدود) · eMaPOS (أعِد التخزين من الخارج)

---

#### `C3c` — eMaExpo *(planned)*

**Copy — EN:**
> ### eMaExpo — *Get discovered*
> `Planned` `Business Stack`
>
> Digital advertising and virtual exhibition space that puts your products in front of buyers already inside the eMa network — so the audience you're advertising to is one tap away from paying you.
>
> *In development. A preview is available.*

**Copy — AR:**
> ### eMaExpo — *كن مرئيًا*
> `قريبًا` `المنظومة التجارية`
>
> إعلان رقمي ومساحة معارض افتراضية تضع منتجاتك أمام مشترين موجودين أصلًا داخل شبكة eMa — فيكون الجمهور الذي تعلن له على بُعد نقرة واحدة من الدفع لك.
>
> *قيد التطوير. تتوفّر نسخة تجريبية للعرض.*

**Note:** since a finished `eMaExpo.mp4` demo exists, tell me if you'd rather present it as **Beta** than **Planned** — I'll follow your call either way.

---

### `C4` — Module detail pages (`/modules/:id`)
- [ ] **Approve**

**Why:** This is where "rich with data" actually happens. The old Angular site gave each module a page with demo videos and step-by-step flows. This restores that depth in the new design language — and the source material already exists in the PowerPoint and the chatbot prompt.

**Template (same for all 14):**
1. **Hero strip** — module name, tagline, status badge, family badge, download/web CTAs
2. **What it is** — 2–3 sentences
3. **How it works** — 3–5 numbered steps (`StepList`)
4. **Everything it does** — full capability grid
5. **Who it's for** — industry chips linking into `D1`
6. **What it costs** — the fee rule, stated plainly
7. **Where it settles** — one line tying it back to the wallet
8. **Related modules** — 2–3 cross-links

**Sample — full text for the eMaPOS page (EN):**

> ### eMaPOS — *Your shop, on your phone*
> `Live` `Business Stack`
>
> **What it is**
> eMaPOS turns any Android phone into a full point-of-sale system. It handles the sale, the stock behind the sale, the staff making the sale, and the supplier who refills the shelf — and every rand taken lands directly in your eMa wallet, ready to spend, save or send.
>
> **How it works**
> 1. **Create your shop** — add your shop details and upload your documents. Run as many shops as you own.
> 2. **Load your stock** — add items with prices, update details any time, and set discounts.
> 3. **Sell** — scan the QR code, take the payment, and issue a printed or emailed receipt.
> 4. **Add your cashiers** — each cashier gets their own account and logs in from the POS app with a username and an OTP sent to their phone. They never touch your eMa account.
> 5. **Watch the numbers** — today's sales, running totals, supplier list and stock levels, live on the dashboard or the web back office.
>
> **Everything it does**
> - Multiple shops under one owner account
> - Full stock take and inventory control
> - QR code scanning at checkout
> - Receipts printed or emailed to the customer
> - Refunds and returns processing
> - Damaged-goods reporting and register
> - Item-level discounting
> - Separate cashier accounts with OTP login
> - Automatic low-stock notification to suppliers
> - Today's-sales and supplier views
> - Web access to the full back office
> - Settles straight into your eMa wallet
>
> **Who it's for**
> Major retailers · Bakeries · Spaza shops · Restaurants · Pharmacies · Any shop with a counter
>
> **What it costs**
> Charged monthly, automatically debited from your eMa account, based on your total orders for the month. No terminal to buy, no monthly rental, no contract.
>
> **Where it settles**
> Every eMaPOS sale lands in the same eMa wallet as your eMaMall orders and eMaServe payouts — one balance, one statement, no reconciliation.
>
> **Works well with:** eMaMall (sell the same stock online) · eMaCargo (deliver it) · eMaFunding (raise capital against your sales record)

**AR version of the above:**

> ### eMaPOS — *متجرك في هاتفك*
> `متاح` `المنظومة التجارية`
>
> **ما هي**
> تحوّل eMaPOS أي هاتف أندرويد إلى نظام نقطة بيع متكامل. تدير عملية البيع، والمخزون خلفها، والموظفين الذين ينفّذونها، والمورّد الذي يعيد ملء الرفوف — وكل مبلغ يُحصَّل يصل مباشرة إلى محفظة eMa الخاصة بك، جاهزًا للإنفاق أو الادّخار أو التحويل.
>
> **كيف تعمل**
> 1. **أنشئ متجرك** — أضف بيانات المتجر وارفع مستنداته. أدِر أي عدد تملكه من المتاجر.
> 2. **أدخل مخزونك** — أضف الأصناف بأسعارها، وحدّث بياناتها في أي وقت، وحدّد الخصومات.
> 3. **بِع** — امسح رمز QR، واستلم الدفعة، وأصدر إيصالًا مطبوعًا أو عبر البريد الإلكتروني.
> 4. **أضف الكاشيرات** — لكل كاشير حساب خاص يدخل به من تطبيق نقطة البيع باسم مستخدم ورمز OTP يصل إلى هاتفه. ولا يصل أحد منهم إلى حساب eMa الخاص بك.
> 5. **راقب الأرقام** — مبيعات اليوم والإجماليات وقائمة الموردين ومستويات المخزون، مباشرة على لوحة التحكّم أو من الويب.
>
> **كل ما تقدّمه**
> - متاجر متعددة تحت حساب مالك واحد
> - جرد كامل وإدارة للمخزون
> - مسح رموز QR عند الدفع
> - إيصالات مطبوعة أو مُرسلة إلى بريد العميل
> - معالجة المرتجعات والاستردادات
> - الإبلاغ عن البضائع التالفة وتسجيلها
> - خصومات على مستوى الصنف
> - حسابات منفصلة للكاشيرات بتسجيل دخول عبر OTP
> - تنبيه تلقائي للموردين عند انخفاض المخزون
> - عرض مبيعات اليوم وقائمة الموردين
> - وصول كامل إلى لوحة التحكّم عبر الويب
> - التحصيل مباشرة في محفظة eMa
>
> **لمن هي**
> متاجر التجزئة الكبرى · المخابز · متاجر الحي · المطاعم · الصيدليات · أي متجر له كاونتر
>
> **التكلفة**
> رسوم شهرية تُخصم تلقائيًا من حساب eMa، محسوبة على إجمالي طلباتك خلال الشهر. لا جهاز تشتريه، ولا إيجار شهري، ولا عقد.
>
> **أين تستقرّ الأموال**
> كل عملية بيع في eMaPOS تصل إلى محفظة eMa نفسها التي تصلها طلبات eMaMall ومستحقات eMaServe — رصيد واحد، وكشف حساب واحد، وبلا تسوية يدوية.
>
> **تعمل جيدًا مع:** eMaMall (بِع المخزون نفسه أونلاين) · eMaCargo (وصّله) · eMaFunding (احصل على تمويل مقابل سجل مبيعاتك)

**On approval I will write all 14 pages to this standard, in EN and AR.** The source detail already exists for eMaPOS, eMaMall, eMaServe, eMaSave, eMaTuma, eMaFunding, SIBA, eWallet, PAYMATE and PATELE. For eMaCom, eMaExpo, eMaCargo and eMaClinic I'll need your input (see `C3`).

---

### `C5` — Module index page (`/modules`)
- [ ] **Approve**

**What:** All 14 modules in one filterable grid — filter by family (Money / Business), by status (Live / Coming soon), by industry.

**Why:** A single scannable answer to "what do I actually get?", and a clean landing target for the header CTA and the footer.

**Copy — EN:** **H1:** Fourteen tools. One account. · **Sub:** Every module works on its own and works better together. Pick the ones your business needs today — the rest are waiting on the same login.
**Copy — AR:** **العنوان:** أربع عشرة أداة. حساب واحد. · **الوصف:** كل وحدة تعمل بمفردها، وتعمل بشكل أفضل مع غيرها. اختر ما يحتاجه عملك اليوم — والبقية بانتظارك على تسجيل الدخول نفسه.

---

## GROUP D — Depth & proof

### `D1` — NEW section: "Built for your business" *(industry selector)*
- [ ] **Approve**

**Placement:** after the two module sections.

**Why:** This is the strongest unused asset you have. Your own PowerPoint (slides 13–20) already worked out seven industry case studies. Turning them into an interactive selector converts "14 modules" into "here is *my* setup" — which is what actually makes an SME sign up.

**Design:** a `TabSwitcher` chip row (reusing `Badge` styling) above a card that animates on change with the existing blur-up transition. Each industry shows: the problem, its module recipe, and the outcome.

**Copy — EN:**
> **H2:** Built for your business
> **Sub:** Pick your trade and see the exact setup.

| Industry | The problem | The eMa setup | The outcome |
|---|---|---|---|
| **Major retailers** | Multiple tills, multiple staff, no live view of stock or takings | eMaPOS + eWallet + eMaCargo + eMaExpo | Every till reports to one dashboard; takings are digital the moment they're taken |
| **B&B and lodging** | Guests pay by card, cash or transfer; deposits and no-shows are a mess | eWallet + QR payments + eMaMall listing + eMaExpo | Guests book, pay a deposit and settle by QR — all against one balance |
| **Bakeries and food** | Daily cash, daily stock loss, suppliers chased by phone | eMaPOS + PAYMATE + low-stock alerts | Cash is banked without leaving the counter; suppliers are alerted automatically |
| **Artisans and professionals** | Work found by word of mouth, paid late or not at all | eMaServe + eWallet + eMaFunding | Jobs found nearby, milestones tracked, payment released on completion |
| **Insurance and financial services** | Monthly premiums collected door to door, in cash | PATELE + PAYMATE + eWallet | Premiums collect automatically each month; policies shared digitally |
| **Transport and taxi** | Fares in cash, drivers unbanked, no record for financing | eWallet + QR fares + PAYMATE + eMaFunding | Fares go digital; the trip record becomes a credit record |
| **Healthcare and clinics** | Patients travel hours for a ten-minute consultation; cover is bought but never used | eMaClinic + PATELE + eWallet | Book by specialty, consult by video, prescription by email — paid from the wallet the cover sits in |
| **Exporters and traders** | Freight quotes by phone, opaque pricing, shipments stranded between carriers | eMaCargo + eMaMall + eMaTuma | Carriers bid for your shipment; all three legs sync; one payment, one tracking log |
| **Individuals and households** | No bank, no credit, no way to save with discipline | eWallet + SIBA + eMaSave + airtime | Save with your circle, get paid by phone number, buy airtime on any network |

**Copy — AR:**
> **العنوان:** مصمَّم لعملك
> **الوصف:** اختر مجالك وشاهد الإعداد المناسب لك تمامًا.

| القطاع | المشكلة | إعداد eMa | النتيجة |
|---|---|---|---|
| **متاجر التجزئة الكبرى** | صناديق دفع متعددة وموظفون كثر وبلا رؤية حيّة للمخزون أو المتحصّلات | eMaPOS + eWallet + eMaCargo + eMaExpo | كل صندوق يرفع تقاريره إلى لوحة واحدة، والمتحصّلات تصبح رقمية لحظة استلامها |
| **الفنادق والنُزل** | النزلاء يدفعون ببطاقة أو نقدًا أو تحويلًا، والعرابين والحجوزات الملغاة فوضى | eWallet + الدفع برمز QR + إدراج في eMaMall + eMaExpo | النزيل يحجز ويدفع العربون ويسدّد برمز QR — كل ذلك على رصيد واحد |
| **المخابز والأغذية** | نقد يومي وهدر يومي في المخزون وملاحقة الموردين هاتفيًا | eMaPOS + PAYMATE + تنبيهات نفاد المخزون | النقد يُودَع دون مغادرة الكاونتر، والموردون يُنبَّهون تلقائيًا |
| **الحرفيون والمهنيون** | العمل يأتي بالكلام المتناقَل، والدفع متأخر أو مفقود | eMaServe + eWallet + eMaFunding | وظائف قريبة، ومراحل عمل متابَعة، ودفع يُفرَج عنه عند الإنجاز |
| **التأمين والخدمات المالية** | أقساط شهرية تُحصَّل نقدًا من باب إلى باب | PATELE + PAYMATE + eWallet | الأقساط تُحصَّل تلقائيًا كل شهر، والوثائق تُشارَك رقميًا |
| **النقل وسيارات الأجرة** | أجرة نقدية، وسائقون بلا حسابات بنكية، وبلا سجل للتمويل | eWallet + أجرة برمز QR + PAYMATE + eMaFunding | الأجرة تصبح رقمية، وسجل الرحلات يصبح سجلًا ائتمانيًا |
| **الرعاية الصحية والعيادات** | المريض يسافر ساعات من أجل استشارة عشر دقائق، والتغطية تُشترى ولا تُستخدم | eMaClinic + PATELE + eWallet | احجز بالتخصص، واستشِر بالفيديو، واستلم الوصفة على بريدك — بالدفع من المحفظة التي تحمل التغطية |
| **المصدّرون والتجار** | عروض شحن عبر الهاتف، وتسعير غامض، وشحنات تعلق بين الناقلين | eMaCargo + eMaMall + eMaTuma | الناقلون يتنافسون على شحنتك، والمراحل الثلاث متزامنة، ودفعة واحدة وسجل تتبّع واحد |
| **الأفراد والأسر** | لا بنك ولا ائتمان ولا وسيلة للادّخار بانضباط | eWallet + SIBA + eMaSave + رصيد الاتصال | ادّخر مع دائرتك، واقبض على رقم هاتفك، واشترِ رصيدًا لأي شبكة |

---

### `D2` — NEW section: "How money moves" *(the Paymate loop)*
- [ ] **Approve**

**Why:** The Paymate network is eMa's genuine structural advantage over a bank app, and it's currently one card with one sentence. It deserves a section: it's the answer to "but my customers pay cash."

**Design:** a 4-step horizontal flow (vertical on mobile) drawn as inline SVG in the existing illustration style, with the arrow animating along the path on scroll. Full RTL mirroring.

**Copy — EN:**
> **H2:** Your customers pay cash. That's fine.
> **Sub:** The Paymate network is what connects a cash economy to a digital ledger — in both directions.
> 1. **Cash in** — a customer hands cash to any Paymate: a spaza shop, a service station, a trusted local trader. It becomes wallet balance in seconds.
> 2. **Transact** — that balance now works across all 14 modules: buy stock, pay a supplier, contribute to your SIBA, send it across a border.
> 3. **Cash out** — need physical notes? Withdraw at any Paymate, no bank branch, no ATM, no card.
> 4. **Become one** — Paymates earn on every transaction they handle. It's a business in itself. → *Become a Paymate*

**Copy — AR:**
> **العنوان:** عملاؤك يدفعون نقدًا. لا مشكلة.
> **الوصف:** شبكة Paymate هي ما يربط الاقتصاد النقدي بالدفتر الرقمي — في الاتجاهين.
> 1. **الإيداع النقدي** — يسلّم العميل النقد لأي وكيل Paymate: متجر حي أو محطة خدمة أو تاجر محلي موثوق. فيتحوّل إلى رصيد في المحفظة خلال ثوانٍ.
> 2. **التعامل** — هذا الرصيد يعمل الآن عبر الوحدات الأربع عشرة: اشترِ مخزونًا، وادفع لمورّد، وساهم في جمعيتك، وأرسله عبر الحدود.
> 3. **السحب النقدي** — تحتاج أوراقًا نقدية؟ اسحب من أي وكيل Paymate. بلا فرع بنكي، وبلا صرّاف آلي، وبلا بطاقة.
> 4. **كن وكيلًا** — وكلاء Paymate يربحون من كل معاملة ينفّذونها. إنه عمل قائم بذاته. ← *كن وكيل Paymate*

---

### `D3` — NEW section: Security & Trust
- [ ] **Approve**

**Why:** You're asking SMEs to move their revenue onto your platform. There is currently **nothing** on the site about security. The PowerPoint documents six concrete features — put them on the page.

**Design:** 6-item icon grid using the existing `shield.svg` asset family, in `--accent` on a light `--muted` panel. Matches the `CtaBanner` card treatment.

**Copy — EN:**
> **H2:** Built to be trusted with your revenue
> **Sub:** Six controls that protect every account, every transaction, every day.
> - **KYC verification** — every account is identity-verified before it can transact.
> - **OTP on every sensitive action** — a one-time code to your verified phone, valid for a short window.
> - **Phone-number binding** — only a verified cellphone can access the wallet tied to it.
> - **Geo-tagging** — transactions carry location data, making anomalies visible.
> - **Auto-logout after 2 minutes** — an idle session closes itself, so a put-down phone isn't an open till.
> - **Three-strike lockout** — three wrong passwords disables the account until it's properly recovered.
>
> **Lost your phone?** Visit your nearest Paymate with your ID and ask to freeze the account — or call customer service. Your funds stay safe.

**Copy — AR:**
> **العنوان:** مبنيّ ليكون جديرًا بثقتك بإيراداتك
> **الوصف:** ستة ضوابط تحمي كل حساب وكل معاملة كل يوم.
> - **التحقّق من الهوية (KYC)** — كل حساب يُوثَّق قبل أن يتمكّن من إجراء أي معاملة.
> - **رمز OTP لكل إجراء حسّاس** — رمز لمرة واحدة يصل إلى هاتفك المُوثَّق وصالح لفترة قصيرة.
> - **ربط برقم الهاتف** — لا يصل إلى المحفظة إلا الهاتف المُوثَّق المرتبط بها.
> - **تحديد الموقع الجغرافي** — كل معاملة تحمل بيانات موقعها، فتظهر الحالات الشاذّة بوضوح.
> - **تسجيل خروج تلقائي بعد دقيقتين** — الجلسة الخاملة تُغلق نفسها، فلا يتحوّل هاتف مُهمَل إلى صندوق مفتوح.
> - **الإيقاف بعد ثلاث محاولات** — ثلاث كلمات مرور خاطئة تُعطّل الحساب حتى تتم استعادته بالطريقة الصحيحة.
>
> **فقدت هاتفك؟** توجّه إلى أقرب وكيل Paymate ومعك هويتك واطلب تجميد الحساب — أو اتصل بخدمة العملاء. أموالك تبقى في أمان.

---

### `D4` — Rework pricing into a per-module fee table
- [ ] **Approve**

**Why:** The current three plan cards say `4%` and `5%` with no explanation of what's charged, when, or on what. Your own documentation has a precise, per-module, event-based fee model — and it's genuinely reassuring, because most fees are only charged **when the business earns**. That's a selling point being thrown away.

**Design:** keeps the three existing plan cards (same badges, emoji SVGs, CTA styles), and adds a fourth element below them: a clean fee table using the site's existing card/border tokens. Fixes typo `I5`.

**Copy — EN:**
> **H2:** You pay when you earn
> **Sub:** No terminals to buy. No monthly rental. No lock-in contract. Most eMa fees are only charged at the moment value changes hands.

| Module | When the fee is charged |
|---|---|
| **eMaPOS** | Monthly, auto-debited from your eMa account, calculated on your total orders |
| **eMaMall** | When buyer and seller both accept the offer |
| **eMaServe** | When the job is marked complete |
| **eMaTuma** | When you confirm the transfer |
| **eMaSave** | When the strongbox starts, and on payout |
| **eMaFunding** | When the campaign is created |
| **PAYMATE** | 1.5–2% per cash-in / cash-out |
| **SIBA** | 15% |
| **Everyday (personal)** | 4% |
| **Business** | 5% |
| **White label** | Contact us |

**Copy — AR:**
> **العنوان:** تدفع عندما تربح
> **الوصف:** لا أجهزة تشتريها. لا إيجار شهري. لا عقود مُلزِمة. معظم رسوم eMa تُحتسب فقط في اللحظة التي تنتقل فيها القيمة.

| الوحدة | متى تُحتسب الرسوم |
|---|---|
| **eMaPOS** | شهريًا، تُخصم تلقائيًا من حساب eMa، وتُحسب على إجمالي طلباتك |
| **eMaMall** | عندما يقبل المشتري والبائع العرض معًا |
| **eMaServe** | عند تسجيل إنجاز المهمة |
| **eMaTuma** | عند تأكيدك للتحويل |
| **eMaSave** | عند بدء الصندوق، وعند الصرف |
| **eMaFunding** | عند إنشاء الحملة |
| **PAYMATE** | 1.5–2% لكل إيداع أو سحب نقدي |
| **SIBA** | 15% |
| **الباقة اليومية (الأفراد)** | 4% |
| **باقة الأعمال** | 5% |
| **العلامة البيضاء** | تواصل معنا |

---

### `D5` — NEW: FAQ section + `/faq` page
- [ ] **Approve**

**Why:** The old site had a 22KB FAQ. The new site has none. I have all 17 questions and answers ready to port.

**Design:** `Accordion` (from `A4`), first item open, on a `--muted` panel. Homepage shows the top 6; `/faq` shows all 17.

**Questions to port:** Who can receive money · How do I know I've been sent money · How do I activate · What if I don't activate · Are the funds safe · What if I change my number · What if my phone is lost or stolen · What documents do I need · How do I get cash out · Do I pay to use eMa · Are there limits · Can SOBEKIMF suspend the service · How do I complain · What happens to my personal information · What are eMa GEO PAYMENTS · How does SIBA work · What are the requirements for a SIBA group.

**Plus 6 new SME-focused questions I'd add:**
> - Can I run more than one shop on eMaPOS? — Yes. One owner account can create and manage as many shops as you need, each with its own stock, cashiers and reports.
> - Can my cashier see my personal money? — No. Cashiers get their own POS-only account, log in with a username and an OTP to their own phone, and never touch your eMa account.
> - Do I need a card machine? — No. eMaPOS runs on the Android phone you already have.
> - What if my customers only pay cash? — Any Paymate converts their cash into your digital balance, and back again when you need notes.
> - Can I get funding without a bank record? — That's what eMaFunding is for: publish a campaign, receive offers from backers, and sign the agreement in-app.
> - Do all the modules share one balance? — Yes. That's the point. Every module settles into the same wallet, on the same phone number, under the same KYC.

**AR equivalents will be written for all of the above on approval.**

---

## GROUP E — Existing sections to adjust

### `E1` — Refocus "Our Services" on the SME lifecycle
- [ ] **Approve**

**Why:** The three current service cards mix a consumer wallet, SME funding and B2B payments with no through-line. Reframing them as a lifecycle makes the same three cards tell a story.

**Design:** unchanged — same three floating phone SVGs, same desktop/mobile split, same float animation. Copy only.

**Copy — EN:**
> **H2:** From your first sale to your first loan
> **Sub:** eMa covers the whole life of a small business, not one moment in it.
>
> 1. **Get paid** — QR and phone-number payments · daily limits R3,000–R5,000 · bill payments (DSTV, Netflix, utilities) · airtime on every network
> 2. **Grow** — SME capital access · crowdfunding via eMaFunding · community savings via SIBA and eMaSave · your transaction record as your credit record
> 3. **Operate** — B2B payments · invoice collection · creditor management · bulk payments to staff and suppliers · statements for any period

**Copy — AR:**
> **العنوان:** من أول عملية بيع إلى أول تمويل
> **الوصف:** eMa يغطي عمر المشروع الصغير بأكمله، لا لحظة واحدة منه.
>
> 1. **اقبض** — الدفع برمز QR ورقم الهاتف · حدود يومية 3,000–5,000 راند · سداد الفواتير (DSTV ونتفليكس والمرافق) · رصيد اتصال لجميع الشبكات
> 2. **انمُ** — تمويل المشاريع الصغيرة والمتوسطة · التمويل الجماعي عبر eMaFunding · الادّخار المجتمعي عبر SIBA وeMaSave · سجل معاملاتك كسجل ائتماني
> 3. **شغّل** — مدفوعات بين الشركات · تحصيل الفواتير · إدارة الدائنين · مدفوعات جماعية للموظفين والموردين · كشوف حساب لأي فترة

---

### `E2` — Enrich the White Label section
- [ ] **Approve**

**Why:** Currently says "your name, your identity, your colours" but never says what you actually receive. Add a concrete deliverables list. Also fold in the corporate-account capabilities from the old `features` page, which are genuinely strong and currently invisible.

**Design:** unchanged layout (before/after bars + CTA banner). Adds one capability list block.

**Added copy — EN:**
> **What you get:** The full 14-module platform under your brand · your name, logo and colour system · full API access · real-time analytics dashboard · dedicated integration support · deployment in weeks, not years · enterprise-grade foundation
>
> **Built for corporates:** Pay bills, salaries and suppliers in bulk · collect bulk payments · daily, weekly and monthly statements for any period · joint company accounts · a private closed-loop corporate scheme where funds arrive in your eMa account automatically · move money to and from your bank account · collect subscription fees from any number of subscribers into one corporate account

**Added copy — AR:**
> **ما تحصل عليه:** المنصّة الكاملة بوحداتها الأربع عشرة تحت علامتك · اسمك وشعارك ونظام ألوانك · وصول كامل لواجهات البرمجة (API) · لوحة تحليلات في الوقت الفعلي · دعم تكامل مخصّص · إطلاق في أسابيع لا سنوات · بنية على مستوى المؤسسات
>
> **مصمَّم للشركات:** سداد الفواتير والرواتب والموردين دفعة واحدة · تحصيل المدفوعات الجماعية · كشوف حساب يومية وأسبوعية وشهرية لأي فترة · حسابات شركات مشتركة · نظام مؤسسي مغلق وخاص تصل فيه الأموال إلى حساب eMa تلقائيًا · التحويل من وإلى حسابك البنكي · تحصيل رسوم الاشتراك من أي عدد من المشتركين إلى حساب مؤسسي واحد

---

### `E3` — Split "Be Our Partner" by partner type
- [ ] **Approve**

**Why:** One generic partner pitch tries to address governments, banks, resellers and shopkeepers at once. Four short tracks convert better and are clearer.

**Design:** the existing `PartnerCard` grid, extended from 2 to 4 cards; `QuickSteps` (discovery call → custom demo → pilot → full deployment) stays exactly as is.

**Copy — EN:**
> **H2:** Four ways to build with eMa
> - **Become a Paymate** — turn your shop into a cash-in/cash-out point. Earn on every transaction you handle, and bring foot traffic through your door. *No capital required.*
> - **Governments & development agencies** — digitise SME support and disbursement, and eliminate ghost beneficiaries with verified KYC identity on every payment.
> - **Banks & financial institutions** — reach the unbanked without building branches. Offer loans, insurance and cover through PATELE to a market you can finally see.
> - **White-label partners** — launch the full platform under your own brand in weeks. → *See white label*

**Copy — AR:**
> **العنوان:** أربع طرق للبناء مع eMa
> - **كن وكيل Paymate** — حوّل متجرك إلى نقطة إيداع وسحب نقدي. اربح من كل معاملة تنفّذها، واجذب زبائن إلى بابك. *بلا رأس مال.*
> - **الحكومات وجهات التنمية** — رقمنة دعم المشاريع الصغيرة والمتوسطة وصرفه، والقضاء على المستفيدين الوهميين عبر هوية مُوثَّقة (KYC) في كل دفعة.
> - **البنوك والمؤسسات المالية** — الوصول إلى غير المتعاملين مع البنوك دون بناء فروع. قدّم القروض والتأمين والتغطية عبر PATELE لسوق أصبح أخيرًا مرئيًا أمامك.
> - **شركاء العلامة البيضاء** — أطلق المنصّة كاملة تحت علامتك خلال أسابيع. ← *استعرض العلامة البيضاء*

---

### `E4` — Rebuild the Footer ✅ *real data recovered*
- [ ] **Approve**

**What:** Five columns — Money Stack (7 links) · Business Stack (7 links) · Company (About, News, Blog, Partners) · Support (FAQ, Help Request, Fraud awareness, Contact) · Legal (Terms, Privacy). Plus app-store badges and the corporate block.

**Why:** The footer is currently a dead end — every social link is `href="#"`, the address is wrong, and there are no module or legal links at all. It's also the main SEO surface for the new `/modules/:id` pages.

**All recovered from `old emalyami/src/app/components/footer/footer.component.html`:**

| Field | Value |
|---|---|
| Facebook | `https://www.facebook.com/emalyamiapp` |
| Instagram | `https://www.instagram.com/emalyamiapp` |
| LinkedIn | `https://www.linkedin.com/company/emalyami/` |
| X / Twitter | `http://twitter.com/EMalyami` → I'll upgrade to `https://twitter.com/EMalyami` |
| Phone | `+27 (0) 11 472 9294` |
| General | `info@emalyami.com` |
| Compliance | `compliance@emalyami.com` |
| Support | `support@emalyami.com` |
| Address | Sobek House, 452 Ontdekkers Rd., Florida Park, Roodepoort, Gauteng, South Africa, 1709 |
| Legal line | Powered by SobekIMF (Pty) Ltd · Patent Number: 2020/06393 |

**Copy — EN:** *Powered by SobekIMF (Pty) Ltd · Patent No. 2020/06393 · © 2026 eMalyami. All rights reserved.*
**Copy — AR:** *مُشغَّل بواسطة SobekIMF (Pty) Ltd · رقم البراءة 2020/06393 · © 2026 eMalyami. جميع الحقوق محفوظة.*

> **Note:** The Arabic footer currently reads *"لاغوس، نيجيريا"* — that's simply wrong and will be corrected to Roodepoort on all four branches. The patent number is a genuine trust signal and is currently missing from the new site entirely; I'm putting it back.

---

### `E5` — Feed the chatbot from the module registry
- [ ] **Approve**

**Why:** `src/services/geminiService.js` currently holds a ~250-line prompt with all the product knowledge hardcoded inside it — knowledge that's now duplicated on the page. After `A2`, the prompt gets **generated** from `src/content/modules.js` + `faq.js`, so the bot and the site can never disagree again. Also removes the four `console.log` calls that currently print API keys to the browser console.

**Note:** This is also a security cleanup. Those `console.log(apiKey)` lines should come out regardless of whether the rest of this item is approved.

---

### `E6` — Port the legal & support pages + the Help Request form ✅ *API recovered*
- [ ] **Approve**

**What:** Bring across from Angular, restyled in the new design system: `/terms-conditions` (53KB), `/privacy-policy` (33KB), `/fraud-awareness` (15KB), and the **Help Request** form at `/complaints`, wired to the live API.

**Why:** A financial-services site without published terms and a privacy policy is a compliance problem, not a design one. The content already exists — it just needs porting.

**The live endpoint, recovered from `ticket.service.ts` + `ticket.component.ts`:**

```
POST  https://api1.emalyami.com/core/api/v1/unAuth/tickets/create/{MODULE_CODE}
Content-Type: multipart/form-data
Fields: fullName · email · phone · module · title · desc · documents[]
```

**Module codes** (from the form's own `<option>` values):

| Module shown | Code sent |
|---|---|
| eWallet · SIBA · PATELE · PAYMATE | `Emalyami` |
| eMaFunding | `CROWD_FUNDING` |
| eMaSave | `EMY_SAVE` |
| eMaServe | `EMY_SERVICES` |
| eMaPOS | `POS` |
| eMaMall | `EMY_MALL` |
| eMaTuma | `EMY_TUMA` |
| eMaCom | `EMY_COM` |
| eMaClinic | `EMY_CLINIC` |
| EYU | `EYU` |

**Implementation:** a new `src/services/ticketApi.js` alongside the existing `newsApi.js` / `chatbotApi.js`, submitted through the `@tanstack/react-query` mutation pattern already in the project. Same validation rules as the Angular form (name, valid email, phone, module, title, description all required; document upload optional). Fixes bug `I10` — the leading-space module codes.

**Two things to confirm:**
- **`EYU`** appears in the ticket form but nowhere else in any document. What is it? I'll omit it from the dropdown unless you tell me otherwise.
- Should the module dropdown also offer **eMaCargo** and **eMaExpo**? There's no code for either yet — your backend team would need to add them.

**Copy — EN:** **H1:** Need help? · **Sub:** Tell us which module, what happened, and how to reach you. Attach anything that helps. Our support team replies by email.
**Copy — AR:** **العنوان:** تحتاج مساعدة؟ · **الوصف:** أخبرنا بالوحدة المعنية، وبما حدث، وكيف نصل إليك. وأرفق ما يفيد. يردّ فريق الدعم عبر البريد الإلكتروني.

---

## GROUP F — Polish

### `F1` — Fix the identified bugs
- [ ] **Approve**

- `I5` — `eMaTuna` → `eMaTuma`
- Broken `.dark` theme: `src/index.css:96` is missing the semicolon after `--accent: #45241B`, which silently swallows the `--accent-foreground` declaration on the next line (the same line in `:root` at `src/index.css:62` is correct)
- Two unused imports in `src/pages/Home.jsx` (`AnimatedLogo`, `Chatbot` — both already rendered by `Layout`)
- Remove the `console.log` API-key leaks in `geminiService.js`
- Keep the existing `id="components" | "services" | "white-label" | "pricing" | "partner"` anchors intact when sections are rebuilt in `C1`/`C2`/`D4`/`E2`/`E3`, and add anchors for the new sections so the header nav can reach them
- **🔴 `I9` — add `old emalyami/` to `.gitignore` before anything else is committed.** That folder holds live Gemini and Google Maps API keys in plaintext (`src/environments/environment.ts`) and is currently untracked; one `git add .` commits them into history permanently. **Separately, I recommend rotating all four keys** — they've been sitting readable on disk and are presumably in the old Angular repo's history too. This is not a task I should do for you: rotate them in the Google Cloud console yourself.


### `F2` — SEO & metadata
- [ ] **Approve**

Per-page `<title>` / `<meta description>` / Open Graph tags, `hreflang` across the 4 language branches, `sitemap.xml` including the new module routes, and JSON-LD `SoftwareApplication` + `FAQPage` schema.

### `F3` — Accessibility & RTL audit
- [ ] **Approve**

The Arabic branch renders LTR-authored Tailwind classes (`ml-3`, `left-0`, `text-start`) which produce subtle RTL misalignment. Sweep to logical properties (`ms-3`, `start-0`). Plus alt text, focus states, and `prefers-reduced-motion` support — relevant given how animation-heavy the site is.

---
---

## GROUP G — Demo media *(new — created by your answer to Q8)*

### `G1` — Demo video & animation pipeline
- [ ] **Approve**

**What I found:** the old project holds **37 demo videos (~550 MB)** and **41 Lottie animations (~9 MB)** — genuinely valuable material covering nearly every module:

| Module | Assets available |
|---|---|
| eWallet | Registration · Change password · Update profile for KYC · Transfer money · Deposit · QR code · Payout · Cash withdrawal (8 videos + 14 Lottie) |
| eMaPOS | Accessing menu · Adding stock · Make sale · Viewing sales · Dashboard · Adding/deleting cashier (6 videos + 8 Lottie) |
| PAYMATE | Applying to become a Paymate · Withdrawing from a Paymate (2 videos + 1 Lottie) |
| SIBA | Creating a Stokvel account (1 video + 3 Lottie) |
| eMaTuma | 2 module videos + 1 Lottie |
| eMaMall / eMaServe / eMaSave / eMaFunding / eMaCom / PATELE | video + Lottie each |
| **eMaExpo** | `eMaExpo.mp4` — a finished demo already exists |

**The problem:** 550 MB cannot go into the Vite bundle or the nginx image. One file (`2-Adding_stock.mp4`) is **112 MB** by itself. Dropped in as-is, the Docker image becomes unshippable and the site unusable on African mobile data — which would defeat the entire point of the product.

**Proposed pipeline:**
1. **Transcode** every video to web delivery — H.264 MP4 + WebM, 720p, ~1.5 Mbps, audio stripped where it's silent screen capture. Expect **550 MB → roughly 25–40 MB total**.
2. **Poster frames** — a WebP still per video so nothing loads until the visitor presses play.
3. **Lazy, click-to-play** — no autoplay, no preload. `preload="none"` with the poster showing.
4. **Lottie for ambient motion** — the 41 JSON files are small and vector; they carry the module cards and hero moments. Adds `lottie-react` (~30 KB gzipped) — the one new dependency in this whole plan, and it replaces heavier static SVG.
5. **Where they go** — a `<ModuleDemo>` player in each `/modules/:id` page (`C4`), showing that module's flows as a small tabbed gallery: *"See it work: Add stock · Make a sale · View sales · Manage cashiers."*

**Decision needed:** where should the compressed videos live?
- **(a) In the repo + Docker image** — simplest, no infrastructure, adds ~40 MB to the image. **My recommendation.**
- **(b) On a CDN/object store** — smallest image, needs a bucket and a URL. Better long-term if the library grows.

Tell me (a) or (b) and I'll build it that way.

**Note:** I'll transcode with `ffmpeg` locally and commit the compressed outputs — the 550 MB originals stay out of git.

# PART 4 — RESULTING PAGE ORDER

| # | Section | Status |
|---|---|---|
| 1 | Hero | **rewritten** (`B1`) |
| 2 | The problem — six apps | **new** (`B2`) |
| 3 | Platform architecture diagram | **new** (`B3`) |
| 4 | The eMa Difference | **revised** (`B4`) |
| 5 | Who we are + vision & mission | **extended** (`B5`) |
| 6 | **The Money Stack** — 7 modules | **rebuilt** (`C1`) |
| 7 | **The Business Stack** — 7 modules | **rebuilt** (`C2`) |
| 8 | Built for your business — industries | **new** (`D1`) |
| 9 | How money moves — Paymate loop | **new** (`D2`) |
| 10 | Our services — the SME lifecycle | **revised** (`E1`) |
| 11 | Security & trust | **new** (`D3`) |
| 12 | White label + before/after + CTA | **extended** (`E2`) |
| 13 | Be our partner + quick steps | **revised** (`E3`) |
| 14 | Pricing + fee table | **revised** (`D4`) |
| 15 | FAQ | **new** (`D5`) |
| 16 | Footer | **rebuilt** (`E4`) |

**New routes:** `/modules` · `/modules/:id` (×14, each with its own demo gallery from `G1`) · `/faq` · `/terms-conditions` · `/privacy-policy` · `/fraud-awareness` · `/complaints` (Help Request)

---

# PART 5 — SUGGESTED ORDER OF WORK

| Phase | Contents | Why this order |
|---|---|---|
| **0 — Secure** | `.gitignore` for `old emalyami/` · you rotate the four leaked keys | Five minutes, and it stops live credentials entering this repo's history. Do it first. |
| **1 — Foundation** | `A1` `A2` `A3` `A4` `F1` | Nothing visible changes, but every later phase becomes cheap and the 4 branches stop drifting. Ship first. |
| **2 — The story** | `B1` `B2` `B3` `B4` `B5` | Fixes positioning above the fold — the highest-impact visible change. |
| **3 — The modules** | `C1` `C2` `C3` `C4` `C5` `G1` | The bulk of the work and the bulk of the value. `G1` runs alongside — the demo videos land inside the module pages. |
| **4 — The proof** | `D1` `D2` `D3` `D4` `D5` | Converts interest into signup. |
| **5 — Surround** | `E1` `E2` `E3` `E4` `E5` `E6` | Consistency, compliance, and closing the loops. |
| **6 — Polish** | `F2` `F3` | SEO, a11y, RTL. |
| **7 — Languages** | Port `src/content/` to `master` / `french` / `portuguese` | Trivial after `A1`; painful without it. |

---

# PART 6 — YOUR ANSWERS ✅

All ten answered on 2026-08-27. Recorded here so the decisions stay with the plan.

| # | Question | Your answer | Effect |
|---|---|---|---|
| **Q1** | Source the stats, or replace them? | **Replace per `B4`** | Unverifiable numbers come off the site; `B4` ships the structural claims instead. |
| **Q2** | Lagos or South Africa? | **South Africa** — use the Angular footer | Real address, phone, emails and patent number recovered. `E4` updated. |
| **Q3** | eMaCargo / eMaClinic / eMaExpo? | **eMaClinic + eMaCargo documented; eMaExpo planned** | Both documents read in full. `C3` rewritten into `C3a`/`C3b`/`C3c` with complete copy. |
| **Q4** | Is eMaCom live? | **Live** | Presented as shipped; the stale chatbot prompt is fixed at source by `E5`. |
| **Q5** | Official POS name? | **eMaPOS** | Normalised everywhere. |
| **Q6** | Social URLs + address? | **From the Angular footer** | All recovered — see `E4`. |
| **Q7** | Where does the support form post? | **The Angular Help Request page + its API** | Live endpoint and all module codes recovered — see `E6`. |
| **Q8** | Add the demo videos / Lottie? | **Yes** | 37 videos + 41 Lottie found. Created new change **`G1`** (they need compressing first — 550 MB as they stand). |
| **Q9** | English on `master` as source of truth? | **Yes** | Phase 7 translates AR/FR/PT from the English `src/content/`. |
| **Q10** | May I use the confidential PDF? | **Yes** | All 14 modules presented. |

## Three things still open

These don't block the start of work — I'll begin on Phase 1 and we can settle them before they're needed.

| # | Open item | Needed by | My default if you don't reply |
|---|---|---|---|
| **O1** | **Video hosting: in-repo (a) or CDN (b)?** (see `G1`) | Phase 3 | **(a) in-repo** — ~40 MB after compression, no new infrastructure |
| **O2** | **What is `EYU`?** It appears in the Help Request module dropdown and in no other document. | Phase 5 | Omit it from the dropdown |
| **O3** | **eMaExpo — `Planned` or `Beta`?** A finished demo video exists, which suggests it's further along than "planned". | Phase 3 | **`Planned`**, per your answer |

## And one thing to action outside this repo

> 🔴 **Rotate your API keys.** `old emalyami/src/environments/environment.ts` holds three live Google Gemini keys and a live Google Maps key in plaintext. The folder is untracked today, so nothing has leaked into *this* repo — but they're readable on disk and presumably in the old Angular repo's history. `F1` adds the `.gitignore` entry that stops them being committed here; rotating them in the Google Cloud console is yours to do, and I'd do it before this goes any further.

---

## Bottom line

The design in the React build is good and I'm not touching it. What's missing is **substance and structure**. The material to fix that already existed the whole time — in your PowerPoints, in the old Angular pages, in a 30-slide eMaClinic deck and a full eMaCargo spec, in 37 demo videos, and above all in that chatbot prompt, which describes eMa better than the website does.

This plan takes that material, gives it an architecture a visitor can grasp in one screen (**one identity → one balance → two stacks → one ledger**), and turns 11 one-line cards into **14 fully documented modules with working demos**, 9 industry recipes, a transparent fee model, a security story, a live support channel, and the real company details back on the page.

Tick what you want. I'll build it.
