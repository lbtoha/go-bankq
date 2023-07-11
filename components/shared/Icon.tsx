import { ReactNode } from "react";
import { BsArrowUpRight } from "react-icons/bs";

type Prop = {
  children: ReactNode;
  padding: string;
};

export const Icon = ({ children: icon, padding = "p-4" }: Prop) => {
  return (
    <div className={`bg-[#FFD584] w-max ${padding} rounded-full`}>{icon}</div>
  );
};
