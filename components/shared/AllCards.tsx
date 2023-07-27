import Image from "next/image";
import React from "react";
import card1 from "@/public/images/card_filter.png";
import card2 from "@/public/images/card_filter2.png";
import card3 from "@/public/images/card_filter3.png";
import Link from "next/link";

export const AllCards = () => {
  return (
    <div className="grid justify-items-center gap-6 max-md:space-y-5 md:grid-cols-3">
      <div className="group">
        <Image src={card1} alt="credit card1" />
        <div className="mt-6 flex justify-center md:mt-[30px]">
          <Link href="/">
            <button className="custom-transition border bg-slate-200 px-5 py-3 font-medium text-[#292C32] group-hover:bg-primary-color-2  lg:px-10 lg:py-[15px]">
              Get Started Now
            </button>
          </Link>
        </div>
      </div>

      <div className="group">
        <Image src={card2} alt="credit card1" />
        <div className="mt-5 flex justify-center md:mt-[30px]">
          <Link href="/">
            <button className="custom-transition border bg-slate-200 px-5 py-3 font-medium  text-[#292C32] group-hover:bg-primary-color-2  lg:px-10 lg:py-[15px]">
              Get Started Now
            </button>
          </Link>
        </div>
      </div>
      <div className="group">
        <Image src={card3} alt="credit card1" />
        <div className="mt-5 flex justify-center md:mt-[30px]">
          <Link href="/">
            <button className="custom-transition border bg-slate-200 px-5 py-3 font-medium text-[#292C32] group-hover:bg-primary-color-2  lg:px-10 lg:py-[15px]">
              Get Started Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
