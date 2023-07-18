import { AllCards } from "@/components/shared/AllCards";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";

export const ChooseCard = () => {
  return (
    <section>
      <div className="my-container section-gap">
        <div className="mx-auto mb-5 max-w-[722px] text-center">
          <SectionHeading title="Choose the Card that Matches Your Needs" />
        </div>
        <div className=" mx-auto mb-[60px] max-w-[612px] text-center">
          <SectionText text="We have a fine range of accounts to help you manage your finances seamlessly" />
        </div>
        <AllCards />
      </div>
    </section>
  );
};
