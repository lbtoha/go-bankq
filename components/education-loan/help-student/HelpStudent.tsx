import Image from "next/image";
import React from "react";
import educationLoanImage from "@/public/images/education_loan.png";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";
import { Icon, IconLightBg } from "@/components/shared/Icon";
import { MdOutlineSecurity } from "react-icons/md";

export const HelpStudent = () => {
  return (
    <section>
      <div className="section-gap container">
        <div className=" mb-[60px] flex justify-center">
          <Image src={educationLoanImage} alt="Education Loan" />
        </div>
        <div className="mx-auto max-w-[856px] text-center">
          <SectionHeading title="Education loans are designed to help students and their families pay" />
          <div className="mb-[60px] mt-[15px]">
            <SectionText text="The cost of higher education, including tuition, fees, books, and living expenses." />
          </div>
        </div>
        <div>
          <div className="grid items-center justify-between gap-3 max-md:space-y-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-6">
            <div className="px-2 text-center lg:px-5">
              <div className="mb-5 flex justify-center">
                <IconLightBg iconName="arming_countdown" />
              </div>
              <p>
                <span className="font-semibold text-[#292C32]">
                  Finanace and banking{" "}
                </span>
                Beyond Banking Basics Exploring Specialized
              </p>
            </div>
            <div className="px-2 text-center lg:px-5">
              <div className="mb-5 flex justify-center">
                <IconLightBg iconName="arming_countdown" />
              </div>
              <p>
                <span className="font-semibold text-[#292C32]">
                  Loans specifically{" "}
                </span>
                designed to support students pursuing
              </p>
            </div>
            <div className="px-2 text-center lg:px-5">
              <div className="mb-5 flex justify-center">
                <IconLightBg iconName="arming_countdown" />
              </div>
              <p>
                <span className="font-semibold text-[#292C32]">
                  Loan Facilities{" "}
                </span>
                Beyond Banking Basics Exploring Specialized
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
