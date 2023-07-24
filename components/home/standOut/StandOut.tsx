import React from "react";
import { titleFont } from "@/utils/fonts";
import Image from "next/image";
import feature from "@/public/images/feature.png";
import { BsArrowUpRight, BsLaptop, BsLightbulb } from "react-icons/bs";
import { RiCustomerService2Line, RiSecurePaymentLine } from "react-icons/ri";
import { SectionHeading } from "@/components/shared/SectionHeading";

export const StandOut = () => {
  return (
    <section className="horizontal-gap relative  bg-[#055F5B] text-white">
      <div className="section-gap container">
        <div className="md:grid-w md:grid- grid-cols-1 items-center sm:grid-cols-2 md:gap-6  xl:grid">
          <div className="standOut-section-title relative">
            <h3
              className={`mb-5 mt-6 font-montserrat text-[25px] font-bold leading-[120%] text-white md:text-[35px] lg:text-[40px]`}
            >
              What makes us stand out from the rest?
            </h3>
            <div className="mt-[60px] grid-cols-2 md:grid ">
              <div className="mb-9 gap-6">
                <div className="mb-[13px] flex items-center gap-4">
                  <div className="w-max rounded-full bg-primary-color-2 p-2">
                    <BsLightbulb className="text-xl" />
                  </div>
                  <span
                    className={`font-montserrat text-xl font-semibold leading-[130%]`}
                  >
                    Innovation
                  </span>
                </div>
                <p className="text-lg font-normal leading-[150%]">
                  In today's digital age, customers have high expectations when
                  it come.
                </p>
              </div>
              <div className="mb-9 gap-6">
                <div className="mb-[13px] flex items-center gap-4">
                  <div className="w-max rounded-full bg-primary-color-2 p-2">
                    <RiSecurePaymentLine className="text-xl" />
                  </div>
                  <span
                    className={`font-montserrat text-xl font-semibold leading-[130%]`}
                  >
                    Security
                  </span>
                </div>
                <p className="text-lg font-normal leading-[150%]">
                  In today's digital age, customers have high expectations when
                  it come.
                </p>
              </div>
              <div className="mb-9 gap-6">
                <div className="mb-[13px] flex items-center gap-4">
                  <div className="w-max rounded-full bg-primary-color-2 p-2">
                    <RiCustomerService2Line className="text-xl" />
                  </div>
                  <span
                    className={`font-montserrat text-xl font-semibold leading-[130%]`}
                  >
                    Service
                  </span>
                </div>
                <p className="text-lg font-normal leading-[150%]">
                  In today's digital age, customers have high expectations when
                  it come.
                </p>
              </div>
              <div className="mb-9 gap-6">
                <div className="mb-[13px] flex items-center gap-4">
                  <div className="w-max rounded-full bg-primary-color-2 p-2">
                    <BsLaptop className="text-xl" />
                  </div>
                  <span
                    className={`font-montserrat text-xl font-semibold leading-[130%]`}
                  >
                    Technology
                  </span>
                </div>
                <p className="text-lg font-normal leading-[150%]">
                  In today's digital age, customers have high expectations when
                  it come.
                </p>
              </div>
            </div>
          </div>
          <div className="z-20  -order-1 hidden lg:ms-[125px] xl:block">
            <Image src={feature} alt="Feature" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 hidden h-3/4 w-1/4 bg-gray-50 opacity-10 xl:block"></div>
    </section>
  );
};
