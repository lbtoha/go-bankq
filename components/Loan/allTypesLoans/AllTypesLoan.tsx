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
import AllTypesLoanCard from "./AllTypesLoanCard";

type SliderRefType = MutableRefObject<Slider | null>;

export const AllTypesLoan = () => {
  let sliderRef: SliderRefType = useRef(null);
  const next = () => {
    sliderRef.current?.slickNext();
  };
  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  const allTypesLoanData = [
    {
      id: 11220001,
      iconName: "real_estate_agent",
      title: "Home Loan",
      bodyText:
        "These loans allow you to borrow against the equity in your home.",
      url: "/",
    },
    {
      id: 11220002,
      iconName: "person",
      title: "Personal Loan",
      bodyText:
        "These loans allow you to borrow against the equity in your home.",
      url: "/",
    },
    {
      id: 11220003,
      iconName: "cases",
      title: "Business Loan",
      bodyText:
        "These loans allow you to borrow against the equity in your home.",
      url: "/",
    },
    {
      id: 11220004,
      iconName: "directions_car",
      title: "Car Loan",
      bodyText:
        "These loans allow you to borrow against the equity in your home.",
      url: "/",
    },
    {
      id: 11220005,
      iconName: "cases",
      title: "Business Loan",
      bodyText:
        "These loans allow you to borrow against the equity in your home.",
      url: "/",
    },
    {
      id: 11220006,
      iconName: "school",
      title: "Education Loan",
      bodyText:
        "These loans allow you to borrow against the equity in your home.",
      url: "/",
    },
  ];

  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    // autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    // centerMode: true,
    // centerPadding: "40px",

    responsive: [
      {
        breakpoint: 320,

        settings: { slidesToShow: 1, slidesToScroll: 1, centerMargin: "40px" },
      },
      {
        breakpoint: 576,

        settings: { slidesToShow: 1, slidesToScroll: 1, centerPadding: "40px" },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },

      {
        breakpoint: 1200,
        settings: { slidesToShow: 3, slidesToScroll: 2 },
      },
      {
        breakpoint: 1500,
        settings: { slidesToShow: 4, slidesToScroll: 2 },
      },
    ],
  };
  return (
    <section className="overflow-hidden bg-[#FAFAFC]">
      <div className="section-gap horizontal-gap container ">
        <div>
          <SectionHeading title="Our all types of loans" />

          <div className="mt-[30px] w-full xl:mt-[60px] 4xl:w-[90vw]">
            <Slider ref={sliderRef} {...settings}>
              {allTypesLoanData.map(
                ({ id, iconName, title, bodyText, url }) => (
                  <AllTypesLoanCard
                    key={id}
                    iconName={iconName}
                    title={title}
                    bodyText={bodyText}
                    url={url}
                  />
                ),
              )}
            </Slider>
            <div className=" ms-5 mt-10 flex items-center  md:mt-20 lg:mt-[120px]">
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
