import Image from "next/image";
import RightCard from "@/public/images/banner/hero_img_after.png";
import LeftCard from "@/public/images/banner/hero_img_before.png";
import mobile from "@/public/images/banner/mobile.png";
import leftArrow from "@/public/images/banner/arrow.png";
import rightArrow from "@/public/images/banner/stars.png";

import {
  LeftCardAnimation,
  RightCardAnimation,
} from "@/components/animation/Animation";

export const Banner = () => {
  return (
    <section
      className={`banner bg-[url("/images/hero_bg_dot.png") relative h-full w-full overflow-clip bg-[url("/images/banner/bannerBg.png")] pt-[99px]`}
    >
      <div className="container max-md:pb-14">
        <h1
          className={`main-heading text-center font-montserrat  text-2xl font-bold text-white sm:text-3xl md:text-5xl lg:text-7xl`}
        >
          All <span className="custom text-main-heading-color">Banking</span>{" "}
          Solution <br /> In One Place{" "}
        </h1>
        <div className="card relative z-50 flex items-end justify-center ">
          <LeftCardAnimation>
            <Image
              src={LeftCard}
              alt="Image left"
              className="z-50 hidden max-w-full rounded-xl md:block"
            ></Image>
          </LeftCardAnimation>

          <Image
            className="card__mobile hidden md:block md:max-w-[240px] lg:max-w-[300px]"
            src={mobile}
            alt="mobile"
          ></Image>
          <RightCardAnimation>
            <Image
              className="rounded-xl "
              src={RightCard}
              alt="Image left"
            ></Image>
          </RightCardAnimation>
        </div>
        <div className="banner-objects -z-20">
          <div className="banner-objects__left absolute left-[15%]  md:left-[15%] md:top-[45%]">
            <Image
              className="hidden w-[25%]  animate-previewShape md:block lg:w-[150px]"
              src={leftArrow}
              alt="Left Arrow"
            />
          </div>
          <div className="banner-objects__right absolute right-[7%] top-[28%] hidden md:block">
            <Image
              src={rightArrow}
              alt="right Arrow"
              className="animate-pulse"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
