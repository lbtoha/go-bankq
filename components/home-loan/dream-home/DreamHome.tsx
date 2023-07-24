import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";
import Image from "next/image";
import React from "react";
import yourDream from "@/public/images/your_dream.png";

export const DreamHome = () => {
  return (
    <section>
      <div className="section-gap horizontal-gap container">
        <div className="mx-auto mb-[60px] max-w-[557px] text-center">
          <SectionHeading title="Make Your Dream Home a Reality" />
          <div className="mt-6">
            <SectionText text="Make your dream home a reality with easy home loans from City Bank. Our wide range of options is designed" />
          </div>
        </div>
        <div className="flex justify-center">
          <Image src={yourDream} alt="Your Dram" />
        </div>
      </div>
    </section>
  );
};
