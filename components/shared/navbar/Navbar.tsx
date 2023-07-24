"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navData } from "./navData";
import Logo from "/public/images/logo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Button } from "../Button";
import { Offcanvas, Ripple, Dropdown, initTE } from "tw-elements";
import "tw-elements/dist/css/tw-elements.min.css";
import AnimateHeight from "react-animate-height";

export const Navbar = ({ cls = "" }) => {
  const [windowHeight, setWindowHeight] = useState(0);
  const [active, setActive] = useState(false);
  const [activeNav, setActiveNav] = useState("");
  const [dropdownId, setDropdownId] = useState("");
  const [subDropdown, setSubDropdown] = useState("");
  const [openDropDown, setOpenDropDown] = useState<string | null>("");
  const [openSubDropDown, setOpenSubDropDown] = useState<string | null>("");

  const handleActive = () => {
    setActive(false);
    setDropdownId("");
    setSubDropdown("");
  };

  const handleActiveItem = (url: string) => {
    setActiveNav(url);
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

  useEffect(() => {
    initTE({ Offcanvas, Ripple, Dropdown });
  }, []);

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

  console.log({ openSubDropDown });

  return (
    <>
      <header
        className={`navbar ${
          windowHeight > 50 && "header-active"
        } dot-bg relative bg-primary-color-1 text-white`}
      >
        <div className="container ">
          <div className="flex items-center justify-between lg:hidden">
            <div className="py-5  ">
              <Link href="/">
                <Image
                  src={Logo}
                  width={213}
                  height={40}
                  alt="Logo"
                  className="md:full w-40"
                />
              </Link>
            </div>
            <div
              className={
                `nav__items overflow-auto px-10 font-semibold lg:hidden` +
                `invisible fixed bottom-0 left-0 top-0 z-[1045] flex w-full max-w-full -translate-x-full flex-col border-none bg-[url("/images/banner/bannerBg.png")] bg-cover bg-clip-padding bg-no-repeat text-white shadow-sm outline-none transition duration-300 ease-in-out dark:bg-neutral-800 dark:text-neutral-200 [&[data-te-offcanvas-show]]:transform-none`
              }
              id="offcanvasExample"
              aria-labelledby="offcanvasExampleLabel"
              data-te-offcanvas-init
            >
              <div className="">
                <div className="flex items-center justify-between">
                  <Link href="/">
                    <Image src={Logo} width={213} height={40} alt="Logo" />
                  </Link>
                  <button
                    onClick={() => setActive(false)}
                    data-te-offcanvas-dismiss
                    className="mt-4 rounded-full border-2 border-primary-color-2 p-3"
                  >
                    <AiOutlineClose className={"text-right text-3xl"} />
                  </button>
                </div>
              </div>
              <ul className="nav__items mt-10 flex flex-col">
                {navData.map(({ title, url, id, dropdown, dropdownItems }) => {
                  return dropdown ? (
                    <li
                      key={id}
                      className="lg:group/nav-item custom-transition relative "
                    >
                      <Link
                        onClick={() => {
                          handleDropdown(id);
                          setOpenDropDown((p) => (id == p ? null : id));
                        }}
                        aria-controls="example-panel"
                        // href={url}
                        href="URL:void(0)"
                        className={` dropdown-icon  border-b-[0.3px] border-gray-400 py-4  hover:text-primary-color-2  ${
                          dropdownId === id && "Todo"
                        }`}
                      >
                        {title}
                      </Link>
                      <AnimateHeight
                        id="example-panel"
                        duration={500}
                        height={openDropDown == id ? "auto" : 0}
                      >
                        <ul
                          className={`custom-class !dropdown-menu-sm !bg-transparent group-hover/nav-item:dropdown-menu  group-hover/nav-item:block group-hover/nav-item:space-y-6 group-hover/nav-item:px-4 ${
                            dropdownId === id &&
                            "  visible opacity-100 group-hover/nav-item:bg-transparent"
                          }`}
                        >
                          {dropdownItems?.map(
                            ({
                              id,
                              dropdown_title,
                              parentUrl,
                              sbu_dropdown,
                              sub_items,
                            }) => {
                              return sbu_dropdown ? (
                                <li
                                  key={id}
                                  className="group custom-transition relative"
                                >
                                  <Link
                                    // aria-controls="2"
                                    onClick={() => {
                                      setOpenSubDropDown((p) =>
                                        id == p ? null : id,
                                      );
                                      // setHeight(height === 0 ? "auto" : 0);
                                      handleSubDropdown(id);
                                    }}
                                    className="dropdown-icon  border-b-[0.3px] border-gray-400 px-3 py-5   hover:text-primary-color-2"
                                    href="URL:void(0)"
                                  >
                                    {dropdown_title}
                                  </Link>

                                  <AnimateHeight
                                    // id="2"
                                    duration={500}
                                    height={openSubDropDown == id ? "auto" : 0}
                                  >
                                    <ul
                                      className={`custom-class-sub-item !dropdown-menu-sm min-w-[200px] !bg-transparent group-hover:dropdown-menu-sub-item group-hover:left-[109%] group-hover:block group-hover:space-y-6 group-hover:bg-primary-color-1 group-hover:px-4 ${
                                        subDropdown === id &&
                                        "nav__dropdown-active"
                                      }`}
                                    >
                                      {sub_items?.map(
                                        ({ id, url, sub_itm }) => (
                                          <li key={id} className=" ">
                                            <Link
                                              className="border-b-[0.3px] border-gray-400 py-5 "
                                              href={url}
                                              onClick={handleActive}
                                            >
                                              {sub_itm}
                                            </Link>
                                          </li>
                                        ),
                                      )}
                                    </ul>
                                  </AnimateHeight>
                                </li>
                              ) : (
                                <li
                                  key={id}
                                  className=" last-of-type:border-none"
                                >
                                  <Link
                                    className="custom-transition border-b-[0.3px] border-gray-400 px-3 py-5 hover:text-primary-color-2"
                                    href={url}
                                    onClick={handleActive}
                                  >
                                    {dropdown_title}
                                  </Link>
                                </li>
                              );
                            },
                          )}
                        </ul>

                        <ul
                          className={`custom-class   absolute min-w-[200px] bg-primary-color-1 group-hover/nav-item:dropdown-menu group-hover/nav-item:block group-hover/nav-item:space-y-6 group-hover/nav-item:px-4 ${
                            dropdownId === id && ""
                          }`}
                        >
                          {dropdownItems?.map(
                            ({
                              id,
                              dropdown_title,
                              url,
                              sbu_dropdown,
                              sub_items,
                            }) => {
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
                                    {dropdown_title}
                                  </Link>
                                  <ul
                                    className={`custom-class-sub-item absolute min-w-[200px] group-hover:dropdown-menu-sub-item group-hover:left-[109%] group-hover:block group-hover:space-y-6 group-hover:bg-primary-color-1 group-hover:px-4 ${
                                      subDropdown === id &&
                                      "nav__dropdown-active"
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
                                    {dropdown_title}
                                  </Link>
                                </li>
                              );
                            },
                          )}
                        </ul>
                      </AnimateHeight>
                    </li>
                  ) : (
                    <li className=" ">
                      <Link
                        className=" border-b-[0.3px] border-gray-400  py-5"
                        href={`${url}`}
                      >
                        {title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <button
              data-te-offcanvas-toggle
              href="#offcanvasExample"
              role="button"
              aria-controls="offcanvasExample"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <AiOutlineMenu
                onClick={() => setActive(!active)}
                className={` text-3xl `}
              />
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="dot-bg hidden items-center justify-between lg:flex">
            <div className="block">
              <Link href="/">
                <Image src={Logo} width={213} height={40} alt="Logo" />
              </Link>
            </div>
            <ul className="nav__items flex items-center gap-5 lg:flex-row xl:gap-7 xxl:gap-10">
              {navData.map(({ title, url, id, dropdown, dropdownItems }) => {
                return dropdown ? (
                  <li
                    key={id}
                    className=" group/nav-item custom-transition relative"
                  >
                    <Link
                      onClick={() => {
                        handleDropdown(id);
                        handleActive();
                      }}
                      // href={url}
                      href="URL:void(0)"
                      className={` dropdown-icon ${
                        activeNav == url && "active-nav"
                      } py-10 hover:text-primary-color-2  ${
                        dropdownId === id && "Todo"
                      } ${active && "fitext-primary-color-2"}`}
                    >
                      {title}
                    </Link>
                    <ul
                      className={`custom-class  absolute min-w-[200px] bg-primary-color-1 group-hover/nav-item:dropdown-menu group-hover/nav-item:block group-hover/nav-item:space-y-6 group-hover/nav-item:px-4 ${
                        dropdownId === id && "Todo"
                      }`}
                    >
                      {dropdownItems?.map(
                        ({
                          id,
                          dropdown_title,
                          url,
                          p_url,
                          sbu_dropdown,
                          sub_items,
                        }) => {
                          return sbu_dropdown ? (
                            <li
                              key={id}
                              className="group custom-transition relative"
                            >
                              <Link
                                onClick={() => {
                                  handleSubDropdown(id);
                                  handleActiveItem(p_url);
                                }}
                                className="dropdown-icon  px-3 hover:text-primary-color-2"
                                href="URL:void(0)"
                              >
                                {dropdown_title}
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
                                      href={`${url}`}
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
                                {dropdown_title}
                              </Link>
                            </li>
                          );
                        },
                      )}
                    </ul>
                  </li>
                ) : (
                  <li className="group/nav-item custom-transition relative">
                    <Link
                      onClick={() => handleActiveItem(url)}
                      className={` py-10 hover:text-primary-color-2 ${
                        activeNav == url && "active-nav"
                      }`}
                      href={`${url}`}
                    >
                      {title}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div>
              <button className="border bg-primary-color-2 px-3 py-[15px] text-lg font-medium text-[#292C32] hover:bg-slate-200  xxl:px-10 xxl:text-lg">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
