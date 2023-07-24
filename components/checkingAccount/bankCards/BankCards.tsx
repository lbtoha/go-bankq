import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";
import Image from "next/image";
import React from "react";
import { BsCreditCard2Back } from "react-icons/bs";
import bankCard from "@/public/images/bankCard.png";

export const BankCards = () => {
  return (
    <section className="section-gap horizontal-gap bg-section-bg">
      <div className="section-gap container">
        <div className="items-center justify-between md:grid lg:grid-cols-12">
          <div className="col-span-5">
            <div className=" mb-3 w-max  bg-primary-color-2.2 p-5 md:p-[25px] lg:mb-10 ">
              <BsCreditCard2Back className="text-4xl text-primary-color-1 md:text-[50px]" />
            </div>
            <SectionHeading title="Bank cards often come with security features such as a PIN" />
            <div className="mt-6">
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
