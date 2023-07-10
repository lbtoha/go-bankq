import { SectionText } from "@/components/shared/SectionText";
import { titleFont } from "@/utils/fonts";
import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GobankCard } from "./GobankCard";

export const GoBank = () => {
  return (
    <section>
      <div className="my-container mt-[120px]">
        <div className="w-[516px]">
          <h3 className="text-primary-color-2 text-[40px] mb-[25px] font-bold">
            <span className="text-[#292C32]">Why</span> GoBank
          </h3>
          <SectionText text="Gobank is a large commercial bank headquartered in Minneapolis, Minnesota, USA. It is the fifth-largest bank in the country and has more than 3,000 branches across 26 states. The bank offers a wide range of financial products and services to consumers, businesses, and institutions." />
        </div>
        <div className="grid grid-cols-4 items-center justify-between mt-[129px]">
          <GobankCard />
          <GobankCard />
          <GobankCard />
          <GobankCard />
        </div>
      </div>
    </section>
  );
};
