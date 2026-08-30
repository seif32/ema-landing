import { pick } from "./locale";

/**
 * Pricing. The three plan cards are kept from the original design; the fee
 * table underneath is new — it states the per-module, event-based fee model
 * documented by the eMa team, which is a selling point the site was hiding.
 */

export const PRICING = pick({
  en: {
    title: "You pay when you earn",
    subtitle:
      "No terminals to buy. No monthly rental. No lock-in contract. Most eMa fees are only charged at the moment value changes hands.",
    feeTableHeaders: { module: "Module", when: "When the fee is charged" },
    plans: [
      {
        badge: "Everyday",
        badgeStyle: "bg-black/10 border border-black text-black",
        rate: "4%",
        rateSuffix: "per transaction",
        subtitle: "Personal essentials",
        description:
          "Simple everyday banking at an affordable rate. Handle all your personal transactions with ease.",
        features: ["Send money", "Cash withdrawals", "P2P transactions"],
        cta: "Choose Everyday",
        ctaStyle: "bg-black text-white",
      },
      {
        badge: "Be our partner",
        badgeStyle: "bg-blue-100 border border-blue-600 text-blue-600",
        rate: "White label",
        subtitle: "Partnership programme",
        description:
          "Power your business with our proven fintech platform — customise our technology under your own brand.",
        features: [
          "Full brand customisation",
          "Ready to deploy",
          "Full API access",
          "Real-time analytics",
          "Dedicated support",
        ],
        cta: "Contact us",
        ctaStyle: "bg-blue-700 text-white",
      },
      {
        badge: "Business",
        badgeStyle: "bg-amber-100 border border-amber-600 text-amber-700",
        rate: "5%",
        rateSuffix: "per transaction",
        subtitle: "Business solutions",
        description:
          "A complete commercial ecosystem built for growth — from point of sale to funding.",
        features: [
          "eMaPOS",
          "eMaMall",
          "eMaServe",
          "eMaFunding",
          "eMaSave",
          "eMaTuma",
        ],
        noteLab: "Special rates:",
        note: "Paymates · 1.5–2%   /   SIBA · 15%",
        cta: "Choose Business",
        ctaStyle: "bg-amber-700 text-white",
      },
    ],
    fees: [
      { module: "eMaPOS", when: "Monthly, auto-debited from your eMa account, calculated on your total orders" },
      { module: "eMaMall", when: "When buyer and seller both accept the offer" },
      { module: "eMaServe", when: "When the job is marked complete" },
      { module: "eMaTuma", when: "When you confirm the transfer" },
      { module: "eMaSave", when: "When the strongbox starts, and on payout" },
      { module: "eMaFunding", when: "When the campaign is created" },
      { module: "PAYMATE", when: "1.5–2% per cash-in / cash-out" },
      { module: "SIBA", when: "15%" },
      { module: "Everyday (personal)", when: "4%" },
      { module: "Business", when: "5%" },
      { module: "White label", when: "Contact us" },
    ],
  },
  ar: {
    title: "تدفع عندما تربح",
    subtitle:
      "لا أجهزة تشتريها. لا إيجار شهري. لا عقود مُلزِمة. معظم رسوم eMa تُحتسب فقط في اللحظة التي تنتقل فيها القيمة.",
    feeTableHeaders: { module: "الوحدة", when: "متى تُحتسب الرسوم" },
    plans: [
      {
        badge: "يومي",
        badgeStyle: "bg-black/10 border border-black text-black",
        rate: "4%",
        rateSuffix: "لكل معاملة",
        subtitle: "الخدمات الأساسية",
        description:
          "الخدمات المصرفية اليومية البسيطة بأسعار معقولة. تعامل مع جميع معاملاتك الشخصية بسهولة.",
        features: ["إرسال الأموال", "السحوبات النقدية", "تحويلات بين الأفراد"],
        cta: "اختر اليومي",
        ctaStyle: "bg-black text-white",
      },
      {
        badge: "كن شريكنا",
        badgeStyle: "bg-blue-100 border border-blue-600 text-blue-600",
        rate: "العلامة البيضاء",
        subtitle: "برنامج الشراكة",
        description:
          "عزز عملك بمنصة التكنولوجيا المالية المثبتة لدينا — خصص تقنيتنا تحت علامتك التجارية.",
        features: [
          "تخصيص كامل للعلامة التجارية",
          "جاهز للنشر",
          "وصول كامل لواجهة برمجة التطبيقات",
          "تحليلات في الوقت الفعلي",
          "دعم مخصص",
        ],
        cta: "اتصل بنا",
        ctaStyle: "bg-blue-700 text-white",
      },
      {
        badge: "الأعمال",
        badgeStyle: "bg-amber-100 border border-amber-600 text-amber-700",
        rate: "5%",
        rateSuffix: "لكل معاملة",
        subtitle: "حلول الأعمال",
        description:
          "نظام بيئي تجاري كامل مصمم للنمو — من نقاط البيع إلى حلول التمويل.",
        features: [
          "eMaPOS",
          "eMaMall",
          "eMaServe",
          "eMaFunding",
          "eMaSave",
          "eMaTuma",
        ],
        noteLabel: "مستويات خاصة:",
        note: "Paymates · 1.5–2%   /   SIBA · 15%",
        cta: "اختر الأعمال",
        ctaStyle: "bg-amber-700 text-white",
      },
    ],
    fees: [
      { module: "eMaPOS", when: "شهريًا، تُخصم تلقائيًا من حساب eMa، وتُحسب على إجمالي طلباتك" },
      { module: "eMaMall", when: "عندما يقبل المشتري والبائع العرض معًا" },
      { module: "eMaServe", when: "عند تسجيل إنجاز المهمة" },
      { module: "eMaTuma", when: "عند تأكيدك للتحويل" },
      { module: "eMaSave", when: "عند بدء الصندوق، وعند الصرف" },
      { module: "eMaFunding", when: "عند إنشاء الحملة" },
      { module: "PAYMATE", when: "1.5–2% لكل إيداع أو سحب نقدي" },
      { module: "SIBA", when: "15%" },
      { module: "الباقة اليومية (الأفراد)", when: "4%" },
      { module: "باقة الأعمال", when: "5%" },
      { module: "العلامة البيضاء", when: "تواصل معنا" },
    ],
  },
  fr: {
    title: "Vous payez quand vous gagnez",
    subtitle:
      "Aucun terminal à acheter. Aucun loyer mensuel. Aucun engagement. La plupart des frais eMa ne s'appliquent qu'au moment où la valeur change de mains.",
    feeTableHeaders: { module: "Module", when: "Quand les frais s'appliquent" },
    plans: [
      {
        badge: "Quotidien",
        badgeStyle: "bg-black/10 border border-black text-black",
        rate: "4 %",
        rateSuffix: "par transaction",
        subtitle: "L'essentiel au quotidien",
        description:
          "Des services bancaires simples à un tarif abordable. Gérez toutes vos opérations personnelles en toute simplicité.",
        features: ["Envoyer de l'argent", "Retraits d'espèces", "Transferts entre particuliers"],
        cta: "Choisir Quotidien",
        ctaStyle: "bg-black text-white",
      },
      {
        badge: "Devenez partenaire",
        badgeStyle: "bg-blue-100 border border-blue-600 text-blue-600",
        rate: "Marque blanche",
        subtitle: "Programme de partenariat",
        description:
          "Développez votre activité avec notre plateforme fintech éprouvée — personnalisez notre technologie sous votre propre marque.",
        features: [
          "Personnalisation complète de la marque",
          "Prêt à déployer",
          "Accès complet à l'API",
          "Analyses en temps réel",
          "Assistance dédiée",
        ],
        cta: "Nous contacter",
        ctaStyle: "bg-blue-700 text-white",
      },
      {
        badge: "Entreprise",
        badgeStyle: "bg-amber-100 border border-amber-600 text-amber-700",
        rate: "5 %",
        rateSuffix: "par transaction",
        subtitle: "Solutions professionnelles",
        description:
          "Un écosystème commercial complet conçu pour la croissance — du point de vente au financement.",
        features: [
          "eMaPOS",
          "eMaMall",
          "eMaServe",
          "eMaFunding",
          "eMaSave",
          "eMaTuma",
        ],
        noteLabel: "Tarifs particuliers :",
        note: "Paymates · 1,5–2 %   /   SIBA · 15 %",
        cta: "Choisir Entreprise",
        ctaStyle: "bg-amber-700 text-white",
      },
    ],
    fees: [
      { module: "eMaPOS", when: "Mensuellement, prélevé automatiquement sur votre compte eMa, calculé sur le total de vos commandes" },
      { module: "eMaMall", when: "Lorsque l'acheteur et le vendeur acceptent tous deux l'offre" },
      { module: "eMaServe", when: "Lorsque la mission est marquée comme terminée" },
      { module: "eMaTuma", when: "Lorsque vous confirmez le transfert" },
      { module: "eMaSave", when: "Au démarrage du coffre, puis au versement" },
      { module: "eMaFunding", when: "À la création de la campagne" },
      { module: "PAYMATE", when: "1,5–2 % par dépôt ou retrait d'espèces" },
      { module: "SIBA", when: "15 %" },
      { module: "Quotidien (particuliers)", when: "4 %" },
      { module: "Entreprise", when: "5 %" },
      { module: "Marque blanche", when: "Nous contacter" },
    ],
  },
  pt: {
    title: "Paga quando ganha",
    subtitle:
      "Sem terminais para comprar. Sem renda mensal. Sem fidelização. A maioria das taxas eMa só é cobrada no momento em que o valor muda de mãos.",
    feeTableHeaders: { module: "Módulo", when: "Quando a taxa é cobrada" },
    plans: [
      {
        badge: "Diário",
        badgeStyle: "bg-black/10 border border-black text-black",
        rate: "4%",
        rateSuffix: "por transação",
        subtitle: "O essencial do dia a dia",
        description:
          "Serviços bancários simples a um preço acessível. Trate de todas as suas operações pessoais com facilidade.",
        features: ["Enviar dinheiro", "Levantamentos", "Transferências entre particulares"],
        cta: "Escolher Diário",
        ctaStyle: "bg-black text-white",
      },
      {
        badge: "Seja nosso parceiro",
        badgeStyle: "bg-blue-100 border border-blue-600 text-blue-600",
        rate: "Marca branca",
        subtitle: "Programa de parceria",
        description:
          "Impulsione o seu negócio com a nossa plataforma fintech comprovada — personalize a nossa tecnologia sob a sua própria marca.",
        features: [
          "Personalização total da marca",
          "Pronto a implementar",
          "Acesso completo à API",
          "Análises em tempo real",
          "Apoio dedicado",
        ],
        cta: "Fale connosco",
        ctaStyle: "bg-blue-700 text-white",
      },
      {
        badge: "Empresas",
        badgeStyle: "bg-amber-100 border border-amber-600 text-amber-700",
        rate: "5%",
        rateSuffix: "por transação",
        subtitle: "Soluções empresariais",
        description:
          "Um ecossistema comercial completo pensado para crescer — do ponto de venda ao financiamento.",
        features: [
          "eMaPOS",
          "eMaMall",
          "eMaServe",
          "eMaFunding",
          "eMaSave",
          "eMaTuma",
        ],
        noteLabel: "Taxas especiais:",
        note: "Paymates · 1,5–2%   /   SIBA · 15%",
        cta: "Escolher Empresas",
        ctaStyle: "bg-amber-700 text-white",
      },
    ],
    fees: [
      { module: "eMaPOS", when: "Mensalmente, debitado automaticamente da sua conta eMa, calculado sobre o total das suas encomendas" },
      { module: "eMaMall", when: "Quando comprador e vendedor aceitam a proposta" },
      { module: "eMaServe", when: "Quando o trabalho é dado como concluído" },
      { module: "eMaTuma", when: "Quando confirma a transferência" },
      { module: "eMaSave", when: "No arranque do cofre e no levantamento" },
      { module: "eMaFunding", when: "Na criação da campanha" },
      { module: "PAYMATE", when: "1,5–2% por depósito ou levantamento em numerário" },
      { module: "SIBA", when: "15%" },
      { module: "Diário (particulares)", when: "4%" },
      { module: "Empresas", when: "5%" },
      { module: "Marca branca", when: "Fale connosco" },
    ],
  },
});

export default PRICING;
