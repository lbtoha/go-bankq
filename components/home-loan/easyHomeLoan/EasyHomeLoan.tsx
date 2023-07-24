import Image from "next/image";
import React from "react";
import lowInterest from "@/public/images/low_interest.png";
import lowInterestInner from "@/public/images/low_interest_inner.png";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AiOutlineBank } from "react-icons/ai";

export const EasyHomeLoan = () => {
  return (
    <section>
      <div className="section-gap horizontal-gap container">
        <div className="grid-cols-12 items-center justify-between xl:grid">
          <div className="col-span-6 hidden xl:block">
            <Image src={lowInterest} alt="Low interest" />
          </div>
          <div className="col-start-8 col-end-13">
            <SectionHeading title="Make your dream home a reality with easy home loans" />
            <div>
              <div className="mt-10 grid items-center justify-between xl:grid-cols-5">
                <div className="col-span-2 me-5 hidden md:block">
                  <Image src={lowInterestInner} alt="Low interest inner" />
                </div>
                <div className="col-span-5 col-start-3">
                  <div>
                    <AiOutlineBank className="text-[50px] text-primary-color-1" />
                  </div>
                  <p className="mt-3 font-montserrat text-[20px] font-semibold leading-[130%] text-[#292C32]">
                    Low interest amount{" "}
                  </p>
                  <p className="mt-[18px] text-base leading-[150%] text-[#6F7278]">
                    Interest rates: Home loan interest rates can be fixed or
                    adjustable, depending on the loan type. A fixed-rate
                    mortgage has an interest rate that remains the same over the
                    life of the loan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
