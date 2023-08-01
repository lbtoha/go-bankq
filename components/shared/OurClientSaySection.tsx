"use client";
import { SectionHeading } from "@/components/shared/SectionHeading";
import Image from "next/image";
import React, { useRef } from "react";
import client from "@/public/images/client.png";
import star from "@/public/images/testimonial_vector.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrowLeft from "@/public/images/arrow_left.png";
import arrowRight from "@/public/images/arrow_right.png";
import testimonialVector2 from "@/public/images/testimonial_vector2.png";
import { MutableRefObject } from "react";

type SliderRefType = MutableRefObject<Slider | null>;

export const OurClientSaySection = () => {
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
    // autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <section className="our-client-section section-gap relative bg-[#F9F9FB]">
      <div className="container  max-sm:w-3/4">
        <div className="mb-10 text-center xl:mb-[60px]">
          <SectionHeading title="What Our Client's Say" />
        </div>
        <Slider ref={sliderRef} {...settings}>
          <div>
            <div className="grid-cols-2 items-center justify-items-center md:grid md:gap-10">
              <div className="items-center justify-center max-md:flex lg:relative lg:mb-5  lg:ps-[94px]">
                <Image src={client} alt="Client" className="max-sm:w-2/3" />
                <div className="hidden lg:block">
                  <Image
                    src={star}
                    alt="Star"
                    className="spin-slow absolute left-[2%] top-0 -z-10 animate-spin-slow"
                  />
                </div>
              </div>
              <div className="max-lg:mt-8">
                <span className="material-symbols-outlined rotate-180 text-5xl text-[#055F5B] md:text-[60px]">
                  format_quote
                </span>
                <div className="md:mt-5">
                  <p className=" text-base leading-[150%] text-neutral-color-neutral-600 sm:text-lg ">
                    Capital One has a great website and mobile app that are easy
                    to use and provide a lot of helpful features. I also
                    appreciate their credit monitoring and fraud protection
                    services{" "}
                  </p>
                </div>
                <div className="border-s border-primary-color-2 ps-5">
                  <p className=" mt-8 text-base text-neutral-color-neutral-800 sm:text-lg md:mt-10 xl:mt-[60px]">
                    Jon Copper
                  </p>
                  <p className=" text-neutral-color-neutral-600">
                    Developer,{" "}
                    <span className="text-neutral-color-neutral-800">
                      Joperki
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="grid-cols-2 items-center justify-items-center md:grid md:gap-10">
              <div className="items-center justify-center max-md:flex lg:relative lg:mb-5  lg:ps-[94px]">
                <Image src={client} alt="Client" className="max-sm:w-2/3" />
                <div className="hidden lg:block">
                  <Image
                    src={star}
                    alt="Star"
                    className="spin-slow absolute left-[2%] top-0 -z-10 animate-spin-slow"
                  />
                </div>
              </div>
              <div className="max-lg:mt-8">
                <span className="material-symbols-outlined rotate-180 text-5xl text-[#055F5B] md:text-[60px]">
                  format_quote
                </span>
                <div className="md:mt-5">
                  <p className=" text-lg leading-[150%] text-neutral-color-neutral-600 ">
                    Capital One has a great website and mobile app that are easy
                    to use and provide a lot of helpful features. I also
                    appreciate their credit monitoring and fraud protection
                    services{" "}
                  </p>
                </div>
                <div className="border-s border-primary-color-2 ps-5">
                  <p className=" mt-8 text-lg text-neutral-color-neutral-800 md:mt-10 xl:mt-[60px]">
                    Jon Copper
                  </p>
                  <p className=" text-neutral-color-neutral-600">
                    Developer,{" "}
                    <span className="text-neutral-color-neutral-800">
                      Joperki
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>

        <div className="mt-10 flex items-center  justify-center xl:mt-[60px]">
          <button
            onClick={previous}
            className="card-arrow__left  relative focus-visible:outline-none"
          >
            <Image
              src={arrowLeft}
              alt="Arrow Left"
              className=" relative z-[2] focus-visible:outline-none"
            />
          </button>
          <button
            onClick={next}
            className="card-arrow__right relative focus-visible:outline-none"
          >
            <Image
              src={arrowRight}
              alt="Arrow Right"
              className="relative z-[2] mx-10 focus-visible:outline-none"
            />
          </button>
        </div>
      </div>
      <div className="absolute right-[10%] top-[15%] z-40 hidden md:block">
        <Image
          src={testimonialVector2}
          alt="right Arrow"
          className="animate-pulse"
        />
      </div>
    </section>
  );
};
