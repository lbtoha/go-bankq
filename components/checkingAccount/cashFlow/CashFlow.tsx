import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";
import callToActionLeft from "@/public/images/call-to-action-vactor2.png";
import { titleFont } from "@/utils/fonts";
import Image from "next/image";
import cashFlow from "@/public/images/cash-flow.png";

export const CashFlow = () => {
  return (
    <section>
      <div className="my-container section-gap">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-6">
            <SectionHeading title="Cash flow at your fingertips with GOBANK Debit Card" />
            <div className="mt-6">
              <SectionText text="If you spend more money than you have in your checking account, you may be charged an overdraft fee.  Some banks offer overdraft protection services to help you avoid overdraft fees." />
            </div>
            <div className="grid grid-cols-3 items-center justify-between mt-[64px]">
              <div className="space-y-6 flex flex-col items-center">
                <div className="border-8 rounded-full border-primary-color-1 h-[127px] w-[127px] flex items-center justify-center">
                  <p
                    className={`${titleFont.className} text-[40px] font-bold text-primary-color-1 `}
                  >
                    90%
                  </p>
                </div>
                <p
                  className={`text-black text-2xl font-semibold text-center ${titleFont.className}`}
                >
                  Satisfied User
                </p>
              </div>
              <div className="space-y-6 flex flex-col items-center">
                <div className="border-8 rounded-full border-primary-color-1 h-[127px] w-[127px] flex items-center justify-center">
                  <p
                    className={`${titleFont.className} text-[40px] font-bold text-primary-color-1 `}
                  >
                    20+
                  </p>
                </div>
                <p
                  className={`text-black text-2xl font-semibold text-center ${titleFont.className}`}
                >
                  Years of Business
                </p>
              </div>
              <div className="space-y-6 flex flex-col items-center">
                <div className="border-8 rounded-full border-primary-color-1 h-[127px] w-[127px] flex items-center justify-center">
                  <p
                    className={`${titleFont.className} text-[40px] font-bold text-primary-color-1 `}
                  >
                    5+
                  </p>
                </div>
                <p
                  className={`text-black text-2xl font-semibold text-center ${titleFont.className}`}
                >
                  Awards
                </p>
              </div>
            </div>
          </div>
          <div className="col-start-8 col-span-12">
            <Image src={cashFlow} alt="Cash Flow" />
          </div>
        </div>
      </div>
    </section>
  );
};
