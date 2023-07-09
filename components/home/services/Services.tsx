"use client";
import { Button } from "@/components/shared/Button";
import { CardYellow } from "@/components/shared/CardYellow";
import { MarkEmailRead, PermIdentity } from "@mui/icons-material";
import Link from "next/link";

export const Services = () => {
  return (
    <section className="mt-[120px]">
      <div className="lg:my-container">
        <div className="lg:grid grid-cols-2 md:px-5">
          <div>
            <h3 className="text-[40px] font-bold leading-[120%] text-[#292C32]">
              Browse our set of banking services and offerings
            </h3>
            <div className="flex mt-[60px] gap-[35px]">
              <Button text="Get Started" url="/" />
              <Link href="/">
                <button className="px-10 py-[15px] bg-gray-100 text-[#292C32] font-medium underline">
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
                className={`text-8xl bg-yellow-100 rounded-full p-3`}
              />
            </CardYellow>
            <CardYellow
              cardTitle="Checking Account"
              cardBody="Beyond Banking Basics: Exploring Specialized Services for High-Net-Worth Clients"
            >
              <PermIdentity
                className={`text-8xl bg-yellow-100 rounded-full p-3`}
              />
            </CardYellow>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="lg:my-container grid grid-cols-4 mt-[30px] pb-[120px] gap-4">
          <div className="col-start-2">
            <CardYellow
              cardTitle="Checking Account"
              cardBody="Beyond Banking Basics: Exploring Specialized Services for High-Net-Worth Clients"
            >
              <PermIdentity
                className={`text-8xl bg-yellow-100 rounded-full p-3`}
              />
            </CardYellow>
          </div>
          <div className="">
            <CardYellow
              cardTitle="Checking Account"
              cardBody="Beyond Banking Basics: Exploring Specialized Services for High-Net-Worth Clients"
            >
              <PermIdentity
                className={`text-8xl bg-yellow-100 rounded-full p-3`}
              />
            </CardYellow>
          </div>
          <div className="">
            <CardYellow
              cardTitle="Checking Account"
              cardBody="Beyond Banking Basics: Exploring Specialized Services for High-Net-Worth Clients"
            >
              <PermIdentity
                className={`text-8xl bg-yellow-100 rounded-full p-3`}
              />
            </CardYellow>
          </div>
        </div>
        <div className="absolute w-1/4 h-full bg-gray-50 bottom-0 left-0 -z-10"></div>
      </div>
    </section>
  );
};
