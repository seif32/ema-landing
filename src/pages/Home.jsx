import EmaDifference from "@/components/sections/ema-difference/EmaDifference";
import Hero from "@/components/sections/hero/Hero";
import WhoAreWe from "@/components/sections/who-are-we/WhoAreWe";

function Home() {
  return (
    <div className="space-y-16 lg:space-y-24">
      <Hero />
      <EmaDifference />
      <WhoAreWe />
    </div>
  );
}

export default Home;
