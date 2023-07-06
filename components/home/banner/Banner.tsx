import { titleFont } from "@/utils/fonts";
import Image from "next/image";
import RightCard from "../../../public/images/banner/hero_img_after.png";
import LeftCard from "../../../public/images/banner/hero_img_before.png";
import mobile from "../../../public/images/banner/mobile.png";

export const Banner = () => {
  return (
    <section
      className={`bg-[url("/images/banner/bannerBg.png")] w-full h-full pt-[99px] overflow-clip`}
    >
      <div className="my-container">
        <h1
          className={`${titleFont.className} text-white text-7xl text-center font-bold leading-[120%]`}
        >
          All <span className="text-[#E0F300]">Banking</span> Solution <br /> In
          One Place
        </h1>
        <div className="relative mt-[70px] w-[">
          <div className=" -rotate-45 absolute ">
            <Image src={LeftCard} alt="Image left"></Image>
          </div>

          <Image src={mobile} alt="mobile"></Image>

          <div className=" absolute  ">
            <Image src={RightCard} alt="Image left"></Image>
          </div>
        </div>
      </div>
    </section>
  );
};
