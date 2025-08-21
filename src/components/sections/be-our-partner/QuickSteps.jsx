import AnimatedPhone from "@/components/shared/AnimatedPhone";

const steps = [
  {
    title: "Discovery Call",
    subtitle:
      "Quick intro meeting to understand your needs and see if we're a good fit",
  },
  {
    title: "Custom Demo",
    subtitle:
      "We build and show you exactly how our solution works for your specific situation",
  },
  {
    title: "Pilot Program",
    subtitle:
      "Small-scale test run with real users to prove it works before full launch",
  },
  {
    title: "Full Deployment ",
    subtitle:
      "Complete rollout to all your users with full support and integration",
  },
];

function QuickSteps() {
  return (
    <section className="flex items-center justify-between gap-0 pr-12 space-y-8 lg:justify-center lg:gap-4 2xl:justify-center xl:px-32">
      <div className="relative flex-1 w-32 md:w-50 top-10 sm:-left-6 -left-2 lg:left-0 lg:w-80">
        <AnimatedPhone />
      </div>
      <div className="flex flex-col gap-4 flex-2">
        <h2 className="text-2xl leading-5 sm:leading-none sm:text-4xl md:text-5xl lg:tracking-normal lg:text-6xl">
          4 Quick Steps to be <br className="hidden lg:block" /> our Partner
        </h2>

        <div className="space-y-2 lg:space-y-8">
          {steps.map((step, index) => {
            return (
              <div
                key={index}
                className="relative flex gap-4 sm:gap-6 lg:gap-8"
              >
                <div className="flex flex-col items-center">
                  <div className="z-10 flex-shrink-0 w-2 h-2 rounded-full sm:w-4 sm:h-4 lg:w-4 lg:h-4 bg-accent"></div>
                  <div className="w-0.5 bg-accent mt-2 sm:mt-3 lg:mt-4 h-4 sm:h-5 lg:h-8 flex-shrink-0"></div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-2 sm:pb-3 lg:pb-4">
                  <h3 className="mb-1 font-bold leading-none sm:text-2xl lg:text-4xl text-accent sm:mb-2 ">
                    {step.title}
                  </h3>
                  <p className="text-xs leading-tight sm:text-lg lg:font-semibold lg:text-2xl sm:leading-tight lg:leading-relaxed">
                    {step.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default QuickSteps;
