import AnimatedPhone from "@/components/shared/AnimatedPhone";
import Underline from "../../../assets/who-are-we/needle-underline.svg";
import { Button } from "@/components/ui/button";

const steps = [
  {
    title: "Appel de Découverte",
    subtitle:
      "Réunion d'introduction rapide pour comprendre vos besoins et voir si nous sommes compatibles",
  },
  {
    title: "Démo Personnalisée",
    subtitle:
      "Nous construisons et vous montrons exactement comment notre solution fonctionne pour votre situation spécifique",
  },
  {
    title: "Programme Pilote",
    subtitle:
      "Test à petite échelle avec de vrais utilisateurs pour prouver que ça marche avant le lancement complet",
  },
  {
    title: "Déploiement Complet",
    subtitle:
      "Déploiement complet pour tous vos utilisateurs avec support complet et intégration",
  },
];

function QuickSteps() {
  return (
    <>
      <section className="overflow-x-hidden flex items-center justify-between pl-2 pr-12 2xl:justify-center 2xl:gap-40 xl:px-32">
        <div className="relative w-32 md:w-50 sm:-left-6 -left-2 lg:left-0 lg:w-80">
          <AnimatedPhone />
        </div>
        <div className="flex flex-col gap-4 lg:gap-8 w-fit">
          <h2 className="text-2xl leading-5 sm:leading-none sm:text-4xl md:text-5xl lg:tracking-normal lg:text-6xl">
            4 Étapes Rapides pour devenir notre Partenaire
          </h2>

          <div className="border"></div>

          <div className="space-y-2 lg:space-y-4">
            {steps.map((step, index) => {
              return (
                <div
                  key={index}
                  className="relative flex gap-4 sm:gap-6 lg:gap-8"
                >
                  <div className="flex flex-col items-center">
                    <div className="z-10 flex-shrink-0 w-2 h-2 rounded-full sm:w-4 sm:h-4 lg:w-4 lg:h-4 bg-accent"></div>
                    <div className="w-0.5 bg-accent mt-2 sm:mt-3 lg:mt-4 h-4 sm:h-5 lg:h-8 flex-shrink-0"></div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-2 sm:pb-3 lg:pb-4">
                    <h3 className="mb-1 font-bold leading-none sm:text-2xl lg:text-4xl text-accent sm:mb-2 ">
                      {step.title}
                    </h3>
                    <p className="text-xs leading-tight sm:text-lg lg:font-semibold lg:text-2xl sm:leading-tight lg:leading-relaxed">
                      {step.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="flex gap-2 flex-col items-center bg-gradient-to-t to-[#994C00] from-[#D66B00] py-14 sm:py-16 md:py-18 lg:py-22">
        <p className="text-2xl text-white sm:text-3xl md:text-4xl lg:text-5xl">
          Commencez la Discussion de Partenariat Aujourd'hui
        </p>
        <Button
          className={
            " bg-black rounded-full text-white md:text-xl sm:text-lg text-md lg:text-2xl md:py-5 sm:py-4 py-2 lg:py-7 lg:px-18 md:px-16 sm:px-14 px-12"
          }
        >
          Planifier un Appel
        </Button>
      </section>
    </>
  );
}

export default QuickSteps;
