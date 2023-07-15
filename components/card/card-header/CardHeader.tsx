"use client";
import { PageHeader } from "@/components/shared/PageHeader";
import Image from "next/image";
import cardImage from "@/public/images/card_banner.png";

export const CardHeader = () => {
  return (
    <section className="bg-primary-color-1 ">
      <div className="my-container">
        <div className="flex items-center justify-between">
          <div>
            <PageHeader />
          </div>
          <div>
            <Image src={cardImage} alt="service banner" />
          </div>
        </div>
      </div>
    </section>
  );
};
