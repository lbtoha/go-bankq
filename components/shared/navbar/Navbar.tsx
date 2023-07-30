"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navData } from "./navData";
import Logo from "/public/images/logo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Button } from "../Button";
import "tw-elements/dist/css/tw-elements.min.css";
import AnimateHeight from "react-animate-height";
import { usePathname } from "next/navigation";

export const Navbar = ({ cls = "" }) => {
  const [windowHeight, setWindowHeight] = useState(0);
  const [active, setActive] = useState(false);
  const [activeNav, setActiveNav] = useState("");
  const [dropdownId, setDropdownId] = useState("");
  const [subDropdown, setSubDropdown] = useState("");
  const [openDropDown, setOpenDropDown] = useState<string | null>("");
  const [openSubDropDown, setOpenSubDropDown] = useState<string | null>("");

  const pathname = usePathname();

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setWindowHeight(scrollY);
  };
  // console.log(windowHeight);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleActive = () => {
    setActive(false);
    setDropdownId("");
    setSubDropdown("");
  };

  const handleActiveItem = (url: any) => {
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
    const init = async () => {
      const { Offcanvas, Ripple, Dropdown, initTE } = await import(
        "tw-elements"
      );
      initTE({ Offcanvas, Ripple, Dropdown });
    };
    init();
  }, []);

  return (
    <>
      <header
        className={`navbar navbar-banner   ${
          windowHeight > 50 && "header-active"
        } relative  text-white`}
      >
        <div className="container max-sm:px-2">
          <div className="flex items-center justify-between xl:hidden">
            <div className="py-5">
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
                `nav__items h-screen overflow-auto px-10 font-semibold lg:hidden` +
                `invisible fixed bottom-0 left-0 top-0 z-[1045] flex w-full max-w-full -translate-x-full flex-col border-none bg-[url("/images/banner/bannerBg.png")] bg-cover bg-clip-padding bg-no-repeat text-white shadow-sm outline-none transition duration-300 ease-in-out dark:bg-neutral-800 dark:text-neutral-200 [&[data-te-offcanvas-show]]:transform-none`
              }
              id="offcanvasExample"
              aria-labelledby="offcanvasExampleLabel"
              data-te-offcanvas-init
            >
              <div className="">
                <div className="flex items-end justify-between gap-5">
                  <Link href="/">
                    <Image src={Logo} width={213} height={40} alt="Logo" />
                  </Link>
                  <button
                    onClick={() => setActive(false)}
                    data-te-offcanvas-dismiss
                    className="mt-4 rounded-full border-2 border-primary-color-2 p-2 max-sm:px-2 md:p-3"
                  >
                    <AiOutlineClose
                      className={"text-right text-xl  md:text-3xl"}
                    />
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
                              dropdownUrl,
                              sbu_dropdown,
                              sub_items,
                            }) => {
                              return sbu_dropdown ? (
                                // This nav item have sub-dropdown data
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
                                // This nav item have only dropdown data
                                <li
                                  key={id}
                                  className="last-of-type:border-none"
                                >
                                  <Link
                                    className="custom-transition border-b-[0.3px] border-gray-400 px-3 py-5 hover:text-primary-color-2"
                                    href={`${dropdownUrl}`}
                                    onClick={() => {
                                      handleActive();
                                    }}
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
                    // This item do not have any dropdown
                    <li key={id} className=" " data-te-offcanvas-dismiss>
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
            <Link
              data-te-offcanvas-toggle
              href="#offcanvasExample"
              role="button"
              aria-controls="offcanvasExample"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <AiOutlineMenu
                onClick={() => setActive(!active)}
                className={`text-3xl `}
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden items-center justify-between xl:flex">
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
                    className={`group/nav-item custom-transition relative `}
                  >
                    <Link
                      onClick={() => {
                        handleDropdown(id);
                        handleActive();
                      }}
                      // href={url}
                      href="URL:void(0)"
                      className={` dropdown-icon ${
                        pathname.includes(url) &&
                        "active-nav text-primary-color-2"
                      } py-10 hover:text-primary-color-2  ${
                        dropdownId === id && "Todo"
                      } ${active && "fitext-primary-color-2"}`}
                    >
                      {title}
                    </Link>
                    <ul
                      className={`custom-class group-hover/nav-item:active-nav  custom-transition absolute min-w-[200px] bg-primary-color-1 group-hover/nav-item:dropdown-menu group-hover/nav-item:block group-hover/nav-item:space-y-6 group-hover/nav-item:px-4 ${
                        dropdownId === id && "Todo"
                      }`}
                    >
                      {dropdownItems?.map(
                        ({
                          id,
                          dropdown_title,
                          dropdownUrl,
                          parentUrl,
                          sbu_dropdown,
                          sub_items,
                        }) => {
                          return sbu_dropdown ? (
                            // if have sub-dropdown
                            <li
                              key={id}
                              className="group custom-transition relative"
                            >
                              <Link
                                onClick={() => {
                                  handleSubDropdown(id);
                                  handleActiveItem(parentUrl);
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
                            <li
                              onClick={() => handleActiveItem(parentUrl)}
                              key={id}
                            >
                              <Link
                                className="custom-transition px-3  hover:text-primary-color-2"
                                href={dropdownUrl}
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
                  <li
                    key={id}
                    className="group/nav-item custom-transition relative"
                  >
                    <Link
                      onClick={() => handleActiveItem(url)}
                      className={`active-nav-hover py-10 hover:text-primary-color-2 ${
                        pathname == url && "active-nav text-primary-color-2"
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
              <button className="custom-transition border bg-primary-color-2 px-3 py-[15px] text-lg font-medium text-[#292C32] hover:bg-slate-200  xxl:px-10 xxl:text-lg">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
