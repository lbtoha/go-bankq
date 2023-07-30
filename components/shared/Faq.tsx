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
  const [activeTab, setActiveTab] = useState<number | string>(0);
  const [open, setOpen] = useState<number | null>(1);

  const handleTabClick = (index: number | string) => {
    setActiveTab(index);
  };

  return (
    <section>
      <div className="section-gap horizontal-gap container">
        <div className="grid-cols-2 md:grid md:gap-10 lg:gap-[134px]">
          <div>
            <div className="mb-6">
              <SectionHeading title="Frequently asked questions" />
            </div>
            <div className=" mb-5 lg:mb-[60px]">
              <SectionText text="Credit cards typically have a credit limit, which is the maximum amount ." />
            </div>
            <div className="mb-8 flex  gap-4 text-xl leading-[150%] text-[#292C32] max-lg:flex-wrap md:max-w-[207px] md:flex-col lg:mb-0 lg:space-y-[11px]">
              <button
                onClick={() => handleTabClick(0)}
                className={`flex items-center gap-[17px] ${
                  activeTab == 0 ? "bg-primary-color-2" : ""
                } px-2 py-2 lg:px-4 lg:py-2`}
              >
                <span
                  className={`custom-transition ${
                    activeTab == 0 ? "text-primary-color-1" : ""
                  }`}
                >
                  <MdOutlineAccountBalanceWallet />
                </span>
                <span>Account</span>
              </button>
              <button
                onClick={() => handleTabClick(1)}
                className={`flex items-center gap-[17px]  ${
                  activeTab == 1 ? "bg-primary-color-2" : ""
                }  px-2 py-2 lg:px-4 lg:py-2`}
              >
                <span
                  className={`custom-transition ${
                    activeTab == 1 ? "text-primary-color-1" : ""
                  }`}
                >
                  <PiHandCoins />
                </span>
                <span>Loan</span>
              </button>
              <button
                onClick={() => handleTabClick(2)}
                className={`flex items-center gap-[17px]  ${
                  activeTab == 2 ? "bg-primary-color-2" : ""
                }  px-2 py-2 lg:px-4 lg:py-2`}
              >
                <span
                  className={`custom-transition ${
                    activeTab == 2 ? "text-primary-color-1" : ""
                  }`}
                >
                  <PiPiggyBankLight />
                </span>
                <span>Bank</span>
              </button>
              <button
                onClick={() => handleTabClick(3)}
                className={`flex items-center gap-[17px]  ${
                  activeTab == 3 ? "bg-primary-color-2" : ""
                }  px-2 py-2 lg:px-4 lg:py-2`}
              >
                <span
                  className={`custom-transition ${
                    activeTab == 3 ? "text-primary-color-1" : ""
                  }`}
                >
                  <BsCreditCard2Back />
                </span>
                <span>Card</span>
              </button>
            </div>
          </div>
          <div className="flex flex-col space-y-10 font-semibold">
            {activeTab == 0 && (
              <>
                {faqs.map(({ id, question, answer }) => (
                  <div key={id}>
                    <button
                      className="flex w-full items-center justify-between border-b-2 pb-3 text-left md:pb-6"
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
                      <p className="mt-3 text-base font-normal leading-[150%] md:mt-6">
                        {answer}
                      </p>
                    </AnimateHeight>
                  </div>
                ))}
              </>
            )}
            {activeTab == 1 && (
              <>
                {faqs.map(({ id, question, answer }) => (
                  <div key={id}>
                    <button
                      className="flex w-full items-center justify-between border-b-2 pb-3 text-left md:pb-6"
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
                      <p className="mt-3 text-base font-normal leading-[150%] md:mt-6">
                        {answer}
                      </p>
                    </AnimateHeight>
                  </div>
                ))}
              </>
            )}
            {activeTab == 2 && (
              <>
                {faqs.map(({ id, question, answer }) => (
                  <div key={id}>
                    <button
                      className="flex w-full items-center justify-between border-b-2 pb-3 text-left md:pb-6"
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
                      <p className="mt-3 text-base font-normal leading-[150%] md:mt-6">
                        {answer}
                      </p>
                    </AnimateHeight>
                  </div>
                ))}
              </>
            )}
            {activeTab == 3 && (
              <>
                {faqs.map(({ id, question, answer }) => (
                  <div key={id}>
                    <button
                      className="flex w-full items-center justify-between border-b-2 pb-3 text-left md:pb-6"
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
                      <p className="mt-3 text-base font-normal leading-[150%] md:mt-6">
                        {answer}
                      </p>
                    </AnimateHeight>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
