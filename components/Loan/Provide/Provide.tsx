import { SectionHeading } from "@/components/shared/SectionHeading";
import Image from "next/image";
import React from "react";
import { AiOutlineBank } from "react-icons/ai";
import allTypeLoan from "@/public/images/all_type_loan.png";

export const Provide = () => {
  return (
    <section>
      <div className="section-gap container max-sm:px-2">
        <div className="mx-auto mb-[60px]  text-center lg:max-w-[485px]">
          <SectionHeading title="Gobank Provide All Type of Loan" />
        </div>
        <div className="grid-cols-12 lg:grid">
          <div className="col-span-10 col-start-2 grid-cols-10 items-center justify-between border border-neutral-color-neutral-300 bg-neutral-color-neutral-200 lg:grid">
            <div className="col-span-5 py-5 ps-5 md:py-10 md:ps-10 lg:py-[60px] lg:ps-[60px]">
              <div className="mb-5 w-max rounded-md bg-primary-color-2 p-2 md:mb-8 md:p-4 lg:mb-10 lg:p-[20px]">
                <AiOutlineBank className=" text-2xl md:text-[32px] xl:text-[50px]" />
              </div>
              <h3
                className={`max-w-[434px] font-montserrat text-xl font-semibold leading-[130%] text-neutral-color-neutral-800 md:text-[24px]`}
              >
                Whatever the occasion or requirement,
              </h3>
              <p className="text-neutral-color-neutral-700 mt-3 text-base leading-[150%] md:mt-6 md:text-lg ">
                make a smart financial choice with City Bank Personal Loan to
                fulfill all your dreams, reach new heights and make your day to
                day journey of life joyful.
              </p>
            </div>
            <div className="col-span-12 col-start-7 hidden lg:block">
              <Image src={allTypeLoan} alt="All type Loan" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
