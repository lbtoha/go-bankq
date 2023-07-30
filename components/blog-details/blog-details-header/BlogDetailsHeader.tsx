import { PageHeader } from "@/components/shared/PageHeader";
import Image from "next/image";
import React from "react";
import blogDetailsBanner from "@/public/images/blog_banner.png";

export const BlogDetailsHeader = () => {
  return (
    <section className="navbar-banner max-lg:section-gap max-sm:px-2">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <PageHeader title="Home" items={["Home", "Blog Details"]} />
          </div>
          <div className="hidden lg:block">
            <Image src={blogDetailsBanner} alt="Personal Loan banner" />
          </div>
        </div>
      </div>
    </section>
  );
};
