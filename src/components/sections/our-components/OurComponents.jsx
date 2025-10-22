import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ComponentContainer from "@/components/shared/ComponentContainer";
import MobilePrototype from "../../../assets/our-components/components-mobile-prototype.svg";

const components = [
  {
    title: "PAYMATE",
    subtitle: "Pont Espèces-Numérique",
    description:
      "Partenaires locaux qui chargent de l'argent dans les portefeuilles et gèrent les retraits, reliant la finance numérique aux communautés en espèces.",
    style: "lg:col-start-1 lg:row-start-1",
  },
  {
    title: "SIBA",
    subtitle: "Club d'Épargne Rotatif",
    description:
      "Épargne de groupe traditionnelle où les membres contribuent mensuellement et se relaient pour collecter le montant mis en commun.",
    style: "lg:col-start-3 lg:row-start-1",
  },
  {
    title: "eWALLET",
    subtitle: "Votre Portefeuille Numérique",
    description:
      "Chargez des fonds via des cartes ou Paymates. Envoyez/recevez de l'argent en utilisant des codes QR ou des numéros de téléphone instantanément.",
    style: "lg:col-start-1 lg:row-start-2",
  },
  {
    title: "eMaSave",
    subtitle: "Objectifs d'Épargne de Groupe",
    description:
      "Épargne collaborative avec contrôle de groupe - les retraits nécessitent l'accord unanime de tous les membres.",
    style: "lg:col-start-3 lg:row-start-2",
  },
  {
    title: "eMaTuma",
    subtitle: "Transferts Transfrontaliers",
    description:
      "Envoyez de l'argent à l'international avec des transferts en temps réel et retrait d'espèces chez les Paymates enregistrés.",
    style:
      "lg:col-span-3 lg:row-start-3 sm:col-span-2 sm:place-self-center lg:self-start",
  },
];

function OurComponents() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const headerVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: "blur(2px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const phoneVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        delay: 0.3,
        ease: "easeOut",
      },
    },
    float: {
      y: [0, -8, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1.5,
      },
    },
  };

  const circleVariants = {
    hidden: {
      opacity: 0,
      scale: 0.7,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        delay: 0.1,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="components"
      ref={ref}
      className="flex flex-col items-center px-12 py-16 space-y-16 lg:py-24 lg:space-y-32 sm:px-24 lg:px-32 overflow-x-hidden"
    >
      {/* Header Section */}
      <motion.div
        className="flex flex-col items-center"
        variants={headerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2
          className="mb-4 text-3xl font-bold md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 20,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Nos Composants
        </motion.h2>
        <motion.p
          className="max-w-2xl text-sm leading-relaxed text-center sm:text-lg text-muted-foreground"
          initial={{ opacity: 0, y: 15 }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 15,
          }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          Moteurs de flux de fonds—SIBA, PAYMATE, eWALLET—conçus pour la vitesse
          et la précision.
        </motion.p>
      </motion.div>

      {/* Main Grid */}
      <motion.div
        className="grid lg:grid-cols-[auto_auto_auto] lg:grid-rows-3 grid-cols-1 gap-8 sm:grid-cols-2 w-full max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Central Phone Circle */}
        <motion.div
          className="relative lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-span-2 place-self-center w-[280px] h-[280px] sm:w-[375px] sm:h-[375px] lg:w-[425px] lg:h-[425px] xl:w-[500px] xl:h-[500px] rounded-full bg-primary sm:col-start-1 sm:col-span-2"
          variants={circleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.img
            src={MobilePrototype}
            alt="prototype mobile"
            className="absolute -top-20 left-1/2 -translate-x-1/2 z-10 w-[70%]"
            variants={phoneVariants}
            initial="hidden"
            animate={isInView ? ["visible", "float"] : "hidden"}
          />
        </motion.div>

        {/* Component Cards */}
        {components.map((component, index) => (
          <motion.div
            key={component.title}
            className={component.style}
            variants={itemVariants}
            custom={index}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{
              delay: 0.6 + index * 0.15, // Staggered delays
            }}
          >
            <ComponentContainer component={component} index={index} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default OurComponents;
