import Image, { StaticImageData } from "next/image";
import React from "react";
import Link from "next/link";
import cardImage from "@/public/images/card_banner.png";

type Props = {
  cardImage: StaticImageData;
  btnUrl: string;
};

export const BankCard = ({ cardImage, btnUrl }: Props) => {
  return (
    // <div className="grid justify-items-center gap-6 max-md:space-y-5 md:grid-cols-3">
    // </div>
    <div className="group">
      <Image src={cardImage} alt="credit card1" />
      <div className="mt-6 flex justify-center md:mt-[30px]">
        <Link href={btnUrl}>
          <button className="custom-transition border bg-slate-200 px-5 py-3 font-medium text-[#292C32] group-hover:bg-primary-color-2  lg:px-10 lg:py-[15px]">
            Get Started Now
          </button>
        </Link>
      </div>
    </div>
  );
};
