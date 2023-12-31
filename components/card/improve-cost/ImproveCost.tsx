import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";
import Image from "next/image";
import React from "react";
import improveCost from "@/public/images/improve_cost.png";
import { Button } from "@/components/shared/Button";

export const ImproveCost = () => {
  return (
    <section>
      <div className="section-gap container max-sm:px-2">
        <div className="grid-cols-2 items-center justify-between gap-6 lg:grid">
          <div>
            <div className="mb-3 max-w-[636px] lg:mb-6">
              <SectionHeading title="Improve Cost to Income speed and agility for your Credit Card Programs" />
            </div>
            <div className=" mb-5 lg:mb-10">
              <SectionText text="Earn 1% cashback from select merchants, stacked on top of FX gains from your multi-currency corporate card spend." />
            </div>
            <Button btnType="btnPrimary" text="Apply now" url="/" />
          </div>
          <div className="hidden lg:block">
            <Image src={improveCost} alt="Improve cost Image" />
          </div>
        </div>
      </div>
    </section>
  );
};
