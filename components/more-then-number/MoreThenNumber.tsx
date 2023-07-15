import moreThanNumberImage from "@/public/images/countdown_bg2.png";
import Image from "next/image";
import { SectionHeading } from "../shared/SectionHeading";

export const MoreThenNumber = () => {
  return (
    <section className="bg-primary-color-2.2 relative">
      <div className="my-container ">
        <div className="grid grid-cols-12 items-center ">
          <div className="col-span-7">
            <div>
              <SectionHeading title="We believe you are more than a number." />
            </div>
            <div className="flex items-center justify-between text-center mt-[60px]">
              <div>
                <h6
                  className={`font-montserrat font-semibold leading-[120%] text-[64px] text-[#055F5B]`}
                >
                  600<span className="text-[#FFD584]">K</span>
                </h6>
                <p className="text-lg leading-[150%]">Customers</p>
              </div>
              <div>
                <h6
                  className={`font-montserrat font-semibold leading-[120%] text-[64px] text-[#055F5B]`}
                >
                  99<span className="text-[#FFD584]">%</span>
                </h6>
                <p className="text-lg leading-[150%]">Customer satisfaction</p>
              </div>
              <div>
                <h6
                  className={`font-montserrat font-semibold leading-[120%] text-[64px] text-[#055F5B]`}
                >
                  260<span className="text-[#FFD584]">B</span>
                </h6>
                <p className="text-lg leading-[150%]">Money managed</p>
              </div>
            </div>
          </div>
          <div className="col-start-9 col-end-13">
            <Image
              src={moreThanNumberImage}
              alt="For Loan Image"
              className="max-w-none"
            />
          </div>
        </div>
      </div>
      <div className="bg-primary-color-2 w-[25%] h-[75%] top-0 right-0 absolute -z-10"></div>
    </section>
  );
};
