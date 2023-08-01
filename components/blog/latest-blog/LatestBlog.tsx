import Image from "next/image";
import block from "@/public/images/blog.png";
import block2 from "@/public/images/blog2.png";
import block3 from "@/public/images/blog3.png";
import block4 from "@/public/images/blog4.png";
import { RiMessage2Line } from "react-icons/ri";
import articleAuthor3 from "@/public/images/article_author3.png";
import articleAuthor4 from "@/public/images/article_author4.png";
import Link from "next/link";
import ArticleCard from "@/components/shared/ArticleCard";
import Pagination from "./Pagination";

export const LatestBlog = () => {
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
                <span className="text-sm text-neutral-color-neutral-800">
                  06 comments
                </span>
              </span>
            </div>
            <Link
              href="/"
              className={`mt-3 font-montserrat text-xl font-semibold leading-[130%] text-neutral-color-neutral-800 `}
            >
              The Importance of Choosing the Right Bank for Your Financial Needs
            </Link>

            <p className="mb-[24px] mt-4 text-base leading-[150%] text-neutral-color-neutral-600">
              Banks have been around for centuries, and their role in evolved
              over time.
            </p>
            <div className="flex items-center gap-4 border-t border-neutral-color-neutral-300 pt-[18px]">
              <Image
                src={articleAuthor3}
                alt="article author"
                className="rounded-full"
              />
              <div className="">
                <p className="text-xl leading-[150%] text-neutral-color-neutral-800">
                  Jon Haroson
                </p>
                <p className="text-sm leading-[150%] text-neutral-color-neutral-600">
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
                <Link
                  href="/"
                  className="text-sm text-neutral-color-neutral-800"
                >
                  06 comments
                </Link>
              </span>
            </div>
            <Link
              href="/"
              className={`mt-3 font-montserrat text-xl font-semibold leading-[130%] text-neutral-color-neutral-800 `}
            >
              Credit Scores Unveiled Understanding the Key to Financial
              Opportunities
            </Link>

            <p className="mb-[24px] mt-4 text-base leading-[150%] text-neutral-color-neutral-600">
              Banks have been around for centuries, and their role in evolved
              over time.
            </p>
            <div className="flex items-center gap-4 border-t border-neutral-color-neutral-300 pt-[18px]">
              <Image
                src={articleAuthor4}
                alt="article author"
                className="rounded-full"
              />
              <div className="">
                <p className="text-xl leading-[150%] text-neutral-color-neutral-800">
                  Jon Haroson
                </p>
                <p className="text-sm leading-[150%] text-neutral-color-neutral-600">
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
        <Pagination />
      </div>
    </section>
  );
};
