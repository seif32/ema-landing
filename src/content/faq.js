import { localize, pick } from "./locale";

/**
 * FAQ — the 17 questions ported from the legacy Angular site (which also
 * published them as JSON-LD FAQPage structured data), plus 6 new SME-focused
 * questions written for the repositioned site.
 *
 * `home: true` marks the ones surfaced on the home page; /faq shows all.
 */

export const FAQ_HEADER = pick({
  en: {
    title: "Questions, answered",
    subtitle: "The things people ask most before they start.",
    seeAll: "See all questions",
  },
  ar: {
    title: "أسئلة وأجوبة",
    subtitle: "أكثر ما يسأل عنه الناس قبل أن يبدأوا.",
    seeAll: "استعرض كل الأسئلة",
  },
  fr: {
    title: "Vos questions, nos réponses",
    subtitle: "Ce que l'on nous demande le plus souvent avant de commencer.",
    seeAll: "Voir toutes les questions",
  },
  pt: {
    title: "Perguntas respondidas",
    subtitle: "O que mais nos perguntam antes de começar.",
    seeAll: "Ver todas as perguntas",
  },
});

const faqs = [
  {
    id: "who-can-receive",
    home: true,
    en: {
      q: "Who can receive money from the eMalyami service?",
      a: "Anyone with a valid South African cellphone number may receive funds using the eMalyami service.",
    },
    ar: {
      q: "من يستطيع استلام الأموال عبر خدمة eMalyami؟",
      a: "يستطيع أي شخص لديه رقم هاتف جنوب أفريقي صالح استلام الأموال عبر خدمة eMalyami.",
    },
    fr: {
      q: "Qui peut recevoir de l'argent via le service eMalyami ?",
      a: "Toute personne disposant d'un numéro de téléphone sud-africain valide peut recevoir des fonds via le service eMalyami.",
    },
    pt: {
      q: "Quem pode receber dinheiro através do serviço eMalyami?",
      a: "Qualquer pessoa com um número de telemóvel sul-africano válido pode receber fundos através do serviço eMalyami.",
    },
  },
  {
    id: "how-do-i-know",
    en: {
      q: "How do I know that I have been sent money?",
      a: "You will receive an SMS as the result of a successful transaction by the sender. This SMS confirms the send transaction and contains information on how to activate the eMalyami. You must activate the eMalyami before being able to use the funds.",
    },
    ar: {
      q: "كيف أعرف أن أموالًا أُرسلت إليّ؟",
      a: "تصلك رسالة نصية عند نجاح المعاملة من المُرسِل. تؤكد هذه الرسالة عملية الإرسال وتتضمّن كيفية تفعيل حساب eMalyami. ويجب تفعيل الحساب قبل التمكّن من استخدام الأموال.",
    },
    fr: {
      q: "Comment savoir que de l'argent m'a été envoyé ?",
      a: "Vous recevez un SMS dès que l'expéditeur a effectué la transaction avec succès. Ce SMS confirme l'envoi et explique comment activer eMalyami. Vous devez activer eMalyami avant de pouvoir utiliser les fonds.",
    },
    pt: {
      q: "Como sei que me enviaram dinheiro?",
      a: "Recebe um SMS assim que o remetente concluir a transação com sucesso. Esse SMS confirma o envio e explica como ativar o eMalyami. Tem de ativar o eMalyami antes de poder usar os fundos.",
    },
  },
  {
    id: "how-to-activate",
    en: {
      q: "How do I activate the eMalyami?",
      a: "To activate eMalyami, you will be sent an SMS OTP that you have to register within a minute of receiving the SMS. Otherwise, you will be expected to re-register into eMalyami.",
    },
    ar: {
      q: "كيف أفعّل حساب eMalyami؟",
      a: "لتفعيل الحساب تصلك رسالة نصية تحتوي رمز OTP يجب تسجيله خلال دقيقة من استلام الرسالة. وإلا سيتعيّن عليك إعادة التسجيل في eMalyami.",
    },
    fr: {
      q: "Comment activer eMalyami ?",
      a: "Pour activer eMalyami, vous recevrez un code OTP par SMS que vous devez enregistrer dans la minute qui suit sa réception. Sinon, vous devrez recommencer votre inscription.",
    },
    pt: {
      q: "Como ativo o eMalyami?",
      a: "Para ativar o eMalyami, receberá um código OTP por SMS que deve registar no minuto seguinte à receção da mensagem. Caso contrário, terá de se registar novamente no eMalyami.",
    },
  },
  {
    id: "if-not-activated",
    en: {
      q: "What happens if I don't activate the eMalyami?",
      a: "You will be expected to re-register into eMalyami. The SMS OTP must be registered within a minute of receiving it.",
    },
    ar: {
      q: "ماذا يحدث إن لم أفعّل الحساب؟",
      a: "سيتعيّن عليك إعادة التسجيل في eMalyami. إذ يجب تسجيل رمز OTP خلال دقيقة من استلامه.",
    },
    fr: {
      q: "Que se passe-t-il si je n'active pas eMalyami ?",
      a: "Vous devrez recommencer votre inscription à eMalyami. Le code OTP reçu par SMS doit être enregistré dans la minute qui suit sa réception.",
    },
    pt: {
      q: "O que acontece se não ativar o eMalyami?",
      a: "Terá de se registar novamente no eMalyami. O código OTP enviado por SMS deve ser registado no minuto seguinte à sua receção.",
    },
  },
  {
    id: "funds-safe",
    home: true,
    en: {
      q: "Are the funds in the eMalyami safe?",
      a: "It is safe as long as you keep your PIN and cellphone number safe. For activation, you will receive a designated SMS OTP.",
    },
    ar: {
      q: "هل الأموال في eMalyami آمنة؟",
      a: "هي آمنة ما دمت تحافظ على سرّية رقمك السري ورقم هاتفك. وللتفعيل يصلك رمز OTP مخصّص عبر رسالة نصية.",
    },
    fr: {
      q: "Les fonds dans eMalyami sont-ils en sécurité ?",
      a: "Ils le sont tant que vous gardez votre code PIN et votre numéro de téléphone en sécurité. Pour l'activation, vous recevrez un code OTP dédié par SMS.",
    },
    pt: {
      q: "Os fundos no eMalyami estão seguros?",
      a: "Estão seguros desde que mantenha o seu PIN e o seu número de telemóvel em segurança. Para a ativação, receberá um código OTP dedicado por SMS.",
    },
  },
  {
    id: "change-number",
    en: {
      q: "What happens if I change my cellphone number?",
      a: "In case you changed your number, it is always best to instantly visit your Paymate and request a change of number. Provide your ID and proof of residence when you request the change. Or log into eMalyami and change your number through your settings. Your funds are safe until you complete the process.",
    },
    ar: {
      q: "ماذا يحدث إن غيّرت رقم هاتفي؟",
      a: "إن غيّرت رقمك، فالأفضل دائمًا زيارة وكيل Paymate فورًا وطلب تغيير الرقم. وقدّم هويتك وإثبات محل إقامتك عند تقديم الطلب. أو سجّل الدخول إلى eMalyami وغيّر رقمك من الإعدادات. وتبقى أموالك آمنة حتى تُكمل العملية.",
    },
    fr: {
      q: "Que se passe-t-il si je change de numéro de téléphone ?",
      a: "Si vous changez de numéro, le mieux est de vous rendre immédiatement chez votre Paymate et de demander un changement de numéro. Présentez votre pièce d'identité et un justificatif de domicile. Vous pouvez aussi vous connecter à eMalyami et modifier votre numéro dans vos paramètres. Vos fonds restent en sécurité jusqu'à la fin de la procédure.",
    },
    pt: {
      q: "O que acontece se mudar de número de telemóvel?",
      a: "Se mudar de número, o melhor é dirigir-se de imediato ao seu Paymate e pedir a alteração do número. Apresente o seu documento de identificação e um comprovativo de morada. Em alternativa, entre no eMalyami e altere o número nas definições. Os seus fundos permanecem seguros até concluir o processo.",
    },
  },
  {
    id: "lost-phone",
    home: true,
    en: {
      q: "What happens if my cellphone is lost or stolen?",
      a: "Visit your nearest Paymate with your ID and request to halt your account until you receive a new phone. Or simply call our customer service to assist you with keeping your funds safe.",
    },
    ar: {
      q: "ماذا يحدث إذا فُقد هاتفي أو سُرق؟",
      a: "توجّه إلى أقرب وكيل Paymate ومعك هويتك واطلب إيقاف حسابك حتى تحصل على هاتف جديد. أو اتصل بخدمة العملاء لمساعدتك في الحفاظ على أموالك آمنة.",
    },
    fr: {
      q: "Que se passe-t-il si mon téléphone est perdu ou volé ?",
      a: "Rendez-vous chez le Paymate le plus proche avec votre pièce d'identité et demandez la suspension de votre compte jusqu'à ce que vous receviez un nouveau téléphone. Ou appelez simplement notre service client, qui vous aidera à mettre vos fonds à l'abri.",
    },
    pt: {
      q: "O que acontece se perder o telemóvel ou mo roubarem?",
      a: "Dirija-se ao Paymate mais próximo com o seu documento de identificação e peça a suspensão da conta até ter um telemóvel novo. Ou ligue simplesmente para o nosso apoio ao cliente, que o ajudará a manter os fundos seguros.",
    },
  },
  {
    id: "documents-needed",
    en: {
      q: "What documents do I need to open an eMalyami?",
      a: "These documents are needed if you require a virtual credit card (VCC) or a personal loan: a South African ID or passport, and proof of residence. Other requirements apply depending on whether you want to use the Siba system or a virtual credit card.",
    },
    ar: {
      q: "ما المستندات التي أحتاجها لفتح حساب eMalyami؟",
      a: "تُطلب هذه المستندات إذا كنت تحتاج بطاقة ائتمان افتراضية أو قرضًا شخصيًا: هوية جنوب أفريقية أو جواز سفر، وإثبات محل الإقامة. وتنطبق متطلبات أخرى بحسب رغبتك في استخدام نظام Siba أو البطاقة الائتمانية الافتراضية.",
    },
    fr: {
      q: "Quels documents faut-il pour ouvrir un compte eMalyami ?",
      a: "Ces documents sont nécessaires si vous souhaitez une carte de crédit virtuelle (VCC) ou un prêt personnel : une pièce d'identité ou un passeport sud-africain, et un justificatif de domicile. D'autres conditions s'appliquent selon que vous souhaitez utiliser le système Siba ou une carte de crédit virtuelle.",
    },
    pt: {
      q: "Que documentos preciso para abrir uma conta eMalyami?",
      a: "Estes documentos são necessários se pretender um cartão de crédito virtual (VCC) ou um crédito pessoal: documento de identificação ou passaporte sul-africano e comprovativo de morada. Aplicam-se outros requisitos consoante pretenda usar o sistema Siba ou o cartão de crédito virtual.",
    },
  },
  {
    id: "get-cash",
    home: true,
    en: {
      q: "How do I get cash out of the eMalyami?",
      a: "You can get cash by withdrawing the funds at an approved Paymate, at selected ATMs with automated deposits, and at participating retailers.",
    },
    ar: {
      q: "كيف أسحب النقد من eMalyami؟",
      a: "يمكنك سحب أموالك من وكيل Paymate معتمد، أو من صرّافات آلية مختارة تدعم الإيداع الآلي، أو من متاجر التجزئة المشاركة.",
    },
    fr: {
      q: "Comment retirer des espèces depuis eMalyami ?",
      a: "Vous pouvez retirer vos fonds chez un Paymate agréé, à certains distributeurs automatiques équipés du dépôt automatisé, et chez les commerçants partenaires.",
    },
    pt: {
      q: "Como levanto dinheiro do eMalyami?",
      a: "Pode levantar os seus fundos num Paymate autorizado, em caixas automáticas selecionadas com depósito automatizado e em comerciantes aderentes.",
    },
  },
  {
    id: "do-i-pay",
    en: {
      q: "Do I have to pay to use the eMalyami service?",
      a: "You don't pay to receive; the sender is charged a fee for creating and funding an eMalyami. You may be charged when getting cash at an approved Paymate or selected ATM — in some cases this is free. eMalyami does not pay interest on positive balances. Your cellphone service provider may charge for certain services. If an eMalyami has been activated but is unused for six months, a monthly dormancy fee of R6.00 applies; you will receive an SMS before it begins. The fee continues until another transaction occurs or the balance reaches R0.00. An eMalyami with a zero balance cannot be accessed.",
    },
    ar: {
      q: "هل أدفع مقابل استخدام خدمة eMalyami؟",
      a: "لا تدفع عند الاستلام؛ إذ تُحتسب الرسوم على المُرسِل مقابل إنشاء الحساب وتمويله. وقد تُحتسب عليك رسوم عند سحب النقد من وكيل Paymate معتمد أو صرّاف آلي مختار — وفي بعض الحالات يكون ذلك مجانًا. ولا يدفع eMalyami فوائد على الأرصدة الدائنة. وقد يفرض مشغّل هاتفك رسومًا على بعض الخدمات. وإذا فُعّل الحساب ثم لم يُستخدم لمدة ستة أشهر، تُطبَّق رسوم ركود شهرية قدرها 6.00 راند، وتصلك رسالة نصية قبل بدء تطبيقها. وتستمر الرسوم حتى تتم معاملة أخرى أو يصل الرصيد إلى صفر. ولا يمكن الوصول إلى حساب رصيده صفر.",
    },
    fr: {
      q: "Dois-je payer pour utiliser le service eMalyami ?",
      a: "Vous ne payez rien pour recevoir ; c'est l'expéditeur qui est facturé pour la création et l'approvisionnement d'un eMalyami. Des frais peuvent s'appliquer lors d'un retrait chez un Paymate agréé ou à certains distributeurs — dans certains cas, c'est gratuit. eMalyami ne verse aucun intérêt sur les soldes créditeurs. Votre opérateur téléphonique peut facturer certains services. Si un eMalyami est activé mais reste inutilisé pendant six mois, des frais d'inactivité mensuels de 6,00 R s'appliquent ; vous recevrez un SMS avant leur mise en place. Ces frais courent jusqu'à la transaction suivante ou jusqu'à ce que le solde atteigne 0,00 R. Un eMalyami au solde nul n'est plus accessible.",
    },
    pt: {
      q: "Tenho de pagar para usar o serviço eMalyami?",
      a: "Não paga para receber; é ao remetente que são cobradas as taxas de criação e carregamento de um eMalyami. Poderão ser cobradas taxas ao levantar dinheiro num Paymate autorizado ou em caixas automáticas selecionadas — em alguns casos é gratuito. O eMalyami não paga juros sobre saldos credores. O seu operador de telecomunicações pode cobrar por certos serviços. Se um eMalyami for ativado mas ficar sem utilização durante seis meses, aplica-se uma taxa mensal de inatividade de 6,00 R; receberá um SMS antes de esta começar. A taxa mantém-se até ocorrer nova transação ou até o saldo chegar a 0,00 R. Um eMalyami com saldo zero deixa de ser acessível.",
    },
  },
  {
    id: "limits",
    home: true,
    en: {
      q: "Are there any limits to using the eMalyami service?",
      a: "Yes. The amount held in an eMalyami cannot exceed R5,000.00 at any time — so you cannot be sent more than R5,000.00 unless you spend some. Use of the funds is limited to R3,000.00 in a day, meaning you cannot spend or withdraw more than R3,000.00 per day.",
    },
    ar: {
      q: "هل هناك حدود لاستخدام خدمة eMalyami؟",
      a: "نعم. لا يمكن أن يتجاوز الرصيد في حساب eMalyami مبلغ 5,000.00 راند في أي وقت — أي لا يمكن أن يُرسل إليك أكثر من ذلك ما لم تُنفق جزءًا منه. واستخدام الأموال محدود بـ3,000.00 راند يوميًا، أي لا يمكنك إنفاق أو سحب أكثر من 3,000.00 راند في اليوم.",
    },
    fr: {
      q: "Y a-t-il des plafonds au service eMalyami ?",
      a: "Oui. Le montant détenu dans un eMalyami ne peut jamais dépasser 5 000,00 R — vous ne pouvez donc pas recevoir plus de 5 000,00 R sans en dépenser une partie. L'utilisation des fonds est limitée à 3 000,00 R par jour : vous ne pouvez ni dépenser ni retirer plus de 3 000,00 R par jour.",
    },
    pt: {
      q: "Existem limites na utilização do serviço eMalyami?",
      a: "Sim. O montante existente num eMalyami nunca pode exceder 5 000,00 R — ou seja, não lhe podem enviar mais de 5 000,00 R sem que gaste parte do saldo. A utilização dos fundos está limitada a 3 000,00 R por dia: não pode gastar nem levantar mais de 3 000,00 R por dia.",
    },
  },
  {
    id: "suspend",
    en: {
      q: "Can SOBEKIMF suspend the eMalyami service?",
      a: "Yes. Your eMalyami service can be suspended if it is used fraudulently, illegally or outside the specification of these guidelines; if the cellphone provider terminates the number from its network; if the service is compromised in any way; if required to do so by law; or if it is necessary to protect eMalyami, its customers, its systems or any recipient.",
    },
    ar: {
      q: "هل تستطيع SOBEKIMF تعليق خدمة eMalyami؟",
      a: "نعم. يمكن تعليق الخدمة إذا استُخدمت بشكل احتيالي أو غير قانوني أو خارج نطاق هذه الإرشادات؛ أو إذا ألغى مشغّل الهاتف الرقم من شبكته؛ أو إذا تعرّضت الخدمة للاختراق بأي شكل؛ أو إذا اقتضى القانون ذلك؛ أو إذا لزم لحماية eMalyami أو عملائها أو أنظمتها أو أي مستفيد.",
    },
    fr: {
      q: "SOBEKIMF peut-elle suspendre le service eMalyami ?",
      a: "Oui. Votre service eMalyami peut être suspendu s'il est utilisé de manière frauduleuse, illégale ou en dehors des présentes règles ; si l'opérateur téléphonique retire le numéro de son réseau ; si le service est compromis d'une quelconque manière ; si la loi l'exige ; ou si cela s'avère nécessaire pour protéger eMalyami, ses clients, ses systèmes ou un bénéficiaire.",
    },
    pt: {
      q: "A SOBEKIMF pode suspender o serviço eMalyami?",
      a: "Sim. O seu serviço eMalyami pode ser suspenso se for usado de forma fraudulenta, ilegal ou fora do âmbito destas regras; se o operador retirar o número da sua rede; se o serviço for comprometido de alguma forma; se a lei o exigir; ou se for necessário para proteger o eMalyami, os seus clientes, os seus sistemas ou qualquer beneficiário.",
    },
  },
  {
    id: "complaint",
    en: {
      q: "How can I make a complaint about the eMalyami service?",
      a: "All complaints must be sent to the eMalyami Disputes Division — see www.emalyami.com or contact 011 674 1745. You may also submit a Help Request on this site. If you believe the matter has not been resolved satisfactorily, you may refer the complaint to the NCR, or the Consumer or Banking Ombudsman.",
    },
    ar: {
      q: "كيف أقدّم شكوى بخصوص خدمة eMalyami؟",
      a: "تُرسل جميع الشكاوى إلى قسم المنازعات في eMalyami — راجع www.emalyami.com أو اتصل على 011 674 1745. ويمكنك أيضًا تقديم طلب مساعدة من هذا الموقع. وإذا رأيت أن الأمر لم يُحلّ بشكل مُرضٍ، يمكنك إحالة الشكوى إلى NCR أو إلى أمين المظالم للمستهلك أو المصارف.",
    },
    fr: {
      q: "Comment déposer une réclamation concernant le service eMalyami ?",
      a: "Toutes les réclamations doivent être adressées à la division des litiges d'eMalyami — voir www.emalyami.com ou appeler le 011 674 1745. Vous pouvez également envoyer une demande d'assistance depuis ce site. Si vous estimez que le litige n'a pas été réglé de façon satisfaisante, vous pouvez saisir le NCR, ou le médiateur de la consommation ou bancaire.",
    },
    pt: {
      q: "Como apresento uma reclamação sobre o serviço eMalyami?",
      a: "Todas as reclamações devem ser enviadas à Divisão de Litígios do eMalyami — consulte www.emalyami.com ou contacte o 011 674 1745. Pode também enviar um pedido de apoio a partir deste site. Se considerar que o assunto não foi resolvido de forma satisfatória, pode encaminhar a reclamação para o NCR ou para o Provedor do Consumidor ou da Banca.",
    },
  },
  {
    id: "personal-info",
    en: {
      q: "What does SOBEKIMF do with my personal information?",
      a: "eMalyami treats personal information as confidential and takes all reasonable steps to protect it. It is processed only where: the data subject has consented; the law requires it; it is needed to detect, prevent and report theft, fraud, money laundering and other crimes; it is in the public interest; eMalyami's interests require disclosure, such as a default or breach of agreement; or internal marketing and product development require it to process payment instructions. Some information may be disclosed to specific third parties, who are themselves obliged to keep it secure and confidential.",
    },
    ar: {
      q: "ماذا تفعل SOBEKIMF ببياناتي الشخصية؟",
      a: "يتعامل eMalyami مع البيانات الشخصية بسرّية ويتخذ كل الخطوات المعقولة لحمايتها. ولا تُعالَج إلا في الحالات التالية: موافقة صاحب البيانات؛ أو اقتضاء القانون؛ أو الحاجة لكشف الاحتيال والسرقة وغسل الأموال والجرائم الأخرى ومنعها والإبلاغ عنها؛ أو المصلحة العامة؛ أو اقتضاء مصالح eMalyami الإفصاح، كحالات التعثّر أو الإخلال بالاتفاق؛ أو حاجة التسويق الداخلي وتطوير المنتجات إليها لتنفيذ تعليمات الدفع. وقد يُفصح عن بعض البيانات لأطراف ثالثة محددة، تلتزم هي أيضًا بحفظها بشكل آمن وسرّي.",
    },
    fr: {
      q: "Que fait SOBEKIMF de mes données personnelles ?",
      a: "eMalyami traite les données personnelles de manière confidentielle et prend toutes les mesures raisonnables pour les protéger. Elles ne sont traitées que lorsque : la personne concernée y a consenti ; la loi l'exige ; elles sont nécessaires pour détecter, prévenir et signaler vol, fraude, blanchiment et autres délits ; l'intérêt public le justifie ; les intérêts d'eMalyami imposent une divulgation, par exemple en cas de défaut ou de manquement au contrat ; ou le marketing interne et le développement produit en ont besoin pour exécuter les instructions de paiement. Certaines informations peuvent être communiquées à des tiers précis, eux-mêmes tenus de les garder sécurisées et confidentielles.",
    },
    pt: {
      q: "O que faz a SOBEKIMF com os meus dados pessoais?",
      a: "O eMalyami trata os dados pessoais como confidenciais e toma todas as medidas razoáveis para os proteger. Só são tratados quando: o titular deu consentimento; a lei o exige; são necessários para detetar, prevenir e comunicar furto, fraude, branqueamento de capitais e outros crimes; existe interesse público; os interesses do eMalyami exigem a divulgação, por exemplo em caso de incumprimento do contrato; ou o marketing interno e o desenvolvimento de produto deles necessitam para executar instruções de pagamento. Alguma informação pode ser divulgada a terceiros específicos, também eles obrigados a mantê-la segura e confidencial.",
    },
  },
  {
    id: "geo-payments",
    en: {
      q: "What are eMalyami GEO PAYMENTS?",
      a: "For transfers or payments made to an eMalyami from an eMalyami transactional account using GEO payments, there is a cost. The pricing applied depends on the pricing option selected by the sender. See the pricing guide on www.emalyami.com for fees and eMalyami services.",
    },
    ar: {
      q: "ما هي مدفوعات GEO من eMalyami؟",
      a: "بالنسبة للتحويلات أو المدفوعات التي تتم إلى حساب eMalyami من حساب معاملات eMalyami باستخدام مدفوعات GEO، هناك تكلفة. ويعتمد التسعير المُطبَّق على خيار التسعير الذي يختاره المُرسِل. راجع دليل الأسعار على www.emalyami.com لمعرفة الرسوم وخدمات eMalyami.",
    },
    fr: {
      q: "Que sont les GEO PAYMENTS d'eMalyami ?",
      a: "Pour les virements ou paiements effectués vers un eMalyami depuis un compte transactionnel eMalyami via les GEO payments, des frais s'appliquent. La tarification dépend de l'option choisie par l'expéditeur. Consultez le guide tarifaire sur www.emalyami.com pour les frais et les services eMalyami.",
    },
    pt: {
      q: "O que são os GEO PAYMENTS do eMalyami?",
      a: "Nas transferências ou pagamentos feitos para um eMalyami a partir de uma conta transacional eMalyami através de GEO payments, há um custo. O preço aplicado depende da opção escolhida pelo remetente. Consulte o guia de preços em www.emalyami.com para saber as taxas e os serviços eMalyami.",
    },
  },
  {
    id: "siba-how",
    home: true,
    en: {
      q: "How does the Siba system work?",
      a: "It originates from the practice whereby money was collected house to house by an individual who kept it and returned it to its owners after 30 days, with no interest changing hands. Our platform enables a group of at least 3 to collect money, with the system taking over the scheme's management. eMalyami collects a fee for administering it. Members can check who has defaulted on payments and chat with each other about their finances. A group can either save for a fixed period — 6 or 12 months, for example — or create a cycle payment whereby each month a specific amount is paid to each member. Contributions can be made through Paymates, electronic transfer, eKwena voucher or coins.",
    },
    ar: {
      q: "كيف يعمل نظام Siba؟",
      a: "ينحدر النظام من عادة جمع المال من منزل إلى منزل بواسطة شخص يحتفظ به ثم يعيده إلى أصحابه بعد 30 يومًا دون أي فوائد. وتتيح منصّتنا لمجموعة من 3 أشخاص على الأقل جمع المال، مع تولّي النظام إدارة الجمعية. ويحصّل eMalyami رسومًا مقابل إدارتها. ويستطيع الأعضاء معرفة من تعثّر في السداد والتحدّث فيما بينهم بشأن أمورهم المالية. ويمكن للمجموعة إما الادّخار لفترة محددة — ستة أو اثني عشر شهرًا مثلًا — أو إنشاء دورة دفع يُصرف فيها كل شهر مبلغ محدد لكل عضو. ويمكن تقديم المساهمات عبر وكلاء Paymate أو التحويل الإلكتروني أو قسيمة eKwena أو العملات المعدنية.",
    },
    fr: {
      q: "Comment fonctionne le système Siba ?",
      a: "Il trouve son origine dans la pratique où une personne collectait l'argent de maison en maison, le conservait, puis le restituait à ses propriétaires au bout de 30 jours, sans aucun intérêt. Notre plateforme permet à un groupe d'au moins 3 personnes de collecter de l'argent, la gestion du système étant prise en charge par la plateforme. eMalyami perçoit des frais pour cette administration. Les membres peuvent voir qui n'a pas payé et échanger entre eux sur leurs finances. Un groupe peut soit épargner sur une durée fixe — 6 ou 12 mois par exemple — soit créer un cycle de versements où, chaque mois, un montant déterminé est versé à un membre. Les contributions peuvent se faire via les Paymates, par virement électronique, par bon eKwena ou en pièces.",
    },
    pt: {
      q: "Como funciona o sistema Siba?",
      a: "Tem origem na prática em que uma pessoa recolhia dinheiro de casa em casa, o guardava e o devolvia aos donos ao fim de 30 dias, sem quaisquer juros. A nossa plataforma permite que um grupo de pelo menos 3 pessoas junte dinheiro, ficando a gestão do esquema a cargo do sistema. O eMalyami cobra uma taxa por essa administração. Os membros podem ver quem falhou pagamentos e conversar entre si sobre as suas finanças. O grupo pode poupar por um período fixo — 6 ou 12 meses, por exemplo — ou criar um ciclo de pagamentos em que, todos os meses, é pago um valor determinado a cada membro. As contribuições podem ser feitas através de Paymates, transferência eletrónica, voucher eKwena ou moedas.",
    },
  },
  {
    id: "siba-requirements",
    en: {
      q: "What are the requirements for having a Siba group?",
      a: "You must have been using an eMalyami for a period of 30 days, have conducted your eMalyami account in an excellent manner, and each member of the group should be willing to guarantee the others in case of any defaults.",
    },
    ar: {
      q: "ما متطلبات إنشاء مجموعة Siba؟",
      a: "يجب أن تكون قد استخدمت حساب eMalyami لمدة 30 يومًا، وأن تكون قد أدرت حسابك بشكل ممتاز، وأن يكون كل عضو في المجموعة مستعدًا لضمان الآخرين في حال حدوث أي تعثّر.",
    },
    fr: {
      q: "Quelles sont les conditions pour créer un groupe Siba ?",
      a: "Vous devez utiliser un eMalyami depuis 30 jours, avoir géré votre compte eMalyami de manière irréprochable, et chaque membre du groupe doit accepter de se porter garant des autres en cas de défaut.",
    },
    pt: {
      q: "Quais são os requisitos para ter um grupo Siba?",
      a: "Tem de usar um eMalyami há 30 dias, ter gerido a sua conta eMalyami de forma exemplar, e cada membro do grupo deve estar disposto a servir de garante dos restantes em caso de incumprimento.",
    },
  },

  // ── New, SME-focused ──────────────────────────────────────────────────────
  {
    id: "multiple-shops",
    home: true,
    en: {
      q: "Can I run more than one shop on eMaPOS?",
      a: "Yes. One owner account can create and manage as many shops as you need, each with its own stock, cashiers and reports.",
    },
    ar: {
      q: "هل يمكنني إدارة أكثر من متجر على eMaPOS؟",
      a: "نعم. يستطيع حساب المالك الواحد إنشاء وإدارة أي عدد تحتاجه من المتاجر، لكل منها مخزونه وكاشيراته وتقاريره.",
    },
    fr: {
      q: "Puis-je gérer plusieurs boutiques sur eMaPOS ?",
      a: "Oui. Un seul compte propriétaire peut créer et gérer autant de boutiques que nécessaire, chacune avec son propre stock, ses caissiers et ses rapports.",
    },
    pt: {
      q: "Posso gerir mais do que uma loja no eMaPOS?",
      a: "Sim. Uma única conta de proprietário pode criar e gerir tantas lojas quantas precisar, cada uma com o seu stock, operadores de caixa e relatórios.",
    },
  },
  {
    id: "cashier-access",
    en: {
      q: "Can my cashier see my personal money?",
      a: "No. Cashiers get their own POS-only account, log in with a username and an OTP sent to their own phone, and never touch your eMa account.",
    },
    ar: {
      q: "هل يستطيع الكاشير رؤية أموالي الشخصية؟",
      a: "لا. لكل كاشير حساب خاص بنقطة البيع فقط، يدخل به باسم مستخدم ورمز OTP يصل إلى هاتفه، ولا يصل أبدًا إلى حساب eMa الخاص بك.",
    },
    fr: {
      q: "Mon caissier peut-il voir mon argent personnel ?",
      a: "Non. Les caissiers disposent de leur propre compte limité au point de vente, se connectent avec un identifiant et un code OTP envoyé sur leur téléphone, et n'accèdent jamais à votre compte eMa.",
    },
    pt: {
      q: "O meu operador de caixa consegue ver o meu dinheiro pessoal?",
      a: "Não. Os operadores de caixa têm uma conta própria, limitada ao ponto de venda, entram com um nome de utilizador e um código OTP enviado para o telemóvel deles, e nunca acedem à sua conta eMa.",
    },
  },
  {
    id: "card-machine",
    home: true,
    en: {
      q: "Do I need a card machine?",
      a: "No. eMaPOS runs on the Android phone you already have. There's no terminal to buy, no monthly rental and no contract.",
    },
    ar: {
      q: "هل أحتاج جهاز دفع بالبطاقة؟",
      a: "لا. يعمل eMaPOS على هاتف الأندرويد الذي تملكه بالفعل. لا جهاز تشتريه، ولا إيجار شهري، ولا عقد.",
    },
    fr: {
      q: "Ai-je besoin d'un terminal de paiement ?",
      a: "Non. eMaPOS fonctionne sur le téléphone Android que vous possédez déjà. Aucun terminal à acheter, aucun loyer mensuel, aucun engagement.",
    },
    pt: {
      q: "Preciso de um terminal de pagamento?",
      a: "Não. O eMaPOS funciona no telemóvel Android que já tem. Não há terminal para comprar, nem renda mensal, nem contrato.",
    },
  },
  {
    id: "cash-customers",
    en: {
      q: "What if my customers only pay cash?",
      a: "Any Paymate converts their cash into your digital balance, and back again when you need notes. That's what the Paymate network is for.",
    },
    ar: {
      q: "ماذا لو كان عملائي يدفعون نقدًا فقط؟",
      a: "أي وكيل Paymate يحوّل نقدهم إلى رصيدك الرقمي، ويعيده نقدًا عندما تحتاج أوراقًا نقدية. وهذا هو الغرض من شبكة Paymate.",
    },
    fr: {
      q: "Et si mes clients ne paient qu'en espèces ?",
      a: "N'importe quel Paymate convertit leurs espèces en solde numérique, et inversement lorsque vous avez besoin de billets. C'est précisément le rôle du réseau Paymate.",
    },
    pt: {
      q: "E se os meus clientes só pagarem em numerário?",
      a: "Qualquer Paymate converte o numerário deles no seu saldo digital, e devolve-o em notas quando precisar. É precisamente para isso que existe a rede Paymate.",
    },
  },
  {
    id: "funding-no-bank",
    en: {
      q: "Can I get funding without a bank record?",
      a: "That's what eMaFunding is for. Publish a campaign with your documents and funding goal, receive offers from backers, and sign the agreement in-app.",
    },
    ar: {
      q: "هل أحصل على تمويل بلا سجل بنكي؟",
      a: "هذا هو الغرض من eMaFunding. انشر حملتك مع مستنداتك وهدفك التمويلي، واستقبل عروض الداعمين، ووقّع الاتفاقية داخل التطبيق.",
    },
    fr: {
      q: "Puis-je obtenir un financement sans historique bancaire ?",
      a: "C'est précisément l'objet d'eMaFunding. Publiez une campagne avec vos documents et votre objectif de financement, recevez des offres de contributeurs, et signez l'accord directement dans l'application.",
    },
    pt: {
      q: "Consigo financiamento sem histórico bancário?",
      a: "É exatamente para isso que serve o eMaFunding. Publique uma campanha com os seus documentos e o objetivo de financiamento, receba propostas de apoiantes e assine o acordo dentro da aplicação.",
    },
  },
  {
    id: "one-balance",
    home: true,
    en: {
      q: "Do all the modules share one balance?",
      a: "Yes — that's the point. Every module settles into the same wallet, on the same phone number, under the same KYC. A sale in eMaPOS, a payout from eMaServe and a contribution to your SIBA all land in one place, so there is nothing to reconcile.",
    },
    ar: {
      q: "هل تتشارك كل الوحدات رصيدًا واحدًا؟",
      a: "نعم — وهذا هو جوهر الفكرة. كل وحدة تستقرّ في المحفظة نفسها، على رقم الهاتف نفسه، تحت التحقّق نفسه. فعملية بيع في eMaPOS، ومستحق من eMaServe، ومساهمة في جمعيتك، كلها تصل إلى مكان واحد، فلا يبقى شيء لتسويته.",
    },
    fr: {
      q: "Tous les modules partagent-ils un même solde ?",
      a: "Oui — c'est tout l'intérêt. Chaque module se règle sur le même portefeuille, sur le même numéro de téléphone, sous la même vérification KYC. Une vente dans eMaPOS, un versement d'eMaServe et une contribution à votre SIBA arrivent au même endroit : il n'y a plus rien à rapprocher.",
    },
    pt: {
      q: "Todos os módulos partilham um único saldo?",
      a: "Sim — é esse o objetivo. Cada módulo liquida na mesma carteira, no mesmo número de telemóvel, sob a mesma verificação KYC. Uma venda no eMaPOS, um pagamento do eMaServe e uma contribuição para o seu SIBA chegam todos ao mesmo sítio, pelo que não há nada para reconciliar.",
    },
  },
];

export const FAQS = faqs.map(localize);

export const HOME_FAQS = FAQS.filter((f) => f.home);

export default FAQS;
