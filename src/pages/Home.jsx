import EmaDifference from "@/components/sections/ema-difference/EmaDifference";
import Hero from "@/components/sections/hero/Hero";
import OurComponents from "@/components/sections/our-components/OurComponents";
import OurServices from "@/components/sections/our-services/OurServices";
import WhatElse from "@/components/sections/what-else/WhatElse";
import WhoAreWe from "@/components/sections/who-are-we/WhoAreWe";

function Home() {
  return (
    <div className="space-y-16 lg:space-y-24">
      <Hero />
      <EmaDifference />
      <WhoAreWe />
      <OurComponents />
      <OurServices />
      <WhatElse />
    </div>
  );
}

export default Home;
