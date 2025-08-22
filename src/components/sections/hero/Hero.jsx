import { Button } from "@/components/ui/button";
import { BiLogoPlayStore } from "react-icons/bi";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Underline from "../../../assets/who-are-we/needle-underline.svg";

function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  // Individual element variants
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
      },
    },
  };

  // Button hover variants
  const buttonVariants = {
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.98,
    },
  };

  // Background animation
  const backgroundVariants = {
    hidden: {
      opacity: 0,
      scale: 1.1,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  // Underline animation
  const underlineVariants = {
    hidden: {
      scale: 0,
      rotate: -10,
      opacity: 0,
    },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 1.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={ref}
      className="mt-15 sm:mt-10 lg:mt-7 relative 2xl:min-h-screen pl-10 pt-[12%] pr-[40%]"
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-top-right bg-[url('/hero_bg.svg')] bg-contain bg-no-repeat"
        variants={backgroundVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      />

      {/* Subtle gradient overlay */}
      <motion.div
        // className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 2, delay: 0.5 }}
      />

      <motion.div
        className="relative z-10 space-y-4 lg:space-y-16 sm:space-y-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="flex flex-col gap-4" variants={itemVariants}>
          <motion.h1
            className="text-4xl font-bold xl:text-8xl md:text-6xl"
            variants={itemVariants}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Baby steps to
            </motion.span>
            <br className="hidden md:block" />{" "}
            <motion.span
              className="relative inline-block text-accent"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Financial{" "}
              <motion.span className="relative inline-block">
                Freedom{" "}
                <motion.img
                  src={Underline}
                  alt="underline"
                  className="absolute right-0 w-full h-auto -bottom-4"
                  variants={underlineVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                />
              </motion.span>
            </motion.span>
          </motion.h1>

          <motion.p
            className="max-w-2xl text-xs leading-relaxed lg:text-xl xl:text-2xl text-muted-foreground"
            variants={itemVariants}
            transition={{ delay: 0.9 }}
          >
            A digital ecosystem empowering financial inclusion, Small and Medium
            Enterprises (SMEs) growth, transparency and scalable partnerships.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col gap-4 lg:items-start lg:flex-row"
          variants={itemVariants}
          transition={{ delay: 1.2 }}
        >
          <motion.div variants={buttonVariants} whileTap="tap">
            <Button className="px-6 py-3 text-sm font-medium tracking-wide transition-shadow duration-300 rounded-full shadow-lg bg-accent lg:text-xl lg:px-10 lg:py-4 hover:bg-accent/90 w-fit hover:shadow-xl">
              <motion.div
                initial={{ rotate: 0 }}
                transition={{ duration: 0.2 }}
              >
                <BiLogoPlayStore size={20} className="mr-2" />
              </motion.div>
              Start Your Transformation
            </Button>
          </motion.div>

          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Button className="px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 bg-transparent border-2 rounded-full border-accent text-accent lg:text-xl lg:px-10 lg:py-4 hover:bg-accent hover:text-white w-fit hover:shadow-lg">
              View Our Services
            </Button>
          </motion.div>
        </motion.div>

        {/* Floating elements for subtle animation */}
        <motion.div
          className="absolute w-2 h-2 rounded-full top-20 right-20 bg-accent/30"
          animate={{
            y: [0, -10, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute w-1 h-1 rounded-full bottom-40 left-20 bg-accent/20"
          animate={{
            y: [0, 15, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </motion.div>
    </section>
  );
}

export default Hero;
