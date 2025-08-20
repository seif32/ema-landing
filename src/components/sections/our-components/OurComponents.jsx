import MobilePrototype from "../../../assets/our-components/components-mobile-prototype.svg";

const components = [
  {
    title: "PAYMATE",
    subtitle: "Cash-to-Digital Bridge",
    description:
      "Local partners who load cash into wallets and handle withdrawals, connecting digital finance with cash communities.",
    style: "lg:col-start-1 lg:row-start-1",
  },
  {
    title: "SIBA",
    subtitle: "Rotating Savings Club",
    description:
      "Traditional group savings where members contribute monthly and take turns collecting the pooled amount.",
    style: "lg:col-start-3 lg:row-start-1",
  },
  {
    title: "eWALLET",
    subtitle: "Your Digital Wallet",
    description:
      "Load funds via cards or Paymates. Send/receive money using QR codes or phone numbers instantly.",
    style: "lg:col-start-1 lg:row-start-2",
  },
  {
    title: "eMaSave",
    subtitle: "Group Savings Goals",
    description:
      "Collaborative savings with group control - withdrawals need unanimous agreement from all members.",
    style: "lg:col-start-3 lg:row-start-2",
  },
  {
    title: "eMaTuma",
    subtitle: "Cross-Border Transfers",
    description:
      "Send money internationally with real-time transfers and cash pickup at registered Paymates.",
    style:
      "lg:col-span-3 lg:row-start-3 sm:col-span-2 sm:place-self-center lg:self-start",
  },
];

function OurComponents() {
  return (
    <section className="flex flex-col items-center px-16 space-y-32 sm:px-24 lg:px-32">
      <div className="flex flex-col items-center">
        <h2 className="text-2lg md:text-4xl ">Our Components</h2>
        <p className="text-sm leading-none text-center sm:text-lg text-muted-foreground ">
          Fund flow engines—SIBA, PAYMATE, eWALLET—built for speed and accuracy.
        </p>
      </div>
      <div className="grid lg:grid-cols-[auto_auto_auto] lg:grid-rows-3 grid-cols-1 gap-8 sm:grid-cols-2">
        <>
          <div className="relative lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-span-2 place-self-center w-[280px] h-[280px] sm:w-[375px] sm:h-[375px] lg:w-[425px] lg:h-[425px] xl:w-[500px] xl:h-[500px] rounded-full bg-primary sm:col-start-1 sm:col-span-2">
            <img
              src={MobilePrototype}
              alt="mobile-prototype"
              className="absolute -top-20 left-1/2 -translate-x-1/2 z-10 w-[70%]"
            />
          </div>
          {components.map((component, index) => {
            return (
              <div className={`${component.style} `}>
                <div className="w-8 h-8 rounded-[16px] bg-accent grid place-items-center text-white mb-3">
                  {index + 1}
                </div>
                <div className="mb-2">
                  <h3 className="text-2xl font-bold leading-none md:text-4xl">
                    {component.title}
                  </h3>
                  <p className="text-lg leading-none md:text-2xl">
                    {component.subtitle}
                  </p>
                </div>
                <p className="text-sm text-accent md:text-base">
                  {component.description}
                </p>
              </div>
            );
          })}
        </>
      </div>
    </section>
  );
}

export default OurComponents;
