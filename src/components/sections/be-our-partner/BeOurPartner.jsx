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
          title="Seja Nosso Parceiro"
          subtitle="Transforme Sua Economia Através de Parceria"
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
              title="Para Instituições Financeiras"
              description="Acesse 5 milhões de usuários sem banco na África através de nossos módulos eWALLET e PAYMATE"
              keyFeature1="Expanda a base de clientes instantaneamente"
              keyFeature2="Soluções bancárias digitais em primeiro lugar"
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
              title="Para ONGs e Parceiros"
              description="Alcance comunidades rurais com telemedicina eMaClinic e ferramentas agrícolas PATELE"
              keyFeature1="Acesso direto aos beneficiários"
              keyFeature2="Ferramentas de medição de impacto"
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
            alt="tabela-funcionários"
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
              Parceiro com{" "}
              <span className="relative">
                eMa
                <motion.img
                  src={Underline}
                  alt="sublinhado"
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
                  text: "Digitalize o suporte a MPMEs, elimine beneficiários fantasmas.",
                },
                {
                  emoji: FaceEmoji,
                  text: "Alcance 50 milhões de jovens afetados através do nosso ecossistema de 12 módulos.",
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
              title="Para Agências Governamentais"
              description="Reduza a sobrecarga administrativa em 85%, elimine vazamentos de subsídios."
              keyFeature1="Relatórios de conformidade automatizados"
              keyFeature2="Trilhas de auditoria transparentes"
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
              title="Para Criação de Empregos"
              description="Conecte agências de emprego com milhões de buscadores de emprego rurais"
              keyFeature1="Acesso a Talentos Rurais"
              keyFeature2="Correspondência Automatizada de Habilidades"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default BeOurPartner;
