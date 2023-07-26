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
        <div className="mt-5 items-center  justify-between gap-3 max-md:space-y-8 md:mt-10 md:grid md:grid-cols-2 xl:mt-[60px] xl:grid-cols-4">
          <div className="card-how-to-work text-center">
            <p className="card-number relative z-20 mx-auto  w-fit font-montserrat text-4xl font-semibold leading-[120%] text-primary-color-1 md:text-5xl lg:text-[64px] ">
              01
            </p>
            <p className="card-title">Fill the from</p>
            <p className="card-text">
              There are several types of bank cards, including debit cards.
            </p>
          </div>
          <div className="card-how-to-work text-center">
            <p className="card-number relative z-20 mx-auto  w-fit font-montserrat text-4xl font-semibold leading-[120%] text-primary-color-1 md:text-5xl lg:text-[64px]">
              02
            </p>
            <p className="card-title">Get pre-qualified</p>
            <p className="card-text">
              There are several types of bank cards, including debit cards.
            </p>
          </div>
          <div className="card-how-to-work text-center">
            <p className="card-number relative z-20 mx-auto  w-fit font-montserrat text-4xl font-semibold leading-[120%] text-primary-color-1 md:text-5xl lg:text-[64px]">
              03
            </p>
            <p className="card-title">Send documents</p>
            <p className="card-text">
              There are several types of bank cards, including debit cards.
            </p>
          </div>
          <div className="card-how-to-work text-center">
            <p className="card-number relative z-20 mx-auto  w-fit font-montserrat text-4xl font-semibold leading-[120%] text-primary-color-1 md:text-5xl lg:text-[64px]">
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
