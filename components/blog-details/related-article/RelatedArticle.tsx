import { SectionHeading } from "@/components/shared/SectionHeading";
import block3 from "@/public/images/blog3.png";
import block4 from "@/public/images/blog4.png";
import { Button } from "@/components/shared/Button";
import ArticleCard from "@/components/shared/ArticleCard";
import articleAuthor3 from "@/public/images/article_author3.png";
import articleAuthor4 from "@/public/images/article_author4.png";

export const RelatedArticle = () => {
  return (
    <section>
      <div className="section-gap container max-sm:px-2">
        <div className="text-center">
          <SectionHeading title="Related Article" />
        </div>
        <div className="mt-[60px] grid grid-cols-1 gap-6 max-md:space-y-5 md:grid-cols-2 lg:grid-cols-3">
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
        <div className="mt-[60px] text-center">
          <Button text="See More" url="/" />
        </div>
      </div>
    </section>
  );
};
