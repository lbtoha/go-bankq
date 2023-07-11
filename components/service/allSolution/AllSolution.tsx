import { SectionHeading } from "@/components/shared/SectionHeading";
import Image from "next/image";
import React from "react";
import solutionImage from "@/public/images/service_solution.png";
import { Icon } from "@/components/shared/Icon";
import { MdOutlineSecurity } from "react-icons/md";

export const AllSolution = () => {
  return (
    <section>
      <div className="my-container my-[120px]">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-5  ">
            <SectionHeading title="All Solution In One Place" />
            <div className="space-y-[37px]">
              <div className="flex gap-5 items-center mt-6">
                <Icon padding="p-2">
                  <MdOutlineSecurity className="text-xl text-primary-color-1" />
                </Icon>
                <div>
                  <p>
                    <span className="text-[#292C32] font-semibold">
                      Loan Facilities{" "}
                    </span>
                    Beyond Banking Basics Exploring Specialized
                  </p>
                </div>
              </div>
              <div className="flex gap-5 items-center mt-6">
                <Icon padding="p-2">
                  <MdOutlineSecurity className="text-xl text-primary-color-1" />
                </Icon>
                <div>
                  <p>
                    <span className="text-[#292C32] font-semibold">Card </span>
                    Beyond Banking Basics Exploring Specialized
                  </p>
                </div>
              </div>
              <div className="flex gap-5 items-center mt-6">
                <Icon padding="p-2">
                  <MdOutlineSecurity className="text-xl text-primary-color-1" />
                </Icon>
                <div>
                  <p>
                    <span className="text-[#292C32] font-semibold">
                      Finanace and banking{" "}
                    </span>
                    Beyond Banking Basics Exploring Specialized
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-start-7 col-span-full">
            <Image src={solutionImage} alt="Service Solution" />
          </div>
        </div>
      </div>
    </section>
  );
};
