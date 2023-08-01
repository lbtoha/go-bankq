import { SectionText } from "@/components/shared/SectionText";
import React from "react";

type Props = {
  iconName: String;
  title: String;
  bodyText: String;
};

const WorkStepCard = ({ iconName, title, bodyText }: Props) => {
  return (
    <div className="work-card rounded-xl bg-primary-color-2 bg-opacity-10 px-6 py-10 md:px-[32px] md:py-[60px] xl:even:mt-[80px]">
      <span className="material-symbols-outlined mb-5 w-max bg-primary-color-2 bg-opacity-20 p-5 text-4xl  text-primary-color-1 md:p-[25px] md:text-[50px]">
        {iconName}
      </span>
      <h3
        className={`text-neutral-color-neutral-700 mb-5 font-montserrat text-[24px] font-semibold leading-[130%]`}
      >
        {title}
      </h3>
      <SectionText text={`${bodyText}`} />
    </div>
  );
};

export default WorkStepCard;
