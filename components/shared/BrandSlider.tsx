"use client";
import Image from "next/image";
import sponsor1 from "@/public/images/sponsor_logo.png";
import sponsor2 from "@/public/images/sponsor_logo2.png";
import sponsor3 from "@/public/images/sponsor_logo3.png";
import sponsor4 from "@/public/images/sponsor_logo4.png";
import sponsor5 from "@/public/images/sponsor_logo5.png";
import sponsor6 from "@/public/images/sponsor_logo6.png";

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
    responsive: [
      {
        breakpoint: 320,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 2, infinite: true },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true },
      },
    ],
  };

  return (
    <div className="">
      <Slider
        {...settings}
        className={` flex w-full items-center   justify-center gap-[223px] bg-[url("/images/sponsor-slider.png")] bg-no-repeat py-[120px] `}
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
