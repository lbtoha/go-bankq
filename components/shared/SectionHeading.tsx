import React from "react";

type Props = {
  title: string;
};

export const SectionHeading = ({ title }: Props) => {
  return (
    <h3
      className={`font-montserrat text-[25px] font-bold leading-[120%] text-neutral-color-neutral-800 md:text-[30px] lg:text-[32px] xl:text-[40px]`}
    >
      {title}
    </h3>
  );
};
