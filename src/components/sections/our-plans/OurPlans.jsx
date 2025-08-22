import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import CheckMark from "../../../assets/white-label-solutions/check-mark.svg";
import Handshake from "../../../assets/white-label-solutions/handshake.svg";
import GemStone from "../../../assets/our-plans/gem-stone.svg";
import Star from "../../../assets/our-plans/star.svg";
import { Button } from "@/components/ui/button";

// PLANS DATA CONFIG
const plansCard = [
  {
    badgeTitle: "EVERYDAY",
    badgeStyle: "bg-black/10 border border-black text-black",
    planTitle: (
      <>
        4%<span className="text-2xl font-normal"> Rate</span>
      </>
    ),
    planSubtitle: "Essential Services",
    planDescription:
      "Simple, everyday banking made affordable. Handle all your personal transactions with ease.",
    emoji: CheckMark,
    features: ["Send Money", "Cash Withdrawals", "P2P Business"],
    ctaBtn: "Choose Standard",
    ctaStyle: "bg-black text-white",
  },
  {
    badgeTitle: "PARTNER WITH US",
    badgeStyle: "bg-blue-100 border border-blue-600 text-blue-600",
    planTitle: (
      <span className="flex items-center gap-2 text-3xl">
        White Label Solutions
      </span>
    ),
    planSubtitle: "Partner Program",
    planDescription:
      "Power your business with our proven fintech platform — customize our technology under your brand.",
    emoji: Handshake,

    features: [
      "Full Brand Customization",
      "Ready-to-Deploy",
      "Complete API Access",
      "Real-time Analytics",
      "Dedicated Support",
    ],
    ctaBtn: "Contact Us",
    ctaStyle: "bg-blue-700 text-white",
    // ctaStyle: "bg-black text-white",
  },
  {
    badgeTitle: "BUSINESS",
    badgeStyle: "bg-amber-100 border border-amber-600 text-amber-700",
    planTitle: (
      <>
        5%<span className="text-2xl font-normal"> Rate</span>
      </>
    ),
    planSubtitle: "Business Solutions",
    planDescription:
      "Complete business ecosystem designed for growth — from point-of-sale to funding solutions.",
    emoji: GemStone,
    features: [
      "eMaSERVE",
      "eMaMALL",
      "eMaPOS",
      "eMaFunding",
      "eMaSave",
      "eMaTuna",
    ],
    note: (
      <div className="mt-2 text-xs font-medium text-gray-500">
        Special Tiers: <br />
        <span className="font-bold">Paymates</span> • 1.5-2% /{" "}
        <span className="font-bold">SIBA</span> • 15%
      </div>
    ),
    ctaBtn: "Choose Premium",
    ctaStyle: "bg-amber-500 text-white",
    // ctaStyle: "bg-black text-white",
  },
];

function OurPlans() {
  return (
    <section className="grid grid-cols-1 gap-10 px-4 py-16 mx-auto sm:px-8 md:px-16 xl:px-32 md:grid-cols-2 lg:grid-cols-3 max-w-7xl">
      {plansCard.map((plan, idx) => (
        <Card
          key={plan.planTitle || idx}
          className="relative flex flex-col justify-between h-full pt-12 shadow-lg"
        >
          {/* Badge */}
          {plan.badgeTitle && (
            <span
              className={`absolute top-4 right-4 px-3 py-0.5 rounded-full uppercase tracking-wider text-xs font-semibold z-10 ${plan.badgeStyle}`}
            >
              {plan.badgeTitle}
            </span>
          )}
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-5xl font-bold">
              {plan.planTitle}
            </CardTitle>
            <CardDescription>
              <h3 className="text-xl font-bold">{plan.planSubtitle}</h3>
              <p className="mt-1 text-gray-600">{plan.planDescription}</p>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2 mt-1">
            {plan.features.map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <img src={plan.emoji} alt="" className="w-4 h-4" />
                <p className="text-base">{feature}</p>
              </div>
            ))}
            {plan.note}
          </CardContent>
          <CardFooter className="pt-6 mt-auto">
            <CardAction asChild>
              <Button className={`${plan.ctaStyle} w-full`} size="lg">
                {plan.ctaBtn}
              </Button>
            </CardAction>
          </CardFooter>
        </Card>
      ))}
    </section>
  );
}

export default OurPlans;
