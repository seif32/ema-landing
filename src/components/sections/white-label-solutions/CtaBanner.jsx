import { Button } from "@/components/ui/button";

import Crown from "../../../assets/white-label-solutions/crown.svg";
import HighVoltage from "../../../assets/white-label-solutions/high-voltage.svg";
import Shield from "../../../assets/white-label-solutions/shield.svg";

const items = [
  {
    emoji: HighVoltage,
    description: "Launch in weeks, not years",
    alt: "high-voltage",
  },
  {
    emoji: Shield,
    description: "Enterprise-Grade Foundation",
    alt: "shield",
  },
  {
    emoji: Crown,
    description: "Complete Brand Control",
    alt: "crown",
  },
];

function CtaBanner() {
  return (
    <section className="px-12 mx-auto md:px-24 sm:px-24 xl:px-32">
      <div className="bg-[#FAEFE6] rounded-2xl md:px-10 lg:px-12 md:py-12 sm:py-10 sm:px-8 px-6 py-8 lg:py-14 flex md:flex-row flex-col justify-start   gap-8 md:gap-20 lg:gap-80 ">
        <div className="flex flex-col justify-center lg:justify-between">
          <div>
            <h2 className="text-2xl md:text-4xl sm:text-3xl lg:text-5xl text-accent">
              Start your <br /> Branded Platform
            </h2>
            <h3 className="md:text-xl sm:text-lg text-md lg:text-2xl ">
              Create Your Digital Platform
            </h3>
          </div>
          <Button
            className={
              " bg-accent md:text-lg sm:text-md text-sm lg:text-xl py-6"
            }
          >
            Request White-label Demo
          </Button>
        </div>
        <div className="">
          {items.map((item, index) => {
            return (
              <div
                key={index}
                className="grid grid-cols-[1fr_3fr] items-center"
              >
                <div className="w-9 sm:w-12 md:w-max justify-self-center">
                  <img
                    src={item.emoji}
                    alt={item.alt}
                    className="w-full h-full"
                  />
                </div>
                <p className="font-semibold md:text-xl sm:text-lg text-md lg:text-2xl">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CtaBanner;
