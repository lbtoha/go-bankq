"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollBackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setShowButton(scrollY > 1000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`fixed right-5  z-[20000] translate-y-[100%] rounded-md bg-primary-color-1 p-2 text-white shadow-lg shadow-green-200  ${
        showButton
          ? " custom-transition visible bottom-10 translate-y-[3%]"
          : " custom-transition invisible bottom-[-10px]"
      }`}
      onClick={scrollToTop}
    >
      <AiOutlineArrowUp className="text-2xl md:text-3xl" />
    </button>
  );
};

export default ScrollBackToTop;
