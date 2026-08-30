import { pick } from "./locale";

/**
 * Interface strings for the chatbot and the news page.
 *
 * These lived as hardcoded Arabic inside their components, so they leaked
 * untranslated into the English, French and Portuguese builds.
 */

export const CHATBOT = pick({
  en: {
    title: "eMa Assistant",
    clear: "Clear chat",
    minimize: "Minimise",
    open: "Open chat",
    close: "Close chat",
    greeting: "Hi! I'm your eMa assistant.",
    greetingSub: "How can I help you today?",
    thinking: "Thinking…",
    placeholder: "Ask me anything about eMa…",
  },
  ar: {
    title: "مساعد eMa",
    clear: "مسح الدردشة",
    minimize: "تصغير",
    open: "فتح الدردشة",
    close: "إغلاق الدردشة",
    greeting: "مرحباً! أنا مساعد eMa الخاص بك.",
    greetingSub: "كيف يمكنني مساعدتك اليوم؟",
    thinking: "جاري التفكير...",
    placeholder: "اسألني أي شيء عن eMa...",
  },
  fr: {
    title: "Assistant eMa",
    clear: "Effacer la conversation",
    minimize: "Réduire",
    open: "Ouvrir la conversation",
    close: "Fermer la conversation",
    greeting: "Bonjour ! Je suis votre assistant eMa.",
    greetingSub: "Comment puis-je vous aider aujourd'hui ?",
    thinking: "Réflexion en cours…",
    placeholder: "Posez-moi une question sur eMa…",
  },
  pt: {
    title: "Assistente eMa",
    clear: "Limpar conversa",
    minimize: "Minimizar",
    open: "Abrir conversa",
    close: "Fechar conversa",
    greeting: "Olá! Sou o seu assistente eMa.",
    greetingSub: "Como posso ajudar hoje?",
    thinking: "A pensar…",
    placeholder: "Pergunte-me o que quiser sobre o eMa…",
  },
});

export const NEWS = pick({
  en: {
    loading: "Loading the latest posts…",
    errorTitle: "Couldn't load the posts",
    errorBody: "Something went wrong while fetching the news.",
    retry: "Try again",
    title: "Latest news and updates",
    subtitle:
      "Keep up with our latest posts, insights and community discussions.",
    emptyTitle: "No posts yet",
    emptyBody: "Check back later for new content.",
    namePlaceholder: "Your name",
    commentPlaceholder: "Write your comment…",
    post: "Post",
    loadingComments: "Loading comments…",
    comments: "Comments",
    noComments: "No comments yet. Be the first to comment!",
  },
  ar: {
    loading: "جاري تحميل أحدث المنشورات...",
    errorTitle: "تعذر تحميل المنشورات",
    errorBody: "حدث خطأ أثناء جلب الأخبار.",
    retry: "حاول مرة أخرى",
    title: "آخر الأخبار والتحديثات",
    subtitle: "ابق على اطلاع بأحدث منشوراتنا ورؤانا ومناقشات المجتمع",
    emptyTitle: "لا توجد منشورات بعد",
    emptyBody: "تحقق مرة أخرى لاحقًا للحصول على محتوى جديد!",
    namePlaceholder: "اسمك",
    commentPlaceholder: "اكتب تعليقك...",
    post: "نشر",
    loadingComments: "جاري تحميل التعليقات...",
    comments: "التعليقات",
    noComments: "لا توجد تعليقات بعد. كن أول من يعلق!",
  },
  fr: {
    loading: "Chargement des derniers articles…",
    errorTitle: "Impossible de charger les articles",
    errorBody: "Une erreur est survenue lors de la récupération des actualités.",
    retry: "Réessayer",
    title: "Actualités et nouveautés",
    subtitle:
      "Suivez nos derniers articles, analyses et discussions de la communauté.",
    emptyTitle: "Aucun article pour le moment",
    emptyBody: "Revenez plus tard pour découvrir du nouveau contenu.",
    namePlaceholder: "Votre nom",
    commentPlaceholder: "Écrivez votre commentaire…",
    post: "Publier",
    loadingComments: "Chargement des commentaires…",
    comments: "Commentaires",
    noComments: "Aucun commentaire pour l'instant. Soyez le premier !",
  },
  pt: {
    loading: "A carregar as publicações mais recentes…",
    errorTitle: "Não foi possível carregar as publicações",
    errorBody: "Ocorreu um erro ao obter as notícias.",
    retry: "Tentar novamente",
    title: "Notícias e novidades",
    subtitle:
      "Acompanhe as nossas publicações, análises e discussões da comunidade.",
    emptyTitle: "Ainda não há publicações",
    emptyBody: "Volte mais tarde para ver novos conteúdos.",
    namePlaceholder: "O seu nome",
    commentPlaceholder: "Escreva o seu comentário…",
    post: "Publicar",
    loadingComments: "A carregar comentários…",
    comments: "Comentários",
    noComments: "Ainda não há comentários. Seja o primeiro!",
  },
});
