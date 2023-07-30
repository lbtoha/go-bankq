import { PageHeader } from "@/components/shared/PageHeader";
import Image from "next/image";
import React from "react";
import educationLoanImage from "@/public/images/education_loan_banner.png";

export const EducationLoanHeader = () => {
  return (
    <section className="navbar-banner max-lg:section-gap max-sm:px-2">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <PageHeader
              title="Home"
              items={["Home", "Loan", "Education Loan"]}
            />
          </div>
          <div className="hidden lg:block">
            <Image src={educationLoanImage} alt="Personal Loan banner" />
          </div>
        </div>
      </div>
    </section>
  );
};
