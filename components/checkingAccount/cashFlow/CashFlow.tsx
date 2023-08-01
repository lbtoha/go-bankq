"use client";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";
import Image from "next/image";
import cashFlow from "@/public/images/cash-flow.png";
import CountUp, { useCountUp } from "react-countup";
import CashFlowCounter from "./CashFlowCounter";

export const CashFlow = () => {
  useCountUp({
    ref: "counter",
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });

  return (
    <section>
      <div className="section-gap horizontal-gap container">
        <div className="grid-cols-12 items-center lg:grid">
          <div className="col-span-6">
            <SectionHeading title="Cash flow at your fingertips with GOBANK Debit Card" />
            <div className="mt-6 pb-8">
              <SectionText text="If you spend more money than you have in your checking account, you may be charged an overdraft fee.  Some banks offer overdraft protection services to help you avoid overdraft fees." />
            </div>
            <div className="grid justify-items-center space-y-4 border-neutral-color-neutral-300  md:grid-cols-3 md:space-y-0 md:border-t md:pt-8">
              <CashFlowCounter
                itemTitle="Satisfied User"
                countStart={0}
                countEnd={90}
                symbol="%"
              />
              <CashFlowCounter
                itemTitle="Years of Business"
                countStart={0}
                countEnd={20}
                symbol="+"
              />
              <CashFlowCounter
                itemTitle="Awards"
                countStart={0}
                countEnd={5}
                symbol="+"
              />
            </div>
          </div>
          <div className="col-span-12 col-start-8 hidden lg:block">
            <Image src={cashFlow} alt="Cash Flow" />
          </div>
        </div>
      </div>
    </section>
  );
};
