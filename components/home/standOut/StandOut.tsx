import React from "react";
import Image from "next/image";
import feature from "@/public/images/feature.png";
import { BsLaptop, BsLightbulb } from "react-icons/bs";
import { RiCustomerService2Line, RiSecurePaymentLine } from "react-icons/ri";

export const StandOut = () => {
  return (
    <section className=" relative bg-[#055F5B] text-white max-sm:px-2">
      <div className="section-gap container">
        <div className="items-center lg:grid lg:grid-cols-2  xl:grid  xl:grid-cols-12">
          <div className="section-top-mark relative lg:grid-cols-1 xl:col-span-6 xl:col-start-1">
            <h3
              className={`font-montserrat text-[25px] font-bold leading-[120%] text-white md:text-[35px] lg:mt-10 lg:text-[40px]`}
            >
              What makes us stand out from the rest?
            </h3>
            <div className="mt-8  grid-cols-2 max-md:space-y-7 md:grid md:gap-x-6 md:gap-y-5 lg:mt-[50px] xl:mt-[60px] ">
              <div className="gap-6">
                <div className="mb-[13px] flex items-center gap-4">
                  <div className="w-max rounded-full bg-primary-color-2 p-2">
                    <BsLightbulb className="text-xl text-primary-color-1" />
                  </div>
                  <span
                    className={`font-montserrat text-xl font-semibold leading-[130%]`}
                  >
                    Innovation
                  </span>
                </div>
                <p className="text-base font-normal leading-[150%] md:text-lg">
                  In today&apos;s digital age, customers have high expectations
                  when it come.
                </p>
              </div>
              <div className="gap-6">
                <div className="mb-[13px] flex items-center gap-4">
                  <div className="w-max rounded-full bg-primary-color-2 p-2">
                    <RiSecurePaymentLine className="text-xl text-primary-color-1" />
                  </div>
                  <span
                    className={`font-montserrat text-xl font-semibold leading-[130%]`}
                  >
                    Security
                  </span>
                </div>
                <p className="text-base font-normal leading-[150%] md:text-lg">
                  In today&apos;s digital age, customers have high expectations
                  when it come.
                </p>
              </div>
              <div className="gap-6">
                <div className="mb-[13px] flex items-center gap-4">
                  <div className="w-max rounded-full bg-primary-color-2 p-2">
                    <RiCustomerService2Line className="text-xl text-primary-color-1" />
                  </div>
                  <span
                    className={`font-montserrat text-xl font-semibold leading-[130%]`}
                  >
                    Service
                  </span>
                </div>
                <p className="text-base font-normal leading-[150%] md:text-lg">
                  In today&apos;s digital age, customers have high expectations
                  when it come.
                </p>
              </div>
              <div className="gap-6">
                <div className="mb-[13px] flex items-center gap-4">
                  <div className="w-max rounded-full bg-primary-color-2 p-2">
                    <BsLaptop className="text-xl text-primary-color-1" />
                  </div>
                  <span
                    className={`font-montserrat text-xl font-semibold leading-[130%]`}
                  >
                    Technology
                  </span>
                </div>
                <p className="text-base font-normal leading-[150%] md:text-lg">
                  In today&apos;s digital age, customers have high expectations
                  when it come.
                </p>
              </div>
            </div>
          </div>
          <div className="  hidden  lg:block lg:grid-cols-1 xl:col-start-8 xl:col-end-13 ">
            <Image src={feature} alt="Feature" className="w-full" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 hidden h-3/4 w-1/4 bg-gray-50 opacity-10 xl:block 3xl:hidden"></div>
    </section>
  );
};
