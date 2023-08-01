import { SectionText } from "@/components/shared/SectionText";
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
      <div className="border-with-gray-bg group custom-transition rounded-xl p-5 hover:bg-primary-color-2 md:p-8 ">
        <p className="mb-5 hidden text-base font-semibold leading-[150%] text-neutral-color-neutral-700 sm:block lg:mb-[32px]">
          Car loan
        </p>
        <h3
          className={`mb-4 font-montserrat text-[22px] font-semibold leading-[130%] text-neutral-color-neutral-700 lg:mb-[20px] xl:text-[24px] `}
        >
          {title}
        </h3>
        <div className="mb-6 lg:mb-[32px]">
          <SectionText text={text} />
        </div>

        <div className="custom-transition flex  items-center  justify-between border-b border-t border-[#CACCD1] py-4 group-hover:border-neutral-color-neutral-600 lg:py-[20px]">
          <p className="text-[20px] font-bold leading-[150%] text-primary-color-1">
            APR {apr}%
          </p>
          <p className="text-[20px] font-bold leading-[150%] text-primary-color-1">
            {month} Months
          </p>
        </div>
        <div className="mt-8 flex justify-evenly lg:mt-10">
          <button className="bg-primary-color-2 px-2 py-[12px]  text-base font-medium  text-neutral-color-neutral-800 group-hover:bg-slate-100 sm:px-[32px]  sm:py-[12px]">
            Apply now
          </button>
          <button className="bg-primary-color-1  px-2  py-[12px]  text-base  font-medium text-neutral-color-neutral-800    text-primary-color-2 group-hover:bg-slate-100 sm:px-[32px]  sm:py-[12px]">
            Apply now
          </button>
        </div>
      </div>
    </div>
  );
};
