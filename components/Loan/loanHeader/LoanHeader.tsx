"use client";
import React from "react";
import { PageHeader } from "@/components/shared/PageHeader";
import Image from "next/image";
import loanBanner from "@/public/images/loan_banner.png";

export const LoanHeader = () => {
  return (
    <section className="bg-primary-color-1 ">
      <div className="my-container">
        <div className="flex items-center justify-between">
          <div>
            <PageHeader />
          </div>
          <div>
            <Image src={loanBanner} alt="about banner" />
          </div>
        </div>
      </div>
    </section>
  );
};
