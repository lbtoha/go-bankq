import { Button } from "@/components/shared/Button";
import { ButtonOutline } from "@/components/shared/ButtonOutline";
import { SectionHeading } from "@/components/shared/SectionHeading";
import Image from "next/image";
import React from "react";
import callToActionLeft from "@/public/images/call-to-action-vactor2.png";
import callToActionRight from "@/public/images/call-to-action-vactor.png";

export const OpenAccountSection = () => {
  return (
    <section className="open-account-section relative">
      <div className="my-container text-center py-[120px]">
        <div className=" text-white text-center max-w-[761px] mx-auto mb-[60px]">
          <h2 className="font-montserrat text-[25px] md:text-[35px] lg:text-[40px] font-bold leading-[120%] text-white">
            Open your account today and experience the next-gen banking
          </h2>
        </div>
        <div className="flex justify-center gap-2 mt-[60px]">
          <div>
            <Button text="Get Started" url="/" />
          </div>
          <div className="text-white">
            <ButtonOutline text="contact" url="/" />
          </div>
        </div>
      </div>
      <div className="absolute left-[15%] bottom-[30%]">
        <Image className="w-[100%]" src={callToActionLeft} alt="Left Arrow" />
      </div>
      <div className=" absolute right-[15%] bottom-[35%]">
        <Image className="w-[100%]" src={callToActionRight} alt="Left Arrow" />
      </div>
    </section>
  );
};
