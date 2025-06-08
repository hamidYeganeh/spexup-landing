// components
import { getBlogs } from "@/api/blogs.api";
import { BlogsPageCards, BlogsPageSlider } from "@/containers/Pages/BlogsPage";

export default async function BlogsPage() {
  const blogs = await getBlogs({ page: 1, limit: 10 });

  return (
    <main>
      <BlogsPageSlider data={blogs} />
      <BlogsPageCards data={blogs} />
    </main>
  );
}
