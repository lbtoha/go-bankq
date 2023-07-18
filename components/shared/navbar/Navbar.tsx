"use client";
import Logo from "@/public/images/navbar/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Drawer from "./Drawer";
import { Button } from "@/components/shared/Button";
import { BsChevronDown } from "react-icons/bs";
import { NavItem } from "./NavItem";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [icon, setIcon] = useState(true);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="navbar dot-bg relative bg-primary-color-1 text-white">
        <div className="lg:my-container px-4 py-3 lg:px-10 lg:py-0">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/">
                <Image src={Logo} width={213} height={40} alt="Logo" />
              </Link>
            </div>
            <div className=" hidden font-semibold lg:block">
              <ul className="nav__items flex items-center gap-10">
                <li className="custom-transition py-10 hover:text-primary-color-2">
                  <NavItem link="/service" dropdown={false}>
                    Home
                  </NavItem>
                </li>
                <li className="custom-transition py-10 hover:text-primary-color-2 ">
                  <NavItem link="/service" dropdown={false}>
                    About
                  </NavItem>
                </li>
                <li className="custom-transition py-10 hover:text-primary-color-2 ">
                  <NavItem link="/service" dropdown={true}>
                    Service
                  </NavItem>
                </li>
                <li className="custom-transition py-10 hover:text-primary-color-2 ">
                  <NavItem link="/service" dropdown={true}>
                    Loan
                  </NavItem>
                </li>
                <li className="custom-transition py-10 hover:text-primary-color-2 ">
                  <NavItem link="/service" dropdown={true}>
                    Card
                  </NavItem>
                </li>
                <li className="custom-transition py-10 hover:text-primary-color-2 ">
                  <NavItem link="/service" dropdown={true}>
                    Blog
                  </NavItem>
                </li>
              </ul>
            </div>
            <div>
              <Button text="Register Now" url="/" />
              <AiOutlineMenu
                onClick={handleToggleMenu}
                className={`${
                  isOpen ? "hidden" : "block"
                } block text-3xl lg:hidden`}
              />
            </div>
          </div>
        </div>
        {isOpen ? (
          <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
            <div className={`lg:my-container`}>
              <div className="items-center justify-between">
                <div>
                  <Link className="hidden" href="/">
                    <Image src={Logo} width={213} height={40} alt="Logo" />
                  </Link>
                </div>
                <div className="font-semibold">
                  <div className="flex justify-end  ">
                    <div className="mt-4 rounded-full border-2 border-primary-color-2 p-3">
                      <AiOutlineClose
                        onClick={handleToggleMenu}
                        className={`${
                          isOpen ? "block" : "hidden"
                        } text-right text-3xl `}
                      />
                    </div>
                  </div>
                  <ul className="items-center ">
                    <li className="border-b-[0.3px] border-gray-400  py-3 hover:text-primary-color-2">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="border-b-[0.3px] border-gray-400 py-3 hover:text-primary-color-2">
                      <Link href="/about">About</Link>
                    </li>
                    <li className="border-b-[0.3px] border-gray-400 py-3 hover:text-primary-color-2">
                      <Link href="/service">Service</Link>
                    </li>
                    <li className="border-b-[0.3px] border-gray-400 py-3 hover:text-primary-color-2">
                      <Link href="/loan">Loan</Link>
                    </li>
                    <li className="border-b-[0.3px] border-gray-400 py-3 hover:text-primary-color-2">
                      <Link href="/card">Card</Link>
                    </li>
                    <li className="mb-3 border-b-[0.3px] border-gray-400 py-3 hover:text-primary-color-2">
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
