import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";
import Image from "next/image";
import React from "react";
import { BsCreditCard2Back } from "react-icons/bs";
import bankCard from "@/public/images/bankCard.png";

export const BankCards = () => {
  return (
    <section className="bg-section-bg">
      <div className="my-container section-gap">
        <div className="grid grid-cols-12 items-center justify-between">
          <div className="col-span-5">
            <div className="bg-primary-color-2.2  p-[25px] w-max mb-10 ">
              <BsCreditCard2Back className="text-[50px] text-primary-color-1" />
            </div>
            <SectionHeading title="Bank cards often come with security features such as a PIN" />
            <div className="mt-6">
              <SectionText text="Bank cards may come with fees such as annual fees, transaction fees, foreign transaction fees, and ATM withdrawal fees. Make sure you understand the fees associated with your bank card before using it." />
            </div>
          </div>
          <div className="col-start-7 col-span-12">
            <Image src={bankCard} alt="Bank Card" />
          </div>
        </div>
      </div>
    </section>
  );
};
