"use client";
import { titleFont } from "@/utils/fonts";
import Image from "next/image";
import React from "react";
import countdown from "@/public/images/countdown.png";
import CountUp, { useCountUp } from "react-countup";

export const OurImpact = () => {
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
          className={`mb-[60px]  text-center font-montserrat text-[25px] font-bold  leading-[120%] md:text-[35px] lg:text-[40px]`}
        >
          Our impact in numbers
        </h3>
        <div className="items-center justify-evenly space-y-10 text-center md:flex md:space-y-0">
          <div>
            <h6
              className={`font-montserrat text-[30px] font-semibold leading-[120%] text-[#055F5B] md:text-[45px] xl:text-[64px]`}
            >
              <CountUp start={0} end={90} enableScrollSpy>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                    <span className="text-[#FFD584]">K</span>
                  </div>
                )}
              </CountUp>
            </h6>
            <p className="text-lg leading-[150%]">Customers</p>
          </div>
          <div>
            <h6
              className={` font-montserrat text-[30px]  font-semibold leading-[120%] text-[#055F5B] md:text-[45px] xl:text-[64px]`}
            >
              <CountUp start={0} end={99} enableScrollSpy>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                    <span className="text-[#FFD584]">%</span>
                  </div>
                )}
              </CountUp>
            </h6>
            <p className="text-lg leading-[150%]">Customer satisfaction</p>
          </div>
          <div>
            <h6
              className={` font-montserrat text-[30px]  font-semibold leading-[120%] text-[#055F5B] md:text-[45px] xl:text-[64px]`}
            >
              <CountUp start={0} end={260} enableScrollSpy>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                    <span className="text-[#FFD584]">B</span>
                  </div>
                )}
              </CountUp>
            </h6>
            <p className="text-lg leading-[150%]">Money managed</p>
          </div>
        </div>
        <div className="mt-[60px] justify-center  justify-items-center max-md:hidden md:block lg:flex">
          <Image src={countdown} alt="countdown" />
        </div>
      </div>
    </section>
  );
};
