"use client";
import Image from "next/image";
import { useEffect } from "react";
import { Offcanvas, Ripple, Dropdown, initTE } from "tw-elements";
import "tw-elements/dist/css/tw-elements.min.css";

export const VNew = () => {
  useEffect(() => {
    initTE({ Offcanvas, Ripple, Dropdown });
  }, []);

  return (
    <div className="flex space-x-2">
      <div>
        <a
          className="bg-primary hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 mr-1.5 inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          data-te-offcanvas-toggle
          href="#offcanvasExample"
          role="button"
          aria-controls="offcanvasExample"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          Link with href
        </a>

        <div
          className="invisible fixed bottom-0 left-0 top-0 z-[1045] flex w-96 max-w-full -translate-x-full flex-col border-none bg-white bg-clip-padding text-neutral-700 shadow-sm outline-none transition duration-300 ease-in-out dark:bg-neutral-800 dark:text-neutral-200 [&[data-te-offcanvas-show]]:transform-none"
          //   tabindex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
          data-te-offcanvas-init
        >
          <h1>Hello</h1>
        </div>
      </div>
    </div>
  );
};
