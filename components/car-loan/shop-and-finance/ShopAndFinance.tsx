import React from "react";
import nextCar from "@/public/images/next_vehicle.png";
import Image from "next/image";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";
import { Button } from "@/components/shared/Button";

export const ShopAndFinance = () => {
  return (
    <section>
      <div className="my-container section-gap">
        <div className="grid grid-cols-12 items-center justify-between">
          <div className="col-span-5">
            <Image src={nextCar} alt="Next Car Image" />
          </div>
          <div className="col-start-8 col-span-12">
            <div className="mb-6">
              <SectionHeading title="Shop and finance your next vehicle all in one place." />
            </div>
            <SectionText text="Similar to home loans, you can begin by getting preapproved for a car loan. This involves providing basic financial information to a lender, who will then give you an estimate of how much you can afford to borrow and what interest rate you may qualify for." />
            <div className="mt-5 text-[20px] text-[#292C32] leading-[150%] flex gap-[30px] items-center mb-10">
              <span>As low as 5.12% APR</span> <span>up to 12 months</span>
            </div>
            <Button text="Apply now" url="/" />
          </div>
        </div>
      </div>
    </section>
  );
};
