import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";
import React from "react";
import block from "@/public/images/blog3.png";
import block2 from "@/public/images/blog4.png";
import block3 from "@/public/images/blog5.png";
import articleAuthor from "@/public/images/article_author.png";
import articleAuthor2 from "@/public/images/article_author2.png";
import articleAuthor3 from "@/public/images/article_author3.png";
import { Button } from "@/components/shared/Button";
import { SectionHeadingWhite } from "@/components/shared/SectionHeadingWhite";
import ArticleCard from "@/components/shared/ArticleCard";

export const LatestArticle = () => {
  return (
    <section className="latest-article-section">
      <div className="section-gap horizontal-gap container">
        <div className="pb-6 text-center text-white">
          <SectionHeadingWhite title="Our Latest article" />
        </div>
        <div className="mx-auto max-w-[642px] pb-8 text-center text-[#E7E9EE] md:pb-10 lg:pb-[60px]">
          <p className="text-lg leading-[150%]  max-md:text-base">
            Banks have been around for centuries, and their role in the economy
            has evolved over time.
          </p>
        </div>
        <div className="gap-6 max-md:space-y-5 md:grid md:grid-cols-2 lg:grid-cols-3 ">
          <ArticleCard
            imageThumb={block}
            title="The Importance of Choosing the Right"
            body="Banks have been around for centuries, and their role in evolved over time."
            authorImage={articleAuthor}
            authorName="Jon Haroson"
            publishedDate="21 April 2023"
          />
          <ArticleCard
            imageThumb={block2}
            title="The Importance of Choosing the Right "
            body="Banks have been around for centuries, and their role in evolved over time."
            authorImage={articleAuthor2}
            authorName="Jon Haroson"
            publishedDate="21 April 2023"
          />
          <ArticleCard
            imageThumb={block3}
            title="The Importance of Choosing the Right "
            body="Banks have been around for centuries, and their role in evolved over time."
            authorImage={articleAuthor3}
            authorName="Jon Haroson"
            publishedDate="21 April 2023"
          />
        </div>
        <div className="mt-[60px] text-center">
          <Button text="See more" url="/" />
        </div>
      </div>
    </section>
  );
};
