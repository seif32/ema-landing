import { pick } from "./locale";

/**
 * Section copy for the home page.
 * One entry per section; components read from here instead of hardcoding text,
 * so a translation is an edit to this file rather than an edit to 18 JSX files.
 */

export const HERO = pick({
  en: {
    kicker: "Small steps to financial freedom",
    titleLead: "Everything your business needs.",
    titleAccent: "One account.",
    subtitle:
      "eMa is the digital operating system for Africa's small and medium enterprises. Sell in your shop and online, take payments by QR or cash, restock, raise capital, save with your group, and trade across borders — all settling into one wallet, on one phone number.",
    primaryCta: "Start free",
    secondaryCta: "See the 14 modules",
    trustChips: [
      "KYC verified",
      "Cash-in at any Paymate",
      "Works on any Android phone",
    ],
  },
  ar: {
    kicker: "خطوات صغيرة نحو الحرية المالية",
    titleLead: "كل ما يحتاجه عملك.",
    titleAccent: "في حساب واحد.",
    subtitle:
      "eMa هو النظام التشغيلي الرقمي للمشاريع الصغيرة والمتوسطة في أفريقيا. بِع في متجرك وعلى الإنترنت، واقبض المدفوعات برمز QR أو نقدًا، وأعِد التخزين، واحصل على التمويل، وادّخر مع مجموعتك، وتاجر عبر الحدود — وكل ذلك يستقرّ في محفظة واحدة، على رقم هاتف واحد.",
    primaryCta: "ابدأ مجانًا",
    secondaryCta: "استعرض الوحدات الـ14",
    trustChips: [
      "تحقّق KYC",
      "إيداع نقدي لدى أي وكيل Paymate",
      "يعمل على أي هاتف أندرويد",
    ],
  },
  fr: {
    kicker: "De petits pas vers la liberté financière",
    titleLead: "Tout ce dont votre entreprise a besoin.",
    titleAccent: "Un seul compte.",
    subtitle:
      "eMa est le système d'exploitation numérique des petites et moyennes entreprises africaines. Vendez en boutique et en ligne, encaissez par QR ou en espèces, réapprovisionnez, levez des fonds, épargnez en groupe et commercez au-delà des frontières — le tout sur un seul portefeuille, un seul numéro de téléphone.",
    primaryCta: "Commencer gratuitement",
    secondaryCta: "Voir les 14 modules",
    trustChips: [
      "Identité vérifiée (KYC)",
      "Dépôt d'espèces chez tout Paymate",
      "Fonctionne sur tout téléphone Android",
    ],
  },
  pt: {
    kicker: "Pequenos passos para a liberdade financeira",
    titleLead: "Tudo o que o seu negócio precisa.",
    titleAccent: "Uma só conta.",
    subtitle:
      "O eMa é o sistema operativo digital das pequenas e médias empresas africanas. Venda na loja e online, receba por QR ou em numerário, reponha stock, obtenha capital, poupe com o seu grupo e negoceie além-fronteiras — tudo a liquidar numa só carteira, num só número de telemóvel.",
    primaryCta: "Começar gratuitamente",
    secondaryCta: "Ver os 14 módulos",
    trustChips: [
      "Identidade verificada (KYC)",
      "Depósito em numerário em qualquer Paymate",
      "Funciona em qualquer telemóvel Android",
    ],
  },
});

export const PROBLEM = pick({
  en: {
    title: "Running a small business shouldn't take six apps",
    subtitle:
      "Most African SMEs stitch together tools that don't talk to each other. eMa replaces the stack with one account.",
    beforeLabel: "Without eMa",
    afterLabel: "With eMa",
    before: [
      "A card machine from the bank, a wallet from the telco, a loan from a lender who can't see your sales",
      "Cash takings that never become digital balance",
      "Stock counted on paper, sales counted in a notebook",
      "No trading history, so no credit — even after ten profitable years",
      "Cross-border payments that cost 8–12% and take days",
      "Reconciliation by hand, every single night",
    ],
    after: [
      "One balance behind every module — POS, marketplace, savings, loans",
      "Any Paymate turns cash into digital balance in seconds",
      "Stock, sales, cashiers and suppliers in one back office",
      "Your transaction history is your credit record",
      "Cross-border transfer in real time, at a fraction of the cost",
      "Reconciliation happens automatically, because it's one ledger",
    ],
  },
  ar: {
    title: "إدارة مشروع صغير لا ينبغي أن تتطلّب ستة تطبيقات",
    subtitle:
      "معظم المشاريع الصغيرة والمتوسطة في أفريقيا تجمع أدوات لا يتحدّث بعضها إلى بعض. eMa يستبدل هذه المنظومة بحساب واحد.",
    beforeLabel: "بدون eMa",
    afterLabel: "مع eMa",
    before: [
      "جهاز دفع من البنك، ومحفظة من شركة الاتصالات، وقرض من ممول لا يرى مبيعاتك",
      "متحصّلات نقدية لا تتحوّل أبدًا إلى رصيد رقمي",
      "مخزون يُحصى على الورق، ومبيعات تُسجَّل في دفتر",
      "لا سجل تجاري، وبالتالي لا تمويل — حتى بعد عشر سنوات من الربح",
      "مدفوعات عبر الحدود تكلّف 8–12% وتستغرق أيامًا",
      "تسوية حسابات يدوية، كل ليلة",
    ],
    after: [
      "رصيد واحد خلف كل وحدة — نقطة البيع، والسوق، والادّخار، والتمويل",
      "أي وكيل Paymate يحوّل النقد إلى رصيد رقمي في ثوانٍ",
      "المخزون والمبيعات والكاشيرات والموردون في لوحة تحكّم واحدة",
      "سجلّ معاملاتك هو سجلّك الائتماني",
      "تحويل عبر الحدود في الوقت الفعلي وبجزء من التكلفة",
      "التسوية تتمّ تلقائيًا، لأنه دفتر حسابات واحد",
    ],
  },
  fr: {
    title: "Gérer une petite entreprise ne devrait pas demander six applications",
    subtitle:
      "La plupart des PME africaines assemblent des outils qui ne se parlent pas. eMa remplace cet empilement par un seul compte.",
    beforeLabel: "Sans eMa",
    afterLabel: "Avec eMa",
    before: [
      "Un terminal de la banque, un portefeuille de l'opérateur, un prêt d'un organisme qui ne voit pas vos ventes",
      "Des recettes en espèces qui ne deviennent jamais un solde numérique",
      "Le stock compté sur papier, les ventes notées dans un cahier",
      "Aucun historique commercial, donc aucun crédit — même après dix ans de bénéfices",
      "Des paiements transfrontaliers à 8–12 % qui prennent des jours",
      "Un rapprochement des comptes à la main, tous les soirs",
    ],
    after: [
      "Un seul solde derrière chaque module — caisse, boutique en ligne, épargne, crédit",
      "N'importe quel Paymate transforme les espèces en solde numérique en quelques secondes",
      "Stock, ventes, caissiers et fournisseurs dans une seule interface",
      "Votre historique de transactions est votre historique de crédit",
      "Un transfert transfrontalier en temps réel, à une fraction du coût",
      "Le rapprochement se fait tout seul, puisqu'il n'y a qu'un seul registre",
    ],
  },
  pt: {
    title: "Gerir um pequeno negócio não devia exigir seis aplicações",
    subtitle:
      "A maioria das PME africanas junta ferramentas que não comunicam entre si. O eMa substitui esse conjunto por uma só conta.",
    beforeLabel: "Sem o eMa",
    afterLabel: "Com o eMa",
    before: [
      "Um terminal do banco, uma carteira do operador, um crédito de quem não vê as suas vendas",
      "Receitas em numerário que nunca se tornam saldo digital",
      "Stock contado em papel, vendas registadas num caderno",
      "Sem histórico comercial e, por isso, sem crédito — mesmo após dez anos de lucro",
      "Pagamentos além-fronteiras que custam 8–12% e demoram dias",
      "Reconciliação feita à mão, todas as noites",
    ],
    after: [
      "Um só saldo por trás de cada módulo — ponto de venda, mercado, poupança, crédito",
      "Qualquer Paymate transforma numerário em saldo digital em segundos",
      "Stock, vendas, operadores de caixa e fornecedores num só painel",
      "O seu histórico de transações é o seu histórico de crédito",
      "Transferência além-fronteiras em tempo real, por uma fração do custo",
      "A reconciliação acontece sozinha, porque é um só registo",
    ],
  },
});

export const ARCHITECTURE = pick({
  en: {
    title: "One identity. One balance. Fourteen tools.",
    subtitle:
      "Every eMa module settles into the same wallet, under the same verified identity. That is what makes the platform interoperable — and what makes your business finally legible to lenders, partners and buyers.",
    layers: [
      {
        label: "Identity",
        title: "One verified phone number",
        detail: "KYC, OTP, geo-tagging.",
      },
      {
        label: "Balance",
        title: "One multi-currency eWallet",
        detail: "Load by card, EFT or Paymate.",
      },
      {
        label: "Money Stack",
        title: "Move, save, borrow, insure",
        detail: "PAYMATE · eMaTuma · SIBA · eMaSave · eMaFunding · PATELE",
      },
      {
        label: "Business Stack",
        title: "Sell, serve, promote, ship",
        detail: "eMaPOS · eMaMall · eMaServe · eMaExpo · eMaCargo · eMaCom · eMaClinic",
      },
      {
        label: "Ledger",
        title: "One statement",
        detail: "Every transaction in every module lands in the same place.",
      },
    ],
  },
  ar: {
    title: "هوية واحدة. رصيد واحد. أربع عشرة أداة.",
    subtitle:
      "كل وحدة في eMa تستقرّ في المحفظة نفسها، تحت الهوية المُوثَّقة نفسها. هذا ما يجعل المنصّة متكاملة — وما يجعل عملك أخيرًا مقروءًا أمام المموّلين والشركاء والمشترين.",
    layers: [
      {
        label: "الهوية",
        title: "رقم هاتف واحد مُوثَّق",
        detail: "تحقّق KYC ورمز OTP وتحديد الموقع.",
      },
      {
        label: "الرصيد",
        title: "محفظة واحدة متعددة العملات",
        detail: "الشحن ببطاقة أو تحويل بنكي أو عبر وكيل Paymate.",
      },
      {
        label: "المنظومة المالية",
        title: "حرِّك أموالك، وادّخر، واقترض، وأمِّن",
        detail: "PAYMATE · eMaTuma · SIBA · eMaSave · eMaFunding · PATELE",
      },
      {
        label: "المنظومة التجارية",
        title: "بِع، وقدِّم خدماتك، وروّج، واشحن",
        detail: "eMaPOS · eMaMall · eMaServe · eMaExpo · eMaCargo · eMaCom · eMaClinic",
      },
      {
        label: "دفتر الحسابات",
        title: "كشف حساب واحد",
        detail: "كل معاملة في كل وحدة تصل إلى المكان نفسه.",
      },
    ],
  },
  fr: {
    title: "Une identité. Un solde. Quatorze outils.",
    subtitle:
      "Chaque module eMa se règle sur le même portefeuille, sous la même identité vérifiée. C'est ce qui rend la plateforme interopérable — et ce qui rend enfin votre entreprise lisible pour les prêteurs, les partenaires et les acheteurs.",
    layers: [
      {
        label: "Identité",
        title: "Un numéro de téléphone vérifié",
        detail: "KYC, code OTP, géolocalisation.",
      },
      {
        label: "Solde",
        title: "Un eWallet multidevise",
        detail: "Alimenté par carte, virement ou Paymate.",
      },
      {
        label: "Pôle financier",
        title: "Transférer, épargner, emprunter, assurer",
        detail: "PAYMATE · eMaTuma · SIBA · eMaSave · eMaFunding · PATELE",
      },
      {
        label: "Pôle commercial",
        title: "Vendre, servir, promouvoir, expédier",
        detail: "eMaPOS · eMaMall · eMaServe · eMaExpo · eMaCargo · eMaCom · eMaClinic",
      },
      {
        label: "Registre",
        title: "Un seul relevé",
        detail: "Chaque transaction de chaque module arrive au même endroit.",
      },
    ],
  },
  pt: {
    title: "Uma identidade. Um saldo. Catorze ferramentas.",
    subtitle:
      "Cada módulo eMa liquida na mesma carteira, sob a mesma identidade verificada. É isso que torna a plataforma interoperável — e o que finalmente torna o seu negócio legível para financiadores, parceiros e compradores.",
    layers: [
      {
        label: "Identidade",
        title: "Um número de telemóvel verificado",
        detail: "KYC, código OTP, geolocalização.",
      },
      {
        label: "Saldo",
        title: "Uma eWallet multimoeda",
        detail: "Carregada por cartão, transferência ou Paymate.",
      },
      {
        label: "Bloco financeiro",
        title: "Movimentar, poupar, financiar, segurar",
        detail: "PAYMATE · eMaTuma · SIBA · eMaSave · eMaFunding · PATELE",
      },
      {
        label: "Bloco comercial",
        title: "Vender, servir, promover, expedir",
        detail: "eMaPOS · eMaMall · eMaServe · eMaExpo · eMaCargo · eMaCom · eMaClinic",
      },
      {
        label: "Registo",
        title: "Um só extrato",
        detail: "Cada transação de cada módulo chega ao mesmo sítio.",
      },
    ],
  },
});

export const DIFFERENCE = pick({
  en: {
    title: "The eMa difference",
    subtitle: "Driving Africa's economic transformation through digital innovation",
    cards: [
      { value: "14", description: "interoperable modules on one account" },
      { value: "1", description: "wallet behind every module — no reconciliation" },
      { value: "Cash → Digital", description: "every Paymate is a branch" },
      { value: "SMEs", description: "the customer we were built for" },
    ],
  },
  ar: {
    title: "فرق eMa",
    subtitle: "قيادة التحول الاقتصادي لأفريقيا من خلال الابتكار الرقمي",
    cards: [
      { value: "14", description: "وحدة متكاملة على حساب واحد" },
      { value: "1", description: "محفظة واحدة خلف كل وحدة — بلا تسوية يدوية" },
      { value: "نقد ← رقمي", description: "كل وكيل Paymate هو فرع" },
      {
        value: "المشاريع الصغيرة",
        description: "العميل الذي بُنينا من أجله",
      },
    ],
  },
  fr: {
    title: "La différence eMa",
    subtitle: "Au service de la transformation économique de l'Afrique par l'innovation numérique",
    cards: [
      { value: "14", description: "modules interopérables sur un seul compte" },
      { value: "1", description: "portefeuille derrière chaque module — aucun rapprochement" },
      { value: "Espèces → Numérique", description: "chaque Paymate est une agence" },
      { value: "PME", description: "le client pour lequel nous avons été conçus" },
    ],
  },
  pt: {
    title: "A diferença eMa",
    subtitle: "A impulsionar a transformação económica de África através da inovação digital",
    cards: [
      { value: "14", description: "módulos interoperáveis numa só conta" },
      { value: "1", description: "carteira por trás de cada módulo — sem reconciliação" },
      { value: "Numerário → Digital", description: "cada Paymate é uma agência" },
      { value: "PME", description: "o cliente para quem fomos criados" },
    ],
  },
});

export const WHO_WE_ARE = pick({
  en: {
    title: "Who are we?",
    subtitle:
      "A mission-driven fintech creating transparent, inclusive growth for every entrepreneur.",
    groupLine: ["Part of the", "Sobek Group", "— trusted across Africa and South Africa."],
    badge: "Complete solution",
    missionLabel: "Our mission",
    mission:
      "To become the trusted financial home for every community burdened by the cost and complexity of conventional banking — creating jobs and improving lives, inclusively and credibly.",
    visionLabel: "Our vision",
    vision:
      "Africa's leading digital commerce and finance platform — connecting SMEs, cutting cross-border transaction costs, and bringing the unbanked into the formal economy through mobile-first tools, microfinance and crowdfunding.",
    buildersLabel: "Who builds it",
    builders:
      "eMa is developed by Sobek IT in association with Sobek IMF, members of the Sobek Group.",
  },
  ar: {
    title: "من نحن؟",
    subtitle:
      "شركة تكنولوجيا مالية قائمة على رسالة تخلق نموًا شفافًا وشاملاً لكل رائد أعمال.",
    groupLine: ["جزء من", "مجموعة سوبك", "— موثوق بها في جميع أنحاء أفريقيا وجنوب أفريقيا."],
    badge: "حل شامل",
    missionLabel: "رسالتنا",
    mission:
      "أن نصبح البيت المالي الموثوق لكل مجتمع أنهكته تكاليف الخدمات المصرفية التقليدية وتعقيدها — عبر خلق فرص العمل وتحسين حياة من نخدمهم، بشمولٍ ومصداقية.",
    visionLabel: "رؤيتنا",
    vision:
      "أن نكون المنصّة الرائدة للتجارة والتمويل الرقمي في أفريقيا — نربط المشاريع الصغيرة والمتوسطة، ونخفّض تكاليف المعاملات عبر الحدود، وندخل غير المتعاملين مع البنوك إلى الاقتصاد الرسمي عبر أدوات تعمل على الهاتف أولًا، والتمويل الأصغر، والتمويل الجماعي.",
    buildersLabel: "من يبنيها",
    builders:
      "eMa تطوير Sobek IT بالتعاون مع Sobek IMF، من شركات مجموعة Sobek.",
  },
  fr: {
    title: "Qui sommes-nous ?",
    subtitle:
      "Une fintech portée par une mission : une croissance transparente et inclusive pour chaque entrepreneur.",
    groupLine: ["Membre du", "groupe Sobek", "— une confiance établie en Afrique et en Afrique du Sud."],
    badge: "Solution complète",
    missionLabel: "Notre mission",
    mission:
      "Devenir la maison financière de confiance de chaque communauté pénalisée par le coût et la complexité de la banque traditionnelle — en créant des emplois et en améliorant des vies, de manière inclusive et crédible.",
    visionLabel: "Notre vision",
    vision:
      "La première plateforme africaine de commerce et de finance numériques — connecter les PME, réduire le coût des transactions transfrontalières et faire entrer les non-bancarisés dans l'économie formelle grâce à des outils pensés pour le mobile, au microcrédit et au financement participatif.",
    buildersLabel: "Qui la construit",
    builders:
      "eMa est développé par Sobek IT en association avec Sobek IMF, membres du groupe Sobek.",
  },
  pt: {
    title: "Quem somos?",
    subtitle:
      "Uma fintech movida por uma missão: crescimento transparente e inclusivo para cada empreendedor.",
    groupLine: ["Parte do", "grupo Sobek", "— de confiança em toda a África e na África do Sul."],
    badge: "Solução completa",
    missionLabel: "A nossa missão",
    mission:
      "Tornar-nos a casa financeira de confiança de cada comunidade sobrecarregada pelo custo e pela complexidade da banca tradicional — criando emprego e melhorando vidas, de forma inclusiva e credível.",
    visionLabel: "A nossa visão",
    vision:
      "A principal plataforma africana de comércio e finanças digitais — ligando PME, reduzindo os custos das transações além-fronteiras e trazendo os não bancarizados para a economia formal através de ferramentas pensadas para o telemóvel, microfinanciamento e financiamento colaborativo.",
    buildersLabel: "Quem a constrói",
    builders:
      "O eMa é desenvolvido pela Sobek IT em associação com a Sobek IMF, empresas do grupo Sobek.",
  },
});

export const MONEY_STACK = pick({
  en: {
    title: "The Money Stack",
    subtitle:
      "Seven ways value moves in, around and out of your business — all settling into the same wallet.",
  },
  ar: {
    title: "المنظومة المالية",
    subtitle:
      "سبع طرق تتحرك بها الأموال داخل عملك وخارجه — وكلها تستقرّ في المحفظة نفسها.",
  },
  fr: {
    title: "Le pôle financier",
    subtitle:
      "Sept façons de faire circuler la valeur dans votre entreprise — toutes réglées sur le même portefeuille.",
  },
  pt: {
    title: "O bloco financeiro",
    subtitle:
      "Sete formas de o dinheiro entrar, circular e sair do seu negócio — todas a liquidar na mesma carteira.",
  },
});

export const BUSINESS_STACK = pick({
  en: {
    title: "The Business Stack",
    subtitle:
      "Everything you need to trade — in person, online, and across the continent.",
  },
  ar: {
    title: "المنظومة التجارية",
    subtitle: "كل ما تحتاجه للتجارة — وجهًا لوجه، وعبر الإنترنت، وعبر القارة.",
  },
  fr: {
    title: "Le pôle commercial",
    subtitle:
      "Tout ce qu'il faut pour commercer — en personne, en ligne et à travers le continent.",
  },
  pt: {
    title: "O bloco comercial",
    subtitle:
      "Tudo o que precisa para negociar — presencialmente, online e por todo o continente.",
  },
});

export const PAYMATE_LOOP = pick({
  en: {
    title: "Your customers pay cash. That's fine.",
    subtitle:
      "The Paymate network is what connects a cash economy to a digital ledger — in both directions.",
    steps: [
      {
        title: "Cash in",
        detail:
          "A customer hands cash to any Paymate: a spaza shop, a service station, a trusted local trader. It becomes wallet balance in seconds.",
      },
      {
        title: "Transact",
        detail:
          "That balance now works across all 14 modules: buy stock, pay a supplier, contribute to your SIBA, send it across a border.",
      },
      {
        title: "Cash out",
        detail:
          "Need physical notes? Withdraw at any Paymate — no bank branch, no ATM, no card.",
      },
      {
        title: "Become one",
        detail:
          "Paymates earn on every transaction they handle. It's a business in itself.",
        cta: "Become a Paymate",
      },
    ],
  },
  ar: {
    title: "عملاؤك يدفعون نقدًا. لا مشكلة.",
    subtitle:
      "شبكة Paymate هي ما يربط الاقتصاد النقدي بالدفتر الرقمي — في الاتجاهين.",
    steps: [
      {
        title: "الإيداع النقدي",
        detail:
          "يسلّم العميل النقد لأي وكيل Paymate: متجر حي أو محطة خدمة أو تاجر محلي موثوق. فيتحوّل إلى رصيد في المحفظة خلال ثوانٍ.",
      },
      {
        title: "التعامل",
        detail:
          "هذا الرصيد يعمل الآن عبر الوحدات الأربع عشرة: اشترِ مخزونًا، وادفع لمورّد، وساهم في جمعيتك، وأرسله عبر الحدود.",
      },
      {
        title: "السحب النقدي",
        detail:
          "تحتاج أوراقًا نقدية؟ اسحب من أي وكيل Paymate — بلا فرع بنكي، وبلا صرّاف آلي، وبلا بطاقة.",
      },
      {
        title: "كن وكيلًا",
        detail:
          "وكلاء Paymate يربحون من كل معاملة ينفّذونها. إنه عمل قائم بذاته.",
        cta: "كن وكيل Paymate",
      },
    ],
  },
  fr: {
    title: "Vos clients paient en espèces. C'est très bien.",
    subtitle:
      "Le réseau Paymate est ce qui relie une économie de liquide à un registre numérique — dans les deux sens.",
    steps: [
      {
        title: "Dépôt d'espèces",
        detail:
          "Le client remet des espèces à n'importe quel Paymate : une échoppe de quartier, une station-service, un commerçant local de confiance. Elles deviennent un solde en quelques secondes.",
      },
      {
        title: "Transaction",
        detail:
          "Ce solde fonctionne désormais sur les 14 modules : acheter du stock, payer un fournisseur, cotiser à votre SIBA, l'envoyer à l'étranger.",
      },
      {
        title: "Retrait d'espèces",
        detail:
          "Besoin de billets ? Retirez chez n'importe quel Paymate — sans agence bancaire, sans distributeur, sans carte.",
      },
      {
        title: "Devenez-en un",
        detail:
          "Les Paymates gagnent sur chaque transaction qu'ils traitent. C'est une activité à part entière.",
        cta: "Devenir Paymate",
      },
    ],
  },
  pt: {
    title: "Os seus clientes pagam em numerário. Não há problema.",
    subtitle:
      "A rede Paymate é o que liga uma economia de numerário a um registo digital — nos dois sentidos.",
    steps: [
      {
        title: "Depósito em numerário",
        detail:
          "O cliente entrega numerário a qualquer Paymate: uma loja de bairro, uma estação de serviço, um comerciante local de confiança. Torna-se saldo em segundos.",
      },
      {
        title: "Transacionar",
        detail:
          "Esse saldo funciona agora nos 14 módulos: comprar stock, pagar a um fornecedor, contribuir para o seu SIBA, enviá-lo para outro país.",
      },
      {
        title: "Levantamento",
        detail:
          "Precisa de notas? Levante em qualquer Paymate — sem balcão bancário, sem multibanco, sem cartão.",
      },
      {
        title: "Torne-se um",
        detail:
          "Os Paymates ganham em cada transação que processam. É um negócio por si só.",
        cta: "Tornar-se Paymate",
      },
    ],
  },
});

export const SERVICES = pick({
  en: {
    title: "From your first sale to your first loan",
    subtitle: "eMa covers the whole life of a small business, not one moment in it.",
    items: [
      {
        title: "Get paid",
        points: [
          "QR and phone-number payments",
          "Daily limits R3,000–R5,000",
          "Bill payments — DSTV, Netflix, utilities",
          "Airtime on every network",
        ],
      },
      {
        title: "Grow",
        points: [
          "SME capital access",
          "Crowdfunding via eMaFunding",
          "Community savings via SIBA and eMaSave",
          "Your transaction record as your credit record",
        ],
      },
      {
        title: "Operate",
        points: [
          "B2B payments and invoice collection",
          "Creditor management",
          "Bulk payments to staff and suppliers",
          "Statements for any period",
        ],
      },
    ],
  },
  ar: {
    title: "من أول عملية بيع إلى أول تمويل",
    subtitle: "eMa يغطي عمر المشروع الصغير بأكمله، لا لحظة واحدة منه.",
    items: [
      {
        title: "اقبض",
        points: [
          "الدفع برمز QR ورقم الهاتف",
          "حدود يومية 3,000–5,000 راند",
          "سداد الفواتير — DSTV ونتفليكس والمرافق",
          "رصيد اتصال لجميع الشبكات",
        ],
      },
      {
        title: "انمُ",
        points: [
          "تمويل المشاريع الصغيرة والمتوسطة",
          "التمويل الجماعي عبر eMaFunding",
          "الادّخار المجتمعي عبر SIBA وeMaSave",
          "سجل معاملاتك كسجل ائتماني",
        ],
      },
      {
        title: "شغّل",
        points: [
          "مدفوعات بين الشركات وتحصيل الفواتير",
          "إدارة الدائنين",
          "مدفوعات جماعية للموظفين والموردين",
          "كشوف حساب لأي فترة",
        ],
      },
    ],
  },
  fr: {
    title: "De votre première vente à votre premier crédit",
    subtitle: "eMa couvre toute la vie d'une petite entreprise, pas un seul instant.",
    items: [
      {
        title: "Encaisser",
        points: [
          "Paiements par QR et par numéro de téléphone",
          "Plafonds journaliers de 3 000 à 5 000 R",
          "Paiement de factures — DSTV, Netflix, services publics",
          "Crédit téléphonique sur tous les réseaux",
        ],
      },
      {
        title: "Grandir",
        points: [
          "Accès au capital pour les PME",
          "Financement participatif via eMaFunding",
          "Épargne communautaire via SIBA et eMaSave",
          "Votre historique de transactions comme historique de crédit",
        ],
      },
      {
        title: "Opérer",
        points: [
          "Paiements interentreprises et recouvrement de factures",
          "Gestion des créanciers",
          "Paiements groupés aux employés et fournisseurs",
          "Relevés sur n'importe quelle période",
        ],
      },
    ],
  },
  pt: {
    title: "Da primeira venda ao primeiro financiamento",
    subtitle: "O eMa acompanha toda a vida de um pequeno negócio, não apenas um momento.",
    items: [
      {
        title: "Receber",
        points: [
          "Pagamentos por QR e por número de telemóvel",
          "Limites diários de 3 000 a 5 000 R",
          "Pagamento de faturas — DSTV, Netflix, serviços públicos",
          "Saldo de telemóvel em todas as redes",
        ],
      },
      {
        title: "Crescer",
        points: [
          "Acesso a capital para PME",
          "Financiamento colaborativo via eMaFunding",
          "Poupança comunitária via SIBA e eMaSave",
          "O seu registo de transações como histórico de crédito",
        ],
      },
      {
        title: "Operar",
        points: [
          "Pagamentos entre empresas e cobrança de faturas",
          "Gestão de credores",
          "Pagamentos em massa a colaboradores e fornecedores",
          "Extratos para qualquer período",
        ],
      },
    ],
  },
});

export const WHITE_LABEL = pick({
  en: {
    title: "White label solutions",
    subtitle:
      "Launch your own branded platform in weeks, on our 14-module ecosystem.",
    headline: ["Your brand,", "our technology"],
    lead: "Transform your institution with a fully customisable digital finance platform carrying",
    bars: ["your name", "your identity", "your colours"],
    whatYouGetLabel: "What you get",
    whatYouGet: [
      "The full 14-module platform under your brand",
      "Your name, logo and colour system",
      "Full API access",
      "Real-time analytics dashboard",
      "Dedicated integration support",
      "Deployment in weeks, not years",
      "Enterprise-grade foundation",
    ],
    corporateLabel: "Built for corporates",
    corporate: [
      "Pay bills, salaries and suppliers in bulk",
      "Collect bulk payments",
      "Daily, weekly and monthly statements for any period",
      "Joint company accounts",
      "A private closed-loop corporate scheme where funds arrive automatically",
      "Move money to and from your bank account",
      "Collect subscription fees from any number of subscribers into one account",
    ],
  },
  ar: {
    title: "حلول العلامة البيضاء",
    subtitle:
      "أطلق منصتك ذات العلامة التجارية في أسابيع، على نظامنا البيئي المكوّن من 14 وحدة.",
    headline: ["علامتك التجارية،", "تقنيتنا"],
    lead: "حوّل مؤسستك بمنصة مالية رقمية قابلة للتخصيص بالكامل، تحمل",
    bars: ["اسمك", "هويتك", "ألوانك"],
    whatYouGetLabel: "ما تحصل عليه",
    whatYouGet: [
      "المنصّة الكاملة بوحداتها الأربع عشرة تحت علامتك",
      "اسمك وشعارك ونظام ألوانك",
      "وصول كامل لواجهات البرمجة (API)",
      "لوحة تحليلات في الوقت الفعلي",
      "دعم تكامل مخصّص",
      "إطلاق في أسابيع لا سنوات",
      "بنية على مستوى المؤسسات",
    ],
    corporateLabel: "مصمَّم للشركات",
    corporate: [
      "سداد الفواتير والرواتب والموردين دفعة واحدة",
      "تحصيل المدفوعات الجماعية",
      "كشوف حساب يومية وأسبوعية وشهرية لأي فترة",
      "حسابات شركات مشتركة",
      "نظام مؤسسي مغلق وخاص تصل فيه الأموال تلقائيًا",
      "التحويل من وإلى حسابك البنكي",
      "تحصيل رسوم الاشتراك من أي عدد من المشتركين إلى حساب واحد",
    ],
  },
  fr: {
    title: "Solutions en marque blanche",
    subtitle:
      "Lancez votre propre plateforme sous votre marque en quelques semaines, sur notre écosystème de 14 modules.",
    headline: ["Votre marque,", "notre technologie"],
    lead: "Transformez votre institution avec une plateforme financière numérique entièrement personnalisable, portant",
    bars: ["votre nom", "votre identité", "vos couleurs"],
    whatYouGetLabel: "Ce que vous obtenez",
    whatYouGet: [
      "La plateforme complète de 14 modules sous votre marque",
      "Votre nom, votre logo et votre charte graphique",
      "Accès complet à l'API",
      "Tableau de bord analytique en temps réel",
      "Assistance dédiée à l'intégration",
      "Déploiement en semaines, pas en années",
      "Socle de niveau entreprise",
    ],
    corporateLabel: "Conçu pour les entreprises",
    corporate: [
      "Payer factures, salaires et fournisseurs en masse",
      "Encaisser des paiements groupés",
      "Relevés quotidiens, hebdomadaires et mensuels sur toute période",
      "Comptes d'entreprise conjoints",
      "Un circuit fermé privé où les fonds arrivent automatiquement",
      "Transférer de l'argent depuis et vers votre compte bancaire",
      "Collecter les cotisations d'un nombre illimité d'abonnés sur un seul compte",
    ],
  },
  pt: {
    title: "Soluções de marca branca",
    subtitle:
      "Lance a sua própria plataforma de marca em semanas, sobre o nosso ecossistema de 14 módulos.",
    headline: ["A sua marca,", "a nossa tecnologia"],
    lead: "Transforme a sua instituição com uma plataforma financeira digital totalmente personalizável, com",
    bars: ["o seu nome", "a sua identidade", "as suas cores"],
    whatYouGetLabel: "O que recebe",
    whatYouGet: [
      "A plataforma completa de 14 módulos sob a sua marca",
      "O seu nome, logótipo e sistema de cores",
      "Acesso completo à API",
      "Painel de análise em tempo real",
      "Apoio dedicado à integração",
      "Implementação em semanas, não em anos",
      "Base de nível empresarial",
    ],
    corporateLabel: "Feito para empresas",
    corporate: [
      "Pagar faturas, salários e fornecedores em massa",
      "Cobrar pagamentos em massa",
      "Extratos diários, semanais e mensais para qualquer período",
      "Contas de empresa conjuntas",
      "Um circuito fechado privado onde os fundos chegam automaticamente",
      "Movimentar dinheiro de e para a sua conta bancária",
      "Cobrar quotas de um número ilimitado de subscritores numa só conta",
    ],
  },
});

export const PARTNER = pick({
  en: {
    title: "Four ways to build with eMa",
    subtitle:
      "Whether you have a shop counter, a lending book or a national mandate — there's a way in.",
    tracks: [
      {
        title: "Become a Paymate",
        detail:
          "Turn your shop into a cash-in/cash-out point. Earn on every transaction you handle, and bring foot traffic through your door.",
        note: "No capital required.",
      },
      {
        title: "Governments & development agencies",
        detail:
          "Digitise SME support and disbursement, and eliminate ghost beneficiaries with verified KYC identity on every payment.",
      },
      {
        title: "Banks & financial institutions",
        detail:
          "Reach the unbanked without building branches. Offer loans, insurance and cover through PATELE to a market you can finally see.",
      },
      {
        title: "White-label partners",
        detail:
          "Launch the full platform under your own brand in weeks.",
        cta: "See white label",
      },
    ],
  },
  ar: {
    title: "أربع طرق للبناء مع eMa",
    subtitle:
      "سواء كان لديك متجر أو محفظة إقراض أو تفويض وطني — هناك طريق للدخول.",
    tracks: [
      {
        title: "كن وكيل Paymate",
        detail:
          "حوّل متجرك إلى نقطة إيداع وسحب نقدي. اربح من كل معاملة تنفّذها، واجذب زبائن إلى بابك.",
        note: "بلا رأس مال.",
      },
      {
        title: "الحكومات وجهات التنمية",
        detail:
          "رقمنة دعم المشاريع الصغيرة والمتوسطة وصرفه، والقضاء على المستفيدين الوهميين عبر هوية مُوثَّقة (KYC) في كل دفعة.",
      },
      {
        title: "البنوك والمؤسسات المالية",
        detail:
          "الوصول إلى غير المتعاملين مع البنوك دون بناء فروع. قدّم القروض والتأمين والتغطية عبر PATELE لسوق أصبح أخيرًا مرئيًا أمامك.",
      },
      {
        title: "شركاء العلامة البيضاء",
        detail: "أطلق المنصّة كاملة تحت علامتك خلال أسابيع.",
        cta: "استعرض العلامة البيضاء",
      },
    ],
  },
  fr: {
    title: "Quatre façons de bâtir avec eMa",
    subtitle:
      "Que vous ayez un comptoir de boutique, un portefeuille de crédits ou un mandat national — il existe une porte d'entrée.",
    tracks: [
      {
        title: "Devenir Paymate",
        detail:
          "Faites de votre boutique un point de dépôt et de retrait d'espèces. Gagnez sur chaque transaction traitée et attirez du passage.",
        note: "Aucun capital requis.",
      },
      {
        title: "États et agences de développement",
        detail:
          "Numérisez le soutien aux PME et les versements, et éliminez les bénéficiaires fictifs grâce à une identité KYC vérifiée sur chaque paiement.",
      },
      {
        title: "Banques et institutions financières",
        detail:
          "Touchez les non-bancarisés sans ouvrir d'agences. Proposez prêts, assurances et couvertures via PATELE à un marché enfin visible.",
      },
      {
        title: "Partenaires en marque blanche",
        detail: "Lancez la plateforme complète sous votre propre marque en quelques semaines.",
        cta: "Voir la marque blanche",
      },
    ],
  },
  pt: {
    title: "Quatro formas de construir com o eMa",
    subtitle:
      "Quer tenha um balcão de loja, uma carteira de crédito ou um mandato nacional — há uma porta de entrada.",
    tracks: [
      {
        title: "Tornar-se Paymate",
        detail:
          "Transforme a sua loja num ponto de depósito e levantamento. Ganhe em cada transação que processa e atraia movimento à sua porta.",
        note: "Sem capital necessário.",
      },
      {
        title: "Governos e agências de desenvolvimento",
        detail:
          "Digitalize o apoio às PME e os pagamentos, e elimine beneficiários fantasma com identidade KYC verificada em cada pagamento.",
      },
      {
        title: "Bancos e instituições financeiras",
        detail:
          "Chegue aos não bancarizados sem construir balcões. Ofereça crédito, seguros e coberturas através do PATELE a um mercado finalmente visível.",
      },
      {
        title: "Parceiros de marca branca",
        detail: "Lance a plataforma completa sob a sua própria marca em semanas.",
        cta: "Ver marca branca",
      },
    ],
  },
});

export const QUICK_STEPS = pick({
  en: [
    {
      title: "Discovery call",
      subtitle:
        "A quick introductory meeting to understand your needs and see whether we're a fit.",
    },
    {
      title: "Custom demo",
      subtitle:
        "We build and show exactly how our solution works for your specific case.",
    },
    {
      title: "Pilot programme",
      subtitle:
        "A small-scale test with real users, to prove it works before full launch.",
    },
    {
      title: "Full deployment",
      subtitle: "Complete rollout to all users, with full support and integration.",
    },
  ],
  ar: [
    {
      title: "مكالمة الاكتشاف",
      subtitle:
        "اجتماع تعريفي سريع لفهم احتياجاتك ومعرفة ما إذا كنا مناسبين لك.",
    },
    {
      title: "عرض توضيحي مخصص",
      subtitle: "نقوم ببناء وإظهار كيفية عمل حلنا بالضبط لحالتك المحددة.",
    },
    {
      title: "برنامج تجريبي",
      subtitle:
        "اختبار على نطاق صغير مع مستخدمين حقيقيين لإثبات أنه يعمل قبل الإطلاق الكامل.",
    },
    {
      title: "النشر الكامل",
      subtitle: "طرح كامل لجميع المستخدمين مع دعم كامل وتكامل.",
    },
  ],
  fr: [
    {
      title: "Appel de découverte",
      subtitle:
        "Une brève rencontre pour comprendre vos besoins et voir si nous sommes faits pour vous.",
    },
    {
      title: "Démo sur mesure",
      subtitle:
        "Nous construisons et montrons exactement comment notre solution répond à votre cas.",
    },
    {
      title: "Programme pilote",
      subtitle:
        "Un test à petite échelle avec de vrais utilisateurs, pour faire ses preuves avant le lancement.",
    },
    {
      title: "Déploiement complet",
      subtitle:
        "Mise en service auprès de tous les utilisateurs, avec assistance et intégration complètes.",
    },
  ],
  pt: [
    {
      title: "Chamada de diagnóstico",
      subtitle:
        "Uma breve reunião para perceber as suas necessidades e ver se somos a escolha certa.",
    },
    {
      title: "Demonstração à medida",
      subtitle:
        "Construímos e mostramos exatamente como a nossa solução funciona no seu caso.",
    },
    {
      title: "Programa-piloto",
      subtitle:
        "Um teste em pequena escala com utilizadores reais, para provar que funciona antes do lançamento.",
    },
    {
      title: "Implementação completa",
      subtitle:
        "Disponibilização a todos os utilizadores, com apoio e integração completos.",
    },
  ],
});

export const PARTNER_STEPS_TITLE = pick({
  en: "4 quick steps to becoming our partner",
  ar: "4 خطوات سريعة لتصبح شريكنا",
  fr: "4 étapes rapides pour devenir notre partenaire",
  pt: "4 passos rápidos para se tornar nosso parceiro",
});

export const CTA_BANNER = pick({
  en: {
    headline: ["Launch your", "branded platform"],
    subhead: "Build your digital platform",
    cta: "Request a white-label demo",
    items: [
      "Launch in weeks, not years",
      "Enterprise-grade foundation",
      "Complete brand control",
    ],
  },
  ar: {
    headline: ["ابدأ منصتك", "ذات العلامة التجارية"],
    subhead: "أنشئ منصتك الرقمية",
    cta: "اطلب عرضًا توضيحيًا للعلامة البيضاء",
    items: [
      "أطلق في أسابيع، وليس سنوات",
      "أساس على مستوى المؤسسات",
      "التحكم الكامل في العلامة التجارية",
    ],
  },
  fr: {
    headline: ["Lancez votre plateforme", "sous votre marque"],
    subhead: "Construisez votre plateforme numérique",
    cta: "Demander une démo en marque blanche",
    items: [
      "Lancez en semaines, pas en années",
      "Socle de niveau entreprise",
      "Contrôle total de la marque",
    ],
  },
  pt: {
    headline: ["Lance a sua plataforma", "com a sua marca"],
    subhead: "Construa a sua plataforma digital",
    cta: "Pedir uma demonstração de marca branca",
    items: [
      "Lance em semanas, não em anos",
      "Base de nível empresarial",
      "Controlo total da marca",
    ],
  },
});

export const MODULES_PAGE = pick({
  en: {
    title: "Fourteen tools. One account.",
    subtitle:
      "Every module works on its own and works better together. Pick the ones your business needs today — the rest are waiting on the same login.",
  },
  ar: {
    title: "أربع عشرة أداة. حساب واحد.",
    subtitle:
      "كل وحدة تعمل بمفردها، وتعمل بشكل أفضل مع غيرها. اختر ما يحتاجه عملك اليوم — والبقية بانتظارك على تسجيل الدخول نفسه.",
  },
  fr: {
    title: "Quatorze outils. Un seul compte.",
    subtitle:
      "Chaque module fonctionne seul et fonctionne mieux ensemble. Choisissez ceux dont votre entreprise a besoin aujourd'hui — les autres vous attendent sur le même identifiant.",
  },
  pt: {
    title: "Catorze ferramentas. Uma só conta.",
    subtitle:
      "Cada módulo funciona sozinho e funciona melhor em conjunto. Escolha os que o seu negócio precisa hoje — os restantes esperam por si no mesmo início de sessão.",
  },
});

export const HELP_PAGE = pick({
  en: {
    title: "Need help?",
    subtitle:
      "Tell us which module, what happened, and how to reach you. Attach anything that helps. Our support team replies by email.",
    fields: {
      fullName: "Full name",
      email: "Email address",
      phone: "Phone number",
      module: "Which module?",
      modulePlaceholder: "Select the module",
      title: "Subject",
      desc: "What happened?",
      documents: "Attachments (optional)",
    },
    submit: "Submit request",
    submitting: "Sending…",
    success:
      "Thank you — your request has been received. Our support team will reply by email.",
    error:
      "We couldn't send your request. Please try again, or email support@emalyami.com directly.",
    required: "This field is required",
    invalidEmail: "Please enter a valid email address",
  },
  ar: {
    title: "تحتاج مساعدة؟",
    subtitle:
      "أخبرنا بالوحدة المعنية، وبما حدث، وكيف نصل إليك. وأرفق ما يفيد. يردّ فريق الدعم عبر البريد الإلكتروني.",
    fields: {
      fullName: "الاسم الكامل",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف",
      module: "أي وحدة؟",
      modulePlaceholder: "اختر الوحدة",
      title: "الموضوع",
      desc: "ماذا حدث؟",
      documents: "المرفقات (اختياري)",
    },
    submit: "أرسل الطلب",
    submitting: "جارٍ الإرسال…",
    success:
      "شكرًا لك — تم استلام طلبك. وسيردّ فريق الدعم عبر البريد الإلكتروني.",
    error:
      "تعذّر إرسال طلبك. يرجى المحاولة مرة أخرى، أو المراسلة مباشرة على support@emalyami.com.",
    required: "هذا الحقل مطلوب",
    invalidEmail: "يرجى إدخال بريد إلكتروني صحيح",
  },
  fr: {
    title: "Besoin d'aide ?",
    subtitle:
      "Dites-nous quel module est concerné, ce qui s'est passé et comment vous joindre. Joignez tout élément utile. Notre équipe d'assistance répond par e-mail.",
    fields: {
      fullName: "Nom complet",
      email: "Adresse e-mail",
      phone: "Numéro de téléphone",
      module: "Quel module ?",
      modulePlaceholder: "Sélectionnez le module",
      title: "Objet",
      desc: "Que s'est-il passé ?",
      documents: "Pièces jointes (facultatif)",
    },
    submit: "Envoyer la demande",
    submitting: "Envoi en cours…",
    success:
      "Merci — votre demande a bien été reçue. Notre équipe d'assistance vous répondra par e-mail.",
    error:
      "Nous n'avons pas pu envoyer votre demande. Réessayez, ou écrivez directement à support@emalyami.com.",
    required: "Ce champ est obligatoire",
    invalidEmail: "Veuillez saisir une adresse e-mail valide",
  },
  pt: {
    title: "Precisa de ajuda?",
    subtitle:
      "Diga-nos qual o módulo, o que aconteceu e como o podemos contactar. Anexe o que for útil. A nossa equipa de apoio responde por e-mail.",
    fields: {
      fullName: "Nome completo",
      email: "Endereço de e-mail",
      phone: "Número de telemóvel",
      module: "Qual módulo?",
      modulePlaceholder: "Selecione o módulo",
      title: "Assunto",
      desc: "O que aconteceu?",
      documents: "Anexos (opcional)",
    },
    submit: "Enviar pedido",
    submitting: "A enviar…",
    success:
      "Obrigado — o seu pedido foi recebido. A nossa equipa de apoio responderá por e-mail.",
    error:
      "Não foi possível enviar o seu pedido. Tente novamente ou escreva diretamente para support@emalyami.com.",
    required: "Este campo é obrigatório",
    invalidEmail: "Introduza um endereço de e-mail válido",
  },
});

export const BEFORE_AFTER = pick({
  en: {
    beforeAlt: "before white label",
    beforeTitle: "Generic platform",
    beforeBody:
      "The standard eMa interface, carrying our branding and corporate design.",
    afterAlt: "after white label",
    afterTitle: "Your branded solution",
    afterBody:
      "The same powerful technology with your logo, your colours and a design tailored to your industry.",
  },
  ar: {
    beforeAlt: "قبل-العلامة-البيضاء",
    beforeTitle: "منصة عامة",
    beforeBody: "واجهة eMa القياسية مع علامتنا التجارية والتصميم المؤسسي",
    afterAlt: "بعد-العلامة-البيضاء",
    afterTitle: "حل علامتك التجارية",
    afterBody:
      "نفس التكنولوجيا القوية مع شعارك وألوانك وتصميم خاص بصناعتك",
  },
  fr: {
    beforeAlt: "avant la marque blanche",
    beforeTitle: "Plateforme générique",
    beforeBody:
      "L'interface eMa standard, portant notre marque et notre design institutionnel.",
    afterAlt: "après la marque blanche",
    afterTitle: "Votre solution sous votre marque",
    afterBody:
      "La même technologie puissante avec votre logo, vos couleurs et un design adapté à votre secteur.",
  },
  pt: {
    beforeAlt: "antes da marca branca",
    beforeTitle: "Plataforma genérica",
    beforeBody:
      "A interface eMa padrão, com a nossa marca e o nosso design institucional.",
    afterAlt: "depois da marca branca",
    afterTitle: "A sua solução de marca",
    afterBody:
      "A mesma tecnologia poderosa com o seu logótipo, as suas cores e um design à medida do seu setor.",
  },
});

export const PARTNER_CTA = pick({
  en: { title: "Start the partnership conversation today", cta: "Schedule a call" },
  ar: { title: "ابدأ مناقشة الشراكة اليوم", cta: "جدولة مكالمة" },
  fr: { title: "Lancez la discussion dès aujourd'hui", cta: "Planifier un appel" },
  pt: { title: "Comece hoje a conversa de parceria", cta: "Agendar uma chamada" },
});
