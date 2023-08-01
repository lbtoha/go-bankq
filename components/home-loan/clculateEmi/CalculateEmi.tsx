"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import emiImage from "@/public/images/taking_loan.png";

export const CalculateEmi = () => {
  const [value, setValue] = useState<number[]>([0, 1250]);
  const [month, setMonth] = useState<number[]>([0, 6]);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [emi, setEmi] = useState<number>(0);

  useEffect(() => {
    const totalInterest: number = value[1] * 0.05;
    const emi: number = totalInterest / month[1];
    const totalPay: number = totalInterest + value[1];
    const roundedAmount: number = Math.round(totalPay);
    setTotalAmount(roundedAmount);
    setEmi(Math.round(emi));
  }, [value, month]);

  return (
    <section className="dot-bg section-gap relative bg-primary-color-1">
      <div className="container max-sm:px-2">
        <div className="mx-auto mb-7 max-w-[480px] md:mb-10 lg:mb-[60px]">
          <p className="text-center font-montserrat text-2xl font-semibold leading-[120%] text-neutral-color-neutral-200 md:text-[32px]">
            Taking a loan? Calculate your EMI
          </p>
        </div>
        <div className="grid grid-cols-1 items-center lg:grid-cols-12">
          <div className="max-lg:mb-10 lg:col-start-2 lg:col-end-7">
            <div>
              <p className="mb-4 text-xl leading-[150%] text-neutral-color-neutral-200 md:mb-6 md:text-2xl ">
                Loan Amount:{" "}
                <span className="font-bold text-primary-color-2">
                  ${value[1]}
                </span>
              </p>
              <RangeSlider
                className="single-thumb range-slider__range"
                id="range-slider-yellow"
                min={0}
                max={10000}
                thumbsDisabled={[false]}
                rangeSlideDisabled={true}
                value={value}
                onInput={setValue}
              />
            </div>
            <div>
              <p className="mb-4 mt-7 text-xl leading-[150%] text-neutral-color-neutral-200 md:mb-6 md:mt-10 md:text-2xl lg:mt-[60px]">
                Month:{" "}
                <span className="font-bold text-primary-color-2">
                  {month[1]}
                </span>
              </p>
              <RangeSlider
                className="single-thumb range-slider__range"
                id="range-slider-yellow"
                min={0}
                max={12}
                thumbsDisabled={[false]}
                rangeSlideDisabled={true}
                value={month}
                onInput={setMonth}
              />
            </div>
            <p className="mt-[15px] text-base leading-[150%] text-neutral-color-neutral-300">
              5% interest rate
            </p>
          </div>
          <div className="z-20 rounded-md bg-primary-color-2 py-[30px] lg:col-start-8 lg:col-end-12">
            <p className="text-center text-[20px] leading-[150%] text-neutral-color-neutral-800">
              Your Total Amount
            </p>
            <p className="mt-5 text-center font-montserrat text-4xl font-semibold leading-[120%] text-primary-color-1 md:text-[40px] lg:text-[52px]">
              ${totalAmount}
            </p>
            <div className="mx-[30px] my-[30px]  border-b border-t border-neutral-color-neutral-800 border-opacity-20 py-[18px]">
              <div className="flex items-center justify-evenly text-center">
                <div>
                  <p className="text-base leading-[150%] text-neutral-color-neutral-800">
                    Rate
                  </p>
                  <span className="text-base font-semibold text-primary-color-1">
                    5.00%
                  </span>
                </div>
                <div>
                  <p className="text-base leading-[150%] text-neutral-color-neutral-800">
                    ARP
                  </p>
                  <span className="text-base font-semibold text-primary-color-1">
                    4.162
                  </span>
                </div>
                <div>
                  <p className="text-base leading-[150%] text-neutral-color-neutral-800">
                    EMI
                  </p>
                  <span className="text-base font-semibold text-primary-color-1">
                    ${emi}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="border bg-primary-color-1 px-10 py-[15px] font-medium text-white max-md:text-base">
                Apply now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 hidden xl:block">
        <Image src={emiImage} alt="Taking Loan" />
      </div>
    </section>
  );
};
