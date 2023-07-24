"use client";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";
import { faqs } from "@/public/data/faq";
import React, { useState } from "react";
import { BsChevronDown, BsCreditCard2Back } from "react-icons/bs";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { PiHandCoins } from "react-icons/pi";
import { PiPiggyBankLight } from "react-icons/pi";
import AnimateHeight from "react-animate-height";

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
            <div className="mb-[60px]">
              <SectionText text="Credit cards typically have a credit limit, which is the maximum amount ." />
            </div>
            <div className="mb-8 flex flex-wrap items-center gap-4 text-xl leading-[150%] text-[#292C32] md:max-w-[207px] md:space-y-[11px] lg:mb-0">
              <div className="flex  items-center  gap-[17px] p-4 hover:bg-primary-color-2 ">
                <span>
                  <MdOutlineAccountBalanceWallet />
                </span>
                <span>Account</span>
              </div>
              <div className="flex items-center gap-[17px] p-4 hover:bg-primary-color-2">
                <span>
                  <PiHandCoins />
                </span>
                <span>Loan</span>
              </div>
              <div className="flex items-center gap-[17px] p-4 hover:bg-primary-color-2">
                <span>
                  <PiPiggyBankLight />
                </span>
                <span>Bank</span>
              </div>
              <div className="flex items-center gap-[17px] p-4 hover:bg-primary-color-2">
                <span>
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
