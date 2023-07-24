import React from "react";
import nextCar from "@/public/images/next_vehicle.png";
import Image from "next/image";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";
import { Button } from "@/components/shared/Button";

export const ShopAndFinance = () => {
  return (
    <section>
      <div className="section-gap horizontal-gap container">
        <div className="grid items-center justify-between  md:grid-cols-12 md:justify-items-center md:gap-4 xl:gap-0">
          <div className="hidden md:col-span-4  md:block xl:col-span-5">
            <Image src={nextCar} alt="Next Car Image" className="" />
          </div>
          <div className="md:col-span-12 md:col-start-5 xl:col-span-12 xl:col-start-8">
            <div className="mb-6">
              <SectionHeading title="Shop and finance your next vehicle all in one place." />
            </div>
            <SectionText text="Similar to home loans, you can begin by getting preapproved for a car loan. This involves providing basic financial information to a lender, who will then give you an estimate of how much you can afford to borrow and what interest rate you may qualify for." />
            <div className="mb-5 mt-5 flex text-lg leading-[150%] text-[#292C32]  max-md:flex-col max-md:space-y-4 md:items-center md:text-[20px] lg:mb-10 lg:gap-[30px]">
              <span>As low as 5.12% APR</span> <span>up to 12 months</span>
            </div>
            <Button text="Apply now" url="/" />
          </div>
        </div>
      </div>
    </section>
  );
};
