"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navData } from "./navData";
import Logo_light from "/public/images/logo-light.png";
import Logo from "/public/images/logo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Button } from "../Button";
import client from "@/public/images/client.png";

export const NewNavbar = ({ cls = "" }) => {
  const [windowHeight, setWindowHeight] = useState(0);
  const [active, setActive] = useState(false);
  const [activeItem, setActiveItem] = useState(false);
  const [dropdownId, setDropdownId] = useState("");
  const [subDropdown, setSubDropdown] = useState("");

  const handleActive = () => {
    setActive(false);
    setDropdownId("");
    setSubDropdown("");
  };

  const handleDropdown = (id: string) => {
    if (dropdownId == id) {
      setDropdownId("");
    } else {
      setSubDropdown("");
      setDropdownId(id);
    }
  };

  const handleSubDropdown = (id: string) => {
    if (subDropdown == id) {
      setSubDropdown("");
    } else {
      setSubDropdown(id);
    }
  };

  const navBarTop = () => {
    if (window !== undefined) {
      let height = window.scrollY;
      setWindowHeight(height);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", navBarTop);
    return () => {
      window.removeEventListener("scroll", navBarTop);
    };
  }, []);

  console.log({ windowHeight, active, dropdownId, subDropdown });

  return (
    <>
      <header
        className={`navbar ${
          windowHeight > 50 && "header-active"
        } dot-bg relative bg-primary-color-1 text-white`}
      >
        <div className="px-4 py-3 lg:container lg:px-0 lg:py-0">
          <div className="flex items-center justify-between">
            <div className="hidden lg:block">
              <Link href="/">
                <Image src={Logo} width={213} height={40} alt="Logo" />
              </Link>
            </div>

            <div
              className={`nav__items hidden font-semibold ${
                active && "translate-x-0 bg-black"
              }`}
            >
              <div className="">
                <Link href="/">
                  <Image src={Logo} width={213} height={40} alt="Logo" />
                </Link>
                <button
                  onClick={() => setActive(false)}
                  className="mt-4 rounded-full border-2 border-primary-color-2 p-3"
                >
                  <AiOutlineClose className={"text-right text-3xl"} />
                </button>
              </div>
            </div>
            <ul className="nav__items flex flex-col items-center gap-10 lg:flex-row">
              {navData.map(({ itm, url, id, dropdown, dropdown_itms }) => {
                return dropdown ? (
                  <li
                    key={id}
                    className=" group/nav-item custom-transition relative"
                  >
                    <Link
                      onClick={() => handleDropdown(id)}
                      // href={url}
                      href="URL:void(0)"
                      className={` dropdown-icon active-nav py-10 hover:text-primary-color-2 ${
                        dropdownId === id && "Todo"
                      }`}
                    >
                      {itm}
                    </Link>
                    <ul
                      className={`custom-class  absolute min-w-[200px] bg-primary-color-1 group-hover/nav-item:dropdown-menu group-hover/nav-item:block group-hover/nav-item:space-y-6 group-hover/nav-item:px-4 ${
                        dropdownId === id && "Todo"
                      }`}
                    >
                      {dropdown_itms?.map(
                        ({ id, dp_itm, url, sbu_dropdown, sub_items }) => {
                          return sbu_dropdown ? (
                            <li
                              key={id}
                              className="group custom-transition relative"
                            >
                              <Link
                                onClick={() => handleSubDropdown(id)}
                                className="dropdown-icon  px-3 hover:text-primary-color-2"
                                href="URL:void(0)"
                              >
                                {dp_itm}
                              </Link>
                              <ul
                                className={`custom-class-sub-item absolute min-w-[200px] group-hover:dropdown-menu-sub-item group-hover:left-[109%] group-hover:block group-hover:space-y-6 group-hover:bg-primary-color-1 group-hover:px-4 ${
                                  subDropdown === id && "nav__dropdown-active"
                                }`}
                              >
                                {sub_items?.map(({ id, url, sub_itm }) => (
                                  <li key={id}>
                                    <Link
                                      className=""
                                      href={url}
                                      onClick={handleActive}
                                    >
                                      {sub_itm}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          ) : (
                            <li key={id}>
                              <Link
                                className="custom-transition px-3  hover:text-primary-color-2"
                                href={url}
                                onClick={handleActive}
                              >
                                {dp_itm}
                              </Link>
                            </li>
                          );
                        },
                      )}
                    </ul>
                  </li>
                ) : (
                  <li>
                    <Link href="/">{itm}</Link>
                  </li>
                );
              })}
            </ul>
            <div className="hidden lg:block">
              <Button text="Register Now" url="/" />
            </div>
            <AiOutlineMenu
              // onClick={handleToggleMenu}
              className={`block text-3xl lg:hidden`}
            />
          </div>
        </div>
      </header>
    </>
  );
};
