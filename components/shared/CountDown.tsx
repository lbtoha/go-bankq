"use client";
import React from "react";
import CountUp, { useCountUp } from "react-countup";
type Props = {
  countStart: number;
  countEnd: number;
  itemTitle: string;
  symbol: string;
};

const CountDown = ({ countStart, countEnd, itemTitle, symbol }: Props) => {
  useCountUp({
    ref: "counter",
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  return (
    <div>
      <h6
        className={`font-montserrat text-[30px] font-semibold leading-[120%] text-[#055F5B] md:text-[45px] xl:text-[64px]`}
      >
        <CountUp start={countStart} end={countEnd} enableScrollSpy>
          {({ countUpRef }) => (
            <div>
              <span ref={countUpRef} />
              <span className="text-primary-color-2">{symbol}</span>
            </div>
          )}
        </CountUp>
      </h6>
      <p className="text-lg leading-[150%]">{itemTitle}</p>
    </div>
  );
};

export default CountDown;
