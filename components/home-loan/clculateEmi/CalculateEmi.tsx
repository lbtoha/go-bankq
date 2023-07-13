"use client";
import { Button } from "@/components/shared/Button";
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
    <section className="bg-primary-color-1 dot-bg relative">
      <div className="my-container section-gap">
        <div className="max-w-[480px] mx-auto mb-[60px]">
          <p className="text-[32px] font-montserrat font-semibold text-[#FAFAFC] leading-[120%] text-center">
            Taking a loan? Calculate your EMI
          </p>
        </div>
        <div className="grid grid-cols-12 items-center">
          <div className="col-start-2 col-end-7">
            <div>
              <p className="text-2xl leading-[150%] text-[#FAFAFC] mb-5 ">
                Loan Amount:{" "}
                <span className="text-[#FFD584] font-bold">${value[1]}</span>
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
              <p className="text-2xl leading-[150%] text-[#FAFAFC] mb-5 mt-[60px]">
                Month:{" "}
                <span className="text-[#FFD584] font-bold">${month[1]}</span>
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
            <p className="text-base text-[#E7E9EE] leading-[150%] mt-[10px]">
              5% interest rate
            </p>
          </div>
          <div className="col-start-8 col-end-12 bg-primary-color-2 rounded-md py-[30px]">
            <p className="Text-[20px] leading-[150%] text-[#292C32] text-center">
              Your Total Amount
            </p>
            <p className="text-[52px] font-semibold leading-[120%] font-montserrat text-primary-color-1 text-center mt-5">
              ${totalAmount}
            </p>
            <div className="border-b border-t  border-gray-300 mx-[30px] py-[18px] my-[30px]">
              <div className="flex text-center items-center justify-evenly">
                <div>
                  <p className="text-base leading-[150%] text-[#292C32]">
                    Rate
                  </p>
                  <span className="text-base text-primary-color-1 font-semibold">
                    5.00%
                  </span>
                </div>
                <div>
                  <p className="text-base leading-[150%] text-[#292C32]">ARP</p>
                  <span className="text-base text-primary-color-1 font-semibold">
                    4.162
                  </span>
                </div>
                <div>
                  <p className="text-base leading-[150%] text-[#292C32]">EMI</p>
                  <span className="text-base text-primary-color-1 font-semibold">
                    ${emi}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="px-10 py-[15px] bg-primary-color-1 text-white  font-medium border">
                Apply now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-0 bottom-0">
        <Image src={emiImage} alt="Taking Loan" />
      </div>
    </section>
  );
};
