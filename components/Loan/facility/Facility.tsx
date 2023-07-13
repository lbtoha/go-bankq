import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";
import React from "react";
import { BsFileText } from "react-icons/bs";
import facility from "@/public/images/facility.png";
import Image from "next/image";

export const Facility = () => {
  return (
    <section>
      <div className="my-container section-gap">
        <div className="grid  grid-cols-12 grid-flow-col items-center justify-between">
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
            <div className="grid grid-cols-2 gap-6">
              <div className="border-with-gray-bg  ps-[28px] pt-[28px] pb-[28px] rounded-xl ">
                <Image src={facility} alt="Facility" />
                <h3
                  className={`font-montserrat mt-[60px] mb-3 text-[24px] font-semibold leading-[130%] text-[#494A4D] `}
                >
                  What Is a Facility
                </h3>
                <SectionText text="A facility is a formal financial assistance program offered by a lending institution." />
              </div>
              <div className="border-with-gray-bg  ps-[28px] pt-[28px] pb-[28px] rounded-xl">
                <Image src={facility} alt="Facility" />
                <h3
                  className={`font-montserrat mt-[60px] mb-3 text-[24px] font-semibold leading-[130%] text-[#494A4D] `}
                >
                  What Is a Facility
                </h3>
                <SectionText text="A facility is a formal financial assistance program offered by a lending institution." />
              </div>
              <div className="border-with-gray-bg  ps-[28px] pt-[28px] pb-[28px] rounded-xl ">
                <Image src={facility} alt="Facility" />
                <h3
                  className={`font-montserrat mt-[60px] mb-3 text-[24px] font-semibold leading-[130%] text-[#494A4D] `}
                >
                  What Is a Facility
                </h3>
                <SectionText text="A facility is a formal financial assistance program offered by a lending institution." />
              </div>
              <div className="border-with-gray-bg  ps-[28px] pt-[28px] pb-[28px] rounded-xl ">
                <Image src={facility} alt="Facility" />
                <h3
                  className={`font-montserrat mt-[60px] mb-3 text-[24px] font-semibold leading-[130%] text-[#494A4D] `}
                >
                  What Is a Facility
                </h3>
                <SectionText text="A facility is a formal financial assistance program offered by a lending institution." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
