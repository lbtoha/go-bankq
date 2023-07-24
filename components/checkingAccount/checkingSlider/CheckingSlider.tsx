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
    responsive: [
      {
        breakpoint: 576,
        centerMode: true,
        settings: { slidesToShow: 1, slidesToScroll: 1, centerMode: false },
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
    <div className="">
      <Slider
        {...settings}
        className={` flex w-full items-center   justify-center gap-[223px] bg-[url("/images/sponsor-slider.png")] bg-no-repeat py-[120px] `}
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
