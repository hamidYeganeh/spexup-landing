// components
import { Container } from "@/components/common/Container";
// sections
import {
  HomePageBlogsCards,
  HomePageBlogsTitles,
} from "@/containers/Sections/HomePage";
// types
import type { IBlogs } from "@/types/blogs.types";
import type { FC } from "react";

interface IHomePageBlogsProps {
  data: IBlogs;
}

export const HomePageBlogs: FC<IHomePageBlogsProps> = (props) => {
  const { data } = props;

  if (!data?.data) return <></>;

  return (
    <section className="w-full">
      <Container>
        <HomePageBlogsTitles />
        <HomePageBlogsCards data={data} />
      </Container>
    </section>
  );
};
