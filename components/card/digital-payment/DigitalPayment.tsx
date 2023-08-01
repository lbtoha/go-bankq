import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";
import Image from "next/image";
import React from "react";
import digitalPaymentImage from "@/public/images/digital_payments.png";
import { IconDarkBg } from "@/components/shared/Icon";

export const DigitalPayment = () => {
  return (
    <section>
      <div className="section-gap container max-sm:px-2">
        <div className="grid-cols-2 items-center justify-between lg:grid">
          <div>
            <div className="mb-4 md:mb-6">
              <SectionHeading title="Process and Manage Digital Payments" />
            </div>
            <div className="mb-6 md:mb-7 lg:mb-10">
              <SectionText text="Proven, scalable and secure payment solutions for issuing, acquiring, processing and banking" />
            </div>
            <div className=" grid-cols-2 gap-6 space-y-5 sm:grid sm:space-y-0">
              <div>
                <div className="mb-3 flex items-center gap-4">
                  <IconDarkBg iconName="local_atm" />
                  <span className="font-montserrat text-xl font-semibold">
                    Credit card
                  </span>
                </div>
                <SectionText text="In today's digital age, customers have high expectations when it come." />
              </div>
              <div>
                <div className="mb-3 flex items-center gap-4">
                  <IconDarkBg iconName="credit_score" />
                  <span className="font-montserrat text-xl font-semibold">
                    Debit card
                  </span>
                </div>
                <SectionText text="In today's digital age, customers have high expectations when it come." />
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <Image src={digitalPaymentImage} alt="Flexible Replacement Image" />
          </div>
        </div>
      </div>
    </section>
  );
};
