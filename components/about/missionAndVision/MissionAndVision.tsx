import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";
import { textFont } from "@/utils/fonts";
import React from "react";
import { MissionSlider } from "./MissionSlider";

export const MissionAndVision = () => {
  return (
    <section className="overflow-clip bg-neutral-color-neutral-200 max-sm:px-2">
      <div className="section-gap container">
        <div className="mb-7 grid-cols-12 gap-5 md:mb-10 lg:mb-[60px] lg:grid ">
          <div className="col-start-1 col-end-6 space-y-3 max-lg:mb-7  md:space-y-4 lg:space-y-6">
            <SectionHeading title="Our mission" />
            <div className="md:max-w-[526px]">
              <SectionText text="Credit cards typically have a credit limit, which is the maximum amount that the cardholder can borrow at any given time. The cardholder is responsible for making payments on time, and if they do not." />
            </div>
          </div>
          <div className="col-start-7 col-end-12 space-y-3 max-lg:mt-5 md:space-y-4 lg:space-y-6">
            <SectionHeading title="Our vision" />
            <div className={textFont.className}>
              <div className="lg:max-w-[526px]">
                <SectionText text="Credit cards typically have a credit limit, which is the maximum amount that the cardholder can borrow at any given time. The cardholder is responsible for making payments on time, and if they do not." />
              </div>
            </div>
          </div>
        </div>
        {/* mission and vision slider */}
        <MissionSlider />
      </div>
    </section>
  );
};
