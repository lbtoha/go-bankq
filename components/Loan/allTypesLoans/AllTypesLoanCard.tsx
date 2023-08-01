import { SectionText } from "@/components/shared/SectionText";
import Link from "next/link";
import React from "react";

type Props = {
  iconName: string;
  title: string;
  bodyText: string;
  url: string;
};

const AllTypesLoanCard = ({ iconName, title, bodyText, url }: Props) => {
  return (
    <div className="max-sm:mx-2">
      <div className="border-with-gray-bg group custom-transition rounded-xl p-4 even:mt-[80px] hover:bg-primary-color-2 sm:me-4 md:p-[30px]">
        <span className="material-symbols-outlined custom-transition rounded-full bg-neutral-color-neutral-300 p-[15px] text-primary-color-1  group-hover:bg-white group-hover:bg-opacity-20 max-md:text-3xl md:text-[50px]">
          {iconName}
        </span>
        <h3
          className={`text-neutral-color-neutral-700 mb-3 mt-5 font-montserrat text-xl font-semibold leading-[130%] md:mt-10 md:text-[24px] `}
        >
          {title}
        </h3>
        <div className="mb-5 md:mb-10">
          <SectionText text="These loans allow you to borrow against the equity in your home." />
        </div>
        <Link
          href={url}
          className="text-base leading-[150%] text-primary-color-1 underline"
        >
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default AllTypesLoanCard;
