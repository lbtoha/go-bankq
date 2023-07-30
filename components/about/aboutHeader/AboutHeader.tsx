"use client";
import React from "react";
import { PageHeader } from "@/components/shared/PageHeader";
import Image from "next/image";
import aboutBanner from "@/public/images/about_banner.png";

export const AboutHeader = () => {
  return (
    <section className="navbar-banner max-lg:section-gap  max-sm:px-2">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <PageHeader title="About us" items={["Home", "About us"]} />
          </div>
          <div className="hidden md:block">
            <Image src={aboutBanner} alt="about banner" />
          </div>
        </div>
      </div>
    </section>
  );
};
