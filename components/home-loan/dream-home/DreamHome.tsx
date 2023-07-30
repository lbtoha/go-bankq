import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";
import Image from "next/image";
import React from "react";
import yourDream from "@/public/images/your_dream.png";

export const DreamHome = () => {
  return (
    <section>
      <div className="section-gap container  max-sm:px-2">
        <div className="mx-auto mb-8 max-w-[557px] text-center md:mb-0 lg:mb-[60px]">
          <SectionHeading title="Make Your Dream Home a Reality" />
          <div className="mt-4 md:mt-6">
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
