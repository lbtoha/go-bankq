"use client";
import Logo from "@/public/images/navbar/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Drawer from "./Drawer";
import { Button } from "@/components/shared/Button";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="bg-primary-color-1 text-white relative navbar">
        <div className="lg:my-container px-4 py-3 lg:px-10 lg:py-0">
          <div className="flex justify-between items-center">
            <div>
              <Link href="/">
                <Image src={Logo} width={213} height={40} alt="Logo" />
              </Link>
            </div>
            <div className="hidden lg:block font-semibold">
              <ul className="flex items-center gap-10">
                <li className="py-10 hover:text-primary-color-2">
                  <Link href="/">Home</Link>
                </li>
                <li className="py-10 hover:text-primary-color-2 ">
                  <Link href="/about">About</Link>
                </li>
                <li className="py-10 hover:text-primary-color-2 ">
                  <Link href="/service">Service</Link>
                </li>
                <li className="py-10 hover:text-primary-color-2 ">
                  <Link href="/loan">Loan</Link>
                </li>
                <li className="py-10 hover:text-primary-color-2 ">
                  <Link href="/card">Card</Link>
                </li>
                <li className="py-10 hover:text-primary-color-2 ">
                  <Link href="/blog">Blog</Link>
                </li>
              </ul>
            </div>
            <div>
              <Button text="Register Now" url="/" />

              <AiOutlineMenu
                onClick={handleToggleMenu}
                className={`${
                  isOpen ? "hidden" : "block"
                } text-3xl block lg:hidden`}
              />
            </div>
          </div>
        </div>
        {isOpen ? (
          <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
            <div className={`lg:my-container`}>
              <div className="justify-between items-center">
                <div>
                  <Link className="hidden" href="/">
                    <Image src={Logo} width={213} height={40} alt="Logo" />
                  </Link>
                </div>
                <div className="font-semibold">
                  <div className="flex justify-end  ">
                    <div className="border-2 rounded-full border-primary-color-2 mt-4 p-3">
                      <AiOutlineClose
                        onClick={handleToggleMenu}
                        className={`${
                          isOpen ? "block" : "hidden"
                        } text-3xl text-right `}
                      />
                    </div>
                  </div>
                  <ul className="items-center ">
                    <li className="py-3 hover:text-primary-color-2  border-b-[0.3px] border-gray-400">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="py-3 hover:text-primary-color-2 border-b-[0.3px] border-gray-400">
                      <Link href="/about">About</Link>
                    </li>
                    <li className="py-3 hover:text-primary-color-2 border-b-[0.3px] border-gray-400">
                      <Link href="/service">Service</Link>
                    </li>
                    <li className="py-3 hover:text-primary-color-2 border-b-[0.3px] border-gray-400">
                      <Link href="/loan">Loan</Link>
                    </li>
                    <li className="py-3 hover:text-primary-color-2 border-b-[0.3px] border-gray-400">
                      <Link href="/card">Card</Link>
                    </li>
                    <li className="py-3 hover:text-primary-color-2 border-b-[0.3px] border-gray-400 mb-3">
                      <Link href="/blog">Blog</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <Button text="Register Now" url="/" />
                </div>
              </div>
            </div>
          </Drawer>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
