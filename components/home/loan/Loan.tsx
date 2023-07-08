import laptopImage from "@/public/images/loan/laptop.png";
import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";
import { titleFont } from "@/utils/fonts";
import { AiOutlineCheck } from "react-icons/ai";

export const Loan = () => {
  return (
    <div className="loan-section relative">
      <div className="lg:my-container px-5 md:px-10 md:grid grid-cols-12 justify-between pt-[100px] md:pt-[180px] lg:pt-[226px] ">
        <div className="col-start-1 col-end-8 ">
          <h4 className="text-lg loan-section__sub-heading font-normal mb-4">
            Banking Solution __
          </h4>
          <div>
            <Image
              className=" md:pt-0 lg:pb-[120px]"
              src={laptopImage}
              alt="laptop"
            />
          </div>
        </div>
        <div className=" col-start-9 col-end-13 mt-10">
          <div className="bg-primary-color-2 w-max p-4 rounded-full">
            <BsArrowUpRight className="text-2xl" />
          </div>
          <div>
            <h3
              className={`${titleFont.className} text-[25px] md:text-[35px] lg:text-[40px] font-bold leading-[120%] mt-6 mb-5 `}
            >
              Loans, minus the paperwork and haggling.
            </h3>
            <p className="text-lg text-[#6F7278] leading-[150%] mb-5 lg:mb-10 ">
              One of the biggest concerns that customers have when it comes to
              online banking is security.
            </p>
            <div className="text-sm lg:text-lg text-[#6F7278] space-y-[18px]">
              <div className="flex items-center gap-4 ">
                <span className="bg-gray-200 p-1 rounded-full">
                  <AiOutlineCheck />
                </span>
                <span>Banking Solutions for Every Lifestyle</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="bg-gray-200 p-1 rounded-full">
                  <AiOutlineCheck />
                </span>
                <span>Tailored Banking for Your Unique Needs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-1/2 h-1/2 bg-gray-50 top-0 left-0 -z-10"></div>
    </div>
  );
};
