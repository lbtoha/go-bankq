import { Button } from "@/components/shared/Button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";
import Image from "next/image";
import React from "react";
import flexibleReplacementImage from "@/public/images/flexible_repayment.png";

export const FlexibleRepayment = () => {
  return (
    <section className="relative">
      <div className="my-container section-gap">
        <div className="grid grid-cols-12 items-center justify-between">
          <div className="col-span-6">
            <div className="mb-6">
              <SectionHeading title="Education loans typically have flexible repayment." />
            </div>
            <div className="mb-10">
              <SectionText text="The interest rate on an education loan is typically determined by the borrower's credit score, income, and other financial factors. Interest rates can range from 3% to 15%. o apply for an education loan, borrowers typically need to provide basic personal and financial information, including their income, employment status, and credit score." />
            </div>
            <Button text="Apply now" url="/" />
          </div>
          <div className="col-start-8 col-span-12">
            <Image
              src={flexibleReplacementImage}
              alt="Flexible Replacement Image"
            />
          </div>
        </div>
      </div>
      <div className="absolute bg-primary-color-2 w-[25%] h-[50%] bottom-0 right-0 -z-10"></div>
    </section>
  );
};
