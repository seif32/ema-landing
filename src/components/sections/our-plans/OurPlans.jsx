import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import CheckMark from "../../../assets/white-label-solutions/check-mark.svg";
import Handshake from "../../../assets/white-label-solutions/handshake.svg";
import GemStone from "../../../assets/our-plans/gem-stone.svg";
import Star from "../../../assets/our-plans/star.svg";
import { Button } from "@/components/ui/button";

// PLANS DATA CONFIG
// PLANS DATA CONFIG
const plansCard = [
  {
    badgeTitle: "DIÁRIO",
    badgeStyle: "bg-black/10 border border-black text-black",
    planTitle: (
      <>
        4%<span className="text-2xl font-normal"> Taxa</span>
      </>
    ),
    planSubtitle: "Serviços Essenciais",
    planDescription:
      "Banco simples e diário acessível. Gerencie todas as suas transações pessoais com facilidade.",
    emoji: CheckMark,
    features: ["Enviar Dinheiro", "Saques em Dinheiro", "Negócios P2P"],
    ctaBtn: "Escolher Padrão",
    ctaStyle: "bg-black text-white",
  },
  {
    badgeTitle: "SEJA PARCEIRO",
    badgeStyle: "bg-blue-100 border border-blue-600 text-blue-600",
    planTitle: (
      <span className="flex items-center gap-2 text-3xl">
        Soluções White Label
      </span>
    ),
    planSubtitle: "Programa de Parceria",
    planDescription:
      "Potencialize seu negócio com nossa plataforma fintech comprovada — personalize nossa tecnologia sob sua marca.",
    emoji: Handshake,

    features: [
      "Personalização Completa da Marca",
      "Pronto para Implementação",
      "Acesso Completo à API",
      "Análises em Tempo Real",
      "Suporte Dedicado",
    ],
    ctaBtn: "Entre em Contato",
    ctaStyle: "bg-blue-700 text-white",
  },
  {
    badgeTitle: "EMPRESARIAL",
    badgeStyle: "bg-amber-100 border border-amber-600 text-amber-700",
    planTitle: (
      <>
        5%<span className="text-2xl font-normal"> Taxa</span>
      </>
    ),
    planSubtitle: "Soluções Empresariais",
    planDescription:
      "Ecossistema empresarial completo projetado para crescimento — do ponto de venda às soluções de financiamento.",
    emoji: GemStone,
    features: [
      "eMaSERVE",
      "eMaMALL",
      "eMaPOS",
      "eMaFunding",
      "eMaSave",
      "eMaTuna",
    ],
    note: (
      <div className="mt-2 text-xs font-medium text-gray-500">
        Níveis Especiais: <br />
        <span className="font-bold">Paymates</span> • 1,5-2% /{" "}
        <span className="font-bold">SIBA</span> • 15%
      </div>
    ),
    ctaBtn: "Escolher Premium",
    ctaStyle: "bg-amber-500 text-white",
  },
];

function OurPlans() {
  return (
    <section
      id="pricing"
      className="grid grid-cols-1 gap-10 px-4 py-16 mx-auto sm:px-8 md:px-16 xl:px-32 md:grid-cols-2 lg:grid-cols-3 max-w-7xl overflow-x-hidden"
    >
      {plansCard.map((plan, idx) => (
        <Card
          key={plan.planTitle || idx}
          className="relative flex flex-col justify-between h-full pt-12 shadow-lg"
        >
          {/* Badge */}
          {plan.badgeTitle && (
            <span
              className={`absolute top-4 right-4 px-3 py-0.5 rounded-full uppercase tracking-wider text-xs font-semibold z-10 ${plan.badgeStyle}`}
            >
              {plan.badgeTitle}
            </span>
          )}
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-5xl font-bold">
              {plan.planTitle}
            </CardTitle>
            <CardDescription>
              <h3 className="text-xl font-bold">{plan.planSubtitle}</h3>
              <p className="mt-1 text-gray-600">{plan.planDescription}</p>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2 mt-1">
            {plan.features.map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <img src={plan.emoji} alt="" className="w-4 h-4" />
                <p className="text-base">{feature}</p>
              </div>
            ))}
            {plan.note}
          </CardContent>
          <CardFooter className="pt-6 mt-auto">
            <CardAction asChild>
              <Button
                className={`${plan.ctaStyle} w-full`}
                size="lg"
                onClick={() =>
                  window.open(
                    "https://play.google.com/store/apps/details?id=com.emalyami.mobile&hl=en",
                    "_blank"
                  )
                }
              >
                {plan.ctaBtn}
              </Button>
            </CardAction>
          </CardFooter>
        </Card>
      ))}
    </section>
  );
}

export default OurPlans;
