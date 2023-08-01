import { BlogHeader } from "@/components/blog/blog-header/BlogHeader";
import { LatestBlog } from "@/components/blog/latest-blog/LatestBlog";

export const metadata = {
  title: "Blog | GOBANKQ-Banking & Finance",
  description: "NextJs Template",
};

export default function Blog() {
  return (
    <main>
      <BlogHeader />
      <LatestBlog />
    </main>
  );
}
