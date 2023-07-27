import React from "react";
import personalLoanImage from "@/public/images/personal_loan_banner.png";
import { PageHeader } from "@/components/shared/PageHeader";
import Image from "next/image";

export const PersonalLoanHeader = () => {
  return (
    <section className="dot-bg max-lg:section-gap header-section-space bg-primary-color-1">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <PageHeader
              title="Personal Loan"
              items={["Home", "Loan", "Personal Loan"]}
            />
          </div>
          <div className="hidden lg:block">
            <Image src={personalLoanImage} alt="Personal Loan banner" />
          </div>
        </div>
      </div>
    </section>
  );
};
