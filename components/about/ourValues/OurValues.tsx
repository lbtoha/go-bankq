import Image from "next/image";
import React from "react";
import OurValuesImage from "@/public/images/our-values.png";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";

export const OurValues = () => {
  return (
    <section>
      <div className="container pb-[50px] max-sm:px-2 md:pb-[60px] lg:pb-[70px] xl:pb-[120px]">
        <div className="grid-cols-12 items-center md:grid md:max-lg:gap-4">
          <div className="md:col-span-6">
            <Image src={OurValuesImage} alt="Our Values" />
          </div>
          <div className="mt-5 space-y-6 md:col-start-7 md:col-end-13 md:mt-0 lg:col-start-8">
            <SectionHeading title="Our values help us set the bar for good banking high." />
            <div className="max-w-[474px]">
              <SectionText text="Our values define us. They guide us in building and improving our product, hiring teammates, and serving our customers." />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
