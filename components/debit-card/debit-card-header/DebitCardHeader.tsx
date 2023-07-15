import React from "react";
import { PageHeader } from "@/components/shared/PageHeader";
import Image from "next/image";
import debitCard from "@/public/images/debit_banner.png";

export const DebitCardHeader = () => {
  return (
    <section className="bg-primary-color-1 dot-bg">
      <div className="my-container">
        <div className="flex items-center justify-between">
          <div>
            <PageHeader />
          </div>
          <div>
            <Image src={debitCard} alt="Personal Loan banner" />
          </div>
        </div>
      </div>
    </section>
  );
};
