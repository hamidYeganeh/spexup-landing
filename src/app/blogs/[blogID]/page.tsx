import { getBlog } from "@/api/blogs.api";
import {
  BlogPageContent,
  BlogPageHero,
  BlogPageRelatedPosts,
} from "@/containers/Pages/BlogPage";
import { IBlogQuery } from "@/types/blogs.types";
import { IPageProps } from "@/types/general.types";

export default async function BlogsDetailPage(ctx: IPageProps<IBlogQuery>) {
  const { params } = ctx;
  const { blogID } = params;

  const blog = await getBlog({ blogID });

  return (
    <main>
      <BlogPageHero data={blog!} />
      <BlogPageContent data={blog!} />
      <BlogPageRelatedPosts data={blog!} />
    </main>
  );
}
