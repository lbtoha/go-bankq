import React from "react";

type Props = {
  title: string;
  subText: string;
  children: React.ReactNode;
};

export const GobankCard = ({ title, subText, children }: Props) => {
  return (
    <div className="flex flex-col items-center ">
      <div className="w-fit rounded-full bg-primary-color-2 bg-opacity-20 p-4 md:p-5">
        <div className="rounded-full bg-primary-color-2 p-3">{children}</div>
      </div>
      <h3
        className={`mt-5 font-montserrat text-xl font-semibold text-neutral-color-neutral-800`}
      >
        {title}
      </h3>
      <div className="mt-3">
        <p className="text-base leading-[150%] text-neutral-color-neutral-600 max-md:mb-5">
          {subText}
        </p>
      </div>
    </div>
  );
};
