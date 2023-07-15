import React from "react";
import { PageHeader } from "../shared/PageHeader";
import Image from "next/image";
import creditCard from "@/public/images/credit_banner.png";

export const CreditCardHeader = () => {
  return (
    <section className="bg-primary-color-1 dot-bg">
      <div className="my-container">
        <div className="flex items-center justify-between">
          <div>
            <PageHeader />
          </div>
          <div>
            <Image src={creditCard} alt="Credit Card banner" />
          </div>
        </div>
      </div>
    </section>
  );
};
