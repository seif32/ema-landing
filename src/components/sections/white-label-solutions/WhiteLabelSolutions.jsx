import SectionHeader from "@/components/shared/SectionHeader";
import ManOnLaptop from "../../../assets/white-label-solutions/man-on-laptop.svg";

function WhiteLabelSolutions() {
  return (
    <section className="flex flex-col gap-8 px-12 mx-auto md:px-24 sm:px-24 xl:px-32">
      <SectionHeader
        title={"White Label Solutions"}
        subtitle={
          "Launch your branded platform in weeks using our 12-module ecosystem"
        }
      />
      <div className="flex flex-col items-center md:flex-row">
        <div className="md:flex-1 w-50">
          <img
            src={ManOnLaptop}
            alt="man-on-laptop"
            className="object-cover "
          />
        </div>
        <div className="flex flex-col flex-1 w-full gap-1 sm:gap-2 md:gap-3 lg:gap-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Your Brand,
            <br /> Our Technology
          </h2>
          <p className="w-full text-sm sm:text-md md:text-lg lg:text-xl md:w-100">
            Transform your organization with a fully-customized digital finance
            platform, that carries
          </p>
          <div className="space-y-1 lg:space-y-2">
            <div className="pt-4 sm:pt-6 md:pt-8 lg:pt-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-4 sm:leading-4.5 md:leading-6 lg:leading-8 w-[60%] bg-[#CC6600]">
              <p>YOUR name</p>
            </div>
            <div className="pt-4 sm:pt-6 md:pt-8 lg:pt-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-4 sm:leading-4.5 md:leading-6 lg:leading-8 w-[80%] bg-[#B25900]">
              {" "}
              <p>YOUR identity</p>
            </div>
            <div className="pt-4 sm:pt-6 md:pt-8 lg:pt-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-4 sm:leading-4.5 md:leading-6 lg:leading-8 w-[100%] bg-[#994D00]">
              <p>YOUR colors</p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhiteLabelSolutions;
