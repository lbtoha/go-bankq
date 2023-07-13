import { PageHeader } from "@/components/shared/PageHeader";
import Image from "next/image";
import React from "react";
import carLoanImage from "@/public/images/car_loan_banner.png";

export const CarLoanHeader = () => {
  return (
    <section className="bg-primary-color-1 dot-bg">
      <div className="my-container">
        <div className="flex items-center justify-between">
          <div>
            <PageHeader />
          </div>
          <div>
            <Image src={carLoanImage} alt="about banner" />
          </div>
        </div>
      </div>
    </section>
  );
};
