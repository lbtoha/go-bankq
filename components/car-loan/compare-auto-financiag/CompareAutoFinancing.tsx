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
      title: "Apply for a car loan to use ai participanting dealers.",
      text: "Once you have been preapproved, you can start looking for a car that fits your budget and preferences.",
      apr: 5.12,
      month: 60,
    },
    {
      title: "Zero Down Payment Car Loans",
      text: "Once you have been preapproved, you can start looking for a car that fits your budget and preferences.",
      apr: 5.12,
      month: 60,
    },
    {
      title: "Apply for a car loan to use ai participanting dealers.",
      text: "Once you have been preapproved, you can start looking for a car that fits your budget and preferences.",
      apr: 5.12,
      month: 55,
    },
  ];
  return (
    <section>
      <div className="my-container section-gap">
        <div className="max-w-[627px]">
          <SectionHeading title="Compare your auto financing options." />
        </div>
        <div className="mt-6 mb-[70px] max-w-[847px]">
          <SectionText text="Whether you’re buying a new or used car, refinancing your current loan or leasing a vehicle, GO Bank has options for your financing journey." />
        </div>

        <div className="grid grid-cols-3 items-center gap-6">
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
