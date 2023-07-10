import { SectionHeading } from "@/components/shared/SectionHeading";
import React from "react";
import { Form } from "../openAccount/Form";
import Image from "next/image";
import visaCard from "@/public/images/visa_bg.png";

export const AccountForm = () => {
  return (
    <section className="account-section">
      <div className="my-container py-[120px]">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-6">
            <div className="pb-[60px] account-section__title relative">
              <SectionHeading title="Open your account today and experience the next-gen banking" />
            </div>
            <div className="grid grid-cols-2 ps-5 relative account-section__card-container gap-[23px]">
              <div className=" w-full h-[237px] card-content card-left">
                <p className="text-xl leading-[150%] text-[#292C32]">
                  Pay anywhere
                </p>
                <button className="underline text-base text-[#055F5B] pb-5">
                  Browse
                </button>
              </div>
              <div className=" w-full h-[237px] card-content card-right">
                <p className="text-xl leading-[150%] text-[#292C32]">
                  Manage your assets
                </p>
                <button className="underline text-base text-[#055F5B] pb-5">
                  Browse
                </button>
              </div>
            </div>
          </div>
          <div className="col-start-8 bg-[#FAFAFC]  h-full px-10 py-20 w-[526px]">
            <Form></Form>
          </div>
        </div>
      </div>
      <div className="visa-card_bg absolute">
        <Image src={visaCard} alt="Visa Card" />
      </div>
    </section>
  );
};
