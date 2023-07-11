import Image from "next/image";
import React from "react";
import OurValuesImage from "@/public/images/our-values.png";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";

export const OurValues = () => {
  return (
    <section>
      <div className="my-container mb-[120px]">
        <div className="grid-2-center gap-[138px]">
          <div>
            <Image src={OurValuesImage} alt="Our Values" />
          </div>
          <div className="space-y-6">
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
