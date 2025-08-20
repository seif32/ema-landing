import SectionHeader from "@/components/shared/SectionHeader";
import Mobile1 from "../../../assets/our-services/our-services-mobile-1.svg";
import Mobile2Large from "../../../assets/our-services/our-services-mobile-2-large.svg";
import Mobile2Small from "../../../assets/our-services/our-services-mobile-2-small.svg";
import Mobile3 from "../../../assets/our-services/our-services-mobile-3.svg";

const services = [
  {
    title: "Virtual Wallet (VW) ",
    one: "Daily transaction limits (R3,000-R5,000)",
    two: "Bill payments (DSTV, Netflix, utilities)",
    three: "QR code payments",
    image: Mobile1,
  },
  {
    title: "Small business funding options",
    one: "Digital Financial Access",
    two: "MSME Capital Solutions",
    three: "Community Economic Growth",
    image: Mobile2Small,
  },
  {
    title: "Payment Solutions for SMMEs",
    one: "B2B focus",
    two: "Invoice collection",
    three: "Creditor management",
    image: Mobile3,
  },
];

function OurServices() {
  return (
    <section className="flex flex-col items-center px-16 mx-auto space-y-8 xl:px-32 sm:px-24">
      <SectionHeader
        subtitle={
          "From onboarding to real-time analytics, we manage the entire digital-finance lifecycle for you."
        }
        title={"Our Services"}
      />

      <div className="flex justify-center w-full lg:hidden">
        <div className="flex flex-col gap-8 ">
          {services.map((service) => {
            return (
              <div className="flex items-center justify-between sm:gap-16">
                <div className="flex flex-col">
                  <h2 className="text-lg font-bold sm:text-2xl md:text-4xl">
                    {service.title}
                  </h2>
                  <ul>
                    <li className="text-xs sm:text-sm md:text-lg">
                      • {service.one}
                    </li>
                    <li className="text-xs sm:text-sm md:text-lg">
                      • {service.two}
                    </li>
                    <li className="text-xs sm:text-sm md:text-lg">
                      • {service.three}
                    </li>
                  </ul>
                </div>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-20 shadow-2xl rotate-4"
                />
              </div>
            );
          })}
        </div>
        {/* <div className="flex flex-col justify-between h-full gap-2 md:items-end md:flex-row">
          <img src={Mobile1} alt="mobile-1" className="w-20 md:w-max" />
          <img
            src={Mobile2Large}
            alt="mobile-2-large"
            className="hidden md:block"
          />
          <img
            src={Mobile2Small}
            alt="mobile-2-small"
            className="block w-20 md:hidden "
          />
          <img src={Mobile3} alt="mobile-3" className="w-20 md:w-max" />
        </div> */}
      </div>

      <div className="items-start justify-between hidden w-full 2xl:justify-center 2xl:gap-32 lg:flex ">
        <div className="flex flex-col h-full gap-8 ">
          {services.map((service) => {
            return (
              <div className="flex flex-col">
                <h2 className="text-4xl font-bold">{service.title}</h2>
                <ul>
                  <li className="text-lg ">• {service.one}</li>
                  <li className="text-lg">• {service.two}</li>
                  <li className="text-lg">• {service.three}</li>
                </ul>
              </div>
            );
          })}
        </div>
        <div className="flex flex-row items-end gap-2 ">
          <img
            src={Mobile1}
            alt="mobile-1"
            className="relative w-42 rotate-3 top-10"
          />
          <img src={Mobile2Large} alt="mobile-2-large" className="w-50" />
          <img
            src={Mobile3}
            alt="mobile-3"
            className="relative w-42 -rotate-3 bottom-10"
          />
        </div>
      </div>
    </section>
  );
}

export default OurServices;
