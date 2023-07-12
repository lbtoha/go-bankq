import { SectionText } from "@/components/shared/SectionText";
import { titleFont } from "@/utils/fonts";
import { BsCreditCard2Back } from "react-icons/bs";

export const Paying = () => {
  return (
    <section className="bg-[#FAFAFC] paying-section">
      <div className="my-container section-gap">
        <div className="grid grid-cols-2 gap-6 justify-between">
          <div>
            <div className="bg-primary-color-2  p-[25px] w-max">
              <BsCreditCard2Back className="text-[50px]" />
            </div>
            <h3
              className={`text-[32px] font-montserrat font-semibold leading-[120%] text-sub-title-color mt-10 mb-6`}
            >
              Paying with your gobank card when traveling
            </h3>
            <div>
              <SectionText text="A debit card is linked to your checking account and allows you to access your funds through ATMs, make purchases at merchants that accept the card, and make online purchases." />
            </div>
          </div>
          <div>
            <div className="bg-primary-color-2  p-[25px] w-max">
              <BsCreditCard2Back className="text-[50px]" />
            </div>
            <h3
              className={`text-[32px] font-montserrat font-semibold leading-[120%] text-sub-title-color mt-10 mb-6`}
            >
              Withdrawing money abroad is free with Gobank You. Anywhere.
            </h3>
            <div>
              <SectionText text="A debit card is linked to your checking account and allows you to access your funds through ATMs, make purchases at merchants that accept the card, and make online purchases." />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
