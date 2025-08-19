import { Button } from "@/components/ui/button";
import { BiLogoPlayStore } from "react-icons/bi";

function Hero() {
  return (
    <section className="relative min-h-screen pl-10 pt-[12%] pr-[40%] ">
      <div className="absolute inset-0 bg-top-right bg-[url('/hero_bg.svg')] bg-contain bg-no-repeat "></div>
      <div className="relative z-10 space-y-4 lg:space-y-16 sm:space-y-4">
        <div>
          <h1 className="text-4xl xl:text-8xl md:text-6xl ">
            Baby steps to
            <br />
            <span className="highlighted-text text-accent ">
              Financial Freedom
            </span>
          </h1>

          <p className="text-xs lg:text-xl xl:text-2xl text-muted-foreground">
            A digital ecosystem empowering financial inclusion, Small and Medium
            Enterprises (SMEs) growth, transparency and scalable partnerships.
          </p>
        </div>

        <div className="flex flex-col gap-2 lg:items-center lg:flex-row">
          <Button
            className={
              " bg-accent lg:text-xl lg:p-8 p-2 rounded-4xl tracking-wider hover:bg-accent/85 lg:has-[>svg]:px-8 w-fit text-xs"
            }
          >
            <BiLogoPlayStore size={450} />
            Start Your Transformation
          </Button>
          <Button
            className={
              "bg-transparent border border-accent text-accent lg:text-xl lg:p-8 p-2  rounded-4xl tracking-wider hover:bg-accent hover:text-white w-fit text-xs"
            }
          >
            View Our Services
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
