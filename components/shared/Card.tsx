"use client";
import { PermIdentity } from "@mui/icons-material";

type Props = {
  cardTitle: string;
  cardBody: string;
  cardIcon: string;
  cardBg: string;
  iconBg: string;
};

export const Card = ({
  cardTitle,
  cardBody,
  cardIcon,
  cardBg,
  iconBg,
}: Props) => {
  return (
    <div className={`bg-${cardBg} p-10`}>
      <span className="">
        {cardIcon}
        {/* <{cardIcon} className={`text-8xl ${iconBg}} rounded-full p-3`} /> */}
      </span>
      <h4 className="text-2xl leading-[120%] text-[#191B1A] mt-[32px] font-medium">
        {cardTitle}
      </h4>

      <p className="mt-5 text-base leading-[150%]">{cardBody}</p>
    </div>
  );
};
