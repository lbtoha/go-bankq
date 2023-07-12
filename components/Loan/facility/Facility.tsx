import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";
import React from "react";

export const Facility = () => {
  return (
    <section>
      <div className="my-container section-gap">
        <div className="grid  grid-cols-12 items-center justify-between">
          <div className="col-span-5">
            <p className="text-primary-color-1 text-lg leading-[150%] bg-primary-color-2.2 w-fit px-[14px] py-[11px]">
              Loan Facility
            </p>

            <div className="mt-10 mb-6">
              <SectionHeading title="Facility: Definition, Loan Types, and Examples" />
            </div>
            <SectionText text="An unsecured business line of credit gives corporations access to cash as needed at a competitive rate, with flexible payment choices. A traditional line of credit provides check-writing privileges, requires an annual review" />
          </div>
          <div className="col-start-7 col-end-12">
            <div className="grid grid-cols-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
