import { Button } from "@/components/shared/Button";
import { ButtonOutline } from "@/components/shared/ButtonOutline";
import { SectionHeading } from "@/components/shared/SectionHeading";
import Image from "next/image";
import React from "react";
import callToActionLeft from "@/public/images/call-to-action-vactor2.png";
import callToActionRight from "@/public/images/call-to-action-vactor.png";

export const OpenAccountSection = () => {
  return (
    <section className="open-account-section section-gap relative ">
      <div className="container  text-center">
        <div className=" mx-auto mb-[60px] max-w-[761px] text-center text-white">
          <h2 className="font-montserrat text-[25px] font-bold leading-[120%] text-white md:text-[35px] lg:text-[40px]">
            Open your account today and experience the next-gen banking
          </h2>
        </div>
        <div className="mt-[60px] flex justify-center gap-2 md:gap-6">
          <div>
            <Button text="Get Started" url="/" />
          </div>
          <div className="text-white">
            <ButtonOutline text="contact" url="/" />
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
