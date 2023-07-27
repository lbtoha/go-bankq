"use client";

import Link from "next/link";
import { CardYellow } from "./CardYellow";
import { Button } from "./Button";
import { BsArrowUpRight } from "react-icons/bs";
import { animated, useSpring } from "@react-spring/web";
import {
  MdCreditScore,
  MdOutlineManageHistory,
  MdOutlineRealEstateAgent,
  MdOutlineSavings,
  MdPermIdentity,
} from "react-icons/md";

export const BankingService = () => {
  return (
    <section className="section-gap relative max-md:mx-3">
      <div className="container">
        <div className="browse-set-container gap-4 md:px-5">
          <div className="browse-set-card  group mx-0 flex flex-col duration-500   lg:p-10  ">
            <h3 className=" text-[20px] font-bold leading-[120%] text-[#292C32] sm:text-[25px] md:text-[30px] lg:text-[35px] xl:text-[40px]">
              Browse our set of banking services and offerings
            </h3>
            <div className="mt-[60px] flex gap-2 lg:gap-[35px]">
              <button className="border bg-primary-color-2 px-3 py-[15px] text-sm font-medium text-[#292C32] hover:bg-slate-200 sm:text-lg  md:px-5  xl:px-10">
                Get Started
              </button>
              <Link href="/">
                <button className="bg-gray-100 px-3 py-[15px] text-sm font-medium text-[#292C32] underline md:px-5 md:text-lg xl:px-10">
                  Browser Feature
                </button>
              </Link>
            </div>
          </div>
          <div className="browse-set-card border-[var(--border-color)]) group mx-0 flex flex-col border p-10 shadow-lg transition-colors duration-500 hover:bg-[#FFD584] ">
            <CardYellow
              cardTitle="Checking Account"
              cardBody="Beyond Banking Basics: Exploring Specialized Services for High-Net-Worth Clients"
            >
              <div className="w-max rounded-full bg-primary-color-2 p-4 group-hover:bg-gray-100">
                <MdPermIdentity className={`rounded-full `} />
              </div>
            </CardYellow>
          </div>
          <div className="browse-set-card border-[var(--border-color)]) group mx-0 flex flex-col border p-10 shadow-lg transition-colors duration-500 hover:bg-[#FFD584]">
            <CardYellow
              cardTitle="Credit cards"
              cardBody="Beyond Banking Basics: Exploring Specialized Services for High-Net-Worth Clients"
            >
              <div className="w-max rounded-full bg-primary-color-2 p-4 group-hover:bg-gray-100">
                <MdCreditScore className={`rounded-full `} />
              </div>
            </CardYellow>
          </div>
          <div className="browse-set-card border-[var(--border-color)]) group mx-0 flex flex-col border p-10 shadow-lg transition-colors duration-500 hover:bg-[#FFD584]">
            <CardYellow
              cardTitle="Investments"
              cardBody="Beyond Banking Basics: Exploring Specialized Services for High-Net-Worth Clients"
            >
              <div className="w-max rounded-full bg-primary-color-2 p-4 group-hover:bg-gray-100">
                <MdOutlineSavings className={`rounded-full `} />
              </div>
            </CardYellow>
          </div>
          <div className="browse-set-card border-[var(--border-color)]) group mx-0 flex flex-col border p-10 shadow-lg transition-colors duration-500 hover:bg-[#FFD584]">
            <CardYellow
              cardTitle="Wealth management"
              cardBody="Beyond Banking Basics: Exploring Specialized Services for High-Net-Worth Clients"
            >
              <div className="w-max rounded-full bg-primary-color-2 p-4 group-hover:bg-gray-100">
                <MdOutlineManageHistory className={`rounded-full `} />
              </div>
            </CardYellow>
          </div>
          <div className="browse-set-card border-[var(--border-color)]) group mx-0 flex flex-col border p-10 shadow-lg transition-colors duration-500 hover:bg-[#FFD584]">
            <CardYellow
              cardTitle="Loans and credits"
              cardBody="Beyond Banking Basics: Exploring Specialized Services for High-Net-Worth Clients"
            >
              <div className="w-max rounded-full bg-primary-color-2 p-4 group-hover:bg-gray-100">
                <MdOutlineRealEstateAgent className={`rounded-full `} />
              </div>
            </CardYellow>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 -z-10 hidden h-1/2 w-1/4 bg-gray-50 xl:block "></div>
    </section>
  );
};
