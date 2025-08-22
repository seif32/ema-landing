import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "@/components/shared/SectionHeader";
import PartnerCard from "./PartnerCard";
import { FaRegBuilding } from "react-icons/fa";
import { BriefcaseBusiness, Users, Wallet } from "lucide-react";

import EmployeesTable from "../../../assets/be-our-partner/employees-table.svg";
import FaceEmoji from "../../../assets/be-our-partner/face.svg";
import HandshakeEmoji from "../../../assets/be-our-partner/Handshake.svg";
import Underline from "../../../assets/who-are-we/needle-underline.svg";

function BeOurPartner() {
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
      x: -80,
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
      x: 80,
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

  const centerContentVariants = {
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
        delay: 0.4,
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
        duration: 0.6,
        delay: 1.2,
        ease: "easeOut",
      },
    },
  };

  const emojiVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 1.5 + i * 0.2,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      id="partner"
      ref={ref}
      className="flex flex-col items-center px-12 py-16 space-y-16 lg:py-24 xl:px-32"
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
          title="Be Our Partner"
          subtitle="Transform Your Economy Through Partnership"
        />
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="flex flex-col w-full xl:flex-row gap-9 max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Left Column - Partner Cards */}
        <motion.div
          className="flex flex-col flex-1 gap-2 sm:flex-row xl:gap-5 lg:gap-3 xl:flex-col"
          variants={slideInLeftVariants}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 30,
            }}
            transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
          >
            <PartnerCard
              icon={Wallet}
              title="For Financial Institutions"
              description="Access 5 million unbanked users in Africa through our eWALLET and PAYMATE modules"
              keyFeature1="Expand customer base instantly"
              keyFeature2="Digital-first banking solutions"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 30,
            }}
            transition={{ duration: 0.7, delay: 1, ease: "easeOut" }}
          >
            <PartnerCard
              icon={Users}
              title="For NGOs & Partners"
              description="Reach rural communities with eMaClinic telemedicine and PATELE agricultural tools"
              keyFeature1="Direct beneficiary access"
              keyFeature2="Impact measurement tools"
            />
          </motion.div>
        </motion.div>

        {/* Center Column - Main Content */}
        <motion.div
          className="flex flex-col items-center justify-between flex-1 md:flex-row xl:flex-col"
          variants={centerContentVariants}
        >
          <motion.img
            src={EmployeesTable}
            alt="employees-table"
            className="mb-8 sm:w-100 w-70 xl:mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: isInView ? 1 : 0,
              scale: isInView ? 1 : 0.8,
            }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          />

          <div className="flex flex-col gap-4 px-4 xl:px-0">
            <motion.h2
              className="relative text-4xl font-medium sm:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : 20,
              }}
              transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
            >
              Partner with{" "}
              <span className="relative">
                eMa
                <motion.img
                  src={Underline}
                  alt="underline"
                  className="absolute bottom-0 right-0"
                  variants={underlineVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                />
              </span>
            </motion.h2>

            <div className="flex flex-col gap-3">
              {[
                {
                  emoji: HandshakeEmoji,
                  text: "Digitize MSME support, eliminate ghost beneficiaries.",
                },
                {
                  emoji: FaceEmoji,
                  text: "Reach 50 million affected youth through our 12-module ecosystem.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: isInView ? 1 : 0,
                    x: isInView ? 0 : -20,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 1.2 + index * 0.2,
                    ease: "easeOut",
                  }}
                >
                  <motion.img
                    src={item.emoji}
                    alt={`emoji-${index}`}
                    variants={emojiVariants}
                    custom={index}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                  />
                  <p className="text-sm sm:text-xl text-accent">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column - Partner Cards */}
        <motion.div
          className="flex flex-col flex-1 gap-2 sm:flex-row xl:gap-5 lg:gap-3 xl:flex-col"
          variants={slideInRightVariants}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 30,
            }}
            transition={{ duration: 0.7, delay: 1.4, ease: "easeOut" }}
          >
            <PartnerCard
              icon={FaRegBuilding}
              title="For Government Agencies"
              description="Reduce administrative overhead by 85%, eliminate subsidy leakages."
              keyFeature1="Automated compliance reporting"
              keyFeature2="Transparent audit trails"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 30,
            }}
            transition={{ duration: 0.7, delay: 1.6, ease: "easeOut" }}
          >
            <PartnerCard
              icon={BriefcaseBusiness}
              title="For Job Creations"
              description="Connect employment agencies with millions rural job seekers"
              keyFeature1="Rural Talent Access"
              keyFeature2="Automated Skills Matching"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default BeOurPartner;
