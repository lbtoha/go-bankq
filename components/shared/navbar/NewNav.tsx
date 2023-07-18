"use client";
import React, { useState } from "react";
import locofy from "./locofy.png";

function NewNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex flex-wrap items-center justify-between p-6">
      <div className="mr-6 flex flex-shrink-0 items-center text-white lg:mr-72">
        {/* <img src={locofy} className="w-100 mr-2 h-10" alt="Logo" /> */}
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-black-500 hover:text-black-400 flex items-center rounded px-3 py-2"
        >
          <svg
            className={`h-3 w-3 fill-current ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`h-3 w-3 fill-current ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div
        className={`block w-full flex-grow lg:flex lg:w-auto lg:items-center ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-sm lg:flex-grow">
          <a
            href="#"
            className="text-white-200 mr-4 mt-4 block lg:mt-0 lg:inline-block"
          >
            First Link
          </a>
          <a
            href="#"
            className="text-white-200 mr-4 mt-4 block lg:mt-0 lg:inline-block"
          >
            Second Link
          </a>
          <a
            href="#"
            className="text-white-200 mr-4 mt-4 block lg:mt-0 lg:inline-block"
          >
            Third Link
          </a>
          <a
            href="#"
            className="text-white-200 mr-4 mt-4 block lg:mt-0 lg:inline-block"
          >
            Fourth Link
          </a>
        </div>
        <div>
          <button className="inline-flex items-center border-0 bg-amber-500 px-4 py-2 text-white">
            Click Me
          </button>
        </div>
      </div>
    </nav>
  );
}
export default NewNav;
