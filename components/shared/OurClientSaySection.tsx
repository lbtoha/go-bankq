"use client";
import { SectionHeading } from "@/components/shared/SectionHeading";
import Image from "next/image";
import React, { useRef } from "react";
import client from "@/public/images/client.png";
import { SectionText } from "@/components/shared/SectionText";
import { SliderNavigation } from "@/components/shared/SliderNavigation";
import star from "@/public/images/testimonial_vector.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrowLeft from "@/public/images/arrow_left.png";
import arrowRight from "@/public/images/arrow_right.png";
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
    <section className="our-client-section section-gap bg-[#F9F9FB]">
      <div className="container  max-sm:w-3/4">
        <div className="mb-5 text-center md:mb-10 xl:mb-[60px]">
          <SectionHeading title="What Our Client's Say" />
        </div>
        <Slider ref={sliderRef} {...settings}>
          <div>
            <div className=" grid-cols-2 items-center md:grid md:gap-10">
              <div className="items-center justify-center max-md:flex lg:relative lg:mb-5  lg:ps-[94px]">
                <Image src={client} alt="Client" className="max-sm:w-2/3" />
                <div className="hidden lg:block">
                  <Image
                    src={star}
                    alt="Star"
                    className="absolute left-[2%] top-0 -z-10 "
                  />
                </div>
              </div>
              <div className="">
                <span className="material-symbols-outlined rotate-180 text-[#055F5B]">
                  format_quote
                </span>
                <div className="mt-3">
                  <p className=" text-lg leading-[150%] text-[#6F7278] ">
                    Capital One has a great website and mobile app that are easy
                    to use and provide a lot of helpful features. I also
                    appreciate their credit monitoring and fraud protection
                    services{" "}
                  </p>
                </div>
                <div>
                  <p className=" mt-8 text-lg text-[#292C32] md:mt-10 xl:mt-[60px]">
                    Jon Copper
                  </p>
                  <p className=" text-[#6F7278]">
                    Developer, <span className="text-[#292C32]">Joperki</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className=" grid-cols-2 items-center md:grid md:gap-10">
              <div className="relative items-center justify-center max-lg:mb-5 max-md:flex  lg:ps-[94px]">
                <Image src={client} alt="Client" className="max-sm:w-2/3" />
                <div className="hidden lg:block">
                  <Image
                    src={star}
                    alt="Star"
                    className="absolute left-[2%] top-0 -z-10 "
                  />
                </div>
              </div>
              <div className="">
                <span className="material-symbols-outlined rotate-180 text-[#055F5B]">
                  format_quote
                </span>
                <div className="mt-3">
                  <p className=" text-lg leading-[150%] text-[#6F7278] ">
                    Capital One has a great website and mobile app that are easy
                    to use and provide a lot of helpful features. I also
                    appreciate their credit monitoring and fraud protection
                    services{" "}
                  </p>
                </div>
                <div>
                  <p className=" mt-8 text-lg text-[#292C32] md:mt-10 xl:mt-[60px]">
                    Jon Copper
                  </p>
                  <p className=" text-[#6F7278]">
                    Developer, <span className="text-[#292C32]">Joperki</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>

        <div className="mt-5 flex  items-center justify-center  gap-[41px]  md:mt-10 xl:mt-[60px]">
          <button onClick={previous} className="card-arrow__left relative">
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
              className="relative z-[2] mx-10"
            />
          </button>
        </div>
      </div>
    </section>
  );
};
