import { PageHeader } from "@/components/shared/PageHeader";
import Image from "next/image";
import React from "react";
import blogImage from "@/public/images/blog_banner.png";

export const BlogHeader = () => {
  return (
    <section className="dot-bg bg-primary-color-1">
      <div className="my-container">
        <div className="flex items-center justify-between">
          <div>
            <PageHeader />
          </div>
          <div>
            <Image src={blogImage} alt="Personal Loan banner" />
          </div>
        </div>
      </div>
    </section>
  );
};
