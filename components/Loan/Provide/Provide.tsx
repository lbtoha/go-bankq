import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";
import { titleFont } from "@/utils/fonts";
import Image from "next/image";
import React from "react";
import { AiOutlineBank } from "react-icons/ai";
import allTypeLoan from "@/public/images/all_type_loan.png";

export const Provide = () => {
  return (
    <section>
      <div className="my-container section-gap">
        <div className="text-center max-w-[485px] mx-auto mb-[60px]">
          <SectionHeading title="Gobank Provide All Type of Loan" />
        </div>
        <div className="grid grid-cols-12">
          <div className="col-start-2 col-span-10 border border-[#E7E9EE] bg-[#FAFAFC] grid grid-cols-10 items-center justify-between">
            <div className="col-span-5 py-[60px] ps-[60px]">
              <div className="bg-primary-color-2 p-[20px] w-max mb-10 rounded-md">
                <AiOutlineBank className="text-[50px]" />
              </div>
              <h3
                className={`text-[24px] font-semibold leading-[130%] text-sub-title-color font-montserrat`}
              >
                Whatever the occasion or requirement,
              </h3>
              <p className="text-[#494A4D] text-lg leading-[150%] mt-6 ">
                make a smart financial choice with City Bank Personal Loan to
                fulfill all your dreams, reach new heights and make your day to
                day journey of life joyful.
              </p>
            </div>
            <div className="col-start-7 col-span-12">
              <Image src={allTypeLoan} alt="All type Loan" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
