import { Button } from "@/components/shared/Button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";
import Image from "next/image";
import React from "react";
import personalLoan from "@/public/images/personal_loans.png";

export const OpenPersonalLoan = () => {
  return (
    <section>
      <div className="my-container section-gap">
        <div className="grid grid-cols-12 items-center justify-between">
          <div className="col-span-5">
            <Image src={personalLoan} alt="Next Car Image" />
          </div>
          <div className="col-start-8 col-span-12">
            <div className="mb-6">
              <SectionHeading title="Personal loans are often " />
            </div>
            <div className="mb-10">
              <SectionText text="Similar to home loans, you can begin by getting preapproved for a car loan. This involves providing basic financial information to a lender, who will then give you an estimate of how much you can afford to borrow and what interest rate you may qualify for." />
            </div>
            <Button text="Apply now" url="/" />
          </div>
        </div>
      </div>
    </section>
  );
};