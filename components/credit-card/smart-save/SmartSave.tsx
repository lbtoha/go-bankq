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
      <div className="section-gap container max-sm:px-2">
        <div className="grid-cols-12 items-center justify-between  md:grid">
          <div className="hidden max-md:me-6 md:col-start-1 md:col-end-5 md:block lg:col-start-1 lg:col-end-6">
            <Image src={smartSave} alt="Smart Save" />
          </div>
          <div className="md:col-start-5 md:col-end-13 lg:col-start-8 lg:col-end-13">
            <div className="mb-6">
              <SectionHeading title="Smart—save and spend with confidence" />
            </div>
            <div className="mb-7 md:mb-10">
              <SectionText text="the bank account that gives you more control over your money—with a direct customer support hotline if you ever need help. Choose a Mastercard in your choice of 5 colors and organize your finances with 10 Spaces sub-accounts" />
            </div>
            <div className="mb-7 flex items-center justify-between rounded-md bg-primary-color-2.2 p-3 md:mb-10 md:p-5">
              <div className="flex items-center gap-6 md:gap-10">
                <div className="tex-3xl w-fit rounded-md bg-primary-color-2 p-3 text-primary-color-1 md:p-5 md:text-[46px]">
                  <span className="material-symbols-outlined text-[35px] md:text-[46px] ">
                    support_agent
                  </span>
                </div>
                <p className="text-xl font-semibold md:text-2xl">Support</p>
              </div>
              <p className="text-base text-primary-color-1">Available</p>
            </div>
            <Button text="Apply Credit card" url="/" />
          </div>
        </div>
      </div>
    </section>
  );
};
