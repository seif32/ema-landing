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
  const isInView = useInView(ref, { once: true });

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
      className="flex flex-col items-center px-12 py-16 space-y-16 lg:py-24 xl:px-32 overflow-x-hidden"
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
          title="كن شريكنا"
          subtitle="حول اقتصادك من خلال الشراكة"
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
              title="للمؤسسات المالية"
              description="الوصول إلى 5 ملايين مستخدم بدون حسابات مصرفية في أفريقيا من خلال وحدات eWALLET وPAYMATE"
              keyFeature1="توسيع قاعدة العملاء على الفور"
              keyFeature2="حلول مصرفية رقمية أولاً"
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
              title="للمنظمات غير الحكومية والشركاء"
              description="الوصول إلى المجتمعات الريفية مع الطب عن بعد eMaClinic وأدوات PATELE الزراعية"
              keyFeature1="الوصول المباشر للمستفيدين"
              keyFeature2="أدوات قياس التأثير"
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
            alt="جدول-الموظفين"
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
              شريك مع{" "}
              <span className="relative">
                eMa
                <motion.img
                  src={Underline}
                  alt="تسطير"
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
                  text: "رقمنة دعم المشاريع الصغيرة والمتوسطة، والقضاء على المستفيدين الوهميين.",
                },
                {
                  emoji: FaceEmoji,
                  text: "الوصول إلى 50 مليون شاب متأثر من خلال نظامنا البيئي المكون من 12 وحدة.",
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
                    alt={`رمز-تعبيري-${index}`}
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
              title="للوكالات الحكومية"
              description="تقليل التكاليف الإدارية بنسبة 85%، والقضاء على تسرب الدعم."
              keyFeature1="تقارير الامتثال الآلية"
              keyFeature2="مسارات تدقيق شفافة"
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
              title="لخلق فرص العمل"
              description="ربط وكالات التوظيف بملايين الباحثين عن عمل في المناطق الريفية"
              keyFeature1="الوصول إلى المواهب الريفية"
              keyFeature2="مطابقة المهارات الآلية"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default BeOurPartner;
