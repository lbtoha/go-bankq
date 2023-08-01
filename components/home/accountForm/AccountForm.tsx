import { SectionHeading } from "@/components/shared/SectionHeading";
import React from "react";
import { Form } from "./Form";
import Image from "next/image";
import visaCard from "@/public/images/visa_bg.png";
import workStep from "@/public/images/work_step_vector.png";

export const AccountForm = () => {
  return (
    <section className="account-section relative">
      <div className="section-gap horizontal-gap container">
        <div className="grid-cols-12  xl:grid">
          <div className="col-span-6">
            <div className="account-section__title section-top-mark-black relative max-w-[526px] pb-7 md:pb-10 lg:pb-[60px]">
              <div className="lg:pt-10">
                <SectionHeading title="Open your account today and experience the next-gen banking" />
              </div>
            </div>
            <div className="account-section__card-container relative grid-cols-2 gap-[23px] max-md:space-y-5  md:grid">
              <div className=" card-content card-left h-[237px] w-full">
                <p className="text-xl leading-[150%] text-neutral-color-neutral-800">
                  Pay anywhere
                </p>
                <button className="pb-5 text-base text-[#055F5B] underline">
                  Browse
                </button>
              </div>
              <div className=" card-content card-right h-[237px] w-full bg-[#ffd584] bg-opacity-20">
                <p className="text-xl leading-[150%] text-neutral-color-neutral-800">
                  Manage your assets
                </p>
                <button className="pb-5 text-base text-[#055F5B] underline">
                  Browse
                </button>
              </div>
            </div>
          </div>
          <div className=" h-full bg-neutral-color-neutral-200 px-3 py-10 max-xl:mt-10 md:px-10  md:py-20  xl:col-start-8 xl:w-[526px]">
            <Form></Form>
          </div>
        </div>
      </div>
      <div className="visa-card_bg absolute hidden xl:block">
        <Image src={visaCard} alt="Visa Card" />
      </div>
      <div className="absolute  z-40 hidden xxl:right-[7%] xxl:top-[15%] xxl:block ">
        <Image src={workStep} alt="right Arrow" className="animate-pulse" />
      </div>
    </section>
  );
};
