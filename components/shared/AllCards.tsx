import Image from "next/image";
import React from "react";
import card1 from "@/public/images/card_filter.png";
import card2 from "@/public/images/card_filter2.png";
import card3 from "@/public/images/card_filter3.png";
import Link from "next/link";

export const AllCards = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="group">
        <Image src={card1} alt="credit card1" />
        <div className="mt-[30px] flex justify-center">
          <Link href="/">
            <button className="border bg-slate-200 px-10 py-[15px] font-medium  text-[#292C32] group-hover:bg-primary-color-2">
              Get Started Now
            </button>
          </Link>
        </div>
      </div>

      <div className="group">
        <Image src={card2} alt="credit card1" />
        <div className="mt-[30px] flex justify-center">
          <Link href="/">
            <button className="border bg-slate-200 px-10 py-[15px] font-medium  text-[#292C32] group-hover:bg-primary-color-2">
              Get Started Now
            </button>
          </Link>
        </div>
      </div>
      <div className="group">
        <Image src={card3} alt="credit card1" />
        <div className="mt-[30px] flex justify-center">
          <Link href="/">
            <button className="border bg-slate-200 px-10 py-[15px] font-medium  text-[#292C32] group-hover:bg-primary-color-2">
              Get Started Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
