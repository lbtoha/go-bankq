import React from "react";
import { SectionHeading } from "./SectionHeading";
import { Button } from "./Button";
import { titleFont } from "@/utils/fonts";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import footerImage from "@/public/images/footer_newsletter.png";

export const Footer = () => {
  return (
    <footer className="footer-section relative z-0 max-sm:px-2">
      <div className="container pt-[50px] md:pt-[60px] lg:pt-[70px] xl:pt-[120px]">
        <div className="relative mb-5 flex flex-wrap items-center bg-primary-color-2 px-5 pb-10 pt-5 max-lg:justify-center  lg:py-[80px] lg:ps-[81px]">
          <div className="text-center max-lg:mb-10  md:text-left lg:max-w-[334px]">
            <SectionHeading title="Subscribe Our Newsletter" />
          </div>
          <div>
            <form className="flex flex-wrap items-stretch  gap-3">
              <input
                type="email"
                name="email"
                id=""
                placeholder="Email"
                className="border border-[#191B1A] bg-transparent px-5 placeholder:text-[#191B1A] max-md:py-[15px]"
              />

              <button
                className="custom-transition border border-primary-color-1 bg-[#055F5B] px-10 py-[15px] font-medium text-white hover:outline  hover:outline-4 hover:outline-primary-color-1"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="absolute right-0 top-0 hidden xl:block">
            <Image src={footerImage} alt="Footer Image" />
          </div>
        </div>
        <div className=" mt-8 flex justify-between border-b border-white border-opacity-10 pb-8 md:mt-14 md:pb-[60px] lg:mt-[124px]">
          <div className="flex items-center ">
            <span
              className={`pe-10 font-montserrat text-3xl uppercase text-primary-color-2 md:text-[42px]`}
            >
              <span className="text-white">GO</span>BANK
            </span>
            <div className="hidden md:block">
              <span className="flex items-center justify-between gap-4 border-s ps-10 text-2xl text-white ">
                <BiLogoFacebook />
                <FiTwitter />
                <AiOutlineInstagram />
                <BiLogoLinkedin />
              </span>
            </div>
          </div>
          <div className="hidden md:block">
            <Button text="Open Account" url="/" />
          </div>
        </div>
        <div className="mt-[60px] grid grid-cols-1 items-center justify-between gap-10 border-b border-white border-opacity-10 pb-[60px] md:grid-cols-2 lg:grid-cols-3 xl:gap-[137px]">
          <div>
            <p className="mb-10 text-lg font-semibold leading-[130%] text-white">
              Page
            </p>
            <ul className=" flex flex-wrap justify-between gap-5 text-[#A0A2A7] xl:flex-row xl:items-center ">
              <li className="cursor-pointer hover:text-primary-color-2">
                <Link href="/">Home</Link>
              </li>
              <li className="cursor-pointer hover:text-primary-color-2">
                <Link href="/about">About</Link>
              </li>
              <li className="cursor-pointer hover:text-primary-color-2">
                <Link href="/service">Service</Link>
              </li>
              <li className="cursor-pointer hover:text-primary-color-2">
                <Link href="/loan">Loan</Link>
              </li>
              <li className="cursor-pointer hover:text-primary-color-2">
                <Link href="/card">Card</Link>
              </li>
              <li className="cursor-pointer hover:text-primary-color-2">
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-10 text-lg font-semibold leading-[130%] text-white">
              Contact
            </p>
            <p className="text-[#A0A2A7]">123 Main St, Anytown, USA 12345</p>
            <p className="text-[#A0A2A7]">1010 Elm St, Anypla, USA 98765</p>
          </div>
          <div>
            <p className="mb-10 text-lg font-semibold leading-[130%] text-white">
              Address
            </p>
            <p className="text-[#A0A2A7]">+(555) 123-4567</p>
            <p className="text-[#A0A2A7]">deanna.curtis@example.com</p>
          </div>
        </div>
        <div className=" justify-between py-[30px] text-base text-white max-md:space-y-5 md:flex">
          <p>
            Copyright by
            <span className={`uppercase text-primary-color-2`}>
              <span className="text-white"> GO</span>BANK
            </span>
            . All right reserved
          </p>
          <p className="">Designed by Pixelaxis</p>
        </div>
      </div>
    </footer>
  );
};
