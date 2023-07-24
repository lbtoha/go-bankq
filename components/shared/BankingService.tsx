"use client";

import { MarkEmailRead, PermIdentity } from "@mui/icons-material";
import Link from "next/link";
import { CardYellow } from "./CardYellow";
import { Button } from "./Button";
import { BsArrowUpRight } from "react-icons/bs";
import { animated, useSpring } from "@react-spring/web";

export const BankingService = () => {
  return (
    <section className="section-gap relative max-md:mx-3">
      <div className="lg:container">
        <div className="browse-set-container gap-4 md:px-5">
          <div className="browse-set-card ">
            <h3 className=" text-[20px] font-bold leading-[120%] text-[#292C32] sm:text-[25px] md:text-[30px] lg:text-[35px] xl:text-[40px]">
              Browse our set of banking services and offerings
            </h3>
            <div className="mt-[60px] flex gap-2  md:gap-[35px]">
              <Button text="Get Started" url="/" />
              <Link href="/">
                <button className="bg-gray-100 px-3 py-[15px] text-sm font-medium text-[#292C32] underline md:px-5 md:text-lg lg:px-10">
                  Browser Feature
                </button>
              </Link>
            </div>
          </div>
          <div className="browse-set-card">
            <CardYellow
              cardTitle="Checking Account"
              cardBody="Beyond Banking Basics: Exploring Specialized Services for High-Net-Worth Clients"
            >
              <div className="w-max rounded-full bg-primary-color-2 p-4 group-hover:bg-gray-100">
                <PermIdentity className={`rounded-full `} />
              </div>
            </CardYellow>
          </div>
          <div className="browse-set-card">
            <CardYellow
              cardTitle="Checking Account"
              cardBody="Beyond Banking Basics: Exploring Specialized Services for High-Net-Worth Clients"
            >
              <div className="w-max rounded-full bg-primary-color-2 p-4 group-hover:bg-gray-100">
                <PermIdentity className={`rounded-full `} />
              </div>
            </CardYellow>
          </div>
          <div className="browse-set-card">
            <CardYellow
              cardTitle="Checking Account"
              cardBody="Beyond Banking Basics: Exploring Specialized Services for High-Net-Worth Clients"
            >
              <div className="w-max rounded-full bg-primary-color-2 p-4 group-hover:bg-gray-100">
                <PermIdentity className={`rounded-full `} />
              </div>
            </CardYellow>
          </div>
          <div className="browse-set-card">
            <CardYellow
              cardTitle="Checking Account"
              cardBody="Beyond Banking Basics: Exploring Specialized Services for High-Net-Worth Clients"
            >
              <div className="w-max rounded-full bg-primary-color-2 p-4 group-hover:bg-gray-100">
                <PermIdentity className={`rounded-full `} />
              </div>
            </CardYellow>
          </div>
          <div className="browse-set-card">
            <CardYellow
              cardTitle="Checking Account"
              cardBody="Beyond Banking Basics: Exploring Specialized Services for High-Net-Worth Clients"
            >
              <div className="w-max rounded-full bg-primary-color-2 p-4 group-hover:bg-gray-100">
                <PermIdentity className={`rounded-full `} />
              </div>
            </CardYellow>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 -z-10 hidden h-1/2 w-1/4 bg-gray-50 xl:block "></div>
    </section>
  );
};

{
  /* 
      <div className="ula  bg-emerald-300">
        <p className="li">First list item</p>
        <p className="li">Second list item</p>
        <p className="li">Third list item</p>
        <p className="li">Fourth list item</p>
        <p className="li">Fifth list item</p>
        <p className="li">Fifth list item</p>

        
      </div> */
}
