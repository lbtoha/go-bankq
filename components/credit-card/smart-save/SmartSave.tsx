import { Button } from "@/components/shared/Button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";
import Image from "next/image";
import React from "react";
import smartSave from "@/public/images/smart_save.png";
import { MdSupportAgent } from "react-icons/md";

export const SmartSave = () => {
  return (
    <section>
      <div className="my-container section-gap">
        <div className="grid grid-cols-12 items-center justify-between">
          <div className="col-span-5">
            <Image src={smartSave} alt="Smart Save" />
          </div>
          <div className="col-span-12 col-start-8">
            <div className="mb-6">
              <SectionHeading title="Smart—save and spend with confidence" />
            </div>
            <div className="mb-10">
              <SectionText text="the bank account that gives you more control over your money—with a direct customer support hotline if you ever need help. Choose a Mastercard in your choice of 5 colors and organize your finances with 10 Spaces sub-accounts" />
            </div>
            <div className=" mb-10 flex items-center justify-between rounded-md bg-primary-color-2.2 p-5">
              <div className="flex items-center gap-10">
                <div className="w-fit rounded-md bg-primary-color-2 p-5 text-[46px] text-primary-color-1">
                  <MdSupportAgent />
                </div>
                <p>Support</p>
              </div>
              <p>Available</p>
            </div>
            <Button text="Apply Credit card" url="/" />
          </div>
        </div>
      </div>
    </section>
  );
};
