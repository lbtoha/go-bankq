import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";
import { titleFont } from "@/utils/fonts";
import Image from "next/image";
import React from "react";
import { BsFileText } from "react-icons/bs";
import { ImProfile } from "react-icons/im";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";
import { VscSend } from "react-icons/vsc";
import workCardImage from "@/public/images/work_step_card.png";
import workVectorImage from "@/public/images/work_step_vector.png";
import WorkStepCard from "./WorkStepCard";

export const WorkStep = () => {
  const cardData = [
    {
      id: 11001,
      iconName: "description",
      title: "Fill the from",
      bodyText: "There are several types of bank cards, including debit cards.",
    },
    {
      id: 11002,
      iconName: "contact_page",
      title: "Get Pre-qualified",
      bodyText: "There are several types of bank cards, including debit cards.",
    },
    {
      id: 11003,
      iconName: "send",
      title: "Send Documents",
      bodyText: "There are several types of bank cards, including debit cards.",
    },
    {
      id: 11004,
      iconName: "assignment_turned_in",
      title: "Get Accounts",
      bodyText: "There are several types of bank cards, including debit cards.",
    },
  ];
  return (
    <section className="work-step-section relative">
      <div className="section-gap horizontal-gap container">
        <div className="mb-10 text-center lg:mb-[60px]">
          <SectionHeading title="Our Work Step" />
        </div>
        <div className="grid items-center gap-6 md:grid-cols-2  xl:grid-cols-4 ">
          {cardData.map(({ id, iconName, title, bodyText }) => (
            <WorkStepCard
              key={id}
              iconName={iconName}
              title={title}
              bodyText={bodyText}
            />
          ))}
        </div>
      </div>
      <div className="hidden xl:block">
        <Image
          src={workCardImage}
          alt="card"
          className="absolute bottom-0 left-0"
        />
        <Image
          src={workVectorImage}
          alt="Vector"
          className="absolute right-[5%] top-[20%] animate-pulse"
        />
      </div>
    </section>
  );
};
