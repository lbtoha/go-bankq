import { SectionText } from "@/components/shared/SectionText";
import { titleFont } from "@/utils/fonts";
import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";

type Props = {
  title: string;
  subText: string;
  children: React.ReactNode;
};

export const GobankCard = ({ title, subText, children }: Props) => {
  return (
    <div className="flex flex-col items-center ">
      <div className="p-5 bg-[#FFD584] bg-opacity-20  rounded-full w-fit">
        <div className="p-3 bg-[#FFD584] rounded-full">{children}</div>
      </div>
      <h3
        className={`font-montserrat mt-5 text-sub-title-color text-xl font-semibold`}
      >
        {title}
      </h3>
      <div className="mt-3">
        <p className="text-base text-[#6F7278] leading-[150%] mb-5 lg:mb-10">
          {subText}
        </p>
      </div>
    </div>
  );
};
