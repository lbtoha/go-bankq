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

export const Brand = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={6}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className={` bg-[url("/images/sponsor-slider.png")] flex gap-[223px] mx-auto  w-full justify-center items-center py-[120px]`}
    >
      <SwiperSlide>
        <Image src={sponsor1} alt="Brand Image" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={sponsor2} alt="Brand Image" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={sponsor3} alt="Brand Image" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={sponsor4} alt="Brand Image" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={sponsor5} alt="Brand Image" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={sponsor6} alt="Brand Image" />
      </SwiperSlide>
    </Swiper>
  );
};
