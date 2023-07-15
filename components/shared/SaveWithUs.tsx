import { Button } from "@/components/shared/Button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";
import Link from "next/link";
import React from "react";

export const SaveWithUs = () => {
  return (
    <section className="bg-primary-color-1 text-white text-center dot-bg">
      <div className="my-container py-[120px]">
        <h3 className="font-montserrat text-[25px] md:text-[35px] lg:text-[40px] font-bold leading-[120%] text-white">
          Save With Us
        </h3>

        <p className="text-lg  leading-[150%] text-[#E7E9EE] lg:mb-10 mt-6 mb-[60px] max-w-[595px] mx-auto">
          A checking account is a type of bank account that allows you to
          deposit and withdraw money
        </p>
        <div className="flex items-center justify-center gap-[21px]">
          <Link href="/">
            <button className="px-10 py-[15px] bg-primary-color-2 text-primary-color-1  font-medium border-primary-color-2">
              Open account
            </button>
          </Link>
          <Link href="/">
            <button className="px-10 py-[15px]  text-primary-color-2  font-medium border border-primary-color-2">
              Get in touch
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
