"use client";
import React from "react";
import { PageHeader } from "@/components/shared/PageHeader";
import Image from "next/image";
import aboutBanner from "@/public/images/about_banner.png";

export const AboutHeader = () => {
  return (
    <section className="bg-primary-color-1 ">
      <div className="my-container">
        <div className="flex items-center justify-between">
          <div>
            <PageHeader />
          </div>
          <div>
            <Image src={aboutBanner} alt="about banner" />
          </div>
        </div>
      </div>
    </section>
  );
};
