import React from "react";
import { PageHeader } from "@/components/shared/PageHeader";
import Image from "next/image";
import debitCard from "@/public/images/debit_banner.png";

export const DebitCardHeader = () => {
  return (
    <section className="navbar-banner max-lg:section-gap header-section-space">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <PageHeader
              title="Debit Card"
              items={["Home", "Card", "Debit Card"]}
            />
          </div>
          <div className="hidden lg:block">
            <Image src={debitCard} alt="Personal Loan banner" />
          </div>
        </div>
      </div>
    </section>
  );
};
