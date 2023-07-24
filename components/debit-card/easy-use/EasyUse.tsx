import { Button } from "@/components/shared/Button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";
import Image from "next/image";
import React from "react";
import easyUseImage from "@/public/images/easy_use_debit.png";

export const EasyUse = () => {
  return (
    <section>
      <div className="section-gap container max-sm:px-2">
        <div className="grid-cols-12 items-center justify-between md:grid md:gap-5 xl:gap-0">
          <div className="hidden md:col-span-6 md:block xl:col-span-5">
            <Image src={easyUseImage} alt="Next Car Image" />
          </div>
          <div className=" md:col-span-12 md:col-start-7 xl:col-span-12 xl:col-start-8">
            <div className="mb-6 max-sm:text-center">
              <SectionHeading title="Easy to use your card  everywhere " />
            </div>
            <div className="mb-10">
              <SectionText text="A debit card is a plastic card that is linked to your bank account and allows you to access your funds electronically. When you use your debit card to make a purchase, the amount is deducted from your bank account balance immediately or shortly after the transaction is made." />
            </div>
            <Button text="Apply now" url="/" />
          </div>
        </div>
      </div>
    </section>
  );
};
