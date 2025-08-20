import ManWoman from "../../../assets/ema-difference/man-woman.svg";
import MoneyBag from "../../../assets/ema-difference/money_bag-emoji.svg";
import MoneyFlies from "../../../assets/ema-difference/money_flies-emoji.svg";
import PeopleHugging from "../../../assets/ema-difference/people_hugging_emoji.svg";
import TippingHand from "../../../assets/ema-difference/tipping_hand-emoji.svg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const differenceCards = [
  {
    emoji: MoneyBag,
    value: "60k",
    description: "Transaction through our platform",
  },
  {
    emoji: TippingHand,
    value: "58%",
    description: "Reduction in payment’s cost achieved",
  },
  {
    emoji: PeopleHugging,
    value: "50%",
    description: "Africa's GDP comes from MSMEs we support",
  },
  {
    emoji: TippingHand,
    emoji: MoneyFlies,

    value: "125M",
    description: "SMME potential beneficiaries market",
  },
];

function EmaDifference() {
  return (
    <section className="flex flex-col px-16 mx-auto space-y-8 xl:px-32 ">
      <div className="text-center">
        <h2 className="text-2xl md:text-4xl">The eMalyami Difference</h2>
        <p className="text-lg leading-none text-muted-foreground">
          Driving Africa's economic transformation through digital innovation
        </p>
      </div>

      <div className="flex flex-col items-center gap-6 lg:flex lg:flex-row">
        <div className=" lg:w-max w-55">
          <img src={ManWoman} />
        </div>

        <div className="grid flex-1 grid-cols-1 gap-4 w-full  sm:px-24 xl:p-16 sm:grid-cols-2 [@media(min-width:2200px)]:grid-cols-4">
          {differenceCards.map((card) => {
            return (
              <Card className={"bg-[#E7D0CB] border-stone-400 gap-1 xl:gap-4"}>
                <CardHeader>
                  <CardTitle
                    className={"flex  justify-center sm:justify-start gap-2"}
                  >
                    <div className="w-8 md:w-max sm:w-14">
                      <img src={card.emoji} />
                    </div>
                    <p className="text-4xl sm:text-5xl md:text-6xl text-accent">
                      {card.value}
                    </p>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center sm:text-start text-md sm:text-lg md:text-xl text-muted-foreground">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default EmaDifference;
