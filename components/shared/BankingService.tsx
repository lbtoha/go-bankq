"use client";

import { MarkEmailRead, PermIdentity } from "@mui/icons-material";
import Link from "next/link";
import { CardYellow } from "./CardYellow";
import { Button } from "./Button";

export const BankingService = () => {
  return (
    <section className="mt-[120px]">
      <div className="lg:my-container">
        <div className="grid-cols-2 md:px-5 lg:grid">
          <div>
            <h3 className="text-[40px] font-bold leading-[120%] text-[#292C32]">
              Browse our set of banking services and offerings
            </h3>
            <div className="mt-[60px] flex gap-[35px]">
              <Button text="Get Started" url="/" />
              <Link href="/">
                <button className="bg-gray-100 px-10 py-[15px] font-medium text-[#292C32] underline">
                  Browser Feature
                </button>
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <CardYellow
              cardTitle="Checking Account"
              cardBody="Beyond Banking Basics: Exploring Specialized Services for High-Net-Worth Clients"
            >
              <PermIdentity
                className={`rounded-full bg-yellow-100 p-3 text-8xl`}
              />
            </CardYellow>
            <CardYellow
              cardTitle="Checking Account"
              cardBody="Beyond Banking Basics: Exploring Specialized Services for High-Net-Worth Clients"
            >
              <PermIdentity
                className={`rounded-full bg-yellow-100 p-3 text-8xl`}
              />
            </CardYellow>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="lg:my-container mt-[30px] grid grid-cols-4 gap-4 pb-[120px]">
          <div className="col-start-2">
            <CardYellow
              cardTitle="Checking Account"
              cardBody="Beyond Banking Basics: Exploring Specialized Services for High-Net-Worth Clients"
            >
              <PermIdentity
                className={`rounded-full bg-yellow-100 p-3 text-8xl`}
              />
            </CardYellow>
          </div>
          <div className="">
            <CardYellow
              cardTitle="Checking Account"
              cardBody="Beyond Banking Basics: Exploring Specialized Services for High-Net-Worth Clients"
            >
              <PermIdentity
                className={`rounded-full bg-yellow-100 p-3 text-8xl`}
              />
            </CardYellow>
          </div>
          <div className="">
            <CardYellow
              cardTitle="Checking Account"
              cardBody="Beyond Banking Basics: Exploring Specialized Services for High-Net-Worth Clients"
            >
              <PermIdentity
                className={`rounded-full bg-yellow-100 p-3 text-8xl`}
              />
            </CardYellow>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 -z-10 h-full w-1/4 bg-gray-50"></div>
      </div>
    </section>
  );
};
