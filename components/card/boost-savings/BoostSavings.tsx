"use client";
import boostSavingsImage from "@/public/images/boost_your_savings.png";
import Image from "next/image";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";
import { MdCreditScore } from "react-icons/md";
import { BsCheckCircle } from "react-icons/bs";
import { Icon } from "@/components/shared/Icon";
import { useState } from "react";
import { Button } from "@/components/shared/Button";

export const BoostSavings = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <section>
      <div className="section-gap container">
        <div className="grid lg:grid-cols-5 lg:gap-6 xxl:grid-cols-12">
          <div className="hidden md:col-span-2 lg:block xxl:col-span-5">
            <Image src={boostSavingsImage} alt="Boost Savings Image" />
          </div>
          <div className="lg:col-span-5 lg:col-start-3 xxl:col-span-12 xxl:col-start-8">
            <div className="mb-6">
              <SectionHeading title="Boost your savings with the right credit card." />
            </div>
            <div className="mb-10">
              <SectionText text="All your needs covered with a full range of credit and debit cards ." />
            </div>
            <div className="mb-10 grid grid-cols-2 items-center justify-between gap-[18px] rounded-md bg-[#E7E9EE]">
              <div
                onClick={() => setToggle(!toggle)}
                className={`${
                  toggle && `bg-white`
                } my-[10px] ms-[10px] flex cursor-pointer items-center justify-center gap-4  rounded-md py-3 text-xl`}
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
                } my-[10px] me-[10px] flex cursor-pointer items-center justify-center gap-4  rounded-md py-3 text-xl`}
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
              <div className="md-5 md:mb-10 xl:mb-[60px] ">
                <p className="mb-5 text-xl leading-[150%] text-[#292C32]">
                  Lifestyle Benefits:
                </p>
                <div className="space-y-[37px]">
                  <div className="mt-6 flex items-center gap-5">
                    <BsCheckCircle className="text-xl text-primary-color-1" />
                    <div>
                      <p className="text-[#6F7278]">
                        Get cash backs and rewards that help you spend more
                        without burning through your funds
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center gap-5">
                    <BsCheckCircle className="text-xl text-primary-color-1" />
                    <div>
                      <p className="text-[#6F7278]">
                        Travel better by earning unlimited 1.5x miles
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className=" md-5 md:mb-10 xl:mb-[60px] ">
                <p className="mb-5 text-xl leading-[150%] text-[#292C32]">
                  Lifestyle Benefits:
                </p>
                <div className="space-y-[37px]">
                  <div className="mt-6 flex items-center gap-5">
                    <BsCheckCircle className="text-xl text-primary-color-1" />
                    <div>
                      <p className="text-[#6F7278]">
                        Get cash backs and rewards that help you spend more
                        without burning through your funds
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center gap-5">
                    <BsCheckCircle className="text-xl text-primary-color-1" />
                    <div>
                      <p className="text-[#6F7278]">
                        Travel better by earning unlimited 1.5x miles
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <Button text="Get started" url="/" />
          </div>
        </div>
      </div>
    </section>
  );
};
