"use client";
import Image from "next/image";
import React from "react";
import countdown from "@/public/images/countdown.png";
import CountUp, { useCountUp } from "react-countup";
import CountDown from "./CountDown";

export const OurImpact = () => {
  const impactCountDownData = [
    {
      id: 457001,
      countStart: 0,
      countEnd: 600,
      itemTitle: "Customers",
      symbol: "K",
    },
    {
      id: 457002,
      countStart: 0,
      countEnd: 99,
      itemTitle: "Customer satisfaction",
      symbol: "%",
    },
    {
      id: 457003,
      countStart: 0,
      countEnd: 260,
      itemTitle: "Money managed",
      symbol: "B",
    },
  ];
  useCountUp({
    ref: "counter",
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  return (
    <section className="countdown-section section-gap px-3  xl:px-0">
      <div className="container">
        <h3
          className={`mb-5 text-center font-montserrat  text-[25px] font-bold leading-[120%] md:mb-7  md:text-[35px] lg:mb-[60px] lg:text-[40px]`}
        >
          Our impact in numbers
        </h3>
        <div className="items-center justify-evenly space-y-10 text-center md:flex md:space-y-0">
          {impactCountDownData.map(
            ({ id, countStart, countEnd, itemTitle, symbol }) => (
              <CountDown
                key={id}
                countStart={countStart}
                countEnd={countEnd}
                itemTitle={itemTitle}
                symbol={symbol}
              />
            ),
          )}
        </div>
        <div className="mt-[60px] justify-center  justify-items-center max-md:hidden md:block lg:flex">
          <Image src={countdown} alt="countdown" />
        </div>
      </div>
    </section>
  );
};
