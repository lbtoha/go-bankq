"use client";
import React from "react";

type Props = {
  title: string;
  items: string[];
};

export const PageHeader = ({ title, items }: Props) => {
  return (
    <>
      <h2 className=" text-[40px] font-semibold capitalize text-white md:text-[50px] lg:text-[64px]">
        {title}
      </h2>
      <div className="mt-6 flex items-center ">
        <ul className="align-items-center flex gap-2 max-sm:text-base">
          {items.map((item, i) => (
            <React.Fragment key={item}>
              <li>
                <a
                  href={item == "Home" ? "/" : "#"}
                  className={` ${
                    i === items.length - 1
                      ? "text-primary-color-2"
                      : "text-white"
                  }`}
                >
                  {item}
                </a>
              </li>
              {i !== items.length - 1 && (
                <li className="text-white">
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </li>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </>
  );
};
