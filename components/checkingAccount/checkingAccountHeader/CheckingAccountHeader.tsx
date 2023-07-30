"use client";
import React from "react";
import { PageHeader } from "@/components/shared/PageHeader";
import Image from "next/image";
import checkingAccountImage from "@/public/images/checking-account.png";
export const CheckingAccountHeader = () => {
  return (
    <section className=" max-lg:section-gap navbar-banner max-sm:px-2">
      <div className=" container">
        <div className="flex items-center justify-between">
          <div>
            <PageHeader
              title="Account"
              items={["Home", "Service", "Account"]}
            />
          </div>
          <div className="hidden lg:block">
            <Image
              className=" w-3/4 md:w-3/4 lg:w-full"
              src={checkingAccountImage}
              alt="Ch banner"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
