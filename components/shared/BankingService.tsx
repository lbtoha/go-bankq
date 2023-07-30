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
        <div className="browse-set-container gap-6 md:px-5">
          <div className="browse-set-card  group mx-0 flex flex-col duration-500 ">
            <h3 className="max-w-[526px] text-[20px] font-bold leading-[120%] text-[#292C32] sm:text-[25px] md:text-[30px] lg:text-[40px]">
              Browse our set of banking services and offerings
            </h3>
            <div className="mt-8 flex gap-5 md:mt-10 lg:mt-[60px]  lg:gap-[35px]">
              <button className="border bg-primary-color-2 px-3 py-[15px] text-sm font-medium text-[#292C32] hover:bg-slate-200 sm:text-lg md:px-5 xl:px-10">
                Get Started
              </button>
              <Link href="/">
                <button className="border  bg-gray-100    px-3 py-[15px] text-sm font-medium text-[#292C32] underline hover:bg-slate-200 sm:text-lg md:px-5 md:text-lg xl:px-10">
                  Browse Feature
                </button>
              </Link>
            </div>
          </div>
          <div className="browse-set-card border-[var(--border-color)]) shadow-[0 4px 24px 0 rgba(220, 165, 58, 0.36)] group mx-0 flex flex-col border px-5 py-10  transition-colors duration-500 hover:bg-[#FFD584] ">
            <CardYellow
              cardTitle="Checking Account"
              cardBody="Beyond Banking Basics: Exploring Specialized Services for High-Net-Worth Clients"
            >
              <span className="material-symbols-outlined rounded-full bg-[#FFD584] bg-opacity-20 p-[10px]  text-5xl group-hover:bg-white group-hover:bg-opacity-20 md:text-[60px]">
                person
              </span>
            </CardYellow>
          </div>
          <div className="browse-set-card border-[var(--border-color)]) shadow-[0 4px 24px 0 rgba(220, 165, 58, 0.36)] group mx-0 flex flex-col border px-5 py-10  transition-colors duration-500 hover:bg-[#FFD584] ">
            <CardYellow
              cardTitle="Credit cards"
              cardBody="Beyond Banking Basics: Exploring Specialized Services for High-Net-Worth Clients"
            >
              <span className="material-symbols-outlined rounded-full bg-[#FFD584] bg-opacity-20 p-[10px] text-5xl group-hover:bg-white group-hover:bg-opacity-20 md:text-[60px]">
                credit_score
              </span>
            </CardYellow>
          </div>
          <div className="browse-set-card border-[var(--border-color)]) shadow-[0 4px 24px 0 rgba(220, 165, 58, 0.36)] group mx-0 flex flex-col border px-5 py-10  transition-colors duration-500 hover:bg-[#FFD584] ">
            <CardYellow
              cardTitle="Investments"
              cardBody="Beyond Banking Basics: Exploring Specialized Services for High-Net-Worth Clients"
            >
              <span className="material-symbols-outlined rounded-full bg-[#FFD584] bg-opacity-20 p-[10px] text-5xl group-hover:bg-white group-hover:bg-opacity-20 md:text-[60px]">
                savings
              </span>
            </CardYellow>
          </div>
          <div className="browse-set-card border-[var(--border-color)]) shadow-[0 4px 24px 0 rgba(220, 165, 58, 0.36)] group mx-0 flex flex-col border px-5 py-10  transition-colors duration-500 hover:bg-[#FFD584] ">
            <CardYellow
              cardTitle="Wealth manage"
              cardBody="Beyond Banking Basics: Exploring Specialized Services for High-Net-Worth Clients"
            >
              <span className="material-symbols-outlined rounded-full bg-[#FFD584] bg-opacity-20 p-[10px] text-5xl group-hover:bg-white group-hover:bg-opacity-20 md:text-[60px]">
                manage_history
              </span>
            </CardYellow>
          </div>
          <div className="browse-set-card border-[var(--border-color)]) shadow-[0 4px 24px 0 rgba(220, 165, 58, 0.36)] group mx-0 flex flex-col border px-5 py-10  transition-colors duration-500 hover:bg-[#FFD584] ">
            <CardYellow
              cardTitle="Loans and credits"
              cardBody="Beyond Banking Basics: Exploring Specialized Services for High-Net-Worth Clients"
            >
              <span className="material-symbols-outlined rounded-full bg-[#FFD584] bg-opacity-20 p-[10px] text-5xl group-hover:bg-white group-hover:bg-opacity-20 md:text-[60px]">
                real_estate_agent
              </span>
            </CardYellow>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 -z-10 hidden h-1/2 w-1/4 bg-gray-50 xl:block "></div>
    </section>
  );
};
