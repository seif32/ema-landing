import { pick } from "./locale";

/**
 * Security & trust. Six controls documented in the eMa feature deck.
 * The site previously said nothing at all about security, while asking SMEs
 * to move their revenue onto the platform.
 */

export const SECURITY = pick({
  en: {
    title: "Built to be trusted with your revenue",
    subtitle: "Six controls that protect every account, every transaction, every day.",
    items: [
      {
        title: "KYC verification",
        detail: "Every account is identity-verified before it can transact.",
        icon: "id",
      },
      {
        title: "OTP on every sensitive action",
        detail:
          "A one-time code to your verified phone, valid for a short window.",
        icon: "key",
      },
      {
        title: "Phone-number binding",
        detail: "Only a verified cellphone can access the wallet tied to it.",
        icon: "phone",
      },
      {
        title: "Geo-tagging",
        detail:
          "Transactions carry location data, making anomalies visible.",
        icon: "pin",
      },
      {
        title: "Auto-logout after 2 minutes",
        detail:
          "An idle session closes itself, so a put-down phone isn't an open till.",
        icon: "timer",
      },
      {
        title: "Three-strike lockout",
        detail:
          "Three wrong passwords disables the account until it's properly recovered.",
        icon: "lock",
      },
    ],
    footnote:
      "Lost your phone? Visit your nearest Paymate with your ID and ask to freeze the account — or call customer service. Your funds stay safe.",
  },
  ar: {
    title: "مبنيّ ليكون جديرًا بثقتك بإيراداتك",
    subtitle: "ستة ضوابط تحمي كل حساب وكل معاملة كل يوم.",
    items: [
      {
        title: "التحقّق من الهوية (KYC)",
        detail: "كل حساب يُوثَّق قبل أن يتمكّن من إجراء أي معاملة.",
        icon: "id",
      },
      {
        title: "رمز OTP لكل إجراء حسّاس",
        detail: "رمز لمرة واحدة يصل إلى هاتفك المُوثَّق وصالح لفترة قصيرة.",
        icon: "key",
      },
      {
        title: "الربط برقم الهاتف",
        detail: "لا يصل إلى المحفظة إلا الهاتف المُوثَّق المرتبط بها.",
        icon: "phone",
      },
      {
        title: "تحديد الموقع الجغرافي",
        detail: "كل معاملة تحمل بيانات موقعها، فتظهر الحالات الشاذّة بوضوح.",
        icon: "pin",
      },
      {
        title: "تسجيل خروج تلقائي بعد دقيقتين",
        detail:
          "الجلسة الخاملة تُغلق نفسها، فلا يتحوّل هاتف مُهمَل إلى صندوق مفتوح.",
        icon: "timer",
      },
      {
        title: "الإيقاف بعد ثلاث محاولات",
        detail:
          "ثلاث كلمات مرور خاطئة تُعطّل الحساب حتى تتم استعادته بالطريقة الصحيحة.",
        icon: "lock",
      },
    ],
    footnote:
      "فقدت هاتفك؟ توجّه إلى أقرب وكيل Paymate ومعك هويتك واطلب تجميد الحساب — أو اتصل بخدمة العملاء. أموالك تبقى في أمان.",
  },
  fr: {
    title: "Conçu pour mériter la confiance de vos recettes",
    subtitle:
      "Six protections qui sécurisent chaque compte, chaque transaction, chaque jour.",
    items: [
      {
        title: "Vérification KYC",
        detail:
          "L'identité de chaque compte est vérifiée avant toute transaction.",
        icon: "id",
      },
      {
        title: "Code OTP à chaque action sensible",
        detail:
          "Un code à usage unique envoyé à votre téléphone vérifié, valable quelques instants.",
        icon: "key",
      },
      {
        title: "Liaison au numéro de téléphone",
        detail:
          "Seul le téléphone vérifié associé au portefeuille peut y accéder.",
        icon: "phone",
      },
      {
        title: "Géolocalisation",
        detail:
          "Chaque transaction porte sa position, ce qui rend les anomalies visibles.",
        icon: "pin",
      },
      {
        title: "Déconnexion après 2 minutes",
        detail:
          "Une session inactive se ferme d'elle-même : un téléphone posé n'est pas une caisse ouverte.",
        icon: "timer",
      },
      {
        title: "Blocage après trois tentatives",
        detail:
          "Trois mots de passe erronés désactivent le compte jusqu'à sa récupération en bonne et due forme.",
        icon: "lock",
      },
    ],
    footnote:
      "Téléphone perdu ? Rendez-vous chez le Paymate le plus proche avec votre pièce d'identité et demandez le gel du compte — ou appelez le service client. Vos fonds restent en sécurité.",
  },
  pt: {
    title: "Feito para merecer a confiança das suas receitas",
    subtitle:
      "Seis proteções que defendem cada conta, cada transação, todos os dias.",
    items: [
      {
        title: "Verificação KYC",
        detail:
          "A identidade de cada conta é verificada antes de poder transacionar.",
        icon: "id",
      },
      {
        title: "Código OTP em cada ação sensível",
        detail:
          "Um código de uso único enviado para o seu telemóvel verificado, válido por poucos instantes.",
        icon: "key",
      },
      {
        title: "Ligação ao número de telemóvel",
        detail:
          "Só o telemóvel verificado associado à carteira lhe pode aceder.",
        icon: "phone",
      },
      {
        title: "Geolocalização",
        detail:
          "Cada transação regista a sua localização, tornando as anomalias visíveis.",
        icon: "pin",
      },
      {
        title: "Encerramento automático após 2 minutos",
        detail:
          "Uma sessão inativa fecha-se sozinha: um telemóvel pousado não é uma caixa aberta.",
        icon: "timer",
      },
      {
        title: "Bloqueio à terceira tentativa",
        detail:
          "Três palavras-passe erradas desativam a conta até ser devidamente recuperada.",
        icon: "lock",
      },
    ],
    footnote:
      "Perdeu o telemóvel? Dirija-se ao Paymate mais próximo com o seu documento de identificação e peça o congelamento da conta — ou ligue para o apoio ao cliente. Os seus fundos ficam seguros.",
  },
});

export default SECURITY;
