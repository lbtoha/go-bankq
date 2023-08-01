import { PageHeader } from "@/components/shared/PageHeader";
import Image from "next/image";
import React from "react";
import blogImage from "@/public/images/blog_banner.png";

export const BlogHeader = () => {
  return (
    <section className=" max-lg:section-gap navbar-banner max-sm:px-2">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <PageHeader title="Blog" items={["Home", "Blog"]} />
          </div>
          <div className="hidden lg:block">
            <Image src={blogImage} alt="Personal Loan banner" />
          </div>
        </div>
      </div>
    </section>
  );
};
