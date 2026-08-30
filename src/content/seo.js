import { pick } from "./locale";

/** Per-route titles and descriptions. `%s` is replaced with the module name. */
export const SEO = pick({
  en: {
    siteName: "eMalyami",
    titleTemplate: "%s · eMa",
    home: {
      title: "eMa · Everything your business needs. One account.",
      description:
        "eMa is the digital operating system for Africa's small and medium enterprises — sell in store and online, take payments by QR or cash, restock, raise capital, save with your group and trade across borders, all from one wallet.",
    },
    modules: {
      title: "Fourteen tools. One account.",
      description:
        "Every eMa module — eWallet, PAYMATE, eMaTuma, SIBA, eMaSave, eMaFunding, PATELE, eMaPOS, eMaMall, eMaServe, eMaExpo, eMaCargo, eMaCom and eMaClinic — settling into a single balance.",
    },
    faq: {
      title: "Questions, answered",
      description:
        "How to activate eMa, receive money, withdraw cash, run a SIBA group, transaction limits, security and support.",
    },
    help: {
      title: "Need help?",
      description:
        "Submit a Help Request to the eMalyami support team — tell us the module, what happened, and how to reach you.",
    },
    news: {
      title: "News",
      description: "Product news and updates from eMalyami.",
    },
  },
  ar: {
    siteName: "eMalyami",
    titleTemplate: "%s · eMa",
    home: {
      title: "eMa · كل ما يحتاجه عملك. في حساب واحد.",
      description:
        "eMa هو النظام التشغيلي الرقمي للمشاريع الصغيرة والمتوسطة في أفريقيا — بِع في متجرك وعلى الإنترنت، واقبض برمز QR أو نقدًا، وأعِد التخزين، واحصل على التمويل، وادّخر مع مجموعتك، وتاجر عبر الحدود، من محفظة واحدة.",
    },
    modules: {
      title: "أربع عشرة أداة. حساب واحد.",
      description:
        "كل وحدات eMa — eWallet وPAYMATE وeMaTuma وSIBA وeMaSave وeMaFunding وPATELE وeMaPOS وeMaMall وeMaServe وeMaExpo وeMaCargo وeMaCom وeMaClinic — تستقرّ في رصيد واحد.",
    },
    faq: {
      title: "أسئلة وأجوبة",
      description:
        "كيفية تفعيل eMa، واستلام الأموال، والسحب النقدي، وإدارة مجموعة SIBA، وحدود المعاملات، والأمان والدعم.",
    },
    help: {
      title: "تحتاج مساعدة؟",
      description:
        "قدّم طلب مساعدة إلى فريق دعم eMalyami — أخبرنا بالوحدة، وبما حدث، وكيف نصل إليك.",
    },
    news: {
      title: "الأخبار",
      description: "أخبار المنتج وآخر المستجدات من eMalyami.",
    },
  },
  fr: {
    siteName: "eMalyami",
    titleTemplate: "%s · eMa",
    home: {
      title: "eMa · Tout ce dont votre entreprise a besoin. Un seul compte.",
      description:
        "eMa est le système d'exploitation numérique des PME africaines — vendez en boutique et en ligne, encaissez par QR ou en espèces, réapprovisionnez, levez des fonds, épargnez en groupe et commercez au-delà des frontières, depuis un seul portefeuille.",
    },
    modules: {
      title: "Quatorze outils. Un seul compte.",
      description:
        "Tous les modules eMa — eWallet, PAYMATE, eMaTuma, SIBA, eMaSave, eMaFunding, PATELE, eMaPOS, eMaMall, eMaServe, eMaExpo, eMaCargo, eMaCom et eMaClinic — réglés sur un solde unique.",
    },
    faq: {
      title: "Vos questions, nos réponses",
      description:
        "Activer eMa, recevoir de l'argent, retirer des espèces, gérer un groupe SIBA, plafonds de transaction, sécurité et assistance.",
    },
    help: {
      title: "Besoin d'aide ?",
      description:
        "Envoyez une demande d'assistance à l'équipe eMalyami — indiquez le module, ce qui s'est passé et comment vous joindre.",
    },
    news: {
      title: "Actualités",
      description: "Actualités produit et nouveautés d'eMalyami.",
    },
  },
  pt: {
    siteName: "eMalyami",
    titleTemplate: "%s · eMa",
    home: {
      title: "eMa · Tudo o que o seu negócio precisa. Uma só conta.",
      description:
        "O eMa é o sistema operativo digital das PME africanas — venda na loja e online, receba por QR ou em numerário, reponha stock, obtenha capital, poupe com o seu grupo e negoceie além-fronteiras, tudo a partir de uma só carteira.",
    },
    modules: {
      title: "Catorze ferramentas. Uma só conta.",
      description:
        "Todos os módulos eMa — eWallet, PAYMATE, eMaTuma, SIBA, eMaSave, eMaFunding, PATELE, eMaPOS, eMaMall, eMaServe, eMaExpo, eMaCargo, eMaCom e eMaClinic — liquidados num saldo único.",
    },
    faq: {
      title: "Perguntas respondidas",
      description:
        "Como ativar o eMa, receber dinheiro, levantar numerário, gerir um grupo SIBA, limites de transação, segurança e apoio.",
    },
    help: {
      title: "Precisa de ajuda?",
      description:
        "Envie um pedido de apoio à equipa eMalyami — indique o módulo, o que aconteceu e como o podemos contactar.",
    },
    news: {
      title: "Notícias",
      description: "Notícias de produto e novidades da eMalyami.",
    },
  },
});

export default SEO;
