import { Button } from "@/components/shared/Button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";
import Link from "next/link";
import React from "react";

export const SaveWithUs = () => {
  return (
    <section className="dot-bg bg-primary-color-1 text-center text-white">
      <div className="container py-[120px]">
        <h3 className="font-montserrat text-[25px] font-bold leading-[120%] text-white md:text-[35px] lg:text-[40px]">
          Save With Us
        </h3>

        <p className="mx-auto  mb-[60px] mt-6 max-w-[595px] text-lg leading-[150%] text-[#E7E9EE] lg:mb-10">
          A checking account is a type of bank account that allows you to
          deposit and withdraw money
        </p>
        <div className="flex items-center justify-center gap-[21px]">
          <Link href="/">
            <button className=" border-primary-color-2 bg-primary-color-2 px-3 py-[15px] font-medium  text-primary-color-1 md:px-10">
              Open account
            </button>
          </Link>
          <Link href="/">
            <button className="border border-primary-color-2  px-3 py-[15px]  font-medium text-primary-color-2 md:px-10">
              Get in touch
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
