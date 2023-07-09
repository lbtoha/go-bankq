"use client";
import { PermIdentity } from "@mui/icons-material";
import { BsArrowUpRight } from "react-icons/bs";

type Props = {
  cardTitle: string;
  cardBody: string;
  children: React.ReactNode;
};

export const CardYellow = ({ cardTitle, cardBody, children }: Props) => {
  return (
    <div
      className={`shadow-lg group hover:bg-[#FFD584] p-10 transition-colors duration-500`}
    >
      <span className="">{children}</span>
      <h4 className="text-2xl leading-[120%] text-[#191B1A] mt-[32px] font-medium">
        {cardTitle}
      </h4>
      <p className="mt-5 text-base leading-[150%] text-justify mb-[60px]">
        {cardBody}
      </p>
      <div className="bg-gray-300 group-hover:bg-gray-600 w-max p-4 rounded-full">
        <BsArrowUpRight className="text-2xl" />
      </div>
    </div>
  );
};
