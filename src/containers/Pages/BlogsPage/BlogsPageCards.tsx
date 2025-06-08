// components
import { BlogCard } from "@/components/common/Card/BlogCard";
import { Container } from "@/components/common/Container";
// types
import type { FC } from "react";
import type { IBlogs } from "@/types/blogs.types";

interface IBlogsPageCardsProps {
  data: IBlogs;
}

export const BlogsPageCards: FC<IBlogsPageCardsProps> = (props) => {
  const { data } = props;
  return (
    <section className="mt-28 mb-12 w-full">
      <Container>
        <div className="grid w-full grid-cols-3 items-start gap-4 max-lg:grid-cols-2 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:items-center">
          {data?.data?.map((blog) => <BlogCard key={blog._id} data={blog} />)}
        </div>
      </Container>
    </section>
  );
};
