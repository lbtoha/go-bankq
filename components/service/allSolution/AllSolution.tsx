import { SectionHeading } from "@/components/shared/SectionHeading";
import Image from "next/image";
import React from "react";
import solutionImage from "@/public/images/service_solution.png";
import { IconLightBg } from "@/components/shared/Icon";

export const AllSolution = () => {
  return (
    <section>
      <div className="section-gap horizontal-gap container">
        <div className="items-center md:grid-cols-1  lg:grid lg:grid-cols-12">
          <div className="col-span-5">
            <div className="mb-6 max-w-[416px]">
              <SectionHeading title="All Solution In One Place" />
            </div>
            <div className="space-y-5 lg:space-y-9">
              <div className="mt-6 flex items-center gap-5">
                <IconLightBg iconName="arming_countdown" />
                <div>
                  <p className="text-base md:text-lg">
                    <span className="font-semibold text-neutral-color-neutral-800">
                      Loan Facilities{" "}
                    </span>
                    Beyond Banking Basics Exploring Specialized
                  </p>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-5">
                <IconLightBg iconName="arming_countdown" />
                <div>
                  <p className="text-base md:text-lg">
                    <span className="font-semibold text-neutral-color-neutral-800">
                      Card{" "}
                    </span>
                    Beyond Banking Basics Exploring Specialized
                  </p>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-5">
                <IconLightBg iconName="arming_countdown" />
                <div>
                  <p className="text-base md:text-lg">
                    <span className="font-semibold text-neutral-color-neutral-800">
                      Finanace and banking{" "}
                    </span>
                    Beyond Banking Basics Exploring Specialized
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-start-7  col-end-13 mb-4 hidden lg:mb-0 lg:block">
            <Image src={solutionImage} alt="Service Solution" />
          </div>
        </div>
      </div>
    </section>
  );
};
