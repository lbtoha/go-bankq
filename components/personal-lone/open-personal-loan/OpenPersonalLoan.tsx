import { Button } from "@/components/shared/Button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";
import Image from "next/image";
import React from "react";
import personalLoan from "@/public/images/personal_loans.png";

export const OpenPersonalLoan = () => {
  return (
    <section>
      <div className="section-gap container max-sm:px-2">
        <div className="grid-cols-12 items-center justify-between max-xl:gap-6 md:grid ">
          <div className="hidden md:col-start-1 md:col-end-5 md:block xl:col-span-5">
            <Image src={personalLoan} alt="Next Car Image" />
          </div>
          <div className="md:col-start-5 md:col-end-13 xl:col-span-12 xl:col-start-8">
            <div className="mb-6">
              <SectionHeading title="Personal loans are often " />
            </div>
            <div className="mb-7 xl:mb-10">
              <SectionText text="Similar to home loans, you can begin by getting preapproved for a car loan. This involves providing basic financial information to a lender, who will then give you an estimate of how much you can afford to borrow and what interest rate you may qualify for." />
            </div>
            <Button btnType="btnPrimary" text="Apply now" url="/" />
          </div>
        </div>
      </div>
    </section>
  );
};
