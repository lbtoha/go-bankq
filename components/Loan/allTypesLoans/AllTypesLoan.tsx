"use client";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";
import React, { useRef } from "react";
import { BsFileText } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrowLeft from "@/public/images/arrow_left.png";
import arrowRight from "@/public/images/arrow_right.png";
import Image from "next/image";
import { MutableRefObject } from "react";

type SliderRefType = MutableRefObject<Slider | null>;

export const AllTypesLoan = () => {
  let sliderRef: SliderRefType = useRef(null);
  const next = () => {
    sliderRef.current?.slickNext();
  };
  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    // centerMode: true,
    centerPadding: "40px",
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
        settings: { slidesToShow: 4, slidesToScroll: 1 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4, slidesToScroll: 1 },
      },
      {
        breakpoint: 1200,
        settings: { slidesToShow: 4, slidesToScroll: 2 },
      },
    ],
  };
  return (
    <section>
      <div className="section-gap horizontal-gap container">
        <div>
          <SectionHeading title="Our all types of loans" />

          <div className="mt-[30px] w-full lg:w-[90vw] xl:mt-[60px]">
            <Slider ref={sliderRef} {...settings}>
              <div className="">
                <div className="border-with-gray-bg group  rounded-xl p-[30px] even:mt-[80px] hover:bg-primary-color-2 sm:me-4">
                  <div className="mb-10  w-max  rounded-full bg-[#E7E9EE] p-[15px] group-hover:bg-primary-color-2.2">
                    <BsFileText className="text-[50px] text-primary-color-1" />
                  </div>
                  <h3
                    className={`mb-3 mt-10 font-montserrat text-[24px] font-semibold leading-[130%] text-[#494A4D] `}
                  >
                    Home Loan
                  </h3>
                  <div className="mb-10">
                    <SectionText text="These loans allow you to borrow against the equity in your home." />
                  </div>
                  <p className="text-base leading-[150%] text-primary-color-1 underline">
                    Learn more
                  </p>
                </div>
              </div>
              <div className="">
                <div className="border-with-gray-bg group  rounded-xl p-[30px] even:mt-[80px] hover:bg-primary-color-2 sm:me-4">
                  <div className="mb-10  w-max  rounded-full bg-[#E7E9EE] p-[15px] group-hover:bg-primary-color-2.2">
                    <BsFileText className="text-[50px] text-primary-color-1" />
                  </div>
                  <h3
                    className={`mb-3 mt-10 font-montserrat text-[24px] font-semibold leading-[130%] text-[#494A4D] `}
                  >
                    Home Loan
                  </h3>
                  <div className="mb-10">
                    <SectionText text="These loans allow you to borrow against the equity in your home." />
                  </div>
                  <p className="text-base leading-[150%] text-primary-color-1 underline">
                    Learn more
                  </p>
                </div>
              </div>
              <div className="">
                <div className="border-with-gray-bg group  rounded-xl p-[30px] even:mt-[80px] hover:bg-primary-color-2 sm:me-4">
                  <div className="mb-10  w-max  rounded-full bg-[#E7E9EE] p-[15px] group-hover:bg-primary-color-2.2">
                    <BsFileText className="text-[50px] text-primary-color-1" />
                  </div>
                  <h3
                    className={`mb-3 mt-10 font-montserrat text-[24px] font-semibold leading-[130%] text-[#494A4D] `}
                  >
                    Home Loan
                  </h3>
                  <div className="mb-10">
                    <SectionText text="These loans allow you to borrow against the equity in your home." />
                  </div>
                  <p className="text-base leading-[150%] text-primary-color-1 underline">
                    Learn more
                  </p>
                </div>
              </div>
              <div className="">
                <div className="border-with-gray-bg group  rounded-xl p-[30px] even:mt-[80px] hover:bg-primary-color-2 sm:me-4">
                  <div className="mb-10  w-max  rounded-full bg-[#E7E9EE] p-[15px] group-hover:bg-primary-color-2.2">
                    <BsFileText className="text-[50px] text-primary-color-1" />
                  </div>
                  <h3
                    className={`mb-3 mt-10 font-montserrat text-[24px] font-semibold leading-[130%] text-[#494A4D] `}
                  >
                    Home Loan
                  </h3>
                  <div className="mb-10">
                    <SectionText text="These loans allow you to borrow against the equity in your home." />
                  </div>
                  <p className="text-base leading-[150%] text-primary-color-1 underline">
                    Learn more
                  </p>
                </div>
              </div>
              <div className="">
                <div className="border-with-gray-bg group  rounded-xl p-[30px] even:mt-[80px] hover:bg-primary-color-2 sm:me-4">
                  <div className="mb-10  w-max  rounded-full bg-[#E7E9EE] p-[15px] group-hover:bg-primary-color-2.2">
                    <BsFileText className="text-[50px] text-primary-color-1" />
                  </div>
                  <h3
                    className={`mb-3 mt-10 font-montserrat text-[24px] font-semibold leading-[130%] text-[#494A4D] `}
                  >
                    Home Loan
                  </h3>
                  <div className="mb-10">
                    <SectionText text="These loans allow you to borrow against the equity in your home." />
                  </div>
                  <p className="text-base leading-[150%] text-primary-color-1 underline">
                    Learn more
                  </p>
                </div>
              </div>
              <div className="">
                <div className="border-with-gray-bg group  rounded-xl p-[30px] even:mt-[80px] hover:bg-primary-color-2 sm:me-4">
                  <div className="mb-10  w-max  rounded-full bg-[#E7E9EE] p-[15px] group-hover:bg-primary-color-2.2">
                    <BsFileText className="text-[50px] text-primary-color-1" />
                  </div>
                  <h3
                    className={`mb-3 mt-10 font-montserrat text-[24px] font-semibold leading-[130%] text-[#494A4D] `}
                  >
                    Home Loan
                  </h3>
                  <div className="mb-10">
                    <SectionText text="These loans allow you to borrow against the equity in your home." />
                  </div>
                  <p className="text-base leading-[150%] text-primary-color-1 underline">
                    Learn more
                  </p>
                </div>
              </div>
            </Slider>
            <div className="mt-[120px] flex  items-center gap-[41px]">
              <button className="card-arrow__left relative" onClick={previous}>
                <Image
                  src={arrowLeft}
                  alt="Arrow Left"
                  className="relative z-[2]"
                />
              </button>
              <button className="card-arrow__right relative" onClick={next}>
                <Image
                  src={arrowRight}
                  alt="Arrow Right"
                  className="relative z-[2] mx-10"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
