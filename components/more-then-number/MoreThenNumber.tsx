import moreThanNumberImage from "@/public/images/countdown_bg2.png";
import Image from "next/image";
import { SectionHeading } from "../shared/SectionHeading";
import CountDown from "../shared/CountDown";

export const MoreThenNumber = () => {
  const countDownData = [
    {
      id: 457001,
      countStart: 0,
      countEnd: 600,
      itemTitle: "Customers",
      symbol: "K",
    },
    {
      id: 457002,
      countStart: 0,
      countEnd: 99,
      itemTitle: "Customer satisfaction",
      symbol: "%",
    },
    {
      id: 457003,
      countStart: 0,
      countEnd: 260,
      itemTitle: "Money managed",
      symbol: "B",
    },
  ];
  return (
    <section className="section-gap relative overflow-hidden bg-primary-color-2 bg-opacity-20">
      <div className="container ">
        <div className="grid grid-cols-12 items-center  max-xxl:justify-items-center ">
          <div className="col-span-12 xxl:col-span-7">
            <div className="max-sm:text-center">
              <SectionHeading title="We believe you are more than a number." />
            </div>
            <div className="mt-10 flex  flex-col items-center justify-between space-y-5 text-center md:mt-[60px] md:flex-row md:space-y-0">
              {countDownData.map(
                ({ id, countStart, countEnd, itemTitle, symbol }) => (
                  <CountDown
                    key={id}
                    countStart={countStart}
                    countEnd={countEnd}
                    itemTitle={itemTitle}
                    symbol={symbol}
                  />
                ),
              )}
            </div>
          </div>
          <div className=" full-width-image col-start-9 col-end-13 hidden xxl:block">
            <Image
              src={moreThanNumberImage}
              alt="For Loan Image"
              className="max-w-2/3"
            />
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-0 -z-10 hidden h-[75%] w-[25%] bg-primary-color-2 xxl:block"></div>
    </section>
  );
};
