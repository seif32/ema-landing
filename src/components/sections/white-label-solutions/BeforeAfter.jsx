import Before from "../../../assets/white-label-solutions/before-white-label-solutions.svg";
import After from "../../../assets/white-label-solutions/after-white-label-solutions.svg";
import { MoveRight } from "lucide-react";

function BeforeAfter() {
  return (
    <section className="flex items-start justify-center gap-8 px-12 mx-auto md:px-24 sm:px-24 xl:px-32 xl:justify-between">
      <div className="flex flex-col items-start flex-1 gap-2">
        <div className="w-30 sm:w-50 md:w-70 lg:w-90">
          <img src={Before} alt="before-white-label" />
        </div>

        <h2 className="text-xl font-bold md:text-4xl sm:text-3xl lg:text-5xl">
          Generic Platform
        </h2>
        <p className="text-xs md:text-md sm:text-sm lg:text-lg">
          Standard eMalyami interface with our branding and corporate design
        </p>
      </div>
      <div className="relative top-8 xl:top-40">
        <MoveRight className=" text-muted-foreground md:size-15 sm:size-10 size-5 lg:size-20" />
      </div>
      <div className="flex flex-col items-start flex-1 gap-2 ">
        <div className=" w-30 sm:w-50 md:w-70 lg:w-90">
          <img src={After} alt="after-white-label" />
        </div>
        <h2 className="text-xl font-bold leading-none sm:leading-normal md:text-4xl sm:text-3xl lg:text-5xl">
          Your Brand Solution
        </h2>
        <p className="text-xs md:text-md sm:text-sm lg:text-lg">
          Same powerful technology with your logo, colors, and industry-specific
          design
        </p>
      </div>
    </section>
  );
}

export default BeforeAfter;
