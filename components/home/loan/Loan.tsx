import laptopImage from "@/public/images/loan/laptop.png";
import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";
import { titleFont } from "@/utils/fonts";
import { Montserrat } from "next/font/google";

export const Loan = () => {
  return (
    <div className="loan-section">
      <div className="my-container grid grid-cols-12 justify-between pt-[226px] ">
        <div className="col-start-1 col-end-8 ">
          <h4 className="text-lg loan-section__sub-heading font-normal mb-10">
            Banking Solution __
          </h4>
          <div>
            <Image className="pb-[120px]" src={laptopImage} alt="laptop" />
          </div>
        </div>
        <div className=" col-start-9 col-end-13 mt-10">
          <div className="bg-primary-color-2 w-max p-4 rounded-full">
            <BsArrowUpRight className="text-2xl" />
          </div>
          <div>
            <h3
              className={`${titleFont.className} text-[40px] font-bold leading-[120%] mt-6 mb-5`}
            >
              Loans, minus the paperwork and haggling.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
