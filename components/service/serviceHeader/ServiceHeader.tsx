import { PageHeader } from "@/components/shared/PageHeader";
import Image from "next/image";
import React from "react";
import serviceBanner from "@/public/images/service_banner.png";

export const ServiceHeader = () => {
  return (
    <section className="bg-primary-color-1 ">
      <div className="my-container">
        <div className="flex items-center justify-between">
          <div>
            <PageHeader />
          </div>
          <div>
            <Image src={serviceBanner} alt="service banner" />
          </div>
        </div>
      </div>
    </section>
  );
};
