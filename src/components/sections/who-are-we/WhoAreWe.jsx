import Map from "../../../assets/who-are-we/map.svg";
import Person1 from "../../../assets/who-are-we/map-person-1.svg";
import Person2 from "../../../assets/who-are-we/map-person-2.svg";
import Person3 from "../../../assets/who-are-we/map-person-3.svg";
import TextCrown from "../../../assets/who-are-we/text-crown.svg";
import Underline from "../../../assets/who-are-we/needle-underline.svg";
import { Badge } from "@/components/ui/badge";

function WhoAreWe() {
  return (
    <section className="relative ">
      <div className="absolute inset-0 bg-top-right xl:bg-center bg-[url('/who-bg.svg')] bg-contain 2xl:bg-cover bg-no-repeat "></div>
      <div className="relative z-10 flex flex-col items-center gap-8 px-12 sm:px-24 xl:px-32 ">
        <div className="flex flex-col items-center ">
          <h2 className="relative text-2xl sm:text-4xl w-fit">
            Who are we?
            <div className="absolute w-10 -top-5 -right-6">
              <img src={TextCrown} />
            </div>
          </h2>
          <p className="text-sm leading-none text-center sm:text-lg text-muted-foreground sm:leading-normal">
            A mission-driven fintech creating transparent, inclusive growth for
            every entrepreneur.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center w-full gap-12 md:gap-8 xl:gap-32 sm:flex-row">
          <div className="relative">
            <img src={Map} className="lg:w-max w-70" />
            <img src={Person1} className="absolute w-10 inset-10 lg:inset-20" />
            <img
              src={Person2}
              className="absolute w-10 inset-20 left-30 lg:inset-40"
            />
            <img
              src={Person3}
              className="absolute w-10 inset-30 left-50 lg:inset-60"
            />
          </div>
          <p className="relative text-4xl  lg:text-6xl w-fit [@media(min-width:500px)_and_(max-width:640px)]:text-5xl">
            Part of{" "}
            <span className="font-bold">
              Sobek <br /> Group
            </span>{" "}
            - trusted <br /> across Africa & <br /> South Africa.
            <Badge
              variant={"destructive"}
              className="absolute text-sm rotate-8 -top-5 -right-6"
            >
              All-in-one solution
            </Badge>
          </p>
        </div>

        <div className="flex flex-col w-full gap-6 sm:gap-2 sm:flex-row sm:justify-between">
          <div className="flex flex-col items-center justify-center">
            <p className="text-3xl font-bold md:text-5xl text-accent">10+</p>
            <p className="text-lg leading-none text-center md:text-2xl">
              Years Experience
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="relative text-2xl font-bold leading-none text-center md:text-3xl lg:text-5xl text-accent">
              Multi-Continental Reach
              <img
                className="absolute w-[80%] left-[9%]"
                src={Underline}
                alt="underline"
              />
            </p>
          </div>
          <div className="flex flex-col items-center justify-center ">
            <p className="text-3xl font-bold md:text-5xl text-accent">99%</p>
            <p className="text-lg leading-none text-center md:text-2xl">
              Client Satisfaction
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoAreWe;
