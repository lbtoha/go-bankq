import { AllCards } from "@/components/shared/AllCards";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";

export const ChooseCard = () => {
  return (
    <section className="bg-gray-100">
      <div className="section-gap container max-sm:px-2">
        <div className="mx-auto mb-5 max-w-[722px] text-center">
          <SectionHeading title="Choose the Card that Matches Your Needs" />
        </div>
        <div className="my-5 flex items-center justify-center gap-4 max-md:flex-col md:my-10 lg:my-[60px]">
          <button className="custom-transition flex items-center gap-4 rounded-md bg-[#E7E9EE] px-[18px] py-[13px] text-[20px] hover:bg-primary-color-2.2">
            <span className="material-symbols-outlined">credit_score</span>
            <span>Debit card</span>
          </button>
          <button className="custom-transition flex items-center gap-4 rounded-md bg-[#E7E9EE] px-[18px] py-[13px] text-[20px] hover:bg-primary-color-2.2">
            <span className="material-symbols-outlined">credit_score</span>
            <span>Debit card</span>
          </button>
          <button className="custom-transition flex items-center gap-4 rounded-md bg-[#E7E9EE] px-[18px] py-[13px] text-[20px] hover:bg-primary-color-2.2">
            <span className="material-symbols-outlined">credit_score</span>
            <span>Debit card</span>
          </button>
        </div>
        <div className=" mx-auto mb-[60px] max-w-[612px] text-center">
          <SectionText text="We have a fine range of accounts to help you manage your finances seamlessly" />
        </div>
        <AllCards />
      </div>
    </section>
  );
};
