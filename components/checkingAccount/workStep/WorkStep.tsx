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
      <div className="my-container section-gap">
        <div className="mb-[60px] text-center">
          <SectionHeading title="Our Work Step" />
        </div>
        <div className="grid grid-cols-4 items-center  gap-6 ">
          <div className="bg-primary-color-2.1 px-[32px] py-[60px] rounded-xl even:mt-[80px] work-card">
            <div className="bg-primary-color-2.2  p-[25px] w-max mb-10 ">
              <BsFileText className="text-[50px] text-primary-color-1" />
            </div>
            <h3
              className={`font-montserrat my-5 text-[24px] font-semibold leading-[130%] text-[#494A4D]`}
            >
              Fill the from
            </h3>
            <SectionText text="There are several types of bank cards, including debit cards." />
          </div>
          <div className="bg-primary-color-2.1 px-[32px] py-[60px] rounded-xl even:mt-[80px] work-card ">
            <div className="bg-primary-color-2.2  p-[25px] w-max mb-10 ">
              <ImProfile className="text-[50px] text-primary-color-1" />
            </div>
            <h3
              className={`font-montserrat my-5 text-[24px] font-semibold leading-[130%] text-[#494A4D]`}
            >
              Get Pre-qualified
            </h3>
            <SectionText text="There are several types of bank cards, including debit cards." />
          </div>
          <div className="bg-primary-color-2.1 px-[32px] py-[60px] rounded-xl even:mt-[80px] work-card ">
            <div className="bg-primary-color-2.2  p-[25px] w-max mb-10 ">
              <VscSend className="text-[50px] text-primary-color-1" />
            </div>
            <h3
              className={`font-montserrat my-5 text-[24px] font-semibold leading-[130%] text-[#494A4D]`}
            >
              Send Documents
            </h3>
            <SectionText text="There are several types of bank cards, including debit cards." />
          </div>
          <div className="bg-primary-color-2.1 px-[32px] py-[60px] rounded-xl even:mt-[80px] work-card ">
            <div className="bg-primary-color-2.2  p-[25px] w-max mb-10 ">
              <MdOutlineAssignmentTurnedIn className="text-[50px] text-primary-color-1" />
            </div>
            <h3
              className={`font-montserrat my-5 text-[24px] font-semibold leading-[130%] text-[#494A4D]`}
            >
              Get Accounts
            </h3>
            <SectionText text="There are several types of bank cards, including debit cards." />
          </div>
        </div>
      </div>
      <div>
        <Image
          src={workCardImage}
          alt="card"
          className="absolute bottom-0 left-0"
        />
        <Image
          src={workVectorImage}
          alt="Vector"
          className="absolute right-[5%] top-[30%]"
        />
      </div>
    </section>
  );
};
