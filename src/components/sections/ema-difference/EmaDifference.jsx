import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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
    description: "Reduction in payment's cost achieved",
  },
  {
    emoji: PeopleHugging,
    value: "50%",
    description: "Africa's GDP comes from MSMEs we support",
  },
  {
    emoji: MoneyFlies,
    value: "125M",
    description: "SMME potential beneficiaries market",
  },
];

function EmaDifference() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={sectionRef}
      className="flex flex-col px-12 mx-auto space-y-8 sm:px-24 xl:px-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header Animation */}
      <motion.div
        className="text-center"
        initial={{ y: -30, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-2xl md:text-4xl">The eMa Difference</h2>
        <p className="text-lg leading-none text-muted-foreground">
          Driving Africa's economic transformation through digital innovation
        </p>
      </motion.div>

      <div className="flex flex-col items-center gap-6 lg:flex lg:flex-row">
        {/* Image Animation */}
        <motion.div
          className="lg:w-max w-55"
          initial={{ x: -50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img src={ManWoman} alt="Man and Woman" />
        </motion.div>

        {/* Cards Grid Animation */}
        <motion.div
          className="grid flex-1 grid-cols-1 gap-4 w-full sm:w-fit xl:p-16 sm:grid-cols-2 [@media(min-width:2200px)]:grid-cols-4"
          initial={{ x: 50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {differenceCards.map((card, index) => (
            <motion.div
              key={index} // Fixed: Added unique key
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.8 + index * 0.1,
                type: "spring",
                stiffness: 150,
              }}
            >
              <Card className="bg-[#E7D0CB] border-stone-400 gap-1 xl:gap-4 h-full">
                <CardHeader>
                  <CardTitle className="flex justify-center gap-2 sm:justify-start">
                    <motion.div
                      className="w-8 md:w-max sm:w-14"
                      initial={{ scale: 0, rotate: 45 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : {}}
                      transition={{
                        duration: 0.5,
                        delay: 1.0 + index * 0.1,
                        type: "spring",
                        stiffness: 200,
                      }}
                    >
                      <img src={card.emoji} alt="emoji" />
                    </motion.div>
                    <motion.p
                      className="text-4xl sm:text-5xl md:text-6xl text-accent"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                    >
                      {card.value}
                    </motion.p>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.p
                    className="text-center sm:text-start text-md sm:text-lg md:text-xl text-muted-foreground"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                  >
                    {card.description}
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default EmaDifference;
