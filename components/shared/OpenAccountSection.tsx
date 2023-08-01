import { Button } from "@/components/shared/Button";
import Image from "next/image";
import React from "react";
import callToActionLeft from "@/public/images/call-to-action-vactor2.png";
import callToActionRight from "@/public/images/call-to-action-vactor.png";

export const OpenAccountSection = () => {
  return (
    <section className="open-account-section section-gap relative ">
      <div className="container  text-center">
        <div className=" text-white mx-auto mb-10 max-w-[761px] text-center md:mb-[60px]">
          <h2 className="text-white font-montserrat text-[25px] font-bold leading-[120%] md:text-[35px] lg:text-[40px]">
            Open your account today and experience the next-gen banking
          </h2>
        </div>
        <div className=" flex justify-center gap-2  md:gap-6">
          <div>
            <Button btnType="btnPrimary" text="Get Started" url="/" />
          </div>
          <div className="text-white">
            <button
              className="border-white text-white custom-transition
         border px-3 py-[10px] text-base font-medium hover:border-primary-color-2 hover:bg-primary-color-2 hover:text-neutral-color-neutral-800 sm:text-lg md:px-10 md:py-[15px]"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[40%] left-[5%] hidden md:bottom-[30%] md:left-[15%] lg:block ">
        <Image className="w-[100%]" src={callToActionLeft} alt="Left Arrow" />
      </div>
      <div className=" absolute bottom-[40%] right-[5%] hidden md:bottom-[35%] md:right-[15%] lg:block">
        <Image className="w-[100%]" src={callToActionRight} alt="Left Arrow" />
      </div>
    </section>
  );
};
