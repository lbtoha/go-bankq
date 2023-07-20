"use client";
import { usePathname } from "next/navigation";
import { FiChevronRight } from "react-icons/fi";

export const PageHeader = () => {
  const path = usePathname();

  if (path.includes("/") && path.includes("-")) {
    const convertToTitleCase2 = (str: string) => {
      // Remove leading slash
      str = str.slice(1);
      // Split the string into words
      const words = str.split("-");
      // Capitalize the first letter of each word
      const capitalizedWords = words.map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1),
      );
      // Join the words with a space
      const result = capitalizedWords.join(" ");
      return result;
    };
  }

  const convertToTitleCase2 = (str: string) => {
    // Remove leading slash
    str = str.slice(1);
    // Split the string into words
    const words = str.split("-");
    // Capitalize the first letter of each word
    const capitalizedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1),
    );
    // Join the words with a space
    const result = capitalizedWords.join(" ");
    return result;
  };
  const heading2 = convertToTitleCase2(path);

  const convertToTitleCase = (str: string) => {
    // Remove leading slash
    str = str.slice(1);
    // Split the string into words
    const words = str.split("-");
    // Capitalize the first letter of each word
    const capitalizedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1),
    );
    // Join the words with a space
    const result = capitalizedWords.join(" ");
    return result;
  };
  const heading = convertToTitleCase(path);

  return (
    <>
      <h2 className="pt-[120px] text-[64px] font-semibold capitalize text-white">
        {heading}
      </h2>
      <div className="mt-6 flex items-center pb-[120px]">
        <span className="flex items-center text-[#A0A2A7]">
          Home <FiChevronRight />
        </span>
        <span className="text-primary-color-2">{heading}</span>
      </div>
    </>
  );
};

import Image from "next/image";
import breadcrumbImg from "@/../public/img/bn/bread-service.png";
import React from "react";
type breadCrumbProps = {
  title: string;
  items: string[];
};
const Breadcrumb = ({ title, items }: breadCrumbProps) => {
  return (
    <section className="banner__breadcumn ralt">
      <div className="breadcumnd__wrapper">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xxl-6 col-xl-6 col-lg-7 col-md-7 col-sm-7">
              <div className="breadcumnd__content">
                <span className="d4 mb-24">{title}</span>
                <ul className="breadcun__list d-flex align-items-center flex-wrap gap-1">
                  {items.map((item, i) => (
                    <React.Fragment key={item}>
                      <li>
                        <a
                          href={item == "Home" ? "/" : "#"}
                          className={`fz-16 fw-400 inter ${
                            i === items.length - 1 ? "base2" : "text-white"
                          }`}
                        >
                          {item}
                        </a>
                      </li>
                      {i !== items.length - 1 && (
                        <li>
                          <i className="bi bi-chevron-right"></i>
                        </li>
                      )}
                    </React.Fragment>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-5 col-sm-5">
              <div className="featured__card">
                <Image src={breadcrumbImg} className="w-100" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Breadcrumb;
