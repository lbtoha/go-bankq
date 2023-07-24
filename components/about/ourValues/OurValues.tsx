import Image from "next/image";
import React from "react";
import OurValuesImage from "@/public/images/our-values.png";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";

export const OurValues = () => {
  return (
    <section>
      <div className="section-gap horizontal-gap container">
        <div className="grid-2-center grid-cols-1 md:grid-cols-2">
          <div>
            <Image src={OurValuesImage} alt="Our Values" />
          </div>
          <div className="mt-5 space-y-6 md:mt-0">
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
