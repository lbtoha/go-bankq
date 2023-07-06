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
          className={`${titleFont.className} text-white text-7xl text-center font-bold leading-[120%]`}
        >
          All <span className="text-[#E0F300] custom">Banking</span> Solution <br /> In
          One Place
        </h1>
        <div className="card flex items-end justify-center relative z-50 ">
          <div className="card__left ">
            <Image src={LeftCard} alt="Image left" className="rounded-xl z-50"></Image>
          </div>
          <Image src={mobile} alt="mobile"></Image>
          <div className="card__right ">
            <Image className="rounded-xl" src={RightCard} alt="Image left" ></Image>
          </div>
        </div>
        <div className="banner-objects">
        <div className="banner-objects__left absolute">
          <Image src={leftArrow} alt="Left Arrow"  />
        </div>
        <div className="banner-objects__right absolute">
          <Image src={rightArrow} alt="Left Arrow"  />
        </div>
        </div>
      </div>
    </section>
  );
};
