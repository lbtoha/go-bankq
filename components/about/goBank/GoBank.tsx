import { SectionText } from "@/components/shared/SectionText";
import { titleFont, textFont } from "@/utils/fonts";
import React from "react";
import { BsCreditCard, BsCurrencyDollar } from "react-icons/bs";
import { GobankCard } from "./GobankCard";
import { PiPiggyBankLight } from "react-icons/pi";
import { FaHandHoldingUsd } from "react-icons/fa";

export const GoBank = () => {
  return (
    <section>
      <div className="my-container my-[120px] ">
        <div className="w-[516px]">
          <h3 className="text-primary-color-2 text-[40px] mb-[25px] font-bold">
            <span className="text-[#292C32] ">Why</span> GoBank
          </h3>
          <SectionText text="Gobank is a large commercial bank headquartered in Minneapolis, Minnesota, USA. It is the fifth-largest bank in the country and has more than 3,000 branches across 26 states. The bank offers a wide range of financial products and services to consumers, businesses, and institutions." />
        </div>
        <div className="grid grid-cols-4 items-center justify-between mt-[129px] gap-6 text-center">
          <GobankCard
            title="Checking Account"
            subText="The bank offers a wide range of financial products and services to
          consumers"
          >
            <BsCurrencyDollar className={`text-[42px]  text-primary-color-1`} />
          </GobankCard>
          <GobankCard
            title="Saving Account"
            subText="The bank offers a wide range of financial products and services to
          consumers"
          >
            <PiPiggyBankLight className={`text-[42px]  text-primary-color-1`} />
          </GobankCard>
          <GobankCard
            title="Checking Account"
            subText="The bank offers a wide range of financial products and services to
          consumers"
          >
            <FaHandHoldingUsd className={`text-[42px]  text-primary-color-1`} />
          </GobankCard>
          <GobankCard
            title="Checking Account"
            subText="The bank offers a wide range of financial products and services to
          consumers"
          >
            <BsCreditCard className={`text-[42px]  text-primary-color-1`} />
          </GobankCard>
        </div>
      </div>
    </section>
  );
};
