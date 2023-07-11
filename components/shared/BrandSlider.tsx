"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import sponsor1 from "@/public/images/sponsor_logo.png";
import sponsor2 from "@/public/images/sponsor_logo2.png";
import sponsor3 from "@/public/images/sponsor_logo3.png";
import sponsor4 from "@/public/images/sponsor_logo4.png";
import sponsor5 from "@/public/images/sponsor_logo5.png";
import sponsor6 from "@/public/images/sponsor_logo6.png";

import "swiper/css/autoplay";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const BrandSlider = () => {
  var settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    centerMode: true,
  };

  return (
    <div className="">
      <Slider
        {...settings}
        className={` bg-[url("/images/sponsor-slider.png")] flex gap-[223px]   w-full justify-center items-center py-[120px] bg-no-repeat `}
      >
        <div>
          <Image src={sponsor1} alt="Our Mission Image1" />
        </div>
        <div>
          <Image src={sponsor2} alt="Our Mission Image1" />
        </div>
        <div>
          <Image src={sponsor3} alt="Our Mission Image1" />
        </div>
        <div>
          <Image src={sponsor4} alt="Our Mission Image1" />
        </div>
        <div>
          <Image src={sponsor5} alt="Our Mission Image1" />
        </div>
        <div>
          <Image src={sponsor6} alt="Our Mission Image1" />
        </div>
      </Slider>
    </div>
  );
};
