"use client";
import { PageHeader } from "@/components/shared/PageHeader";
import Image from "next/image";
import cardImage from "@/public/images/card_banner.png";

export const CardHeader = () => {
  return (
    <section className="max-lg:section-gap bg-primary-color-1 max-sm:px-2">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <PageHeader title="Home" items={["Home", "Card"]} />
          </div>
          <div className="hidden lg:block">
            <Image src={cardImage} alt="service banner" />
          </div>
        </div>
      </div>
    </section>
  );
};
