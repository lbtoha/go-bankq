import { PageHeader } from "@/components/shared/PageHeader";
import Image from "next/image";
import React from "react";
import blogDetailsBanner from "@/public/images/blog_banner.png";

export const BlogDetailsHeader = () => {
  return (
    <section className="dot-bg bg-primary-color-1">
      <div className="my-container">
        <div className="flex items-center justify-between">
          <div>
            <PageHeader />
          </div>
          <div>
            <Image src={blogDetailsBanner} alt="Personal Loan banner" />
          </div>
        </div>
      </div>
    </section>
  );
};
