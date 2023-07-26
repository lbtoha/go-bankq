import { Button } from "@/components/shared/Button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";
import Image from "next/image";
import React from "react";
import flexibleReplacementImage from "@/public/images/flexible_repayment.png";

export const FlexibleRepayment = () => {
  return (
    <section className="relative">
      <div className="section-gap container max-sm:px-2">
        <div className="grid-cols-12 items-center justify-between lg:grid">
          <div className="col-span-6">
            <div className="mb-6">
              <SectionHeading title="Education loans typically have flexible repayment." />
            </div>
            <div className=" mb-5 md:mb-8 lg:mb-10">
              <SectionText text="The interest rate on an education loan is typically determined by the borrower's credit score, income, and other financial factors. Interest rates can range from 3% to 15%. o apply for an education loan, borrowers typically need to provide basic personal and financial information, including their income, employment status, and credit score." />
            </div>
            <Button text="Apply now" url="/" />
          </div>
          <div className="col-span-12 col-start-8 hidden lg:block">
            <Image
              src={flexibleReplacementImage}
              alt="Flexible Replacement Image"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 -z-10 hidden h-[50%] w-[25%] bg-primary-color-2 lg:block"></div>
    </section>
  );
};
