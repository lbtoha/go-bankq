import Image from "next/image";
import React from "react";
import lowInterest from "@/public/images/low_interest.png";
import lowInterestInner from "@/public/images/low_interest_inner.png";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AiOutlineBank } from "react-icons/ai";

export const EasyHomeLoan = () => {
  return (
    <section>
      <div className="my-container section-gap">
        <div className="grid grid-cols-12 items-center justify-between">
          <div className="col-span-6">
            <Image src={lowInterest} alt="Low interest" />
          </div>
          <div className="col-start-8 col-end-13">
            <SectionHeading title="Make your dream home a reality with easy home loans" />
            <div>
              <div className="mt-10 grid grid-cols-5 items-center justify-between">
                <div className="col-span-2">
                  <Image src={lowInterestInner} alt="Low interest inner" />
                </div>
                <div className="col-start-3 col-span-5">
                  <div>
                    <AiOutlineBank className="text-primary-color-1 text-[50px]" />
                  </div>
                  <p className="text-[20px] font-montserrat leading-[130%] text-[#292C32] font-semibold mt-3">
                    Low interest amount{" "}
                  </p>
                  <p className="text-base leading-[150%] text-[#6F7278] mt-[18px]">
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
