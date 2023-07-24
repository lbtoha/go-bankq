import { SectionHeading } from "@/components/shared/SectionHeading";
import Image from "next/image";
import React from "react";
import solutionImage from "@/public/images/service_solution.png";
import { Icon } from "@/components/shared/Icon";
import { MdOutlineSecurity } from "react-icons/md";

export const AllSolution = () => {
  return (
    <section>
      <div className="section-gap horizontal-gap container">
        <div className="grid items-center md:grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading title="All Solution In One Place" />
            <div className="space-y-[37px]">
              <div className="mt-6 flex items-center gap-5">
                <Icon padding="p-2">
                  <MdOutlineSecurity className="text-xl text-primary-color-1" />
                </Icon>
                <div>
                  <p>
                    <span className="font-semibold text-[#292C32]">
                      Loan Facilities{" "}
                    </span>
                    Beyond Banking Basics Exploring Specialized
                  </p>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-5">
                <Icon padding="p-2">
                  <MdOutlineSecurity className="text-xl text-primary-color-1" />
                </Icon>
                <div>
                  <p>
                    <span className="font-semibold text-[#292C32]">Card </span>
                    Beyond Banking Basics Exploring Specialized
                  </p>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-5">
                <Icon padding="p-2">
                  <MdOutlineSecurity className="text-xl text-primary-color-1" />
                </Icon>
                <div>
                  <p>
                    <span className="font-semibold text-[#292C32]">
                      Finanace and banking{" "}
                    </span>
                    Beyond Banking Basics Exploring Specialized
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="-order-1 mb-4 hidden lg:col-span-full lg:col-start-7 lg:mb-0 lg:block">
            <Image src={solutionImage} alt="Service Solution" />
          </div>
        </div>
      </div>
    </section>
  );
};
