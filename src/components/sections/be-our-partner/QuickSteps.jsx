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
    <section className="flex items-center justify-between gap-0 px-12 space-y-8 lg:justify-center lg:gap-32 2xl:gap-32 xl:px-32">
      <div className="relative w-30 top-10 lg:w-80 ">
        <AnimatedPhone />
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="text-3xl lg:tracking-tight lg:leading-14 lg:text-7xl">
          4 Quick Steps to be <br className="hidden lg:block" /> our Partner
        </h2>
        <div className="grid grid-cols-[auto_1fr] gap-4 lg:gap-y-16 relative">
          <div className="absolute left-1.5 top-3 bottom-22 lg:bottom-8 w-0.5 bg-accent z-0"></div>
          {steps.map((step) => {
            return (
              <>
                <div className="relative w-4 h-4 rounded-full bg-accent"></div>
                <div>
                  <h3 className="font-bold leading-none lg:text-3xl text-accent">
                    {step.title}
                  </h3>
                  <p className="text-xs leading-none lg:font-semibold lg:text-lg">
                    {step.subtitle}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default QuickSteps;
