import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";
import Image from "next/image";
import React from "react";
import digitalPaymentImage from "@/public/images/digital_payments.png";
import { Icon } from "@/components/shared/Icon";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { MdCreditScore, MdLocalAtm } from "react-icons/md";

export const DigitalPayment = () => {
  return (
    <section>
      <div className="my-container section-gap">
        <div className="grid grid-cols-2 items-center justify-between">
          <div>
            <div className="mb-6">
              <SectionHeading title="Process and Manage Digital Payments" />
            </div>
            <div className="mb-10">
              <SectionText text="Proven, scalable and secure payment solutions for issuing, acquiring, processing and banking" />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="flex gap-4 items-center mb-3">
                  <Icon padding="p-2">
                    {" "}
                    <MdCreditScore className="text-xl text-primary-color-1" />
                  </Icon>
                  <span className="font-montserrat font-semibold text-xl">
                    Credit card
                  </span>
                </div>
                <SectionText text="In today's digital age, customers have high expectations when it come." />
              </div>
              <div>
                <div className="flex gap-4 items-center mb-3">
                  <Icon padding="p-2">
                    {" "}
                    <MdLocalAtm className="text-xl text-primary-color-1" />
                  </Icon>
                  <span className="font-montserrat font-semibold text-xl">
                    Debit card
                  </span>
                </div>
                <SectionText text="In today's digital age, customers have high expectations when it come." />
              </div>
            </div>
          </div>
          <div>
            <Image src={digitalPaymentImage} alt="Flexible Replacement Image" />
          </div>
        </div>
      </div>
    </section>
  );
};
