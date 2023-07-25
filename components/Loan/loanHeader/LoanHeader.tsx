"use client";
import React from "react";
import { PageHeader } from "@/components/shared/PageHeader";
import Image from "next/image";
import loanBanner from "@/public/images/loan_banner.png";

export const LoanHeader = () => {
  return (
    <section className="dot-bg  max-lg:section-gap bg-primary-color-1  max-sm:px-2">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <PageHeader title="Loan" items={["Home", "Loan"]} />
          </div>
          <div>
            <Image
              className="hidden sm:max-md:w-3/4 lg:block "
              src={loanBanner}
              alt="about banner"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
