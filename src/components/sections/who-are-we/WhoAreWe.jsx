import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Map from "../../../assets/who-are-we/map.svg";
import Person1 from "../../../assets/who-are-we/map-person-1.svg";
import Person2 from "../../../assets/who-are-we/map-person-2.svg";
import Person3 from "../../../assets/who-are-we/map-person-3.svg";
import TextCrown from "../../../assets/who-are-we/text-crown.svg";
import Underline from "../../../assets/who-are-we/needle-underline.svg";
import { Badge } from "@/components/ui/badge";

function WhoAreWe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      filter: "blur(3px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  const mapVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const personVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      rotate: -180,
    },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        delay: 1.2 + i * 0.2,
        ease: "easeOut",
      },
    }),
    bounce: (i) => ({
      y: [0, -10, 0],
      transition: {
        duration: 1 + i * 0.2, // Different duration: 1s, 1.2s, 1.4s
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    }),
  };

  const statsVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: i * 0.2,
        ease: "easeOut",
      },
    }),
  };

  const crownVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      rotate: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        duration: 0.6,
        delay: 0.8,
        ease: "easeOut",
      },
    },
  };

  const underlineVariants = {
    hidden: {
      scaleX: 0,
      opacity: 0,
    },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 1.5,
        ease: "easeOut",
      },
    },
  };

  const badgeVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      rotate: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 8,
      transition: {
        duration: 0.5,
        delay: 2,
        ease: "easeOut",
      },
    },
  };

  return (
    <section ref={ref} className="relative py-16 lg:py-24">
      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-top-right xl:bg-center bg-[url('/who-bg.svg')] bg-contain 2xl:bg-cover bg-no-repeat"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{
          opacity: isInView ? 0.4 : 0,
          scale: isInView ? 1 : 1.05,
        }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      <motion.div
        className="relative z-10 flex flex-col items-center gap-8 px-12 sm:px-24 xl:px-32"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Header Section */}
        <motion.div
          className="flex flex-col items-center"
          variants={itemVariants}
        >
          <motion.h2
            className="relative mb-4 text-2xl font-bold sm:text-4xl w-fit"
            variants={itemVariants}
          >
            Who are we?
            <motion.div
              className="absolute w-10 -top-5 -right-6"
              variants={crownVariants}
            >
              <img src={TextCrown} alt="crown" />
            </motion.div>
          </motion.h2>
          <motion.p
            className="max-w-2xl text-sm leading-relaxed text-center sm:text-lg text-muted-foreground sm:leading-normal"
            variants={itemVariants}
          >
            A mission-driven fintech creating transparent, inclusive growth for
            every entrepreneur.
          </motion.p>
        </motion.div>

        {/* Main Content Section */}
        <motion.div
          className="flex flex-col items-center justify-center w-full gap-12 md:gap-8 xl:gap-32 sm:flex-row"
          variants={itemVariants}
        >
          {/* Map Section */}
          <motion.div className="relative" variants={mapVariants}>
            <motion.img src={Map} className="lg:w-max w-70" alt="Africa map" />
            {[Person1, Person2, Person3].map((person, i) => (
              <motion.img
                key={i}
                src={person}
                className={`absolute w-10 ${
                  i === 0
                    ? "inset-10 lg:inset-20"
                    : i === 1
                    ? "inset-20 left-30 lg:inset-40"
                    : "inset-30 left-50 lg:inset-60"
                }`}
                alt={`person ${i + 1}`}
                custom={i}
                variants={personVariants}
                initial="hidden"
                animate={isInView ? ["visible", "bounce"] : "hidden"}
              />
            ))}
          </motion.div>

          {/* Text Section */}
          <motion.div className="relative" variants={itemVariants}>
            <motion.p
              className="relative text-4xl lg:text-6xl w-fit [@media(min-width:500px)_and_(max-width:640px)]:text-5xl leading-tight"
              initial={{ opacity: 0, x: 30 }}
              animate={{
                opacity: isInView ? 1 : 0,
                x: isInView ? 0 : 30,
              }}
              transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            >
              Part of{" "}
              <span className="font-bold">
                Sobek <br /> Group
              </span>{" "}
              - trusted <br /> across Africa & <br /> South Africa.
            </motion.p>
            <motion.div
              className="absolute -top-2 -right-5 "
              variants={badgeVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <Badge variant="destructive" className="text-sm rotate-8">
                All-in-one solution
              </Badge>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="flex flex-col w-full gap-6 sm:gap-2 sm:flex-row sm:justify-between"
          variants={itemVariants}
        >
          {[
            { number: "10+", label: "Years Experience" },
            {
              number: "Multi-Continental Reach",
              label: "",
              hasUnderline: true,
            },
            { number: "99%", label: "Client Satisfaction" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center justify-center"
              custom={i}
              variants={statsVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.p
                className={`${
                  i === 1
                    ? "relative text-2xl font-bold leading-none text-center md:text-3xl lg:text-5xl text-accent"
                    : "text-3xl font-bold md:text-5xl text-accent"
                } mb-2`}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{
                  scale: isInView ? 1 : 0.8,
                  opacity: isInView ? 1 : 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 1.8 + i * 0.1,
                  ease: "easeOut",
                }}
              >
                {stat.number}
                {stat.hasUnderline && (
                  <motion.img
                    className="absolute w-[80%] left-[9%] -bottom-8"
                    src={Underline}
                    alt="underline"
                    variants={underlineVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                  />
                )}
              </motion.p>
              {stat.label && (
                <motion.p
                  className="text-lg leading-none text-center md:text-2xl"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: isInView ? 1 : 0,
                    y: isInView ? 0 : 10,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 2 + i * 0.1,
                    ease: "easeOut",
                  }}
                >
                  {stat.label}
                </motion.p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default WhoAreWe;
