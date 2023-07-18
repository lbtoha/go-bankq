import { AllCards } from "@/components/shared/AllCards";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";

export const ChooseYourCard = () => {
  return (
    <section>
      <div className="my-container section-gap">
        <div className="mb-6">
          <SectionHeading title="Choose your perfect credit card" />
        </div>
        <div className="mb-[60px] max-w-[634px]">
          <SectionText text="Some debit cards may also offer additional benefits such as cashback rewards, purchase protection" />
        </div>
        <AllCards />
      </div>
    </section>
  );
};
