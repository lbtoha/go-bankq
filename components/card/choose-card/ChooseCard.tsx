"use client";
import { BankCard } from "@/components/shared/BankCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";
import ChooseCardSectionButton from "./ChooseCardSectionButton";
import card1 from "@/public/images/card_filter.png";
import card2 from "@/public/images/card_filter2.png";
import card3 from "@/public/images/card_filter3.png";
import card4 from "@/public/images/card_filter4.png";
import card5 from "@/public/images/card_filter5.png";
import card6 from "@/public/images/card_filter6.png";
import union from "@/public/images/Union.png";
import { useState } from "react";
import Image from "next/image";

export const ChooseCard = () => {
  const [activeTab, setActiveTab] = useState<number | string>(1);

  const handleTabClick = (index: number | string) => {
    setActiveTab(index);
  };
  return (
    <section className="relative bg-gray-100">
      <div className="section-gap container max-sm:px-2">
        <div className="mx-auto mb-5 max-w-[722px] text-center">
          <SectionHeading title="Choose the Card that Matches Your Needs" />
        </div>
        <div className=" mx-auto max-w-[612px] text-center">
          <SectionText text="We have a fine range of accounts to help you manage your finances seamlessly" />
        </div>
        <div className="my-5 flex items-center justify-center gap-4 max-md:flex-col md:my-10 lg:my-[60px]">
          <div onClick={() => handleTabClick(1)}>
            <ChooseCardSectionButton
              activeTab={activeTab == 1 ? activeTab : null}
              cardName="Debit card"
            />
          </div>
          <div onClick={() => handleTabClick(2)}>
            <ChooseCardSectionButton
              activeTab={activeTab == 2 ? activeTab : null}
              cardName="Credit card"
            />
          </div>
          <div onClick={() => handleTabClick(3)}>
            <ChooseCardSectionButton
              activeTab={activeTab == 3 ? activeTab : null}
              cardName="Others card"
            />
          </div>
        </div>
        <div className="grid justify-items-center gap-6 gap-y-8 max-md:mt-10 md:grid-cols-3">
          {activeTab == 1 && (
            <>
              <BankCard cardImage={card1} btnUrl="/" />
              <BankCard cardImage={card2} btnUrl="/" />
              <BankCard cardImage={card3} btnUrl="/" />
            </>
          )}
          {activeTab == 2 && (
            <>
              <BankCard cardImage={card4} btnUrl="/" />
              <BankCard cardImage={card5} btnUrl="/" />
              <BankCard cardImage={card6} btnUrl="/" />
            </>
          )}
          {activeTab == 3 && (
            <>
              <BankCard cardImage={card2} btnUrl="/" />
              <BankCard cardImage={card5} btnUrl="/" />
              <BankCard cardImage={card4} btnUrl="/" />
            </>
          )}
        </div>
      </div>
      <div>
        <Image
          src={union}
          alt="Union"
          className="absolute right-0 top-[5%] hidden w-[200px] animate-pulse xl:block"
        />
      </div>
    </section>
  );
};
