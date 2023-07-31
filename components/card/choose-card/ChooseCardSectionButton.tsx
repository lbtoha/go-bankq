import React from "react";
type Props = {
  cardName: string;
  activeTab: string | number | null;
};

const ChooseCardSectionButton = ({ cardName, activeTab }: Props) => {
  return (
    <button
      className={`custom-transition flex items-center gap-4 rounded-md bg-[#E7E9EE] px-[18px] py-[13px] text-[20px] hover:bg-primary-color-2.2 ${
        activeTab ? "bg-primary-color-2.2" : ""
      }`}
    >
      <span className="material-symbols-outlined">credit_score</span>
      <span>{cardName}</span>
    </button>
  );
};

export default ChooseCardSectionButton;
