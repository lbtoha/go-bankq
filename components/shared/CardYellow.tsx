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
      className={`border-[var(--border-color)]) group mx-0 border p-10 shadow-lg transition-colors duration-500 hover:bg-[#FFD584]`}
    >
      <span className="">{children}</span>
      <h4 className="mt-[32px] text-xl font-medium leading-[120%]  text-[#191B1A] sm:text-2xl md:text-2xl ">
        {cardTitle}
      </h4>
      <p className="mb-[60px] mt-5 text-justify text-base leading-[150%]">
        {cardBody}
      </p>
      <div className="w-max rounded-full bg-gray-300 p-4 group-hover:bg-gray-600">
        <BsArrowUpRight className="text-2xl" />
      </div>
    </div>
  );
};
