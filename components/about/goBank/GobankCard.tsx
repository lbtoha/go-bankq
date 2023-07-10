import { SectionText } from "@/components/shared/SectionText";
import { titleFont } from "@/utils/fonts";
import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";

export const GobankCard = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="p-5 bg-[#FFD584] bg-opacity-20  rounded-full w-fit">
        <div className="p-3 bg-[#FFD584] rounded-full">
          <BsCurrencyDollar className={`text-[42px]  text-primary-color-1`} />
        </div>
      </div>
      <h3
        className={`${titleFont.className} mt-5 text-sub-title-color text-xl`}
      >
        Checking Account
      </h3>
      <div className="mt-3">
        <p className="text-lg text-[#6F7278] leading-[150%] mb-5 lg:mb-10">
          {text}
        </p>
        <SectionText text="The bank offers a wide range of financial products and services to consumers" />
      </div>
    </div>
  );
};
