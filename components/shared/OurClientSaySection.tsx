import { SectionHeading } from "@/components/shared/SectionHeading";
import Image from "next/image";
import React from "react";
import client from "@/public/images/client.png";
import { SectionText } from "@/components/shared/SectionText";
import { SliderNavigation } from "@/components/shared/SliderNavigation";
import star from "@/public/images/testimonial_vector.png";

export const OurClientSaySection = () => {
  return (
    <section className="our-client-section bg-section-bg">
      <div className="my-container py-[120px]">
        <div className="text-center">
          <SectionHeading title="What Our Client's Say" />
        </div>
        <div className="grid grid-cols-2 my-[60px] items-center">
          <div className="relative">
            <Image src={client} alt="Client" />

            <Image
              src={star}
              alt="Star"
              className="absolute top-0 left-[-10%] -z-10 "
            />
          </div>
          <div className="">
            <span className="material-symbols-outlined rotate-180 text-[#055F5B]">
              format_quote
            </span>
            <div className="mt-3">
              <SectionText text="Capital One has a great website and mobile app that are easy to use and provide a lot of helpful features. I also appreciate their credit monitoring and fraud protection services." />
            </div>
            <div>
              <p className="text-[#292C32] text-lg mt-[60px]">Jon Copper</p>
              <p className=" text-[#6F7278]">
                Developer, <span className="text-[#292C32]">Joperki</span>
              </p>
            </div>
          </div>
        </div>
        <SliderNavigation />
      </div>
    </section>
  );
};
