import React from "react";
import forLoan from "@/public/images/for_loan.png";
import Image from "next/image";
import { Form } from "./Form";

export const ApplyForLoan = () => {
  return (
    <section className="overflow-hidden">
      <div className="section-gap container ">
        <div className="items-center xl:grid xl:grid-cols-12 ">
          <div className="border-[rgba(25, 27, 26, 0.10)] col-span-6 border bg-section-bg pb-10 md:pb-14 lg:pb-20">
            <div className="px-10 pt-[58px]  ">
              <p className="mb-[60px] font-montserrat text-2xl font-semibold leading-[130%]">
                Apply for a Loan
              </p>
              <Form />
            </div>
          </div>
          <div className=" col-start-8 col-end-13 hidden xl:block">
            <div className="full-width-image">
              <Image src={forLoan} alt="For Loan Image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
