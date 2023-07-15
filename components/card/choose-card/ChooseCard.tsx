import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";
import Image from "next/image";
import React from "react";
import card1 from "@/public/images/card_filter.png";
import card2 from "@/public/images/card_filter2.png";
import card3 from "@/public/images/card_filter3.png";
import { Button } from "@/components/shared/Button";
import Link from "next/link";

export const ChooseCard = () => {
  return (
    <section>
      <div className="my-container section-gap">
        <div className="max-w-[722px] mb-5 mx-auto text-center">
          <SectionHeading title="Choose the Card that Matches Your Needs" />
        </div>
        <div className=" max-w-[612px] mx-auto mb-[60px] text-center">
          <SectionText text="We have a fine range of accounts to help you manage your finances seamlessly" />
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div className="group">
            <Image src={card1} alt="credit card1" />
            <div className="mt-[30px] flex justify-center">
              <Link href="/">
                <button className="px-10 py-[15px] bg-slate-200 group-hover:bg-primary-color-2 text-[#292C32]  font-medium border">
                  Get Started Now
                </button>
              </Link>
            </div>
          </div>

          <div className="group">
            <Image src={card2} alt="credit card1" />
            <div className="mt-[30px] flex justify-center">
              <Link href="/">
                <button className="px-10 py-[15px] group-hover:bg-primary-color-2 bg-slate-200 text-[#292C32]  font-medium border">
                  Get Started Now
                </button>
              </Link>
            </div>
          </div>
          <div className="group">
            <Image src={card3} alt="credit card1" />
            <div className="mt-[30px] flex justify-center">
              <Link href="/">
                <button className="px-10 py-[15px] group-hover:bg-primary-color-2 bg-slate-200 text-[#292C32]  font-medium border">
                  Get Started Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
