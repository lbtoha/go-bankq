"use client";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";
import callToActionLeft from "@/public/images/call-to-action-vactor2.png";
import { titleFont } from "@/utils/fonts";
import Image from "next/image";
import cashFlow from "@/public/images/cash-flow.png";
import CountUp, { useCountUp } from "react-countup";

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
            <div className="grid justify-items-center space-y-4 border-[#E7E9EE]  md:grid-cols-3 md:space-y-0 md:border-t md:pt-8">
              <div className="flex flex-col items-center space-y-6 ">
                <div className="flex h-[100px] w-[100px] items-center justify-center rounded-full border-4 border-primary-color-1 md:h-[127px] md:w-[127px] md:border-8">
                  <p
                    className={`font-montserrat text-4xl font-bold text-primary-color-1 md:text-[40px] `}
                  >
                    <CountUp start={0} end={90} enableScrollSpy>
                      {({ countUpRef }) => (
                        <div>
                          <span ref={countUpRef} />
                          <span>%</span>
                        </div>
                      )}
                    </CountUp>
                  </p>
                </div>
                <p
                  className={`text-center font-montserrat text-xl font-semibold text-black md:text-2xl`}
                >
                  Satisfied User
                </p>
              </div>
              <div className="flex flex-col items-center space-y-6">
                <div className="flex h-[100px] w-[100px] items-center justify-center rounded-full border-4 border-primary-color-1 md:h-[127px] md:w-[127px] md:border-8">
                  <p
                    className={`font-montserrat text-4xl font-bold text-primary-color-1 md:text-[40px] `}
                  >
                    <CountUp start={0} end={20} enableScrollSpy>
                      {({ countUpRef }) => (
                        <div>
                          <span ref={countUpRef} />
                          <span>+</span>
                        </div>
                      )}
                    </CountUp>
                  </p>
                </div>
                <p
                  className={`text-center font-montserrat text-xl font-semibold text-black md:text-2xl`}
                >
                  Years of Business
                </p>
              </div>
              <div className="flex flex-col items-center space-y-6">
                <div className="flex h-[100px] w-[100px] items-center justify-center rounded-full border-4 border-primary-color-1 md:h-[127px] md:w-[127px] md:border-8">
                  <p
                    className={`font-montserrat text-4xl font-bold text-primary-color-1 md:text-[40px] `}
                  >
                    <CountUp start={0} end={5} enableScrollSpy>
                      {({ countUpRef }) => (
                        <div>
                          <span ref={countUpRef} />
                          <span>+</span>
                        </div>
                      )}
                    </CountUp>
                  </p>
                </div>
                <p
                  className={`text-center font-montserrat text-xl font-semibold text-black md:text-2xl`}
                >
                  Awards
                </p>
              </div>
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
