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

export const AllTypesLoan = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.current.slickNext();
  };
  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    centerMode: false,
    centerPadding: "40px",
  };
  return (
    <section>
      <div className="my-container section-gap">
        <div>
          <SectionHeading title="Our all types of loans" />

          <div className="w-[90vw] mt-[60px]">
            <Slider ref={sliderRef} {...settings}>
              <div className="">
                <div className="w-[306px] me-4 border-with-gray-bg group hover:bg-primary-color-2 p-[30px] rounded-xl even:mt-[80px]">
                  <div className="bg-[#E7E9EE]  group-hover:bg-primary-color-2.2  p-[15px] w-max mb-10 rounded-full">
                    <BsFileText className="text-[50px] text-primary-color-1" />
                  </div>
                  <h3
                    className={`font-montserrat mt-10 mb-3 text-[24px] font-semibold leading-[130%] text-[#494A4D] `}
                  >
                    Home Loan
                  </h3>
                  <div className="mb-10">
                    <SectionText text="These loans allow you to borrow against the equity in your home." />
                  </div>
                  <p className="text-primary-color-1 text-base leading-[150%] underline">
                    Learn more
                  </p>
                </div>
              </div>
              <div className="">
                <div className="w-[306px] me-4 border-with-gray-bg group hover:bg-primary-color-2 p-[30px] rounded-xl even:mt-[80px]">
                  <div className="bg-[#E7E9EE]  group-hover:bg-primary-color-2.2  p-[15px] w-max mb-10 rounded-full">
                    <BsFileText className="text-[50px] text-primary-color-1" />
                  </div>
                  <h3
                    className={`font-montserrat mt-10 mb-3 text-[24px] font-semibold leading-[130%] text-[#494A4D] `}
                  >
                    Home Loan
                  </h3>
                  <div className="mb-10">
                    <SectionText text="These loans allow you to borrow against the equity in your home." />
                  </div>
                  <p className="text-primary-color-1 text-base leading-[150%] underline">
                    Learn more
                  </p>
                </div>
              </div>
              <div className="">
                <div className="w-[306px] me-4 border-with-gray-bg group hover:bg-primary-color-2 p-[30px] rounded-xl even:mt-[80px]">
                  <div className="bg-[#E7E9EE]  group-hover:bg-primary-color-2.2  p-[15px] w-max mb-10 rounded-full">
                    <BsFileText className="text-[50px] text-primary-color-1" />
                  </div>
                  <h3
                    className={`font-montserrat mt-10 mb-3 text-[24px] font-semibold leading-[130%] text-[#494A4D] `}
                  >
                    Home Loan
                  </h3>
                  <div className="mb-10">
                    <SectionText text="These loans allow you to borrow against the equity in your home." />
                  </div>
                  <p className="text-primary-color-1 text-base leading-[150%] underline">
                    Learn more
                  </p>
                </div>
              </div>
              <div className="">
                <div className="w-[306px] me-4 border-with-gray-bg group hover:bg-primary-color-2 p-[30px] rounded-xl even:mt-[80px]">
                  <div className="bg-[#E7E9EE]  group-hover:bg-primary-color-2.2  p-[15px] w-max mb-10 rounded-full">
                    <BsFileText className="text-[50px] text-primary-color-1" />
                  </div>
                  <h3
                    className={`font-montserrat mt-10 mb-3 text-[24px] font-semibold leading-[130%] text-[#494A4D] `}
                  >
                    Home Loan
                  </h3>
                  <div className="mb-10">
                    <SectionText text="These loans allow you to borrow against the equity in your home." />
                  </div>
                  <p className="text-primary-color-1 text-base leading-[150%] underline">
                    Learn more
                  </p>
                </div>
              </div>
              <div className="">
                <div className="w-[306px] me-4 border-with-gray-bg group hover:bg-primary-color-2 p-[30px] rounded-xl even:mt-[80px]">
                  <div className="bg-[#E7E9EE]  group-hover:bg-primary-color-2.2  p-[15px] w-max mb-10 rounded-full">
                    <BsFileText className="text-[50px] text-primary-color-1" />
                  </div>
                  <h3
                    className={`font-montserrat mt-10 mb-3 text-[24px] font-semibold leading-[130%] text-[#494A4D] `}
                  >
                    Home Loan
                  </h3>
                  <div className="mb-10">
                    <SectionText text="These loans allow you to borrow against the equity in your home." />
                  </div>
                  <p className="text-primary-color-1 text-base leading-[150%] underline">
                    Learn more
                  </p>
                </div>
              </div>
              <div className="">
                <div className="w-[306px] me-4 border-with-gray-bg group hover:bg-primary-color-2 p-[30px] rounded-xl even:mt-[80px]">
                  <div className="bg-[#E7E9EE]  group-hover:bg-primary-color-2.2  p-[15px] w-max mb-10 rounded-full">
                    <BsFileText className="text-[50px] text-primary-color-1" />
                  </div>
                  <h3
                    className={`font-montserrat mt-10 mb-3 text-[24px] font-semibold leading-[130%] text-[#494A4D] `}
                  >
                    Home Loan
                  </h3>
                  <div className="mb-10">
                    <SectionText text="These loans allow you to borrow against the equity in your home." />
                  </div>
                  <p className="text-primary-color-1 text-base leading-[150%] underline">
                    Learn more
                  </p>
                </div>
              </div>
            </Slider>
            <div className="flex items-center  gap-[41px] mt-[120px]">
              <button className="card-arrow__left relative" onClick={previous}>
                <Image src={arrowLeft} alt="Arrow Left" />
              </button>
              <button className="card-arrow__right relative" onClick={next}>
                <Image src={arrowRight} alt="Arrow Right" className="mx-10" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
