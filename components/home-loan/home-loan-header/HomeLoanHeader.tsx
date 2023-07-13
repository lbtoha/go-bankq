import { PageHeader } from "@/components/shared/PageHeader";
import Image from "next/image";
import React from "react";
import homeLoneHeaderImage from "@/public/images/home_loan_banner.png";

export const HomeLoanHeader = () => {
  return (
    <section className="bg-primary-color-1 dot-bg">
      <div className="my-container">
        <div className="flex items-center justify-between">
          <div>
            <PageHeader />
          </div>
          <div>
            <Image src={homeLoneHeaderImage} alt="about banner" />
          </div>
        </div>
      </div>
    </section>
  );
};
