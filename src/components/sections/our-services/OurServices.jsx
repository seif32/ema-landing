import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "@/components/shared/SectionHeader";
import Mobile1 from "../../../assets/our-services/our-services-mobile-1.svg";
import Mobile2Large from "../../../assets/our-services/our-services-mobile-2-large.svg";
import Mobile2Small from "../../../assets/our-services/our-services-mobile-2-small.svg";
import Mobile3 from "../../../assets/our-services/our-services-mobile-3.svg";

const services = [
  {
    title: "Virtual Wallet (VW) ",
    one: "Daily transaction limits (R3,000-R5,000)",
    two: "Bill payments (DSTV, Netflix, utilities)",
    three: "QR code payments",
    image: Mobile1,
  },
  {
    title: "Small business funding options",
    one: "Digital Financial Access",
    two: "MSME Capital Solutions",
    three: "Community Economic Growth",
    image: Mobile2Small,
  },
  {
    title: "Payment Solutions for SMMEs",
    one: "B2B focus",
    two: "Invoice collection",
    three: "Creditor management",
    image: Mobile3,
  },
];

function OurServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
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

  const mobileVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
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

  const floatingVariants = {
    animate: (i) => ({
      y: [0, -10, 0],
      rotate: [2, -2, 2],
      transition: {
        duration: 4 + i * 0.5, // Different durations for each phone
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.5, // Staggered start times
      },
    }),
  };

  const desktopImageVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.8 + i * 0.2,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      id="services"
      ref={ref}
      className="flex flex-col items-center px-12 py-16 mx-auto space-y-16 lg:py-24 xl:px-32 sm:px-24"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 30,
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <SectionHeader
          subtitle="From onboarding to real-time analytics, we manage the entire digital-finance lifecycle for you."
          title="Our Services"
        />
      </motion.div>

      {/* Mobile Layout */}
      <motion.div
        className="flex justify-center w-full lg:hidden"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="flex flex-col gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="flex items-center justify-between sm:gap-16"
              variants={itemVariants}
              custom={index}
            >
              <motion.div
                className="flex flex-col"
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  x: isInView ? 0 : -20,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.5 + index * 0.2,
                  ease: "easeOut",
                }}
              >
                <h2 className="mb-3 text-lg font-bold sm:text-2xl md:text-4xl">
                  {service.title}
                </h2>
                <ul className="space-y-1">
                  <li className="text-xs sm:text-sm md:text-lg">
                    • {service.one}
                  </li>
                  <li className="text-xs sm:text-sm md:text-lg">
                    • {service.two}
                  </li>
                  <li className="text-xs sm:text-sm md:text-lg">
                    • {service.three}
                  </li>
                </ul>
              </motion.div>

              <motion.div
                variants={mobileVariants}
                custom={index}
                animate={isInView ? ["visible", "animate"] : "hidden"}
              >
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-20 shadow-2xl rotate-4"
                  variants={floatingVariants}
                  custom={index}
                  animate={isInView ? "animate" : {}}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Desktop Layout */}
      <motion.div
        className="items-start justify-between hidden w-full 2xl:justify-center 2xl:gap-32 lg:flex"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Text Content */}
        <motion.div
          className="flex flex-col h-full gap-8"
          variants={itemVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="flex flex-col"
              initial={{ opacity: 0, x: -30 }}
              animate={{
                opacity: isInView ? 1 : 0,
                x: isInView ? 0 : -30,
              }}
              transition={{
                duration: 0.7,
                delay: 0.6 + index * 0.15,
                ease: "easeOut",
              }}
            >
              <h2 className="mb-3 text-4xl font-bold">{service.title}</h2>
              <ul className="space-y-1">
                <li className="text-lg">• {service.one}</li>
                <li className="text-lg">• {service.two}</li>
                <li className="text-lg">• {service.three}</li>
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Desktop Images */}
        <motion.div
          className="flex flex-row items-end gap-2"
          variants={itemVariants}
        >
          <motion.img
            src={Mobile1}
            alt="mobile-1"
            className="relative w-42 rotate-3 top-10"
            variants={desktopImageVariants}
            custom={0}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          />
          <motion.div animate={isInView ? floatingVariants.animate(0) : {}}>
            <motion.img
              src={Mobile2Large}
              alt="mobile-2-large"
              className="w-50"
              variants={desktopImageVariants}
              custom={1}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            />
          </motion.div>
          <motion.img
            src={Mobile3}
            alt="mobile-3"
            className="relative w-42 -rotate-3 bottom-10"
            variants={desktopImageVariants}
            custom={2}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default OurServices;
