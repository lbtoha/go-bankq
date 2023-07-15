import { Button } from "@/components/shared/Button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";
import Image from "next/image";
import React from "react";
import easyUseImage from "@/public/images/easy_use_debit.png";

export const EasyUse = () => {
  return (
    <section>
      <div className="my-container section-gap">
        <div className="grid grid-cols-12 items-center justify-between">
          <div className="col-span-5">
            <Image src={easyUseImage} alt="Next Car Image" />
          </div>
          <div className="col-start-8 col-span-12">
            <div className="mb-6">
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
