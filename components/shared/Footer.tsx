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
    <footer className="footer-section relative z-0">
      <div className="my-container pt-[120px]">
        <div className="flex bg-primary-color-2 py-[80px] ps-[81px] relative">
          <div className="w-[334px]">
            <SectionHeading title="Subscribe Our Newsletter" />
          </div>
          <form className="flex gap-3 items-center">
            <div>
              <input
                type="email"
                name="email"
                id=""
                placeholder="Email"
                className="bg-transparent p-5 border border-gray-400"
              />
            </div>
            <div>
              <button
                className="px-10 py-[15px] bg-[#055F5B] text-white  font-medium border"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
          <div className="absolute right-0 top-0">
            <Image src={footerImage} alt="Footer Image" />
          </div>
        </div>
        <div className="flex mt-[124px] justify-between border-b pb-[60px]">
          <div className="flex items-center">
            <span
              className={`text-primary-color-2 uppercase text-[42px] font-montserrat pe-10`}
            >
              <span className="text-white">GO</span>BANK
            </span>
            <span className="flex items-center justify-between text-white ps-10 border-s gap-4 text-2xl">
              <BiLogoFacebook />
              <FiTwitter />
              <AiOutlineInstagram />
              <BiLogoLinkedin />
            </span>
          </div>
          <div>
            <Button text="Open Account" url="/" />
          </div>
        </div>
        <div className="grid grid-cols-3 items-center justify-between  mt-[60px] border-b pb-[60px] gap-[137px]">
          <div>
            <p className="text-lg font-semibold leading-[130%] mb-10 text-white">
              Page
            </p>
            <ul className=" flex items-center justify-between text-[#A0A2A7] gap-5 ">
              <li className="hover:text-primary-color-2 cursor-pointer">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-primary-color-2 cursor-pointer">
                <Link href="/about">About</Link>
              </li>
              <li className="hover:text-primary-color-2 cursor-pointer">
                <Link href="/service">Service</Link>
              </li>
              <li className="hover:text-primary-color-2 cursor-pointer">
                <Link href="/loan">Loan</Link>
              </li>
              <li className="hover:text-primary-color-2 cursor-pointer">
                <Link href="/card">Card</Link>
              </li>
              <li className="hover:text-primary-color-2 cursor-pointer">
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-lg font-semibold leading-[130%] mb-10 text-white">
              Contact
            </p>
            <p className="text-[#A0A2A7]">123 Main St, Anytown, USA 12345</p>
            <p className="text-[#A0A2A7]">1010 Elm St, Anypla, USA 98765</p>
          </div>
          <div>
            <p className="text-lg font-semibold leading-[130%] mb-10 text-white">
              Address
            </p>
            <p className="text-[#A0A2A7]">+(555) 123-4567</p>
            <p className="text-[#A0A2A7]">deanna.curtis@example.com</p>
          </div>
        </div>
        <div className="flex py-[30px] text-white justify-between">
          <p>
            Copyright by
            <span className={`text-primary-color-2 uppercase`}>
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
