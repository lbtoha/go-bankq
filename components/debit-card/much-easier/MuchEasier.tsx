import { SectionHeading } from "@/components/shared/SectionHeading";
import Image from "next/image";
import madeYourCardImage from "@/public/images/make_your_card.png";
import card1 from "@/public/images/card_filter.png";
import card2 from "@/public/images/card_filter2.png";
import card3 from "@/public/images/card_filter3.png";
import { BankCard } from "@/components/shared/BankCard";

export const MuchEasier = () => {
  return (
    <section>
      <div className="section-gap container max-sm:px-2">
        <div className="mx-auto mb-10 max-w-[506px] text-center max-sm:text-center md:mb-[60px]">
          <SectionHeading title="Make your card to much easier" />
        </div>
        <div className=" hidden justify-center md:flex">
          <Image src={madeYourCardImage} alt="Make your card Image" />
        </div>
        <div className="mt-10 md:mt-[120px]">
          <div className="grid justify-items-center gap-6 max-md:space-y-5 md:grid-cols-3">
            <BankCard cardImage={card1} btnUrl="/" />
            <BankCard cardImage={card2} btnUrl="/" />
            <BankCard cardImage={card3} btnUrl="/" />
          </div>
        </div>
      </div>
    </section>
  );
};
