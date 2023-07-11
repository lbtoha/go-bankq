import { SectionHeading } from "@/components/shared/SectionHeading";
import Image from "next/image";
import React from "react";
import exploreImage from "@/public/images/explore_roles_map.png";

export const Explore = () => {
  return (
    <section>
      <div className="my-container my-[120px]">
        <div className="max-w-[791px] text-center mx-auto mb-[60px]">
          <SectionHeading title="Explore roles at GOBank offices around the world" />
        </div>
        <Image src={exploreImage} alt="Explore Image" />
      </div>
    </section>
  );
};
