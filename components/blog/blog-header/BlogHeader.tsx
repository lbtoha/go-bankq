import { PageHeader } from "@/components/shared/PageHeader";
import Image from "next/image";
import React from "react";
import blogImage from "@/public/images/blog_banner.png";

export const BlogHeader = () => {
  return (
    <section className="dot-bg max-lg:section-gap bg-primary-color-1 max-sm:px-2">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <PageHeader title="Home" items={["Home", "Blog"]} />
          </div>
          <div className="hidden lg:block">
            <Image src={blogImage} alt="Personal Loan banner" />
          </div>
        </div>
      </div>
    </section>
  );
};
