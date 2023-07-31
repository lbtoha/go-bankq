import { BankCard } from "@/components/shared/BankCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";
import card1 from "@/public/images/card_filter.png";
import card2 from "@/public/images/card_filter2.png";
import card3 from "@/public/images/card_filter3.png";

export const ChooseYourCard = () => {
  return (
    <section>
      <div className="section-gap container max-sm:px-2">
        <div className="mb-6">
          <SectionHeading title="Choose your perfect credit card" />
        </div>
        <div className="mb-8 max-w-[634px] md:mb-10 lg:mb-[60px]">
          <SectionText text="Some debit cards may also offer additional benefits such as cashback rewards, purchase protection" />
        </div>
        <div className="grid justify-items-center gap-6 max-md:space-y-5 md:grid-cols-3">
          <BankCard cardImage={card1} btnUrl="/" />
          <BankCard cardImage={card2} btnUrl="/" />
          <BankCard cardImage={card3} btnUrl="/" />
        </div>
      </div>
    </section>
  );
};
