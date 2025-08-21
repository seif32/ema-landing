import SectionHeader from "@/components/shared/SectionHeader";
import PartnerCard from "./PartnerCard";
import { FaRegBuilding } from "react-icons/fa";
import { BriefcaseBusiness, Users, Wallet } from "lucide-react";

import EmployeesTable from "../../../assets/be-our-partner/employees-table.svg";
import FaceEmoji from "../../../assets/be-our-partner/face.svg";
import HandshakeEmoji from "../../../assets/be-our-partner/Handshake.svg";
import Underline from "../../../assets/who-are-we/needle-underline.svg";

function BeOurPartner() {
  return (
    <section className="flex flex-col items-center px-12 space-y-8 xl:px-32">
      <SectionHeader
        title={"Be Our Partner"}
        subtitle={"Transform Your Economy Through Partnership"}
      />
      <div className="flex flex-col xl:flex-row gap-9">
        <div className="flex flex-col flex-1 gap-2 sm:flex-row xl:gap-5 lg:gap-3 xl:flex-col ">
          <PartnerCard
            icon={Wallet}
            title={"For Financial Institutions"}
            description={
              "Access 5 million unbanked users in Africa through our eWALLET and PAYMATE modules"
            }
            keyFeature1={"Expand customer base instantly"}
            keyFeature2={"Digital-first banking solutions"}
          />
          <PartnerCard
            icon={Users}
            title={"For NGOs & Partners"}
            description={
              "Reach rural communities with eMaClinic telemedicine and PATELE agricultural tools"
            }
            keyFeature1={"Direct beneficiary access"}
            keyFeature2={"Impact measurement tools"}
          />
        </div>
        <div className="flex flex-col items-center justify-between flex-1 md:flex-row xl:flex-col ">
          <img
            src={EmployeesTable}
            alt="employees-table"
            className="sm:w-100 w-70"
          />
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-medium sm:text-6xl">
              Partner with{" "}
              <span className="relative">
                eMa
                <img
                  src={Underline}
                  alt="underline"
                  className="absolute bottom-0 right-0 "
                />
              </span>
            </h2>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <img src={HandshakeEmoji} alt="handshake-emoji" />
                <p className="text-sm sm:text-xl text-accent">
                  Digitize MSME support, eliminate ghost beneficiaries.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <img src={FaceEmoji} alt="face-emoji" />
                <p className="text-sm sm:text-xl text-accent">
                  Reach 50 million affected youth through our 12-module
                  ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-2 sm:flex-row xl:gap-5 lg:gap-3 xl:flex-col ">
          <PartnerCard
            icon={FaRegBuilding}
            title={"For Government Agencies"}
            description={
              "Reduce administrative overhead by 85%, eliminate subsidy leakages."
            }
            keyFeature1={"Automated compliance reporting"}
            keyFeature2={"Transparent audit trails"}
          />
          <PartnerCard
            icon={BriefcaseBusiness}
            title={"For Job Creations"}
            description={
              "Connect employment agencies with millions rural job seekers"
            }
            keyFeature1={"Rural Talent Access "}
            keyFeature2={"Automated Skills Matching"}
          />
        </div>
      </div>
    </section>
  );
}

export default BeOurPartner;
