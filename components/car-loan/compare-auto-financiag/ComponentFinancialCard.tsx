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
      <div className="border-with-gray-bg group  rounded-xl p-6 hover:bg-primary-color-2 xl:p-[32px] ">
        <p className="mb-[32px] text-base font-semibold leading-[150%] text-[#494A4D]">
          Car loan
        </p>
        <h3
          className={`mb-[20px] font-montserrat text-[22px] font-semibold leading-[130%] text-[#494A4D] xl:text-[24px] `}
        >
          {title}
        </h3>
        <div className="mb-[32px]">
          <SectionText text={text} />
        </div>

        <div className="flex items-center  justify-between  border-b border-t border-gray-300 py-[20px]">
          <p className="text-[20px] font-bold leading-[150%] text-primary-color-1">
            APR {apr}%
          </p>
          <p className="text-[20px] font-bold leading-[150%] text-primary-color-1">
            {month} Months
          </p>
        </div>
        <div className="mt-10 flex justify-evenly">
          <button className="bg-primary-color-2 px-2 py-[12px]  text-base font-medium  text-[#292C32] group-hover:bg-slate-100 sm:px-[32px]  sm:py-[12px]">
            Apply now
          </button>
          <button className="bg-primary-color-1  px-2  py-[12px]  text-base  font-medium text-[#292C32]    text-primary-color-2 group-hover:bg-slate-100 sm:px-[32px]  sm:py-[12px]">
            Apply now
          </button>
        </div>
      </div>
    </div>
  );
};
