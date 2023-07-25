"use client";
import { Button } from "@/components/shared/Button";
import Image from "next/image";
import { useEffect, useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { BsQuestionOctagon } from "react-icons/bs";

export const GetCreditCard = () => {
  const [value, setValue] = useState<number[]>([0, 1250]);
  const [month, setMonth] = useState<number[]>([0, 6]);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [emi, setEmi] = useState<number>(0);

  useEffect(() => {
    const totalInterest: number = value[1] * 0.05;
    const emi: number = totalInterest / 12;
    const totalPay: number = totalInterest + value[1];
    const roundedAmount: number = Math.round(totalPay);
    setTotalAmount(roundedAmount);
    setEmi(Math.round(emi));
  }, [value, month]);

  return (
    <section className="dot-bg bg-primary-color-2.1 max-sm:px-2">
      <div className="section-gap container">
        <div className="mx-auto mb-[60px] max-w-[480px]">
          <p className="text-center font-montserrat text-2xl font-semibold leading-[120%] md:text-[32px] ">
            Get your credit card
          </p>
          <p className="mt-6 text-[#6F7278] max-sm:text-center max-sm:text-base">
            Some debit cards may also offer additional benefits such as cashback
            rewards, purchase protection
          </p>
        </div>
        <div className="grid items-center gap-6 rounded-md border border-[#E7E9EE] bg-[#FAFAFC] p-10 max-lg:space-y-10 lg:grid-cols-10">
          <div className="lg:col-span-6">
            <div>
              <p className="font-montserrat text-xl font-semibold leading-[130%]">
                Custom pricing
              </p>
              <p className="mb-[50px] mt-3 text-sm leading-[150%] text-[#6F7278]">
                The amount is deducted from your bank account balance
              </p>
              <div className="flex items-center justify-between">
                <p className="mb-5 text-2xl  leading-[150%]">
                  <span className=" font-bold text-primary-color-1 md:text-5xl  xl:text-[64px]">
                    ${value[1]}
                  </span>
                  <span className="text-base leading-[150%]">/12 month</span>
                </p>
                <p className="text-base leading-[150%]">5% interest rate</p>
              </div>
              <RangeSlider
                className="single-thumb-green range-slider__range"
                id="range-slider-green"
                min={0}
                max={10000}
                thumbsDisabled={[false]}
                rangeSlideDisabled={true}
                value={value}
                onInput={setValue}
              />
            </div>
            <div className="mt-[73px] flex items-center gap-3 max-sm:text-sm sm:gap-6">
              <p className="rounded-lg border border-[#A0A2A7] px-2 py-[8px]">
                FAQs
              </p>
              <p className="flex items-center gap-[10px] rounded-lg border border-[#A0A2A7] px-3 py-[8px]">
                <BsQuestionOctagon /> Additional info
              </p>
            </div>
          </div>
          <div className="rounded-md bg-primary-color-2 py-[30px] max-lg:-order-1 lg:col-start-7 lg:col-end-12">
            <p className="Text-[20px] text-center leading-[150%] text-[#292C32]">
              Your Total Amount
            </p>
            <p className="mt-5 text-center font-montserrat font-semibold leading-[120%] text-primary-color-1 md:text-[40px] xl:text-[52px]">
              ${totalAmount}
            </p>
            <div className="mx-[30px] my-[30px]  border-b border-t border-gray-300 py-[18px]">
              <div className="flex items-center justify-evenly text-center">
                <div>
                  <p className="text-base leading-[150%] text-[#292C32]">
                    Rate
                  </p>
                  <span className="text-base font-semibold text-primary-color-1">
                    5.00%
                  </span>
                </div>
                <div>
                  <p className="text-base leading-[150%] text-[#292C32]">ARP</p>
                  <span className="text-base font-semibold text-primary-color-1">
                    4.162
                  </span>
                </div>
                <div>
                  <p className="text-base leading-[150%] text-[#292C32]">EMI</p>
                  <span className="text-base font-semibold text-primary-color-1">
                    ${emi}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="border bg-primary-color-1 px-10 py-[15px]  font-medium text-white">
                Apply now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
