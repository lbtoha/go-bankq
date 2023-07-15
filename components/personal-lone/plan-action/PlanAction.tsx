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
  const [emi, setEmi] = useState<number>(0);

  useEffect(() => {
    const totalInterest: number = value[1] * 0.0799;
    const totalPay: number = totalInterest + value[1];
    const monthlyPay = totalPay / month;
    const roundedAmount: number = Math.round(monthlyPay);
    setMonthlyAmount(roundedAmount);
    console.log();
  }, [value, month]);
  return (
    <section>
      <div className="my-container py-[80px] px-[110px] bg-[#FAFAFC] border border-[#CACCD1] my-[120px]">
        <div className="text-center">
          <div className="mb-6">
            <SectionHeading title="Put Your Plans into Action" />
          </div>
          <div className="max-w-[780px] mx-auto">
            <SectionText text=" Personal loans typically range from $1,000 to $100,000, depending on the lender and the borrower's creditworthiness." />
          </div>{" "}
          <p className="text-[32px] font-montserrat font-semibold leading-[120%] my-[60px]">
            Personal Loan Amount:{" "}
            <span className="text-primary-color-1">${value[1]}</span>
          </p>
        </div>
        <div className="mb-[60px]">
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
        <div className="grid grid-cols-4 items-center justify-evenly text-primary-color-1 text-center gap-6">
          <div
            onClick={() => setMonth(3)}
            className={`  border border-border-color hover:bg-primary-color-2.2 px-10 py-[30px] rounded-md cursor-pointer ${
              month === 3 && `bg-primary-color-2.2`
            }`}
          >
            <p>03 Month</p>
            <p className="mt-[10px] text-[#6F7278]">Av. APR is 7.99%</p>
          </div>
          <div
            onClick={() => setMonth(6)}
            className={`  border border-border-color hover:bg-primary-color-2.2 px-10 py-[30px] rounded-md cursor-pointer ${
              month === 6 && `bg-primary-color-2.2`
            }`}
          >
            <p>06 Month</p>
            <p className="mt-[10px] text-[#6F7278]">Av. APR is 7.99%</p>
          </div>
          <div
            onClick={() => setMonth(12)}
            className={`  border border-border-color hover:bg-primary-color-2.2 px-10 py-[30px] rounded-md cursor-pointer ${
              month === 12 && `bg-primary-color-2.2`
            }`}
          >
            <p>12 Month</p>
            <p className="mt-[10px] text-[#6F7278]">Av. APR is 7.99%</p>
          </div>
          <div
            onClick={() => setMonth(24)}
            className={`  border border-border-color hover:bg-primary-color-2.2 px-10 py-[30px] rounded-md cursor-pointer ${
              month === 24 && `bg-primary-color-2.2`
            }`}
          >
            <p>24 Month</p>
            <p className="mt-[10px] text-[#6F7278]">Av. APR is 7.99%</p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-[60px]">
          <p className="font-semibold text-[32px] font-montserrat">
            Monthly:{" "}
            <span className="text-primary-color-1">${monthlyAmount}</span>
          </p>
          <Button text="Apply loan" url="/" />
        </div>
      </div>
    </section>
  );
};
