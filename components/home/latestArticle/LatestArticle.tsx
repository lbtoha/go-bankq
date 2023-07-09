import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";
import Image from "next/image";
import React from "react";
import block from "@/public/images/blog3.png";
import block2 from "@/public/images/blog4.png";
import block3 from "@/public/images/blog5.png";
import { RiMessage2Line } from "react-icons/ri";
import { titleFont } from "@/utils/fonts";
import articleAuthor from "@/public/images/article_author.png";
import { Button } from "@/components/shared/Button";

export const LatestArticle = () => {
  return (
    <section className="latest-article-section">
      <div className="my-container pt-[117px] pb-[120px]">
        <div className="pb-6 text-white text-center">
          <SectionHeading title="Out Latest article" />
        </div>
        <div className="pb-6 text-[#E7E9EE] text-center max-w-[642px] mx-auto">
          <SectionText text="Banks have been around for centuries, and their role in the economy has evolved over time. " />
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <Image src={block} alt="blog1" className="w-full" />
            <div className="flex justify-between items-center text-[#FFD584] mt-5 ">
              <span className="text-lg">Bank</span>
              <span className="flex items-center gap-2">
                <RiMessage2Line />
                <span className="text-white text-sm">06 comments</span>
              </span>
            </div>
            <p
              className={`font-semibold text-xl ${titleFont.className} leading-[130%] text-[#FAFAFC] mt-3 `}
            >
              The Importance of Choosing the Right
            </p>

            <p className="text-base leading-[150%] text-[#FAFAFC] mt-4 mb-[42px]">
              Banks have been around for centuries, and their role in evolved
              over time.
            </p>
            <div className="flex items-center text-[#FAFAFC] gap-4">
              <Image
                src={articleAuthor}
                alt="article author"
                className="rounded-full"
              />
              <div className="">
                <p className="text-xl leading-[150%]">Jon Haroson</p>
                <p className="text-[#FAFAFC] text-sm leading-[150%]">
                  21 April 2023 - 2 min read
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image src={block2} alt="blog1" className="w-full" />
            <div className="flex justify-between items-center text-[#FFD584] mt-5 ">
              <span className="text-lg">Bank</span>
              <span className="flex items-center gap-2">
                <RiMessage2Line />
                <span className="text-white text-sm">06 comments</span>
              </span>
            </div>
            <p
              className={`font-semibold text-xl ${titleFont.className} leading-[130%] text-[#FAFAFC] mt-3 `}
            >
              The Importance of Choosing the Right
            </p>

            <p className="text-base leading-[150%] text-[#FAFAFC] mt-4 mb-[42px]">
              Banks have been around for centuries, and their role in evolved
              over time.
            </p>
            <div className="flex items-center text-[#FAFAFC] gap-4">
              <Image
                src={articleAuthor}
                alt="article author"
                className="rounded-full"
              />
              <div className="">
                <p className="text-xl leading-[150%]">Jon Haroson</p>
                <p className="text-[#FAFAFC] text-sm leading-[150%]">
                  21 April 2023 - 2 min read
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image src={block3} alt="blog1" className="w-full" />
            <div className="flex justify-between items-center text-[#FFD584] mt-5 ">
              <span className="text-lg">Bank</span>
              <span className="flex items-center gap-2">
                <RiMessage2Line />
                <span className="text-white text-sm">06 comments</span>
              </span>
            </div>
            <p
              className={`font-semibold text-xl ${titleFont.className} leading-[130%] text-[#FAFAFC] mt-3 `}
            >
              The Importance of Choosing the Right
            </p>

            <p className="text-base leading-[150%] text-[#FAFAFC] mt-4 mb-[42px]">
              Banks have been around for centuries, and their role in evolved
              over time.
            </p>
            <div className="flex items-center text-[#FAFAFC] gap-4">
              <Image
                src={articleAuthor}
                alt="article author"
                className="rounded-full"
              />
              <div className="">
                <p className="text-xl leading-[150%]">Jon Haroson</p>
                <p className="text-[#FAFAFC] text-sm leading-[150%]">
                  21 April 2023 - 2 min read
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[60px] text-center">
          <Button text="See more" url="/" />
        </div>
      </div>
    </section>
  );
};
