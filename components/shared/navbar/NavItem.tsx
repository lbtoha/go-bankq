"use client";
import Link from "next/link";
import React, { useState } from "react";

type Props = {
  children: string;
  link: string;
  dropdown: boolean;
};

export const NavItem = ({ children, link, dropdown }: Props) => {
  const [icon, setIcon] = useState(true);
  const [activeNav, setActiveNav] = useState(true);

  return (
    <Link
      onClick={() => {
        setIcon(!icon);
        setActiveNav(!activeNav);
      }}
      className={`${
        dropdown ? (icon ? "dropdown-icon-down" : "dropdown-icon-up") : ""
      }  ${activeNav ? "" : "active-nav text-primary-color-2"}`}
      href={link}
    >
      {children}
    </Link>
  );
};
