"use client";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";
import Image from "next/image";
import cashFlow from "@/public/images/cash-flow.png";
import CountUp, { useCountUp } from "react-countup";
type Props = {
  countStart: number;
  countEnd: number;
  symbol: string;
  itemTitle: string;
};

const CashFlowCounter = ({
  countStart,
  countEnd,
  symbol,
  itemTitle,
}: Props) => {
  useCountUp({
    ref: "counter",
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });

  return (
    <div className="flex flex-col items-center space-y-6 ">
      <div className="flex h-[100px] w-[100px] items-center justify-center rounded-full border-4 border-primary-color-1 md:h-[127px] md:w-[127px] md:border-8">
        <div
          className={`font-montserrat text-4xl font-bold text-primary-color-1 md:text-[40px] `}
        >
          <CountUp start={countStart} end={countEnd} enableScrollSpy>
            {({ countUpRef }) => (
              <div>
                <span ref={countUpRef} />
                <span>{symbol}</span>
              </div>
            )}
          </CountUp>
        </div>
      </div>
      <p
        className={`text-center font-montserrat text-xl font-semibold text-black md:text-2xl`}
      >
        {itemTitle}
      </p>
    </div>
  );
};

export default CashFlowCounter;
