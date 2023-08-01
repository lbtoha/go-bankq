import React from "react";
import Image from "next/image";
import feature from "@/public/images/feature.png";
import { BsLaptop, BsLightbulb } from "react-icons/bs";
import { RiCustomerService2Line, RiSecurePaymentLine } from "react-icons/ri";
import StandOutCard from "./StandOutCard";

export const StandOut = () => {
  const standOutCardData = [
    {
      id: 11001001,
      iconName: "lightbulb",
      cardTitle: "Innovation",
      cardBody:
        "In today's digital age, customers have high expectations when it come.",
    },
    {
      id: 11001002,
      iconName: "arming_countdown",
      cardTitle: "Security",
      cardBody:
        "In today's digital age, customers have high expectations when it come.",
    },
    {
      id: 11001003,
      iconName: "support_agent",
      cardTitle: "Service",
      cardBody:
        "In today's digital age, customers have high expectations when it come.",
    },
    {
      id: 11001004,
      iconName: "devices",
      cardTitle: "Technology",
      cardBody:
        "In today's digital age, customers have high expectations when it come.",
    },
  ];
  return (
    <section className=" relative bg-[#055F5B] text-white max-sm:px-2">
      <div className="section-gap container">
        <div className="items-center lg:grid lg:grid-cols-2  xl:grid  xl:grid-cols-12">
          <div className="section-top-mark relative lg:grid-cols-1 xl:col-span-6 xl:col-start-1">
            <h3
              className={`font-montserrat text-[25px] font-bold leading-[120%] text-white md:text-[35px] lg:mt-10 lg:text-[40px]`}
            >
              What makes us stand out from the rest?
            </h3>
            <div className="mt-8  grid-cols-2 max-md:space-y-7 md:grid md:gap-x-6 md:gap-y-5 lg:mt-[50px] xl:mt-[60px] ">
              {standOutCardData.map(({ id, iconName, cardTitle, cardBody }) => (
                <StandOutCard
                  key={id}
                  iconName={iconName}
                  cardTitle={cardTitle}
                  cardBody={cardBody}
                />
              ))}
            </div>
          </div>
          <div className="  hidden  lg:block lg:grid-cols-1 xl:col-start-8 xl:col-end-13 ">
            <Image src={feature} alt="Feature" className="w-full" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 hidden h-3/4 w-1/4 bg-gray-50 opacity-10 xl:block 3xl:hidden"></div>
    </section>
  );
};
