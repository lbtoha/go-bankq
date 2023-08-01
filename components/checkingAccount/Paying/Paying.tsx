import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";
import { titleFont } from "@/utils/fonts";
import { BsCreditCard2Back } from "react-icons/bs";

export const Paying = () => {
  return (
    <section className="paying-section max-sm:px-2">
      <div className="section-gap  bg-neutral-color-neutral-200">
        <div className=" container ">
          <div className="grid grid-cols-1 justify-between gap-6 max-lg:space-y-4 lg:grid-cols-2">
            <div>
              <span className="material-symbols-outlined bg-primary-color-2 p-4 text-[40px] lg:p-[25px] lg:text-[50px]">
                credit_score
              </span>
              <h3
                className={`mb-4 mt-5 max-w-[416px] font-montserrat text-[25px] font-semibold leading-[120%] text-neutral-color-neutral-800 md:mt-7 lg:mb-6 lg:mt-10 lg:text-[30px] xl:text-[32px]`}
              >
                Paying with your gobank card when traveling
              </h3>
              <div>
                <SectionText text="A debit card is linked to your checking account and allows you to access your funds through ATMs, make purchases at merchants that accept the card, and make online purchases." />
              </div>
            </div>
            <div>
              <span className="material-symbols-outlined bg-primary-color-2 p-4 text-[40px] lg:p-[25px] lg:text-[50px]">
                local_atm
              </span>
              <h3 className="mb-4 mt-5 font-montserrat text-[25px] font-semibold leading-[120%] text-neutral-color-neutral-800 md:mt-7 lg:mb-6 lg:mt-10 lg:text-[30px] xl:text-[32px]">
                Withdrawing money abroad is free with Gobank.
              </h3>
              <div>
                <SectionText text="A debit card is linked to your checking account and allows you to access your funds through ATMs, make purchases at merchants that accept the card, and make online purchases." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
