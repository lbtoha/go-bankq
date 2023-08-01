import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";
import Image from "next/image";
import React from "react";
import bankCard from "@/public/images/bankCard.png";

export const BankCards = () => {
  return (
    <section className="section-gap bg-neutral-color-neutral-200 max-sm:px-2 ">
      <div className=" container">
        <div className="items-center justify-between md:grid lg:grid-cols-12">
          <div className="col-span-5">
            <span className="material-symbols-outlined mb-6 w-max bg-primary-color-2 bg-opacity-20 p-5 text-4xl  text-primary-color-1 md:p-[25px] md:text-[50px] lg:mb-10 ">
              account_balance
            </span>
            <SectionHeading title="Bank cards often come with security features such as a PIN" />
            <div className="mt-4 lg:mt-6">
              <SectionText text="Bank cards may come with fees such as annual fees, transaction fees, foreign transaction fees, and ATM withdrawal fees. Make sure you understand the fees associated with your bank card before using it." />
            </div>
          </div>
          <div className="col-span-12 col-start-7 hidden lg:block">
            <Image src={bankCard} alt="Bank Card" />
          </div>
        </div>
      </div>
    </section>
  );
};
