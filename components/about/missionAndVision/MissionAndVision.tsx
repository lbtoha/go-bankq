"use client";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";
import { textFont } from "@/utils/fonts";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ourMissionImage1 from "@/public/images/our-mission.png";
import ourMissionImage2 from "@/public/images/our-mission2.png";
import ourMissionImage3 from "@/public/images/our-mission3.png";
import ourMissionImage4 from "@/public/images/our-mission4.png";
import Image from "next/image";

export const MissionAndVision = () => {
  var settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    centerMode: false,
  };
  return (
    <section className="overflow-clip">
      <div className="my-container mt-[120px] mb-[94px]">
        <div className="grid grid-cols-2 gap-[134px]">
          <div className="space-y-6">
            <SectionHeading title="Our mission" />
            <div className="max-w-[526px]">
              <SectionText text="Credit cards typically have a credit limit, which is the maximum amount that the cardholder can borrow at any given time. The cardholder is responsible for making payments on time, and if they do not." />
            </div>
          </div>
          <div className="space-y-6">
            <SectionHeading title="Our vision" />
            <div className={textFont.className}>
              <div className="max-w-[526px]">
                <SectionText text="Credit cards typically have a credit limit, which is the maximum amount that the cardholder can borrow at any given time. The cardholder is responsible for making payments on time, and if they do not." />
              </div>
            </div>
          </div>
        </div>
        {/* mission and vision slider */}
        <div className="w-[90vw]">
          <Slider {...settings}>
            <div>
              <Image src={ourMissionImage1} alt="Our Mission Image1" />
            </div>
            <div>
              <Image src={ourMissionImage2} alt="Our Mission Image1" />
            </div>
            <div>
              <Image src={ourMissionImage3} alt="Our Mission Image1" />
            </div>
            <div>
              <Image src={ourMissionImage4} alt="Our Mission Image1" />
            </div>
            <div>
              <Image src={ourMissionImage4} alt="Our Mission Image1" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};
