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
      <div className="w-fit rounded-full bg-[#FFD584]  bg-opacity-20 p-5">
        <div className="rounded-full bg-[#FFD584] p-3">{children}</div>
      </div>
      <h3
        className={`mt-5 font-montserrat text-xl font-semibold text-sub-title-color`}
      >
        {title}
      </h3>
      <div className="mt-3">
        <p className="text-base leading-[150%] text-[#6F7278] max-md:mb-5">
          {subText}
        </p>
      </div>
    </div>
  );
};
