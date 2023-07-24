"use client";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CardYellow } from "../../shared/CardYellow";
import { SectionText } from "@/components/shared/SectionText";
import Image from "next/image";
import cardSlider from "@/public/images/card_slider.png";
import cardSlider2 from "@/public/images/card_slider2.png";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import arrowLeft from "@/public/images/arrow_left.png";
import arrowRight from "@/public/images/arrow_right.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const CreditCard = () => {
  return (
    <section className="card-section horizontal-gap relative ">
      <div className="section-gap container">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="grid items-center gap-[158px] md:grid-cols-2">
              <div>
                <div className="mb-5">
                  <SectionHeading title="Credit Card" />
                </div>
                <SectionText
                  text="Credit cards typically have a credit limit, which is the maximum amount
      that the cardholder can borrow at any given time. The cardholder is
      responsible for making payments on time."
                />

                <div className="mt-[57px] flex  items-center gap-[41px]">
                  <button className="card-arrow__left relative">
                    <Image src={arrowLeft} alt="Arrow Left" />
                  </button>
                  <button className="card-arrow__right relative">
                    <Image
                      src={arrowRight}
                      alt="Arrow Right"
                      className="mx-10"
                    />
                  </button>
                </div>
              </div>
              <div className="hidden md:block">
                <Image src={cardSlider} alt="Card Slider1" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid items-center gap-[158px] md:grid-cols-2">
              <div>
                <div className="mb-5">
                  <SectionHeading title="Credit Card" />
                </div>
                <SectionText
                  text="Credit cards typically have a credit limit, which is the maximum amount
      that the cardholder can borrow at any given time. The cardholder is
      responsible for making payments on time."
                />
                <div className="mt-[57px] flex  items-center gap-[41px]">
                  <button className="card-arrow__left relative">
                    <Image src={arrowLeft} alt="Arrow Left" />
                  </button>
                  <button className="card-arrow__right relative">
                    <Image
                      src={arrowRight}
                      alt="Arrow Right"
                      className="mx-10"
                    />
                  </button>
                </div>
              </div>
              <div className="hidden md:block">
                <Image src={cardSlider2} alt="Card Slider1" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
