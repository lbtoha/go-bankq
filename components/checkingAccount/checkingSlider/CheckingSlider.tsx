"use client";
import Image from "next/image";
import detailSlider1 from "@/public/images/details-slider.png";
import detailSlider2 from "@/public/images/details-slider2.png";
import detailSlider3 from "@/public/images/details-slider3.png";
import detailSlider4 from "@/public/images/details-slider4.png";
import detailSlider5 from "@/public/images/details-slider5.png";
import detailSlider6 from "@/public/images/details-slider6.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const CheckingSlider = () => {
  var settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 200,
    cssEase: "linear",
    centerMode: true,
  };

  return (
    <div className="">
      <Slider
        {...settings}
        className={` bg-[url("/images/sponsor-slider.png")] flex gap-[223px]   w-full justify-center items-center py-[120px] bg-no-repeat `}
      >
        <Image src={detailSlider1} alt="Slider Image1" />

        <Image src={detailSlider2} alt="Slider Image1" />

        <Image src={detailSlider3} alt="Slider Image1" />

        <Image src={detailSlider4} alt="Slider Image1" />

        <Image src={detailSlider5} alt="Slider Image1" />

        <Image src={detailSlider6} alt="Slider Image1" />

        <Image src={detailSlider6} alt="Slider Image1" />
      </Slider>
    </div>
  );
};
