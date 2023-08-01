"use client";
import boostSavingsImage from "@/public/images/boost_your_savings.png";
import Image from "next/image";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";
import { MdCreditScore } from "react-icons/md";
import { useState } from "react";
import { Button } from "@/components/shared/Button";

export const BoostSavings = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <section>
      <div className="section-gap container max-sm:px-2">
        <div className="grid lg:grid-cols-5 lg:gap-8 xxl:grid-cols-12">
          <div className="hidden md:col-span-2 lg:block xxl:col-span-5">
            <Image src={boostSavingsImage} alt="Boost Savings Image" />
          </div>
          <div className="lg:col-start-3 lg:col-end-6 xxl:col-span-12 xxl:col-start-8">
            <div className="mb-4 md:mb-6">
              <SectionHeading title="Boost your savings with the right credit card." />
            </div>
            <div className="mb-5 md:mb-10">
              <SectionText text="All your needs covered with a full range of credit and debit cards ." />
            </div>
            <div className="mb-5 grid grid-cols-2 items-center justify-between gap-[18px] rounded-md bg-neutral-color-neutral-300 md:mb-10">
              <div
                onClick={() => setToggle(!toggle)}
                className={`${
                  toggle && `bg-white`
                } my-[10px] ms-[10px] flex cursor-pointer items-center justify-center gap-2 rounded-md  py-3 text-lg md:gap-4 md:text-xl`}
              >
                <MdCreditScore
                  className={`${
                    toggle ? "text-primary-color-2" : "text-primary-color-1"
                  }`}
                />{" "}
                <span>Debit card</span>
              </div>
              <div
                onClick={() => setToggle(!toggle)}
                className={`${
                  toggle ? `` : `bg-white`
                } my-[10px] me-[10px] flex cursor-pointer items-center justify-center gap-2 rounded-md  py-3 text-lg md:gap-4 md:text-xl`}
              >
                <MdCreditScore
                  className={`${
                    toggle ? "text-primary-color-1" : "text-primary-color-2"
                  }`}
                />{" "}
                <span>Credit card</span>
              </div>
            </div>
            {toggle ? (
              <div className="mb-5 md:mb-10 xl:mb-10 ">
                <p className="mb-5 text-xl leading-[150%] text-neutral-color-neutral-800">
                  Lifestyle Benefits:
                </p>
                <div className="space-y-2 md:space-y-3">
                  <div className="mt-6 flex items-center gap-5">
                    <span className="material-symbols-outlined text-xl text-primary-color-1">
                      check_circle
                    </span>
                    <div>
                      <p className="text-base text-neutral-color-neutral-600 md:text-lg">
                        Get cash backs and rewards that help you spend more
                        without burning through your funds
                      </p>
                    </div>
                  </div>
                  <div className=" flex items-center gap-5">
                    <span className="material-symbols-outlined text-xl text-primary-color-1">
                      check_circle
                    </span>
                    <div>
                      <p className="text-base text-neutral-color-neutral-600 md:text-lg">
                        Travel better by earning unlimited 1.5x miles
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className=" mb-5 md:mb-10 xl:mb-10 ">
                <p className="mb-5 text-xl leading-[150%] text-neutral-color-neutral-800">
                  Lifestyle Benefits:
                </p>
                <div className="space-y-4 md:space-y-3">
                  <div className="mt-6 flex items-center gap-5">
                    <span className="material-symbols-outlined text-xl text-primary-color-1">
                      check_circle
                    </span>
                    <div>
                      <p className="text-base text-neutral-color-neutral-600 md:text-lg">
                        Get cash backs and rewards that help you spend more
                        without burning through your funds
                      </p>
                    </div>
                  </div>
                  <div className=" flex items-center gap-5">
                    <span className="material-symbols-outlined text-xl text-primary-color-1">
                      check_circle
                    </span>
                    <div>
                      <p className="text-base text-neutral-color-neutral-600 md:text-lg">
                        Travel better by earning unlimited 1.5x miles
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <Button btnType="btnPrimary" text="Get started" url="/" />
          </div>
        </div>
      </div>
    </section>
  );
};
