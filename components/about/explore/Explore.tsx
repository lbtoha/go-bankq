import { SectionHeading } from "@/components/shared/SectionHeading";
import Image from "next/image";
import React from "react";
import exploreImage from "@/public/images/explore_roles_map.png";

export const Explore = () => {
  return (
    <section className="">
      <div className="section-gap horizontal-gap container">
        <div className="mx-auto mb-10 max-w-[791px] text-center  lg:mb-[60px]">
          <SectionHeading title="Explore roles at GOBank offices around the world" />
        </div>
        <div className="flex items-center justify-center">
          <Image src={exploreImage} alt="Explore Image" />
        </div>
      </div>
    </section>
  );
};
