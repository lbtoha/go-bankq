import React from "react";

type Props = {
  text: string;
};

export const SectionText = ({ text }: Props) => {
  return <p className="text-lg text-[#6F7278] leading-[150%] ">{text}</p>;
};
