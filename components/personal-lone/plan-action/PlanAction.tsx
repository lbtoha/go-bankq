"use client";
import { Button } from "@/components/shared/Button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";
import React, { useEffect, useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

export const PlanAction = () => {
  const [value, setValue] = useState<number[]>([0, 1250]);
  const [month, setMonth] = useState<number>(3);
  const [monthlyAmount, setMonthlyAmount] = useState<number>(0);

  useEffect(() => {
    const totalInterest: number = value[1] * 0.0799;
    const totalPay: number = totalInterest + value[1];
    const monthlyPay = totalPay / month;
    const roundedAmount: number = Math.round(monthlyPay);
    setMonthlyAmount(roundedAmount);
  }, [value, month]);

  return (
    <section className="section-gap max-sm:px-2">
      <div className=" container rounded-md border border-[#CACCD1] bg-[#FAFAFC] px-5  py-5 md:px-[110px] md:py-[80px]">
        <div className="text-center">
          <div className="mb-6">
            <SectionHeading title="Put Your Plans into Action" />
          </div>
          <div className="mx-auto max-w-[780px]">
            <SectionText text=" Personal loans typically range from $1,000 to $100,000, depending on the lender and the borrower's creditworthiness." />
          </div>{" "}
          <p className="my-10 font-montserrat text-2xl font-semibold leading-[120%] md:text-[32px] xl:my-[60px]">
            Personal Loan Amount:{" "}
            <span className="text-primary-color-1">${value[1]}</span>
          </p>
        </div>
        <div className="mb-10 xl:mb-[60px]">
          <RangeSlider
            className="single-thumb-green range-slider__range"
            id="range-slider-green"
            min={1000}
            max={10000}
            thumbsDisabled={[false]}
            rangeSlideDisabled={true}
            value={value}
            onInput={setValue}
          />
        </div>
        <div className="grid items-center justify-evenly gap-6 text-center text-primary-color-1 md:grid-cols-2 lg:grid-cols-4">
          <div
            onClick={() => setMonth(3)}
            className={`  cursor-pointer rounded-md border border-border-color px-10 py-[30px] hover:bg-primary-color-2.2 ${
              month === 3 && `bg-primary-color-2.2`
            }`}
          >
            <p>03 Month</p>
            <p className="mt-[10px] text-[#6F7278]">Av. APR is 7.99%</p>
          </div>
          <div
            onClick={() => setMonth(6)}
            className={`  cursor-pointer rounded-md border border-border-color px-10 py-[30px] hover:bg-primary-color-2.2 ${
              month === 6 && `bg-primary-color-2.2`
            }`}
          >
            <p>06 Month</p>
            <p className="mt-[10px] text-[#6F7278]">Av. APR is 7.99%</p>
          </div>
          <div
            onClick={() => setMonth(12)}
            className={`  cursor-pointer rounded-md border border-border-color px-10 py-[30px] hover:bg-primary-color-2.2 ${
              month === 12 && `bg-primary-color-2.2`
            }`}
          >
            <p>12 Month</p>
            <p className="mt-[10px] text-[#6F7278]">Av. APR is 7.99%</p>
          </div>
          <div
            onClick={() => setMonth(24)}
            className={`  cursor-pointer rounded-md border border-border-color px-10 py-[30px] hover:bg-primary-color-2.2 ${
              month === 24 && `bg-primary-color-2.2`
            }`}
          >
            <p>24 Month</p>
            <p className="mt-[10px] text-[#6F7278]">Av. APR is 7.99%</p>
          </div>
        </div>
        <div className="mt-[60px] flex items-center justify-between max-md:flex-col max-md:space-y-4">
          <p className="font-montserrat text-2xl font-semibold md:text-[32px]">
            Monthly:{" "}
            <span className="text-primary-color-1">${monthlyAmount}</span>
          </p>
          <Button text="Apply loan" url="/" />
        </div>
      </div>
    </section>
  );
};
