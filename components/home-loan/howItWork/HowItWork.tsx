import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";
import React from "react";

export const HowItWork = () => {
  return (
    <section className="bg-section-bg how-it-work-section">
      <div className="my-container section-gap ">
        <div className="text-center max-w-[597px] mx-auto mb-[60px]">
          <SectionHeading title="How It Work?" />
          <div className="mt-6">
            <SectionText text="Once you have been prequalified, you can start looking for a home that fits your budget and preferences." />
          </div>
        </div>
        <div className="grid grid-cols-4 items-center justify-between">
          <div className="text-center card">
            <p className="z-20 w-fit mx-auto card-number relative font-semibold text-[64px] font-montserrat leading-[120%] text-primary-color-1 mt-[32px]">
              01
            </p>
            <p className="card-title">Fill the from</p>
            <p className="card-text">
              There are several types of bank cards, including debit cards.
            </p>
          </div>
          <div className="text-center card">
            <p className="z-20 w-fit mx-auto card-number relative font-semibold text-[64px] font-montserrat leading-[120%] text-primary-color-1 mt-[32px]">
              02
            </p>
            <p className="card-title">Get pre-qualified</p>
            <p className="card-text">
              There are several types of bank cards, including debit cards.
            </p>
          </div>
          <div className="text-center card">
            <p className="z-20 w-fit mx-auto card-number relative font-semibold text-[64px] font-montserrat leading-[120%] text-primary-color-1 mt-[32px]">
              03
            </p>
            <p className="card-title">Send documents</p>
            <p className="card-text">
              There are several types of bank cards, including debit cards.
            </p>
          </div>
          <div className="text-center card">
            <p className="z-20 w-fit mx-auto card-number relative font-semibold text-[64px] font-montserrat leading-[120%] text-primary-color-1 mt-[32px]">
              04
            </p>
            <p className="card-title">Get a Loan</p>
            <p className="card-text">
              There are several types of bank cards, including debit cards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
