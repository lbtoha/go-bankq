import React from "react";

type Props = {
  text: string;
};

export const SectionText = ({ text }: Props) => {
  return <p className=" text-lg leading-[150%] text-[#6F7278] ">{text}</p>;
};
