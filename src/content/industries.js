import { localize, pick } from "./locale";

/**
 * Industry recipes — drawn from the eMa feature deck's case studies
 * (major retailers, B&B, bakery, artisans, insurance, transport, individuals)
 * and extended with healthcare and export now that eMaClinic and eMaCargo
 * are documented.
 *
 * `modules` holds module ids from modules.js so each recipe links through.
 */

export const INDUSTRIES_HEADER = pick({
  en: {
    title: "Built for your business",
    subtitle: "Pick your trade and see the exact setup.",
    problemLabel: "The problem",
    setupLabel: "The eMa setup",
    outcomeLabel: "The outcome",
  },
  ar: {
    title: "مصمَّم لعملك",
    subtitle: "اختر مجالك وشاهد الإعداد المناسب لك تمامًا.",
    problemLabel: "المشكلة",
    setupLabel: "إعداد eMa",
    outcomeLabel: "النتيجة",
  },
  fr: {
    title: "Conçu pour votre activité",
    subtitle: "Choisissez votre métier et voyez la configuration exacte.",
    problemLabel: "Le problème",
    setupLabel: "La configuration eMa",
    outcomeLabel: "Le résultat",
  },
  pt: {
    title: "Feito para o seu negócio",
    subtitle: "Escolha o seu setor e veja a configuração exata.",
    problemLabel: "O problema",
    setupLabel: "A configuração eMa",
    outcomeLabel: "O resultado",
  },
});

const industries = [
  {
    id: "retail",
    modules: ["emapos", "ewallet", "emacargo", "emaexpo"],
    en: {
      name: "Major retailers",
      problem:
        "Multiple tills, multiple staff, no live view of stock or takings.",
      outcome:
        "Every till reports to one dashboard, and takings are digital the moment they're taken.",
    },
    ar: {
      name: "متاجر التجزئة الكبرى",
      problem:
        "صناديق دفع متعددة وموظفون كثر وبلا رؤية حيّة للمخزون أو المتحصّلات.",
      outcome:
        "كل صندوق يرفع تقاريره إلى لوحة واحدة، والمتحصّلات تصبح رقمية لحظة استلامها.",
    },
    fr: {
      name: "Grandes surfaces",
      problem:
        "Plusieurs caisses, plusieurs employés, aucune vue en temps réel sur le stock ou les recettes.",
      outcome:
        "Chaque caisse alimente un seul tableau de bord, et les recettes deviennent numériques dès l'encaissement.",
    },
    pt: {
      name: "Grandes superfícies",
      problem:
        "Várias caixas, vários funcionários, sem visão em tempo real do stock ou das receitas.",
      outcome:
        "Cada caixa reporta a um único painel, e as receitas tornam-se digitais no momento em que entram.",
    },
  },
  {
    id: "lodging",
    modules: ["ewallet", "emamall", "emaexpo", "emacom"],
    en: {
      name: "B&B and lodging",
      problem:
        "Guests pay by card, cash or transfer; deposits and no-shows are a mess.",
      outcome:
        "Guests book, pay a deposit and settle by QR — all against one balance.",
    },
    ar: {
      name: "الفنادق والنُزل",
      problem:
        "النزلاء يدفعون ببطاقة أو نقدًا أو تحويلًا، والعرابين والحجوزات الملغاة فوضى.",
      outcome: "النزيل يحجز ويدفع العربون ويسدّد برمز QR — كل ذلك على رصيد واحد.",
    },
    fr: {
      name: "Chambres d'hôtes et hébergement",
      problem:
        "Les clients paient par carte, en espèces ou par virement ; acomptes et annulations tournent au casse-tête.",
      outcome:
        "Le client réserve, verse un acompte et règle par QR — le tout sur un solde unique.",
    },
    pt: {
      name: "Alojamento e turismo",
      problem:
        "Os hóspedes pagam por cartão, numerário ou transferência; sinais e desistências são uma confusão.",
      outcome:
        "O hóspede reserva, paga o sinal e liquida por QR — tudo sobre um saldo único.",
    },
  },
  {
    id: "bakery",
    modules: ["emapos", "paymate", "emamall"],
    en: {
      name: "Bakeries and food",
      problem: "Daily cash, daily stock loss, suppliers chased by phone.",
      outcome:
        "Cash is banked without leaving the counter, and suppliers are alerted automatically.",
    },
    ar: {
      name: "المخابز والأغذية",
      problem: "نقد يومي وهدر يومي في المخزون وملاحقة الموردين هاتفيًا.",
      outcome: "النقد يُودَع دون مغادرة الكاونتر، والموردون يُنبَّهون تلقائيًا.",
    },
    fr: {
      name: "Boulangeries et alimentation",
      problem:
        "Espèces chaque jour, pertes de stock chaque jour, fournisseurs relancés par téléphone.",
      outcome:
        "L'argent est déposé sans quitter le comptoir et les fournisseurs sont alertés automatiquement.",
    },
    pt: {
      name: "Padarias e alimentação",
      problem:
        "Numerário diário, perdas de stock diárias, fornecedores perseguidos por telefone.",
      outcome:
        "O numerário é depositado sem sair do balcão e os fornecedores são avisados automaticamente.",
    },
  },
  {
    id: "artisans",
    modules: ["emaserve", "ewallet", "emafunding"],
    en: {
      name: "Artisans and professionals",
      problem: "Work found by word of mouth, paid late or not at all.",
      outcome:
        "Jobs found nearby, milestones tracked, payment released on completion.",
    },
    ar: {
      name: "الحرفيون والمهنيون",
      problem: "العمل يأتي بالكلام المتناقَل، والدفع متأخر أو مفقود.",
      outcome: "وظائف قريبة، ومراحل عمل متابَعة، ودفع يُفرَج عنه عند الإنجاز.",
    },
    fr: {
      name: "Artisans et professionnels",
      problem:
        "Le travail vient du bouche-à-oreille, payé en retard ou jamais.",
      outcome:
        "Des chantiers à proximité, un suivi par étapes, et le paiement libéré à la livraison.",
    },
    pt: {
      name: "Artesãos e profissionais",
      problem:
        "Trabalho que aparece pelo passa-palavra, pago tarde ou nunca.",
      outcome:
        "Trabalhos por perto, etapas acompanhadas, e pagamento libertado na conclusão.",
    },
  },
  {
    id: "insurance",
    modules: ["patele", "paymate", "ewallet"],
    en: {
      name: "Insurance and financial services",
      problem: "Monthly premiums collected door to door, in cash.",
      outcome:
        "Premiums collect automatically each month, and policies are shared digitally.",
    },
    ar: {
      name: "التأمين والخدمات المالية",
      problem: "أقساط شهرية تُحصَّل نقدًا من باب إلى باب.",
      outcome: "الأقساط تُحصَّل تلقائيًا كل شهر، والوثائق تُشارَك رقميًا.",
    },
    fr: {
      name: "Assurance et services financiers",
      problem:
        "Des primes mensuelles collectées en espèces, de porte en porte.",
      outcome:
        "Les primes se prélèvent automatiquement chaque mois et les contrats se partagent en ligne.",
    },
    pt: {
      name: "Seguros e serviços financeiros",
      problem:
        "Prémios mensais cobrados em numerário, porta a porta.",
      outcome:
        "Os prémios são cobrados automaticamente todos os meses e as apólices partilhadas digitalmente.",
    },
  },
  {
    id: "transport",
    modules: ["ewallet", "paymate", "emafunding"],
    en: {
      name: "Transport and taxi",
      problem: "Fares in cash, drivers unbanked, no record for financing.",
      outcome: "Fares go digital, and the trip record becomes a credit record.",
    },
    ar: {
      name: "النقل وسيارات الأجرة",
      problem: "أجرة نقدية، وسائقون بلا حسابات بنكية، وبلا سجل للتمويل.",
      outcome: "الأجرة تصبح رقمية، وسجل الرحلات يصبح سجلًا ائتمانيًا.",
    },
    fr: {
      name: "Transport et taxis",
      problem:
        "Des courses en espèces, des chauffeurs sans compte bancaire, aucun historique pour se financer.",
      outcome:
        "Les courses deviennent numériques, et l'historique des trajets devient un historique de crédit.",
    },
    pt: {
      name: "Transportes e táxis",
      problem:
        "Viagens pagas em numerário, motoristas sem conta bancária, sem histórico para financiamento.",
      outcome:
        "As viagens tornam-se digitais, e o registo de viagens torna-se um registo de crédito.",
    },
  },
  {
    id: "healthcare",
    modules: ["emaclinic", "patele", "ewallet"],
    en: {
      name: "Healthcare and clinics",
      problem:
        "Patients travel hours for a ten-minute consultation; cover is bought but never used.",
      outcome:
        "Book by specialty, consult by video, prescription by email — paid from the wallet the cover sits in.",
    },
    ar: {
      name: "الرعاية الصحية والعيادات",
      problem:
        "المريض يسافر ساعات من أجل استشارة عشر دقائق، والتغطية تُشترى ولا تُستخدم.",
      outcome:
        "احجز بالتخصص، واستشِر بالفيديو، واستلم الوصفة على بريدك — بالدفع من المحفظة التي تحمل التغطية.",
    },
    fr: {
      name: "Santé et cliniques",
      problem:
        "Des patients qui voyagent des heures pour dix minutes de consultation ; une couverture souscrite mais jamais utilisée.",
      outcome:
        "Réservez par spécialité, consultez en visio, recevez l'ordonnance par e-mail — payé depuis le portefeuille qui porte la couverture.",
    },
    pt: {
      name: "Saúde e clínicas",
      problem:
        "Doentes que viajam horas para uma consulta de dez minutos; cobertura contratada mas nunca usada.",
      outcome:
        "Marque por especialidade, consulte por vídeo, receba a receita por e-mail — pago da carteira onde está a cobertura.",
    },
  },
  {
    id: "export",
    modules: ["emacargo", "emamall", "ematuma"],
    en: {
      name: "Exporters and traders",
      problem:
        "Freight quotes by phone, opaque pricing, shipments stranded between carriers.",
      outcome:
        "Carriers bid for your shipment, all three legs sync, one payment and one tracking log.",
    },
    ar: {
      name: "المصدّرون والتجار",
      problem: "عروض شحن عبر الهاتف، وتسعير غامض، وشحنات تعلق بين الناقلين.",
      outcome:
        "الناقلون يتنافسون على شحنتك، والمراحل الثلاث متزامنة، ودفعة واحدة وسجل تتبّع واحد.",
    },
    fr: {
      name: "Exportateurs et négociants",
      problem:
        "Des devis de fret par téléphone, des prix opaques, des envois bloqués entre transporteurs.",
      outcome:
        "Les transporteurs se disputent votre envoi, les trois segments se synchronisent, un seul paiement et un seul suivi.",
    },
    pt: {
      name: "Exportadores e comerciantes",
      problem:
        "Orçamentos de frete por telefone, preços opacos, envios parados entre transportadoras.",
      outcome:
        "As transportadoras concorrem pelo seu envio, os três trajetos sincronizam, um pagamento e um só registo de rastreio.",
    },
  },
  {
    id: "individuals",
    modules: ["ewallet", "siba", "emasave"],
    en: {
      name: "Individuals and households",
      problem: "No bank, no credit, no way to save with discipline.",
      outcome:
        "Save with your circle, get paid by phone number, buy airtime on any network.",
    },
    ar: {
      name: "الأفراد والأسر",
      problem: "لا بنك ولا ائتمان ولا وسيلة للادّخار بانضباط.",
      outcome: "ادّخر مع دائرتك، واقبض على رقم هاتفك، واشترِ رصيدًا لأي شبكة.",
    },
    fr: {
      name: "Particuliers et foyers",
      problem:
        "Pas de banque, pas de crédit, aucun moyen d'épargner avec discipline.",
      outcome:
        "Épargnez avec vos proches, encaissez sur votre numéro de téléphone, achetez du crédit sur tous les réseaux.",
    },
    pt: {
      name: "Particulares e famílias",
      problem:
        "Sem banco, sem crédito, sem forma de poupar com disciplina.",
      outcome:
        "Poupe com o seu círculo, receba no seu número de telemóvel, compre saldo em qualquer rede.",
    },
  },
];

export const INDUSTRIES = industries.map(localize);

export default INDUSTRIES;
