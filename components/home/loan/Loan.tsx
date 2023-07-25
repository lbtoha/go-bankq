import laptopImage from "@/public/images/loan/laptop.png";
import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";
import { titleFont } from "@/utils/fonts";
import { AiOutlineCheck } from "react-icons/ai";

export const Loan = () => {
  return (
    <section className="loan-section relative ">
      <a className="with-arrow relative left-[calc(50%-50px)] top-[-40px] z-[1000] flex h-[80px] max-w-[80px] items-center  justify-center rounded-full border-[11px] border-white bg-[#E0F300] shadow-xl  sm:h-[100px] sm:max-w-[100px] md:left-[calc(50%-50px)] md:top-[-60px] md:h-[120px] md:max-w-[120px]  lg:left-[calc(50%-90px)] lg:top-[-110px]  lg:h-[180px] lg:max-w-[180px]">
        <span className="material-symbols-outlined custom-transition animate-previewShapeY text-primary-color-1 sm:!text-[30px] md:!text-[40px] lg:!text-[60px]">
          arrow_downward
        </span>
      </a>
      <div className="grid-cols-12 justify-between lg:container max-sm:px-2 lg:grid">
        <div className="col-start-1 col-end-7 ">
          <h4 className="loan-section__sub-heading mb-4 text-lg font-normal">
            Banking Solution __
          </h4>
          <div>
            <Image
              width={759}
              height={506}
              className=" md:pt-0 lg:pb-[96px]"
              src={laptopImage}
              alt="laptop"
            />
          </div>
        </div>
        <div className=" relative col-start-8 col-end-13 mt-10">
          <div className="w-max rounded-full bg-primary-color-2 p-2 md:p-3">
            <BsArrowUpRight className="text-lg lg:text-xl" />
          </div>
          <div>
            <h3
              className={`mb-5 mt-6 font-montserrat text-[20px] font-bold leading-[120%]  md:text-[30px] lg:text-[30px] xxl:text-[40px]`}
            >
              Loans, minus the paperwork and haggling.
            </h3>
            <p className="mb-5 text-base leading-[150%] text-[#6F7278] xl:mb-10 xl:text-lg ">
              One of the biggest concerns that customers have when it comes to
              online banking is security.
            </p>
            <div className="space-y-[18px] text-sm text-[#6F7278] xl:text-lg">
              <div className="flex items-center gap-4 ">
                <span className="rounded-full bg-gray-200 p-1">
                  <AiOutlineCheck />
                </span>
                <span>Banking Solutions for Every Lifestyle</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="rounded-full bg-gray-200 p-1">
                  <AiOutlineCheck />
                </span>
                <span>Tailored Banking for Your Unique Needs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-0 top-0 -z-10 h-1/2 w-1/2 bg-gray-50"></div>
    </section>
  );
};
