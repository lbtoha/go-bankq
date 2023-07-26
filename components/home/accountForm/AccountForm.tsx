import { SectionHeading } from "@/components/shared/SectionHeading";
import React from "react";
import { Form } from "./Form";
import Image from "next/image";
import visaCard from "@/public/images/visa_bg.png";

export const AccountForm = () => {
  return (
    <section className="account-section">
      <div className="section-gap horizontal-gap container">
        <div className="grid-cols-12 items-center xl:grid">
          <div className="col-span-6">
            <div className="account-section__title relative max-w-[750px] pb-[60px] ">
              <SectionHeading title="Open your account today and experience the next-gen banking" />
            </div>
            <div className="account-section__card-container relative grid-cols-2 gap-[23px] max-md:space-y-5 max-sm:ps-2 md:grid">
              <div className=" card-content card-left h-[237px] w-full">
                <p className="text-xl leading-[150%] text-[#292C32]">
                  Pay anywhere
                </p>
                <button className="pb-5 text-base text-[#055F5B] underline">
                  Browse
                </button>
              </div>
              <div className=" card-content card-right h-[237px] w-full">
                <p className="text-xl leading-[150%] text-[#292C32]">
                  Manage your assets
                </p>
                <button className="pb-5 text-base text-[#055F5B] underline">
                  Browse
                </button>
              </div>
            </div>
          </div>
          <div className=" h-full bg-[#FAFAFC] px-3 py-10 max-xl:mt-10 md:px-10  md:py-20  xl:col-start-8 xl:w-[526px]">
            <Form></Form>
          </div>
        </div>
      </div>
      <div className="visa-card_bg absolute hidden xl:block">
        <Image src={visaCard} alt="Visa Card" />
      </div>
    </section>
  );
};
