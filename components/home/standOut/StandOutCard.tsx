import React from "react";
import { BsLightbulb } from "react-icons/bs";
type Props = {
  iconName: string;
  cardTitle: string;
  cardBody: string;
};

const StandOutCard = ({ iconName, cardTitle, cardBody }: Props) => {
  return (
    <div className="gap-6">
      <div className="mb-[13px] flex items-center gap-4">
        <div className="">
          <span className="material-symbols-outlined rounded-full bg-primary-color-2 px-2 py-1 text-xl text-primary-color-1">
            {iconName}
          </span>
        </div>
        <span
          className={`font-montserrat text-xl font-semibold leading-[130%]`}
        >
          {cardTitle}
        </span>
      </div>
      <p className="text-base font-normal leading-[150%] md:text-lg">
        {cardBody}
      </p>
    </div>
  );
};

export default StandOutCard;
