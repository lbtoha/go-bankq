import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";
import React from "react";

export const HowItWork = () => {
  return (
    <section className="how-it-work-section horizontal-gap bg-section-bg">
      <div className="section-gap container ">
        <div className="mx-auto max-w-[597px] text-center">
          <SectionHeading title="How It Work?" />
          <div className="mt-6">
            <SectionText text="Once you have been prequalified, you can start looking for a home that fits your budget and preferences." />
          </div>
        </div>
        <div className="grid grid-cols-1 items-center justify-between md:grid-cols-2 xl:grid-cols-4">
          <div className="card text-center">
            <p className="card-number relative z-20 mx-auto mt-4 w-fit font-montserrat text-[64px] font-semibold leading-[120%] text-primary-color-1 xl:mt-8">
              01
            </p>
            <p className="card-title">Fill the from</p>
            <p className="card-text">
              There are several types of bank cards, including debit cards.
            </p>
          </div>
          <div className="card text-center">
            <p className="card-number relative z-20 mx-auto mt-[32px] w-fit font-montserrat text-[64px] font-semibold leading-[120%] text-primary-color-1">
              02
            </p>
            <p className="card-title">Get pre-qualified</p>
            <p className="card-text">
              There are several types of bank cards, including debit cards.
            </p>
          </div>
          <div className="card text-center">
            <p className="card-number relative z-20 mx-auto mt-[32px] w-fit font-montserrat text-[64px] font-semibold leading-[120%] text-primary-color-1">
              03
            </p>
            <p className="card-title">Send documents</p>
            <p className="card-text">
              There are several types of bank cards, including debit cards.
            </p>
          </div>
          <div className="card text-center">
            <p className="card-number relative z-20 mx-auto mt-[32px] w-fit font-montserrat text-[64px] font-semibold leading-[120%] text-primary-color-1">
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
