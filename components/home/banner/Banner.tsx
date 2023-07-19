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
      className={`relative h-full w-full overflow-clip bg-[url("/images/banner/bannerBg.png")] pt-[99px]`}
    >
      <div className="my-container">
        <h1
          className={`main-heading text-center font-montserrat  text-3xl font-bold text-white md:text-5xl lg:text-7xl `}
        >
          All <span className="custom text-[#E0F300]">Banking</span> Solution{" "}
          <br /> In One Place
        </h1>
        <div className="card relative z-50 flex items-end justify-center ">
          <div className="card__left  md:w-[250px] ">
            <Image
              src={LeftCard}
              alt="Image left"
              className="z-50 hidden rounded-xl md:block"
            ></Image>
          </div>
          <Image
            className="card__mobile hidden md:block md:w-[300px] "
            src={mobile}
            alt="mobile"
          ></Image>
          <div className="card__right hidden md:block md:w-[250px]">
            <Image
              className="rounded-xl"
              src={RightCard}
              alt="Image left"
            ></Image>
          </div>
        </div>
        <div className="banner-objects">
          <div className="banner-objects__left absolute left-[15%] md:left-[10%] md:top-[45%] ">
            <Image
              className="hidden w-[25%]  md:block lg:w-[18%]"
              src={leftArrow}
              alt="Left Arrow"
            />
          </div>
          <div className="banner-objects__right absolute right-[7%] top-[28%] hidden md:block">
            <Image src={rightArrow} alt="right Arrow" />
          </div>
        </div>
      </div>
    </section>
  );
};
