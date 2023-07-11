"use client";
import React from "react";
import { PageHeader } from "@/components/shared/PageHeader";
import Image from "next/image";
import checkingAccountImage from "@/public/images/checking-account.png";
export const CheckingAccountHeader = () => {
  return (
    <section className="bg-primary-color-1 dot-bg">
      <div className="my-container">
        <div className="flex items-center justify-between">
          <div>
            <PageHeader />
          </div>
          <div>
            <Image src={checkingAccountImage} alt="Ch banner" />
          </div>
        </div>
      </div>
    </section>
  );
};
