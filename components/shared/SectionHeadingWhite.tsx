import React from "react";
import { titleFont } from "@/utils/fonts";

type Props = {
  title: string;
};

export const SectionHeadingWhite = ({ title }: Props) => {
  return (
    <h3
      className={`font-montserrat text-[25px] font-bold leading-[120%] text-white md:text-[35px] lg:text-[40px]`}
    >
      {title}
    </h3>
  );
};
