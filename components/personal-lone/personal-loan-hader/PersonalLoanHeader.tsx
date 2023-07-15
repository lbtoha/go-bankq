import React from "react";
import personalLoanImage from "@/public/images/personal_loan_banner.png";
import { PageHeader } from "@/components/shared/PageHeader";
import Image from "next/image";

export const PersonalLoanHeader = () => {
  return (
    <section className="bg-primary-color-1 dot-bg">
      <div className="my-container">
        <div className="flex items-center justify-between">
          <div>
            <PageHeader />
          </div>
          <div>
            <Image src={personalLoanImage} alt="Personal Loan banner" />
          </div>
        </div>
      </div>
    </section>
  );
};
