import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ComponentContainer from "@/components/shared/ComponentContainer";
import Mobile from "../../../assets/what-else/what-else-mobile-prototype.svg";

const components_2 = [
  {
    title: "eMaMall ",
    subtitle: "Virtual Marketplace",
    description:
      "A digital storefront where buyers meet sellers, with secure payments, product reviews, and easy checkout.",
    style: "",
  },
  {
    title: "eMa(POS)",
    subtitle: "Point-of-Sale System",
    description:
      "Smart POS with sales tracking, inventory control, digital receipts, and quick, secure payments.",
    style: "",
  },
  {
    title: "eMaServe",
    subtitle: "Service Marketplace",
    description:
      "Book trusted service providers, manage tasks, and pay securely with built-in ratings and reviews.",
    style: "",
  },
  {
    title: "PATELE",
    subtitle: "Financial Services Hub",
    description:
      "Access loans, insurance, and funeral cover with automated repayments and simple financial tools.",
    style: "",
  },
  {
    title: "eMaFunding",
    subtitle: "Crowdfunding Platform",
    description:
      "Launch campaigns, engage backers, and track funds transparently to bring projects to life.",
    style: "",
  },
  {
    title: "eMaCom",
    subtitle: "Communication Suite",
    description:
      "Affordable VoIP, video calls, and encrypted messaging with cross-device access for teams and individuals.",
    style: "",
  },
];

function WhatElse() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      filter: "blur(4px)",
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

  const titleVariants = {
    hidden: {
      opacity: 0,
      x: -100,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const mobileVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: 0,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 8, // For mobile
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        delay: 0.5,
        ease: "easeOut",
      },
    },
    float: {
      y: [0, -12, 0],
      rotate: [8, 5, 8], // Subtle rotation variation
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2,
      },
    },
  };

  const backgroundVariants = {
    hidden: {
      opacity: 0,
      scale: 1.05,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      className="relative bg-gradient-to-t to-[#D88F4A] from-[#B06926] lg:px-32 py-16 lg:pt-32 sm:px-24 px-12 overflow-hidden"
      variants={backgroundVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-0 right-0 rounded-full w-96 h-96 bg-white/5"
        initial={{ opacity: 0, scale: 0, x: 100, y: -100 }}
        animate={
          isInView
            ? {
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
                rotate: [0, 360],
              }
            : { opacity: 0, scale: 0, x: 100, y: -100 }
        }
        transition={{
          duration: 3,
          delay: 1,
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
        }}
      />

      {/* Main Title */}
      <motion.h2
        className="absolute top-0 left-0 font-bold text-7xl lg:text-9xl leading-[0.6] text-white/90"
        variants={titleVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        What Else?
      </motion.h2>

      {/* Main Grid */}
      <motion.div
        className="grid grid-cols-2 mt-2 gap-x-2 sm:grid-cols-2 gap-y-10 lg:grid-cols-3 lg:grid-rows-3 lg:gap-y-8 sm:gap-8 lg:mt-2"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Component Cards */}
        {components_2.map((component, index) => (
          <motion.div
            key={component.title}
            variants={itemVariants}
            custom={index}
            transition={{
              delay: 0.8 + index * 0.1, // Staggered delays
            }}
          >
            <ComponentContainer
              component={component}
              index={index}
              startFrom={6}
              descriptionStyle={"text-white"}
            />
          </motion.div>
        ))}

        {/* Central Mobile Image */}
        <motion.img
          src={Mobile}
          alt="mobile-what-else"
          className="hidden sm:block lg:col-start-2 lg:w-60 sm:row-span-2 sm:col-start-2 sm:row-start-1 sm:w-40 lg:row-span-full place-self-center sm:rotate-8 lg:rotate-0"
          variants={mobileVariants}
          initial="hidden"
          animate={isInView ? ["visible", "float"] : "hidden"}
        />
      </motion.div>

      {/* Floating Accent Elements */}
      <motion.div
        className="absolute w-4 h-4 rounded-full bottom-10 left-10 bg-white/20"
        animate={
          isInView
            ? {
                y: [0, -20, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.3, 1],
              }
            : {}
        }
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="absolute w-2 h-2 rounded-full top-1/3 right-20 bg-white/15"
        animate={
          isInView
            ? {
                y: [0, 15, 0],
                opacity: [0.15, 0.4, 0.15],
              }
            : {}
        }
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />
    </motion.section>
  );
}

export default WhatElse;
