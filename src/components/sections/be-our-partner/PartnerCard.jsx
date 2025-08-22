import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

function PartnerCard({
  icon: Icon,
  title,
  description,
  keyFeature1,
  keyFeature2,
}) {
  return (
    <Card
      className={"flex gap-2  md:justify-start flex-1  md:min-h-70 md:gap-6"}
    >
      <CardHeader>
        <CardTitle className={"flex items-center gap-2"}>
          <Icon className=" sm:size-10" />
          <h3 className="leading-none text-md sm:text-2xl">{title}</h3>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-[10px] sm:text-xs leading-snug md:text-lg tracking-wider sm:tracking-normal">
          {description}
        </p>
      </CardContent>
      <CardFooter className={"flex flex-col items-start gap-0.5 sm:gap-2 "}>
        <div className="flex gap-1.5   md:gap-4">
          <CheckCircle className="text-green-500 size-4 sm:size-6" />
          <p className="text-[10px] font-semibold text-accent md:text-base">
            {keyFeature1}
          </p>
        </div>
        <div className="flex gap-1.5 md:gap-4">
          <CheckCircle className="text-green-500 size-4 sm:size-6" />
          <p className="text-[10px] text-xs font-semibold text-accent md:text-base">
            {keyFeature2}
          </p>
        </div>
      </CardFooter>
    </Card>
  );
}

export default PartnerCard;
