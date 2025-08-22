import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "@/components/shared/SectionHeader";
import ManOnLaptop from "../../../assets/white-label-solutions/man-on-laptop.svg";

function WhiteLabelSolutions() {
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

  const slideInLeftVariants = {
    hidden: {
      opacity: 0,
      x: -60,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.9,
        ease: "easeOut",
      },
    },
  };

  const slideInRightVariants = {
    hidden: {
      opacity: 0,
      x: 60,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.9,
        ease: "easeOut",
      },
    },
  };

  const barVariants = {
    hidden: {
      scaleX: 0,
      opacity: 0,
    },
    visible: (i) => ({
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 1.2 + i * 0.2,
        ease: "easeOut",
      },
    }),
  };

  const textRevealVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 1.4 + i * 0.2,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.section
      id="white-label"
      ref={ref}
      className="flex flex-col gap-8 px-12 py-16 mx-auto lg:py-24 md:px-24 sm:px-24 xl:px-32"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Header */}
      <motion.div variants={itemVariants}>
        <SectionHeader
          title="White Label Solutions"
          subtitle="Launch your branded platform in weeks using our 12-module ecosystem"
        />
      </motion.div>

      {/* Main Content */}
      <div className="flex flex-col items-center gap-12 md:flex-row md:gap-16">
        {/* Image Section */}
        <motion.div className="md:w-120 w-50" variants={slideInLeftVariants}>
          <motion.img
            src={ManOnLaptop}
            alt="man-on-laptop"
            className="object-cover w-full h-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: isInView ? 1 : 0.8,
              opacity: isInView ? 1 : 0,
            }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: "easeOut",
            }}
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="flex flex-col flex-1 w-full gap-1 sm:gap-2 md:gap-3 lg:gap-4"
          variants={slideInRightVariants}
        >
          <motion.h2
            className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 30,
            }}
            transition={{
              duration: 0.7,
              delay: 0.8,
              ease: "easeOut",
            }}
          >
            Your Brand,
            <br /> Our Technology
          </motion.h2>

          <motion.p
            className="w-full mb-6 text-sm sm:text-md md:text-lg lg:text-xl md:w-100 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 20,
            }}
            transition={{
              duration: 0.6,
              delay: 1,
              ease: "easeOut",
            }}
          >
            Transform your organization with a fully-customized digital finance
            platform, that carries
          </motion.p>

          {/* Animated Bars */}
          <div className="space-y-2 lg:space-y-3">
            {[
              { width: "60%", color: "#CC6600", text: "YOUR name" },
              { width: "80%", color: "#B25900", text: "YOUR identity" },
              { width: "100%", color: "#994D00", text: "YOUR colors" },
            ].map((bar, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden "
                style={{ width: bar.width }}
                initial={{ width: 0, opacity: 0 }}
                animate={{
                  width: isInView ? bar.width : 0,
                  opacity: isInView ? 1 : 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 1.2 + index * 0.2,
                  ease: "easeOut",
                }}
              >
                <motion.div
                  className="pt-4 sm:pt-6 md:pt-8 lg:pt-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-4 sm:leading-4.5 md:leading-6 lg:leading-8 text-white font-bold px-4"
                  style={{ backgroundColor: bar.color }}
                  variants={barVariants}
                  custom={index}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  <motion.p
                    variants={textRevealVariants}
                    custom={index}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-black"
                  >
                    {bar.text}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default WhiteLabelSolutions;
