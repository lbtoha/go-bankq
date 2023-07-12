import { titleFont } from "@/utils/fonts";
import Image from "next/image";
import RightCard from "@/public/images/banner/hero_img_after.png";
import LeftCard from "@/public/images/banner/hero_img_before.png";
import mobile from "@/public/images/banner/mobile.png";
import leftArrow from "@/public/images/banner/arrow.png";
import rightArrow from "@/public/images/banner/stars.png";

export const Banner = () => {
  return (
    <section
      className={`bg-[url("/images/banner/bannerBg.png")] w-full h-full pt-[99px] overflow-clip relative`}
    >
      <div className="my-container">
        <h1
          className={`font-montserrat main-heading text-white text-4xl md:text-5xl lg:text-7xl text-center font-bold `}
        >
          All <span className="text-[#E0F300] custom">Banking</span> Solution{" "}
          <br /> In One Place
        </h1>
        <div className="card flex items-end justify-center relative z-50 ">
          <div className="card__left md:w-[250px]">
            <Image
              src={LeftCard}
              alt="Image left"
              className="rounded-xl z-50"
            ></Image>
          </div>
          <Image
            className="md:w-[300px] card__mobile "
            src={mobile}
            alt="mobile"
          ></Image>
          <div className="card__right md:w-[250px]">
            <Image
              className="rounded-xl"
              src={RightCard}
              alt="Image left"
            ></Image>
          </div>
        </div>
        <div className="banner-objects">
          <div className="banner-objects__left absolute left-[15%] ">
            <Image
              className="w-[25%] lg:w-[18%]"
              src={leftArrow}
              alt="Left Arrow"
            />
          </div>
          <div className="banner-objects__right absolute top-[28%] right-[7%]">
            <Image src={rightArrow} alt="right Arrow" />
          </div>
        </div>
      </div>
    </section>
  );
};
