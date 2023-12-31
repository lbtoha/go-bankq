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

type Prop = {
  bgColor: "bg" | null;
};

export const BrandSlider = ({ bgColor }: Prop) => {
  var settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    // autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    centerMode: false,
    responsive: [
      {
        breakpoint: 576,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },

      {
        breakpoint: 768,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 4, slidesToScroll: 1 },
      },
      {
        breakpoint: 1200,
        settings: { slidesToShow: 6, slidesToScroll: 3 },
      },
    ],
  };

  return (
    <Slider
      {...settings}
      className={` overflow-hidden  ${
        bgColor
          ? "bg-primary-color-2"
          : 'bg-[url("/images/sponsor-slider.png")]'
      } bg-cover bg-no-repeat py-[50px] md:py-[90px] lg:py-[100px] xl:py-[120px] `}
    >
      <div>
        <Image
          src={sponsor1}
          alt="Our Mission Image1"
          className="mx-auto object-cover"
        />
      </div>
      <div>
        <Image
          src={sponsor2}
          alt="Our Mission Image1"
          className="mx-auto object-cover"
        />
      </div>
      <div>
        <Image
          src={sponsor3}
          alt="Our Mission Image1"
          className="mx-auto object-cover"
        />
      </div>
      <div>
        <Image
          src={sponsor4}
          alt="Our Mission Image1"
          className="mx-auto object-cover"
        />
      </div>
      <div>
        <Image
          src={sponsor6}
          alt="Our Mission Image1"
          className="mx-auto object-cover"
        />
      </div>
      <div>
        <Image
          src={sponsor5}
          alt="Our Mission Image1"
          className="mx-auto object-cover"
        />
      </div>
      <div>
        <Image
          src={sponsor4}
          alt="Our Mission Image1"
          className="mx-auto object-cover"
        />
      </div>
      <div>
        <Image
          src={sponsor6}
          alt="Our Mission Image1"
          className="mx-auto object-cover"
        />
      </div>
    </Slider>
  );
};
