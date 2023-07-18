import { BlogDetailsHeader } from "@/components/blog-details/blog-details-header/BlogDetailsHeader";
import { BlogPost } from "@/components/blog-details/blog-post/BlogPost";
import { RelatedArticle } from "@/components/blog-details/related-article/RelatedArticle";
import { OpenAccountSection } from "@/components/shared/OpenAccountSection";

export default function BlogDetails() {
  return (
    <main>
      <BlogDetailsHeader />
      <BlogPost />
      <OpenAccountSection />
      <RelatedArticle />
    </main>
  );
}
