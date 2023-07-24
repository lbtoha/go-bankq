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
            <div className="mt-6">
              <SectionText text="If you spend more money than you have in your checking account, you may be charged an overdraft fee.  Some banks offer overdraft protection services to help you avoid overdraft fees." />
            </div>
            <div className="mt-[64px] grid items-center justify-items-center space-y-4 md:grid-cols-3 md:space-y-0">
              <div className="flex flex-col items-center space-y-6 ">
                <div className="flex h-[127px] w-[127px] items-center justify-center rounded-full border-8 border-primary-color-1">
                  <p
                    className={`font-montserrat text-[40px] font-bold text-primary-color-1 `}
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
                  className={`text-center font-montserrat text-2xl font-semibold text-black`}
                >
                  Satisfied User
                </p>
              </div>
              <div className="flex flex-col items-center space-y-6">
                <div className="flex h-[127px] w-[127px] items-center justify-center rounded-full border-8 border-primary-color-1">
                  <p
                    className={`font-montserrat text-[40px] font-bold text-primary-color-1 `}
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
                  className={`text-center font-montserrat text-2xl font-semibold text-black`}
                >
                  Years of Business
                </p>
              </div>
              <div className="flex flex-col items-center space-y-6">
                <div className="flex h-[127px] w-[127px] items-center justify-center rounded-full border-8 border-primary-color-1">
                  <p
                    className={`font-montserrat text-[40px] font-bold text-primary-color-1 `}
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
                  className={`text-center font-montserrat text-2xl font-semibold text-black`}
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
