import { PageHeader } from "@/components/shared/PageHeader";
import Image from "next/image";
import React from "react";
import homeLoneHeaderImage from "@/public/images/home_loan_banner.png";

export const HomeLoanHeader = () => {
  return (
    <section className="navbar-banner max-lg:section-gap max-sm:px-2">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <PageHeader
              title="Home Loan"
              items={["Home", "Loan", "Home loan"]}
            />
          </div>
          <div className="hidden lg:block">
            <Image src={homeLoneHeaderImage} alt="about banner" />
          </div>
        </div>
      </div>
    </section>
  );
};
