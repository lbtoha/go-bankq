import React from "react";
import forLoan from "@/public/images/for_loan.png";
import Image from "next/image";
import { Form } from "./Form";

export const ApplyForLoan = () => {
  return (
    <section>
      <div className="my-container section-gap">
        <div className="grid grid-cols-12 items-center ">
          <div className="col-span-6 bg-section-bg pb-20">
            <div className="px-10 pt-[58px]  ">
              <p className="text-2xl font-semibold font-montserrat leading-[130%] mb-[60px]">
                Apply for a Loan
              </p>
              <Form />
            </div>
          </div>
          <div className="col-start-8 col-end-13">
            <Image src={forLoan} alt="For Loan Image" className="max-w-none" />
          </div>
        </div>
      </div>
    </section>
  );
};
