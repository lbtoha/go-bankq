import React from "react";
import { PageHeader } from "../shared/PageHeader";
import Image from "next/image";
import creditCard from "@/public/images/credit_banner.png";

export const CreditCardHeader = () => {
  return (
    <section className="navbar-banner max-lg:section-gap max-sm:px-2">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <PageHeader
              title="Credit Card"
              items={["Home", "Card", "Credit Card"]}
            />
          </div>
          <div className="hidden lg:block">
            <Image src={creditCard} alt="Credit Card banner" />
          </div>
        </div>
      </div>
    </section>
  );
};
