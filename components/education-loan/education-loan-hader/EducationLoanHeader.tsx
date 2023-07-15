import { PageHeader } from "@/components/shared/PageHeader";
import Image from "next/image";
import React from "react";
import educationLoanImage from "@/public/images/education_loan_banner.png";

export const EducationLoanHeader = () => {
  return (
    <section className="bg-primary-color-1 dot-bg">
      <div className="my-container">
        <div className="flex items-center justify-between">
          <div>
            <PageHeader />
          </div>
          <div>
            <Image src={educationLoanImage} alt="Personal Loan banner" />
          </div>
        </div>
      </div>
    </section>
  );
};
