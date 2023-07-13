import { ButtonGreenSmall } from "@/components/shared/ButtonGreenSmall";
import { ButtonSmall } from "@/components/shared/ButtonSmall";
import { SectionText } from "@/components/shared/SectionText";
import { type } from "os";
import React from "react";

type Props = {
  title: string;
  text: string;
  apr: number;
  month: number;
};

export const ComponentFinancialCard = ({ title, text, apr, month }: Props) => {
  return (
    <div>
      <div className=" me-4 border-with-gray-bg group hover:bg-primary-color-2 p-[32px] rounded-xl ">
        <p className="font-semibold text-base text-[#494A4D] leading-[150%] mb-[32px]">
          Car loan
        </p>
        <h3
          className={`font-montserrat mb-[20px] text-[24px] font-semibold leading-[130%] text-[#494A4D] `}
        >
          {title}
        </h3>
        <div className="mb-[32px]">
          <SectionText text={text} />
        </div>

        <div className="border-b border-t  border-gray-300  py-[20px] flex items-center justify-between">
          <p className="text-primary-color-1 font-bold text-[20px] leading-[150%]">
            APR {apr}%
          </p>
          <p className="text-primary-color-1 font-bold text-[20px] leading-[150%]">
            {month} Months
          </p>
        </div>
        <div className="flex justify-evenly mt-10">
          <ButtonSmall text="Apply now" url="/" />
          <ButtonGreenSmall text="Learn more" url="/" />
        </div>
      </div>
    </div>
  );
};
