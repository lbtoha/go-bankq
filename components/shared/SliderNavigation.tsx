import React from "react";
import arrowLeft from "@/public/images/arrow_left.png";
import arrowRight from "@/public/images/arrow_right.png";
import Image from "next/image";

export const SliderNavigation = () => {
  return (
    <div className="flex items-center  gap-[41px] justify-center">
      <button className="card-arrow__left relative">
        <Image src={arrowLeft} alt="Arrow Left" />
      </button>
      <button className="card-arrow__right relative">
        <Image src={arrowRight} alt="Arrow Right" className="mx-10" />
      </button>
    </div>
  );
};
