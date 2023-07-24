import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";
import React from "react";
import { BsFileText } from "react-icons/bs";
import facility from "@/public/images/facility.png";
import Image from "next/image";

export const Facility = () => {
  return (
    <section>
      <div className="section-gap horizontal-gap container">
        <div className="grid  grid-cols-1 items-center justify-between lg:grid-cols-2 xl:grid-cols-12">
          <div className="mb-5 lg:mb-0 xl:col-span-5">
            <p className="w-fit bg-primary-color-2.2 px-[14px] py-[11px] text-lg leading-[150%] text-primary-color-1">
              Loan Facility
            </p>

            <div className="mb-6 mt-10">
              <SectionHeading title="Facility: Definition, Loan Types, and Examples" />
            </div>
            <SectionText text="An unsecured business line of credit gives corporations access to cash as needed at a competitive rate, with flexible payment choices. A traditional line of credit provides check-writing privileges, requires an annual review" />
          </div>
          <div className="xl:col-start-7 xl:col-end-12">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="border-with-gray-bg  rounded-xl pb-[28px] ps-[28px] pt-[28px] ">
                <Image src={facility} alt="Facility" />
                <h3
                  className={`mb-3 mt-[60px] font-montserrat text-[24px] font-semibold leading-[130%] text-[#494A4D] `}
                >
                  What Is a Facility
                </h3>
                <SectionText text="A facility is a formal financial assistance program offered by a lending institution." />
              </div>
              <div className="border-with-gray-bg  rounded-xl pb-[28px] ps-[28px] pt-[28px]">
                <Image src={facility} alt="Facility" />
                <h3
                  className={`mb-3 mt-[60px] font-montserrat text-[24px] font-semibold leading-[130%] text-[#494A4D] `}
                >
                  What Is a Facility
                </h3>
                <SectionText text="A facility is a formal financial assistance program offered by a lending institution." />
              </div>
              <div className="border-with-gray-bg  rounded-xl pb-[28px] ps-[28px] pt-[28px] ">
                <Image src={facility} alt="Facility" />
                <h3
                  className={`mb-3 mt-[60px] font-montserrat text-[24px] font-semibold leading-[130%] text-[#494A4D] `}
                >
                  What Is a Facility
                </h3>
                <SectionText text="A facility is a formal financial assistance program offered by a lending institution." />
              </div>
              <div className="border-with-gray-bg  rounded-xl pb-[28px] ps-[28px] pt-[28px] ">
                <Image src={facility} alt="Facility" />
                <h3
                  className={`mb-3 mt-[60px] font-montserrat text-[24px] font-semibold leading-[130%] text-[#494A4D] `}
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
