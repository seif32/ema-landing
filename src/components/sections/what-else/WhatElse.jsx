import ComponentContainer from "@/components/shared/ComponentContainer";
import Mobile from "../../../assets/what-else/what-else-mobile-prototype.svg";

const components_2 = [
  {
    title: "eMaMall ",
    subtitle: "Virtual Marketplace",
    description:
      "A digital storefront where buyers meet sellers, with secure payments, product reviews, and easy checkout.",
    style: "",
  },
  {
    title: "eMa(POS)",
    subtitle: "Point-of-Sale System",
    description:
      "Smart POS with sales tracking, inventory control, digital receipts, and quick, secure payments.",
    style: "",
  },
  {
    title: "eMaServe",
    subtitle: "Service Marketplace",
    description:
      "Book trusted service providers, manage tasks, and pay securely with built-in ratings and reviews.",
    style: "",
  },
  {
    title: "PATELE",
    subtitle: "Financial Services Hub",
    description:
      "Access loans, insurance, and funeral cover with automated repayments and simple financial tools.",
    style: "",
  },
  {
    title: "eMaFunding",
    subtitle: "Crowdfunding Platform",
    description:
      "Launch campaigns, engage backers, and track funds transparently to bring projects to life.",
    style: "",
  },
  {
    title: "eMaCom",
    subtitle: "Communication Suite",
    description:
      "Affordable VoIP, video calls, and encrypted messaging with cross-device access for teams and individuals.",
    style: "",
  },
];

function WhatElse() {
  return (
    <section className="relative bg-gradient-to-t to-[#D88F4A] from-[#B06926] lg:px-32 py-16 lg:pt-32 sm:px-24 px-12">
      <h2 className="absolute   top-0 left-0 font-bold text-7xl lg:text-9xl leading-[0.6] ">
        What Else?
      </h2>
      <div className="grid grid-cols-2 gap-x-2 sm:grid-cols-2 gap-y-10 lg:grid-cols-3 lg:grid-rows-3 lg:gap-y-8 sm:gap-8">
        <>
          {components_2.map((component, index) => {
            return (
              <ComponentContainer
                component={component}
                index={index}
                startFrom={6}
                descriptionStyle={"text-white"}
              />
            );
          })}
          <img
            src={Mobile}
            alt="mobile-what-else"
            className="hidden sm:block lg:col-start-2 lg:w-60 sm:row-span-2 sm:col-start-2 sm:row-start-1 sm:w-40 lg:row-span-full place-self-center sm:rotate-8 lg:rotate-0"
          />
        </>
      </div>
    </section>
  );
}

export default WhatElse;
