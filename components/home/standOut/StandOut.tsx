import React from "react";
import { titleFont } from "@/utils/fonts";
import Image from "next/image";
import feature from "@/public/images/feature.png";
import { BsArrowUpRight, BsLaptop, BsLightbulb } from "react-icons/bs";
import { RiCustomerService2Line, RiSecurePaymentLine } from "react-icons/ri";

export const StandOut = () => {
  return (
    <section className="bg-[#055F5B] text-white relative">
      <div className="my-container pt-[180px]">
        <div className="grid grid-cols-2 items-center">
          <div className="standOut-section-title relative">
            <h3
              className={`font-montserrat text-[25px] md:text-[35px] lg:text-[40px] font-bold leading-[120%] mt-6 mb-5 text-white`}
            >
              What makes us stand out from the rest?
            </h3>
            <div className="grid grid-cols-2 mt-[60px] ">
              <div className="gap-6 mb-9">
                <div className="flex gap-4 items-center mb-[13px]">
                  <div className="bg-primary-color-2 w-max p-2 rounded-full">
                    <BsLightbulb className="text-xl" />
                  </div>
                  <span
                    className={`text-xl font-semibold leading-[130%] font-montserrat`}
                  >
                    Innovation
                  </span>
                </div>
                <p className="text-lg leading-[150%] font-normal">
                  In today's digital age, customers have high expectations when
                  it come.
                </p>
              </div>
              <div className="gap-6 mb-9">
                <div className="flex gap-4 items-center mb-[13px]">
                  <div className="bg-primary-color-2 w-max p-2 rounded-full">
                    <RiSecurePaymentLine className="text-xl" />
                  </div>
                  <span
                    className={`text-xl font-semibold leading-[130%] font-montserrat`}
                  >
                    Security
                  </span>
                </div>
                <p className="text-lg leading-[150%] font-normal">
                  In today's digital age, customers have high expectations when
                  it come.
                </p>
              </div>
              <div className="gap-6 mb-9">
                <div className="flex gap-4 items-center mb-[13px]">
                  <div className="bg-primary-color-2 w-max p-2 rounded-full">
                    <RiCustomerService2Line className="text-xl" />
                  </div>
                  <span
                    className={`text-xl font-semibold leading-[130%] font-montserrat`}
                  >
                    Service
                  </span>
                </div>
                <p className="text-lg leading-[150%] font-normal">
                  In today's digital age, customers have high expectations when
                  it come.
                </p>
              </div>
              <div className="gap-6 mb-9">
                <div className="flex gap-4 items-center mb-[13px]">
                  <div className="bg-primary-color-2 w-max p-2 rounded-full">
                    <BsLaptop className="text-xl" />
                  </div>
                  <span
                    className={`text-xl font-semibold leading-[130%] font-montserrat`}
                  >
                    Technology
                  </span>
                </div>
                <p className="text-lg leading-[150%] font-normal">
                  In today's digital age, customers have high expectations when
                  it come.
                </p>
              </div>
            </div>
          </div>
          <div className="ms-[125px] mb-[120px] z-20">
            <Image src={feature} alt="Feature" />
          </div>
        </div>
      </div>
      <div className="absolute w-1/4 h-3/4 bg-gray-50 opacity-10 bottom-0 right-0 "></div>
    </section>
  );
};
