import Image from "next/image";
import React from "react";
import educationLoanImage from "@/public/images/education_loan.png";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";
import { Icon } from "@/components/shared/Icon";
import { MdOutlineSecurity } from "react-icons/md";

export const HelpStudent = () => {
  return (
    <section>
      <div className="my-container section-gap">
        <div className=" flex justify-center mb-[60px]">
          <Image src={educationLoanImage} alt="Education Loan" />
        </div>
        <div className="max-w-[856px] mx-auto text-center">
          <SectionHeading title="Education loans are designed to help students and their families pay" />
          <div className="mt-[15px] mb-[60px]">
            <SectionText text="The cost of higher education, including tuition, fees, books, and living expenses." />
          </div>
        </div>
        <div>
          <div className="grid grid-cols-3 items-center justify-between gap-6">
            <div className="text-center px-5">
              <div className="flex justify-center mb-5">
                <Icon padding="p-2">
                  <MdOutlineSecurity className="text-xl text-primary-color-1" />
                </Icon>
              </div>
              <p>
                <span className="text-[#292C32] font-semibold">
                  Finanace and banking{" "}
                </span>
                Beyond Banking Basics Exploring Specialized
              </p>
            </div>
            <div className="text-center px-5">
              <div className="flex justify-center mb-5">
                <Icon padding="p-2">
                  <MdOutlineSecurity className="text-xl text-primary-color-1" />
                </Icon>
              </div>
              <p>
                <span className="text-[#292C32] font-semibold">
                  Loans tailored for{" "}
                </span>
                students pursuing education through online learning
              </p>
            </div>
            <div className="text-center px-5">
              <div className="flex justify-center mb-5">
                <Icon padding="p-2">
                  <MdOutlineSecurity className="text-xl text-primary-color-1" />
                </Icon>
              </div>
              <p>
                <span className="text-[#292C32] font-semibold">
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
