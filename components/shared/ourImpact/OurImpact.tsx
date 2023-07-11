import { titleFont } from "@/utils/fonts";
import Image from "next/image";
import React from "react";
import countdown from "@/public/images/countdown.png";

export const OurImpact = () => {
  return (
    <>
      <h3
        className={`${titleFont.className} text-[25px] md:text-[35px] lg:text-[40px] font-bold leading-[120%]  text-center mt-[120px] mb-[60px]`}
      >
        Our impact in numbers
      </h3>
      <div className="flex items-center justify-evenly text-center">
        <div>
          <h6
            className={`${titleFont.className} font-semibold leading-[120%] text-[64px] text-[#055F5B]`}
          >
            600<span className="text-[#FFD584]">K</span>
          </h6>
          <p className="text-lg leading-[150%]">Customers</p>
        </div>
        <div>
          <h6
            className={`${titleFont.className} font-semibold leading-[120%] text-[64px] text-[#055F5B]`}
          >
            99<span className="text-[#FFD584]">%</span>
          </h6>
          <p className="text-lg leading-[150%]">Customer satisfaction</p>
        </div>
        <div>
          <h6
            className={`${titleFont.className} font-semibold leading-[120%] text-[64px] text-[#055F5B]`}
          >
            260<span className="text-[#FFD584]">B</span>
          </h6>
          <p className="text-lg leading-[150%]">Money managed</p>
        </div>
      </div>
      <div className="mt-[60px] flex  justify-center pb-[120px]">
        <Image src={countdown} alt="countdown" />
      </div>
    </>
  );
};
