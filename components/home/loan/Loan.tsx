import laptopImage from "@/public/images/loan/laptop.png";
import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";
import { titleFont } from "@/utils/fonts";
import { AiOutlineCheck } from "react-icons/ai";

export const Loan = () => {
  return (
    <div className="loan-section relative">
      <div className="lg:my-container grid-cols-12 justify-between px-5 pt-[100px] md:px-10 md:pt-[180px] lg:grid lg:pt-[226px] ">
        <div className="col-start-1 col-end-8 ">
          <h4 className="loan-section__sub-heading mb-4 text-lg font-normal">
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
          <div className="w-max rounded-full bg-primary-color-2 p-3 md:p-4">
            <BsArrowUpRight className="text-lg lg:text-2xl" />
          </div>
          <div>
            <h3
              className={`mb-5 mt-6 font-montserrat text-[20px] font-bold leading-[120%] md:text-[35px] lg:text-[40px] `}
            >
              Loans, minus the paperwork and haggling.
            </h3>
            <p className="mb-5 text-lg leading-[150%] text-[#6F7278] lg:mb-10 ">
              One of the biggest concerns that customers have when it comes to
              online banking is security.
            </p>
            <div className="space-y-[18px] text-sm text-[#6F7278] lg:text-lg">
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
    </div>
  );
};
