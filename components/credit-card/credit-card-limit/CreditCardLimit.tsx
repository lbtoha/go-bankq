import { Button } from "@/components/shared/Button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";
import Image from "next/image";
import easyUseImage from "@/public/images/easy_use_credit.png";
export const CreditCardLimit = () => {
  return (
    <section>
      <div className="my-container section-gap">
        <div className="grid grid-cols-12 items-center justify-between">
          <div className="col-span-6">
            <div className="mb-6">
              <SectionHeading title="Credit card limit" />
            </div>
            <div className="mb-10">
              <SectionText text="Each credit card has a predetermined credit limit, which represents the maximum amount you can borrow. If you carry a balance beyond the grace period (usually around 25-30 days), interest charges will apply on the outstanding amount." />
            </div>
            <Button text="Apply Credit card" url="/" />
          </div>
          <div className="col-span-12 col-start-8">
            <Image src={easyUseImage} alt="Improve cost Image" />
          </div>
        </div>
      </div>
    </section>
  );
};
