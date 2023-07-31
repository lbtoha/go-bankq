import { SectionHeading } from "@/components/shared/SectionHeading";
import Image from "next/image";
import React from "react";
import exploreImage from "@/public/images/map.png";
import map_person_1 from "@/public/images/map_person_1.png";
import map_person_2 from "@/public/images/map_person_2.png";
import map_person_3 from "@/public/images/map_person_3.png";
import map_person_4 from "@/public/images/map_person_4.png";
import map_person_5 from "@/public/images/map_person_5.png";
import map_person_6 from "@/public/images/map_person_6.png";
import map_person_7 from "@/public/images/map_person_7.png";
import map_person_8 from "@/public/images/map_person_8.png";

export const Explore = () => {
  return (
    <section className="">
      <div className="section-gap horizontal-gap container">
        <div className="mx-auto mb-10 max-w-[791px] text-center  lg:mb-[60px]">
          <SectionHeading title="Explore roles at GOBank offices around the world" />
        </div>
        <div className="relative flex items-center justify-center">
          <Image src={exploreImage} alt="Explore Image" />
          <div>
            <Image
              className="absolute left-[55%] top-[50%] max-sm:max-w-[40px] sm:max-md:max-w-[50px]  md:max-lg:max-w-[70px] "
              src={map_person_1}
              alt="person1"
            />
            <Image
              className="absolute left-[80%] top-[13%] max-sm:max-w-[40px] sm:max-md:max-w-[50px] md:max-lg:max-w-[70px]"
              src={map_person_2}
              alt="person2"
            />
            <Image
              className="absolute left-[20%] top-[40%] max-sm:max-w-[40px] sm:max-md:max-w-[50px] md:max-lg:max-w-[70px]"
              src={map_person_3}
              alt="person3"
            />
            <Image
              className="absolute left-[50%] top-[20%] max-sm:max-w-[40px] sm:max-md:max-w-[50px] md:max-lg:max-w-[70px]"
              src={map_person_4}
              alt="person4"
            />
            <Image
              className="absolute left-[25%] top-[70%] max-sm:max-w-[40px] sm:max-md:max-w-[50px] md:max-lg:max-w-[70px]"
              src={map_person_5}
              alt="person5"
            />
            <Image
              className="absolute left-[75%] top-[45%] max-sm:max-w-[40px] sm:max-md:max-w-[50px] md:max-lg:max-w-[70px]"
              src={map_person_6}
              alt="person6"
            />
            <Image
              className="absolute left-[80%] top-[80%] max-sm:max-w-[40px] sm:max-md:max-w-[50px] md:max-lg:max-w-[70px]"
              src={map_person_7}
              alt="person7"
            />
            <Image
              className="absolute left-[20%] top-[10%] max-sm:max-w-[40px] sm:max-md:max-w-[50px] md:max-lg:max-w-[70px]"
              src={map_person_8}
              alt="person8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
