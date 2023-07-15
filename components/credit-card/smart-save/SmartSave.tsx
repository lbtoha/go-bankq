import { Button } from "@/components/shared/Button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";
import Image from "next/image";
import React from "react";
import smartSave from "@/public/images/smart_save.png";

export const SmartSave = () => {
  return (
    <section>
      <div className="my-container section-gap">
        <div className="grid grid-cols-12 items-center justify-between">
          <div className="col-span-5">
            <Image src={smartSave} alt="Smart Save" />
          </div>
          <div className="col-start-8 col-span-12">
            <div className="mb-6">
              <SectionHeading title="Smart—save and spend with confidence" />
            </div>
            <div className="mb-10">
              <SectionText text="the bank account that gives you more control over your money—with a direct customer support hotline if you ever need help. Choose a Mastercard in your choice of 5 colors and organize your finances with 10 Spaces sub-accounts" />
            </div>
            <div className="bg-primary-color-2.2 p-5">
              <div></div>
            </div>
            <Button text="Apply Credit card" url="/" />
          </div>
        </div>
      </div>
    </section>
  );
};
