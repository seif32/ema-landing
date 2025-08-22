import BeOurPartner from "@/components/sections/be-our-partner/BeOurPartner";
import QuickSteps from "@/components/sections/be-our-partner/QuickSteps";
import EmaDifference from "@/components/sections/ema-difference/EmaDifference";
import Hero from "@/components/sections/hero/Hero";
import OurComponents from "@/components/sections/our-components/OurComponents";
import OurPlans from "@/components/sections/our-plans/OurPlans";
import OurServices from "@/components/sections/our-services/OurServices";
import WhatElse from "@/components/sections/what-else/WhatElse";
import BeforeAfter from "@/components/sections/white-label-solutions/BeforeAfter";
import CtaBanner from "@/components/sections/white-label-solutions/CtaBanner";
import WhiteLabelSolutions from "@/components/sections/white-label-solutions/WhiteLabelSolutions";
import WhoAreWe from "@/components/sections/who-are-we/WhoAreWe";
import AnimatedLogo from "@/components/shared/AnimatedLogo";

function Home() {
  return (
    <div className="space-y-16 lg:space-y-24">
      <Hero />
      <EmaDifference />
      <WhoAreWe />
      <OurComponents />
      <OurServices />
      <WhatElse />
      <div className="space-y-8">
        <BeOurPartner />
        <QuickSteps />
      </div>
      <div className="space-y-8">
        <WhiteLabelSolutions />
        <BeforeAfter />
        <CtaBanner />
      </div>
      <OurPlans />
    </div>
  );
}

export default Home;
