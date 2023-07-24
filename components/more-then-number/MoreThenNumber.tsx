import moreThanNumberImage from "@/public/images/countdown_bg2.png";
import Image from "next/image";
import { SectionHeading } from "../shared/SectionHeading";

export const MoreThenNumber = () => {
  return (
    <section className="section-gap relative bg-primary-color-2.2 ">
      <div className="container ">
        <div className="grid grid-cols-12 items-center  max-xxl:justify-items-center ">
          <div className="col-span-12 xxl:col-span-7">
            <div className="max-sm:text-center">
              <SectionHeading title="We believe you are more than a number." />
            </div>
            <div className="mt-[60px] flex  flex-col items-center justify-between space-y-5 text-center md:flex-row md:space-y-0">
              <div>
                <h6
                  className={`font-montserrat text-3xl font-semibold leading-[120%] text-[#055F5B] md:text-[40px] lg:text-[50px] xl:text-[64px]`}
                >
                  600<span className="text-[#FFD584]">K</span>
                </h6>
                <p className="text-lg leading-[150%]">Customers</p>
              </div>
              <div>
                <h6
                  className={`font-montserrat text-3xl font-semibold leading-[120%] text-[#055F5B] md:text-[40px] lg:text-[50px] xl:text-[64px]`}
                >
                  99<span className="text-[#FFD584]">%</span>
                </h6>
                <p className="text-lg leading-[150%]">Customer satisfaction</p>
              </div>
              <div>
                <h6
                  className={`font-montserrat text-3xl font-semibold leading-[120%] text-[#055F5B] md:text-[40px] lg:text-[50px] xl:text-[64px]`}
                >
                  260<span className="text-[#FFD584]">B</span>
                </h6>
                <p className="text-lg leading-[150%]">Money managed</p>
              </div>
            </div>
          </div>
          <div className=" col-start-9 col-end-13 hidden xxl:block">
            <Image
              src={moreThanNumberImage}
              alt="For Loan Image"
              className="max-w-2/3 max-w-none"
            />
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-0 -z-10 hidden h-[75%] w-[25%] bg-primary-color-2 xxl:block"></div>
    </section>
  );
};
