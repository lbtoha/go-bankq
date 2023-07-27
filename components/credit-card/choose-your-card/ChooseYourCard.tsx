import { AllCards } from "@/components/shared/AllCards";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";

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
        <AllCards />
      </div>
    </section>
  );
};
