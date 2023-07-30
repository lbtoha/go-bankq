import { Button } from "@/components/shared/Button";
import { ButtonGreenSmall } from "@/components/shared/ButtonGreenSmall";
import { ButtonSmall } from "@/components/shared/ButtonSmall";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";
import React from "react";
import { ComponentFinancialCard } from "./ComponentFinancialCard";

export const CompareAutoFinancing = () => {
  interface CarData {
    title: string;
    text: string;
    apr: number;
    month: number;
  }

  const cardeData: CarData[] = [
    {
      title: "Apply for a car loan to use ai participanting.",
      text: "Once you have been preapproved, you can start looking for a car that fits your budget and preferences.",
      apr: 5.12,
      month: 60,
    },
    {
      title: "Zero Down Payment to get Car Loans",
      text: "Once you have been preapproved, you can start looking for a car that fits your budget and preferences.",
      apr: 5.12,
      month: 60,
    },
    {
      title: "Apply a loan to use ai participanting dealers.",
      text: "Once you have been preapproved, you can start looking for a car that fits your budget and preferences.",
      apr: 5.12,
      month: 55,
    },
  ];
  return (
    <section className="bg-[#FAFAFC]">
      <div className="section-gap container max-sm:px-2 max-sm:text-center">
        <div className="">
          <div className="md:max-w-[627px]">
            <SectionHeading title="Compare your auto financing options." />
          </div>
          <div className="mb-7 mt-6 max-w-[847px] md:mb-10 lg:mb-[60px] xl:mb-[70px]">
            <SectionText text="Whether you’re buying a new or used car, refinancing your current loan or leasing a vehicle, GO Bank has options for your financing journey." />
          </div>
        </div>

        <div className="grid items-center gap-6 lg:grid-cols-2 xl:grid-cols-3 ">
          {cardeData.map(({ title, text, apr, month }, index) => (
            <ComponentFinancialCard
              key={index}
              title={title}
              text={text}
              apr={apr}
              month={month}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
