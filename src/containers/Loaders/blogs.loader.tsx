import {
  BlogCardLoader,
  BlogStretchedCardLoader,
} from "@/components/common/Card/BlogCard";
import { Container } from "@/components/common/Container";
import { Skeleton } from "@/components/ui/Skeleton";

export const BlogsLoader = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative w-full">
        <Skeleton className="h-[758px] w-full rounded-none" />
        <div className="bg-dark-gradient absolute bottom-0 z-10 h-80 w-full"></div>

        <div className="absolute -bottom-20 z-20 mx-auto flex w-full items-center justify-center">
          <BlogStretchedCardLoader />
        </div>
      </div>
      <Container className="mt-24">
        <div className="grid w-full grid-cols-3 gap-4">
          <BlogCardLoader />
          <BlogCardLoader />
          <BlogCardLoader />
          <BlogCardLoader />
          <BlogCardLoader />
          <BlogCardLoader />
        </div>
      </Container>
    </div>
  );
};
