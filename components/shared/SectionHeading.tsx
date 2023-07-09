import React from "react";
import { titleFont } from "@/utils/fonts";

type Props = {
  title: string;
};

export const SectionHeading = ({ title }: Props) => {
  return (
    <h3
      className={`${titleFont.className} text-[25px] md:text-[35px] lg:text-[40px] font-bold leading-[120%] text`}
    >
      {title}
    </h3>
  );
};
