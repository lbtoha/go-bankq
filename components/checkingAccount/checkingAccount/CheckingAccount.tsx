import React from "react";
import checkingAccountImage from "@/public/images/checking-account.png";
import Image from "next/image";
import client from "@/public/images/client.png";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";
import { Icon, IconLightBg } from "@/components/shared/Icon";
import { MdOutlineSecurity } from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";

export const CheckingAccount = () => {
  return (
    <section>
      <div className="section-gap horizontal-gap container">
        <div className="grid grid-cols-1 items-center max-lg:gap-6 md:grid-cols-2 lg:grid-cols-12">
          <div className="hidden md:block lg:col-span-6">
            <Image src={checkingAccountImage} alt="Checking Account" />
          </div>
          <div className="lg:col-span-12 lg:col-start-8">
            <SectionHeading title="Create checking account For your daily life " />
            <div className="mb-6 mt-6 lg:mb-10">
              <SectionText text="Minimum balance requirement: Many banks require you to maintain a minimum balance in your checking account in order to avoid fees." />
            </div>
            <div className="space-y-4 lg:space-y-6">
              <div className="flex items-center gap-3 lg:gap-5">
                <IconLightBg iconName="check" />
                <div>
                  <p className="text-base md:text-lg">
                    Monthly maintenance fees
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 lg:gap-5">
                <IconLightBg iconName="check" />
                <div>
                  <p className="text-base md:text-lg">Overdraft fees </p>
                </div>
              </div>
              <div className="flex items-center gap-3 lg:gap-5">
                <IconLightBg iconName="check" />
                <div>
                  <p className="text-base md:text-lg">Debit cards </p>
                </div>
              </div>
              <div className="flex items-center gap-3 lg:gap-5">
                <IconLightBg iconName="check" />
                <div>
                  <p className="text-base md:text-lg">Check-writing </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
