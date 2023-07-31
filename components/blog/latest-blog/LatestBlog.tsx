"use client";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import block from "@/public/images/blog.png";
import block2 from "@/public/images/blog2.png";
import block3 from "@/public/images/blog3.png";
import block4 from "@/public/images/blog4.png";
import block5 from "@/public/images/blog5.png";
import { RiMessage2Line } from "react-icons/ri";
import articleAuthor2 from "@/public/images/article_author2.png";
import articleAuthor3 from "@/public/images/article_author3.png";
import articleAuthor4 from "@/public/images/article_author4.png";

import ReactPaginate from "react-paginate";
import Link from "next/link";
import ArticleCard from "@/components/shared/ArticleCard";

export const LatestBlog = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const [itemOffset, setItemOffset] = useState<number>(0);
  const itemsPerPage: number = 3;
  const endOffset: number = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  useEffect(() => {}, [itemOffset]);
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`,
    );
    setItemOffset(newOffset);
    console.log(newOffset);
  };

  return (
    <section>
      <div className="section-gap container max-sm:px-2">
        <h2 className="mb-7 font-montserrat text-4xl font-semibold  leading-[120%] md:text-[50px] xl:text-[64px]">
          Latest Blog
        </h2>
        <p className="mb-10">
          the amount is deducted from your bank account balance immediatel
        </p>
        <div className="mb-10 max-md:space-y-5 md:grid md:grid-cols-2 md:gap-6 lg:mb-20 xl:mb-[92px]">
          <div>
            <Image src={block} alt="blog1" className="w-full" />
            <div className="mt-5 flex items-center justify-between text-primary-color-1 ">
              <span className="text-lg">Bank</span>
              <span className="flex items-center gap-2 text-primary-color-1">
                <RiMessage2Line />
                <span className="text-sm text-[#292C32]">06 comments</span>
              </span>
            </div>
            <Link
              href="/"
              className={`mt-3 font-montserrat text-xl font-semibold leading-[130%] text-[#292C32] `}
            >
              The Importance of Choosing the Right Bank for Your Financial Needs
            </Link>

            <p className="mb-[24px] mt-4 text-base leading-[150%] text-[#6F7278]">
              Banks have been around for centuries, and their role in evolved
              over time.
            </p>
            <div className="flex items-center gap-4 border-t border-[#E7E9EE] pt-[18px]">
              <Image
                src={articleAuthor3}
                alt="article author"
                className="rounded-full"
              />
              <div className="">
                <p className="text-xl leading-[150%] text-[#292C32]">
                  Jon Haroson
                </p>
                <p className="text-sm leading-[150%] text-[#6F7278]">
                  21 April 2023 - 2 min read
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image src={block2} alt="blog1" className="w-full object-cover" />
            <div className="mt-5 flex items-center justify-between text-primary-color-1 ">
              <span className="text-lg">Bank</span>
              <span className="flex items-center gap-2 text-primary-color-1">
                <RiMessage2Line />
                <Link href="/" className="text-sm text-[#292C32]">
                  06 comments
                </Link>
              </span>
            </div>
            <Link
              href="/"
              className={`mt-3 font-montserrat text-xl font-semibold leading-[130%] text-[#292C32] `}
            >
              Credit Scores Unveiled Understanding the Key to Financial
              Opportunities
            </Link>

            <p className="mb-[24px] mt-4 text-base leading-[150%] text-[#6F7278]">
              Banks have been around for centuries, and their role in evolved
              over time.
            </p>
            <div className="flex items-center gap-4 border-t border-[#E7E9EE] pt-[18px]">
              <Image
                src={articleAuthor4}
                alt="article author"
                className="rounded-full"
              />
              <div className="">
                <p className="text-xl leading-[150%] text-[#292C32]">
                  Jon Haroson
                </p>
                <p className="text-sm leading-[150%] text-[#6F7278]">
                  21 April 2023 - 2 min read
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-cols-1 gap-6 max-md:space-y-5 md:grid md:grid-cols-2 lg:grid-cols-3">
          <ArticleCard
            imageThumb={block4}
            title="The Importance of Choosing the Right"
            body="Banks have been around for centuries, and their role in evolved over time."
            authorImage={articleAuthor4}
            authorName="Jon Haroson"
            publishedDate="21 April 2023"
            readingTime={2}
            background="light"
          />
          <ArticleCard
            imageThumb={block3}
            title="The Importance of Choosing the Right"
            body="Banks have been around for centuries, and their role in evolved over time."
            authorImage={articleAuthor3}
            authorName="Jon Haroson"
            publishedDate="21 April 2023"
            readingTime={4}
            background="light"
          />
          <ArticleCard
            imageThumb={block4}
            title="The Importance of Choosing the Right"
            body="Banks have been around for centuries, and their role in evolved over time."
            authorImage={articleAuthor4}
            authorName="Jon Haroson"
            publishedDate="21 April 2023"
            readingTime={5}
            background="light"
          />
        </div>
      </div>
      <div className="container flex justify-center overflow-hidden pt-2  max-sm:px-2 max-sm:ps-2 max-sm:pt-5">
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={5}
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={"pagination pages pagination"}
          activeClassName={"active"}
        />
      </div>
    </section>
  );
};
