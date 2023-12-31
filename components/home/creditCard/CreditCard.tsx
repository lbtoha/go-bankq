"use client";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";
import Image from "next/image";
import cardSlider from "@/public/images/card_slider.png";
import cardSlider2 from "@/public/images/card_slider2.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrowLeft from "@/public/images/arrow_left.png";
import arrowRight from "@/public/images/arrow_right.png";
import testimonialVector from "@/public/images/testimonial_vector2.png";
import { useRef } from "react";
import { MutableRefObject } from "react";

export const CreditCard = () => {
  type SliderRefType = MutableRefObject<Slider | null>;

  let sliderRef: SliderRefType = useRef(null);
  const next = () => {
    sliderRef.current?.slickNext();
  };
  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  var settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    // autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <section className="card-section section-gap relative hidden md:block">
      <div className=" container">
        <Slider ref={sliderRef} {...settings}>
          <div className="relative">
            <div className="grid grid-cols-2 items-center gap-8 md:gap-14 xl:gap-[158px]">
              <div>
                <div className="mb-5">
                  <SectionHeading title="Credit Card" />
                </div>
                <SectionText text="Credit cards typically have a credit limit, which is the maximum amount that the cardholder can borrow at any given time. The cardholder is responsible for making payments on time." />

                <div className="mb-4 ms-6 mt-10 flex items-center gap-10 md:mt-[60px] lg:mt-[97px]">
                  <button
                    onClick={previous}
                    className="card-arrow__left relative outline-none"
                  >
                    <Image
                      src={arrowLeft}
                      alt="Arrow Left"
                      className="relative z-[2]"
                    />
                  </button>
                  <button
                    onClick={next}
                    className="card-arrow__right relative outline-none"
                  >
                    <Image
                      src={arrowRight}
                      alt="Arrow Right"
                      className="relative z-[2] "
                    />
                  </button>
                </div>
                <Image
                  src={testimonialVector}
                  alt="Testimonial vector"
                  className="absolute right-[40%] top-0 animate-pulse"
                />
              </div>
              <div className="hidden md:block">
                <Image src={cardSlider} alt="Card Slider1" />
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 items-center gap-8 md:gap-14 xl:gap-[158px]">
              <div>
                <div className="mb-5">
                  <SectionHeading title="Debit Card" />
                </div>
                <SectionText
                  text="Credit cards typically have a credit limit, which is the maximum amount
      that the cardholder can borrow at any given time. The cardholder is
      responsible for making payments on time."
                />

                <div className="mb-4 ms-6 mt-10 flex items-center  gap-10 md:mt-[60px] lg:mt-[97px]">
                  <button
                    onClick={previous}
                    className="card-arrow__left relative"
                  >
                    <Image
                      src={arrowLeft}
                      alt="Arrow Left"
                      className="relative z-[2]"
                    />
                  </button>
                  <button onClick={next} className="card-arrow__right relative">
                    <Image
                      src={arrowRight}
                      alt="Arrow Right"
                      className="relative z-[2] "
                    />
                  </button>
                </div>
                <Image
                  src={testimonialVector}
                  alt="Testimonial vector"
                  className="absolute right-[40%] top-0 animate-pulse"
                />
              </div>
              <div className="hidden md:block">
                <Image src={cardSlider2} alt="Card Slider1" />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};
