import { PageHeader } from "@/components/shared/PageHeader";
import Image from "next/image";
import React from "react";
import carLoanImage from "@/public/images/car_loan_banner.png";

export const CarLoanHeader = () => {
  return (
    <section className="dot-bg  max-lg:section-gap bg-primary-color-1 max-sm:px-2">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <PageHeader title="Car Loan" items={["Home", "Loan", "Car Loan"]} />
          </div>
          <div className="hidden lg:block">
            <Image src={carLoanImage} alt="about banner" />
          </div>
        </div>
      </div>
    </section>
  );
};
