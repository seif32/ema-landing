import Before from "../../../assets/white-label-solutions/before-white-label-solutions.svg";
import After from "../../../assets/white-label-solutions/after-white-label-solutions.svg";
import { MoveRight } from "lucide-react";

function BeforeAfter() {
  return (
    <section className="px-4 py-8 mx-auto max-w-7xl sm:px-8 md:px-12 lg:px-16 xl:px-24">
      <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between">
        {/* Before Section */}
        <div className="flex flex-col items-center w-full lg:items-start lg:self-start lg:w-auto lg:flex-1">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
            <img
              src={Before}
              alt="before-white-label"
              className="w-full h-auto"
            />
          </div>
          <div className="mt-4 text-center lg:text-left lg:max-w-md">
            <h2 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl">
              Generic Platform
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg lg:text-xl">
              Standard eMalyami interface with our branding and corporate design
            </p>
          </div>
        </div>

        {/* Arrow Section */}
        <div className="flex items-center justify-center lg:mx-8">
          <MoveRight className="w-8 h-8 rotate-90 text-muted-foreground sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 lg:rotate-0" />
        </div>

        {/* After Section */}
        <div className="flex flex-col items-center w-full lg:items-start lg:w-auto lg:flex-1">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl lg:self-end">
            <img
              src={After}
              alt="after-white-label"
              className="w-full h-auto"
            />
          </div>
          <div className="mt-4 text-center lg:text-left lg:max-w-md">
            <h2 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl">
              Your Brand Solution
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg lg:text-xl">
              Same powerful technology with your logo, colors, and
              industry-specific design
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BeforeAfter;
