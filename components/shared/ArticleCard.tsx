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
}

const ArticleCard = ({
  imageThumb,
  title,
  body,
  authorImage,
  authorName,
  publishedDate,
}: ArticleCardProps) => {
  return (
    <div className="text-[#FAFAFC]">
      <Image src={imageThumb} alt="Image" className="w-full" />
      <div className="mt-5 flex items-center justify-between text-[#FFD584] ">
        <span className="text-lg">Bank</span>
        <span className="flex items-center gap-2">
          <RiMessage2Line />
          <Link href="/" className="text-sm text-white">
            06 comments
          </Link>
        </span>
      </div>
      <div className="mt-3">
        <Link
          href="/"
          className={` font-montserrat text-xl font-semibold leading-[130%] text-[#FAFAFC] `}
        >
          {title}
        </Link>
      </div>

      <p className="mt-4 border-b border-[#292C32] pb-6 text-base leading-[150%] text-[#FAFAFC]">
        {body}
      </p>
      <div className="flex items-center gap-4 pt-6 text-[#FAFAFC]">
        <Image
          src={authorImage}
          alt="article author"
          className=" rounded-full"
        />
        <div className="">
          <p className="text-xl leading-[150%]">{authorName}</p>
          <div className="flex space-x-3 text-sm leading-[150%] text-[#FAFAFC] ">
            <span></span>
            {publishedDate} <span>-</span> <span>2 min read</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
