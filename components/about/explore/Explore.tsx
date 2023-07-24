import { SectionHeading } from "@/components/shared/SectionHeading";
import Image from "next/image";
import React from "react";
import exploreImage from "@/public/images/explore_roles_map.png";

export const Explore = () => {
  return (
    <section className="">
      <div className="section-gap horizontal-gap container">
        <div className="mx-auto mb-[60px] text-center  xl:max-w-[791px]">
          <SectionHeading title="Explore roles at GOBank offices around the world" />
        </div>
        <Image src={exploreImage} alt="Explore Image" />
      </div>
    </section>
  );
};
