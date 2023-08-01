import React from "react";

type Props = {
  text: string;
};

export const SectionText = ({ text }: Props) => {
  return (
    <p className="text-lg leading-[150%] text-neutral-color-neutral-600 max-md:text-base ">
      {text}
    </p>
  );
};
