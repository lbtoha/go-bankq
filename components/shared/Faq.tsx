"use client";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";
import React, { useState } from "react";
import { BsChevronDown, BsCreditCard2Back } from "react-icons/bs";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { PiHandCoins } from "react-icons/pi";
import { PiPiggyBankLight } from "react-icons/pi";
import AnimateHeight from "react-animate-height";
import { faqs } from "@/public/data/faq";

export const Faq = () => {
  const [open, setOpen] = useState<number | null>(1);
  return (
    <section>
      <div className="section-gap horizontal-gap container">
        <div className="grid-cols-2 gap-[134px] lg:grid">
          <div>
            <div className="mb-6">
              <SectionHeading title="Frequently asked questions" />
            </div>
            <div className=" mb-5 lg:mb-[60px]">
              <SectionText text="Credit cards typically have a credit limit, which is the maximum amount ." />
            </div>
            <div className="mb-8 flex  gap-4 text-xl leading-[150%] text-[#292C32] max-md:flex-wrap md:max-w-[207px] md:flex-col lg:mb-0 lg:space-y-[11px]">
              <div className="group flex items-center gap-[17px] py-2 hover:bg-primary-color-2 lg:p-4 lg:py-2">
                <span className="custom-transition group-hover:text-primary-color-1">
                  <MdOutlineAccountBalanceWallet />
                </span>
                <span>Account</span>
              </div>
              <div className="group flex items-center gap-[17px] py-2 hover:bg-primary-color-2 lg:p-4 lg:py-2">
                <span className="custom-transition group-hover:text-primary-color-1">
                  <PiHandCoins />
                </span>
                <span>Loan</span>
              </div>
              <div className="group flex items-center gap-[17px] py-2 hover:bg-primary-color-2 lg:p-4 lg:py-2">
                <span className="custom-transition group-hover:text-primary-color-1">
                  <PiPiggyBankLight />
                </span>
                <span>Bank</span>
              </div>
              <div className="group flex items-center gap-[17px] py-2 hover:bg-primary-color-2 lg:p-4 lg:py-2">
                <span className="custom-transition group-hover:text-primary-color-1">
                  <BsCreditCard2Back />
                </span>
                <span>Card</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-10 font-semibold">
            {faqs.map(({ id, question, answer }) => (
              <div key={id}>
                <button
                  className="flex w-full items-center justify-between border-b-2 pb-6 text-left"
                  key={id}
                  onClick={() => setOpen((p) => (id == p ? null : id))}
                >
                  {question}

                  <BsChevronDown
                    className={`duration-300 ${id == open && "rotate-180"}`}
                  />
                </button>
                <AnimateHeight
                  id="example-panel"
                  duration={500}
                  height={open == id ? "auto" : 0} // see props documentation below
                >
                  <p className="mt-6 text-base font-normal leading-[150%]">
                    {answer}
                  </p>
                </AnimateHeight>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
