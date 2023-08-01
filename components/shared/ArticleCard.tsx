import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { RiMessage2Line } from "react-icons/ri";
interface ArticleCardProps {
  imageThumb: StaticImageData;
  title: string;
  body: string;
  authorImage: StaticImageData;
  authorName: string;
  publishedDate: string;
  readingTime: number;
  background: "dark" | "light";
}

const ArticleCard = ({
  imageThumb,
  title,
  body,
  authorImage,
  authorName,
  publishedDate,
  readingTime,
  background,
}: ArticleCardProps) => {
  return (
    <div className="text-neutral-color-neutral-200">
      <Image src={imageThumb} alt="Image" className="w-full" />
      <div
        className={`mt-5 flex items-center justify-between ${
          background == "dark" ? "text-primary-color-2" : "text-primary-color-1"
        }`}
      >
        <span className="text-lg">Bank</span>
        <span className="flex items-center gap-2">
          <RiMessage2Line />
          <Link
            href="/"
            className={`text-sm   ${
              background == "dark"
                ? "text-white"
                : "text-neutral-color-neutral-600"
            }`}
          >
            06 comments
          </Link>
        </span>
      </div>
      <div className="mt-3">
        <Link
          href="/"
          className={` font-montserrat text-xl font-semibold leading-[130%] ${
            background == "dark"
              ? "text-neutral-color-neutral-200"
              : "text-neutral-color-neutral-800"
          }  `}
        >
          {title}
        </Link>
      </div>

      <p
        className={`mt-3 border-b pb-4 text-base  leading-[150%] md:mt-4 md:pb-6  ${
          background == "dark"
            ? "border-neutral-color-neutral-800 text-neutral-color-neutral-200"
            : "border-neutral-color-neutral-300 text-neutral-color-neutral-600"
        }`}
      >
        {body}
      </p>
      <div
        className={`flex items-center gap-4 pt-4 md:pt-6 ${
          background == "dark"
            ? "text-neutral-color-neutral-200"
            : "text-neutral-color-neutral-600"
        }`}
      >
        <Image
          src={authorImage}
          alt="article author"
          className=" rounded-full"
        />
        <div className="">
          <p
            className={`text-xl leading-[150%]  ${
              background == "dark"
                ? "tex-neutral-color-neutral-200"
                : "text-neutral-color-neutral-800"
            }   `}
          >
            {authorName}
          </p>
          <div
            className={`flex space-x-3 text-sm leading-[150%] ${
              background == "dark"
                ? "text-neutral-color-neutral-200"
                : "text-neutral-color-neutral-600"
            }`}
          >
            <span></span>
            {publishedDate} <span>-</span> <span>{readingTime} min read</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
