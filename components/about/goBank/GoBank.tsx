import { SectionText } from "@/components/shared/SectionText";
import { titleFont, textFont } from "@/utils/fonts";
import React from "react";
import { BsCreditCard, BsCurrencyDollar } from "react-icons/bs";
import { GobankCard } from "./GobankCard";
import { PiPiggyBankLight } from "react-icons/pi";
import { FaHandHoldingUsd } from "react-icons/fa";

export const GoBank = () => {
  return (
    <section className="relative">
      <div className="section-gap container max-sm:px-2 ">
        <div className="md:w-[516px]">
          <h3 className="mb-[25px] text-[40px] font-bold text-primary-color-2">
            <span className="text-[#292C32] ">Why</span> GoBank
          </h3>
          <p className="text-base leading-[150%] text-[#6F7278] md:text-lg">
            Gobank is a large commercial bank headquartered in Minneapolis,
            Minnesota, USA. It is the fifth-largest bank in the country and has
            more than 3,000 branches across 26 states. The bank offers a wide
            range of financial products and services to consumers, businesses,
            and institutions.
          </p>
        </div>
        <div className="mt-[50px] grid grid-cols-1 items-center justify-between gap-6 text-center sm:grid-cols-2 md:mt-[80px] lg:grid-cols-4 xl:mt-[120px]">
          <GobankCard
            title="Checking Account"
            subText="The bank offers a wide range of financial products and services to
          consumers"
          >
            <BsCurrencyDollar
              className={`text-3xl text-primary-color-1  md:text-[42px]`}
            />
          </GobankCard>
          <GobankCard
            title="Saving Account"
            subText="The bank offers a wide range of financial products and services to
          consumers"
          >
            <PiPiggyBankLight
              className={`text-3xl text-primary-color-1  md:text-[42px]`}
            />
          </GobankCard>
          <GobankCard
            title="Loan"
            subText="The bank offers a wide range of financial products and services to
          consumers"
          >
            <FaHandHoldingUsd
              className={`text-3xl text-primary-color-1  md:text-[42px]`}
            />
          </GobankCard>
          <GobankCard
            title="Credit Card"
            subText="The bank offers a wide range of financial products and services to
          consumers"
          >
            <BsCreditCard
              className={`text-3xl text-primary-color-1  md:text-[42px]`}
            />
          </GobankCard>
        </div>
      </div>
      <div className=" absolute hidden h-[50%] w-[40%] bg-primary-color-2.1 lg:block"></div>
    </section>
  );
};
