"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ourMissionImage1 from "@/public/images/our-mission.png";
import ourMissionImage2 from "@/public/images/our-mission2.png";
import ourMissionImage3 from "@/public/images/our-mission3.png";
import ourMissionImage4 from "@/public/images/our-mission4.png";
import Image from "next/image";

export const MissionSlider = () => {
  var settings = {
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    centerMode: false,
    responsive: [
      {
        breakpoint: 576,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 1200,
        settings: { slidesToShow: 4, slidesToScroll: 2 },
      },
    ],
  };

  return (
    <section>
      {/* mission and vision slider */}
      <div className="xl:w-[90vw]">
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
    </section>
  );
};
