import ManWoman from "../../../assets/ema-difference/man-woman.svg";
import MoneyBag from "../../../assets/ema-difference/money_bag-emoji.svg";
import MoneyFlies from "../../../assets/ema-difference/money_flies-emoji.svg";
import PeopleHugging from "../../../assets/ema-difference/people_hugging_emoji.svg";
import TippingHand from "../../../assets/ema-difference/tipping_hand-emoji.svg";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const differenceCards = [
  {
    emoji: MoneyBag,
    value: "60k",
    description: "Transaction through our platform",
  },
  {
    emoji: MoneyFlies,
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
    value: "125M",
    description: "SMME potential beneficiaries market",
  },
];

function EmaDifference() {
  return (
    <section className="container flex flex-col px-16 mx-auto space-y-8">
      <div className="text-center">
        <h2 className="text-4xl">The eMalyami Difference</h2>
        <p className="text-2xl text-muted-foreground">
          Driving Africa's economic transformation through digital innovation
        </p>
      </div>

      <div className="flex">
        <div className="">
          <img src={ManWoman} />
        </div>

        <div className="grid flex-1 grid-cols-2 grid-rows-2 gap-4 p-16">
          {differenceCards.map((card) => {
            return (
              <Card className={"bg-[#E7D0CB] border-stone-400 gap-4"}>
                <CardHeader>
                  <CardTitle className={"flex items-end gap-2"}>
                    <div>
                      <img src={card.emoji} />
                    </div>
                    <p className="text-6xl text-accent">{card.value}</p>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xl text-muted-foreground">
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
