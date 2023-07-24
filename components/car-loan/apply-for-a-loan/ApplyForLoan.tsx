import React from "react";
import forLoan from "@/public/images/for_loan.png";
import Image from "next/image";
import { Form } from "./Form";

export const ApplyForLoan = () => {
  return (
    <section>
      <div className="section-gap container">
        <div className="items-center xl:grid xxl:grid-cols-12 ">
          <div className="col-span-6 bg-section-bg pb-20">
            <div className="px-10 pt-[58px]  ">
              <p className="mb-[60px] font-montserrat text-2xl font-semibold leading-[130%]">
                Apply for a Loan
              </p>
              <Form />
            </div>
          </div>
          <div className="col-start-8 col-end-13 hidden xxl:block">
            <Image
              src={forLoan}
              alt="For Loan Image"
              className="xxl:max-w-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
