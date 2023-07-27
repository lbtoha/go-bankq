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

export const WorkStep = () => {
  return (
    <section className="work-step-section relative">
      <div className="section-gap horizontal-gap container">
        <div className="mb-10 text-center lg:mb-[60px]">
          <SectionHeading title="Our Work Step" />
        </div>
        <div className="grid items-center gap-6 md:grid-cols-2  xl:grid-cols-4 ">
          <div className="work-card rounded-xl bg-primary-color-2.1 px-6 py-10 md:px-[32px] md:py-[60px] xl:even:mt-[80px]">
            <div className="mb-5 w-max  bg-primary-color-2.2 p-5 md:mb-10 md:p-[25px] ">
              <BsFileText className="text-4xl text-primary-color-1 md:text-[50px]" />
            </div>
            <h3
              className={`my-5 font-montserrat text-[24px] font-semibold leading-[130%] text-[#494A4D]`}
            >
              Fill the from
            </h3>
            <SectionText text="There are several types of bank cards, including debit cards." />
          </div>
          <div className="work-card rounded-xl bg-primary-color-2.1 px-6 py-10 md:px-[32px] md:py-[60px] xl:even:mt-[80px]">
            <div className="mb-5 w-max  bg-primary-color-2.2 p-5 md:mb-10 md:p-[25px] ">
              <BsFileText className="text-4xl text-primary-color-1 md:text-[50px]" />
            </div>
            <h3
              className={`my-5 font-montserrat text-[24px] font-semibold leading-[130%] text-[#494A4D]`}
            >
              Fill the from
            </h3>
            <SectionText text="There are several types of bank cards, including debit cards." />
          </div>
          <div className="work-card rounded-xl bg-primary-color-2.1 px-6 py-10 md:px-[32px] md:py-[60px] xl:even:mt-[80px]">
            <div className="mb-5 w-max  bg-primary-color-2.2 p-5 md:mb-10 md:p-[25px] ">
              <BsFileText className="text-4xl text-primary-color-1 md:text-[50px]" />
            </div>
            <h3
              className={`my-5 font-montserrat text-[24px] font-semibold leading-[130%] text-[#494A4D]`}
            >
              Fill the from
            </h3>
            <SectionText text="There are several types of bank cards, including debit cards." />
          </div>
          <div className="work-card rounded-xl bg-primary-color-2.1 px-6 py-10 md:px-[32px] md:py-[60px] xl:even:mt-[80px]">
            <div className="mb-5 w-max  bg-primary-color-2.2 p-5 md:mb-10 md:p-[25px] ">
              <BsFileText className="text-4xl text-primary-color-1 md:text-[50px]" />
            </div>
            <h3
              className={`my-5 font-montserrat text-[24px] font-semibold leading-[130%] text-[#494A4D]`}
            >
              Fill the from
            </h3>
            <SectionText text="There are several types of bank cards, including debit cards." />
          </div>
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
          className="absolute right-[5%] top-[30%] animate-pulse"
        />
      </div>
    </section>
  );
};
