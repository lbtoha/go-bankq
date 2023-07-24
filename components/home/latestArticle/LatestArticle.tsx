import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";
import Image from "next/image";
import React from "react";
import block from "@/public/images/blog3.png";
import block2 from "@/public/images/blog4.png";
import block3 from "@/public/images/blog5.png";
import { RiMessage2Line } from "react-icons/ri";
import articleAuthor from "@/public/images/article_author.png";
import { Button } from "@/components/shared/Button";
import { SectionHeadingWhite } from "@/components/shared/SectionHeadingWhite";

export const LatestArticle = () => {
  return (
    <section className="latest-article-section">
      <div className="section-gap horizontal-gap container">
        <div className="pb-6 text-center text-white">
          <SectionHeadingWhite title="Our Latest article" />
        </div>
        <div className="mx-auto max-w-[642px] pb-6 text-center text-[#E7E9EE]">
          <SectionText text="Banks have been around for centuries, and their role in the economy has evolved over time. " />
        </div>
        <div className="gap-6 max-md:space-y-5 md:grid md:grid-cols-2 lg:grid-cols-3 ">
          <div>
            <Image src={block} alt="blog1" className="w-full" />
            <div className="mt-5 flex items-center justify-between text-[#FFD584] ">
              <span className="text-lg">Bank</span>
              <span className="flex items-center gap-2">
                <RiMessage2Line />
                <span className="text-sm text-white">06 comments</span>
              </span>
            </div>
            <p
              className={`mt-3 font-montserrat text-xl font-semibold leading-[130%] text-[#FAFAFC] `}
            >
              The Importance of Choosing the Right
            </p>

            <p className="mb-[42px] mt-4 text-base leading-[150%] text-[#FAFAFC]">
              Banks have been around for centuries, and their role in evolved
              over time.
            </p>
            <div className="flex items-center gap-4 text-[#FAFAFC]">
              <Image
                src={articleAuthor}
                alt="article author"
                className="rounded-full"
              />
              <div className="">
                <p className="text-xl leading-[150%]">Jon Haroson</p>
                <p className="text-sm leading-[150%] text-[#FAFAFC]">
                  21 April 2023 - 2 min read
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image src={block2} alt="blog1" className="w-full" />
            <div className="mt-5 flex items-center justify-between text-[#FFD584] ">
              <span className="text-lg">Bank</span>
              <span className="flex items-center gap-2">
                <RiMessage2Line />
                <span className="text-sm text-white">06 comments</span>
              </span>
            </div>
            <p
              className={`mt-3 font-montserrat text-xl font-semibold leading-[130%] text-[#FAFAFC] `}
            >
              The Importance of Choosing the Right
            </p>

            <p className="mb-[42px] mt-4 text-base leading-[150%] text-[#FAFAFC]">
              Banks have been around for centuries, and their role in evolved
              over time.
            </p>
            <div className="flex items-center gap-4 text-[#FAFAFC]">
              <Image
                src={articleAuthor}
                alt="article author"
                className="rounded-full"
              />
              <div className="">
                <p className="text-xl leading-[150%]">Jon Haroson</p>
                <p className="text-sm leading-[150%] text-[#FAFAFC]">
                  21 April 2023 - 2 min read
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image src={block3} alt="blog1" className="w-full" />
            <div className="mt-5 flex items-center justify-between text-[#FFD584] ">
              <span className="text-lg">Bank</span>
              <span className="flex items-center gap-2">
                <RiMessage2Line />
                <span className="text-sm text-white">06 comments</span>
              </span>
            </div>
            <p
              className={`mt-3 font-montserrat text-xl font-semibold leading-[130%] text-[#FAFAFC] `}
            >
              The Importance of Choosing the Right
            </p>

            <p className="mb-[42px] mt-4 text-base leading-[150%] text-[#FAFAFC]">
              Banks have been around for centuries, and their role in evolved
              over time.
            </p>
            <div className="flex items-center gap-4 text-[#FAFAFC]">
              <Image
                src={articleAuthor}
                alt="article author"
                className="rounded-full"
              />
              <div className="">
                <p className="text-xl leading-[150%]">Jon Haroson</p>
                <p className="text-sm leading-[150%] text-[#FAFAFC]">
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
