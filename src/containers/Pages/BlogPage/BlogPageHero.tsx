import { getMedia } from "@/api/api";
import { Container } from "@/components/common/Container";
import { Badge } from "@/components/ui/Badge";
import { Title } from "@/components/ui/Title";
import { IBlog } from "@/types/blogs.types";
import Image from "next/image";
import { FC } from "react";

interface IBlogPageHeroProps {
  data: IBlog;
}

export const BlogPageHero: FC<IBlogPageHeroProps> = (props) => {
  const { data } = props;
  return (
    <section className="relative h-full max-h-[758px] w-full">
      <div className="bg-dark-gradient absolute bottom-0 z-10 h-80 w-full"></div>
      <Image
        src={getMedia(data?.heroImage)}
        alt={data?.title}
        width={1440}
        height={768}
        className="h-auto max-h-[758px] w-full object-cover"
      />
      <div className="absolute bottom-4 z-20 w-full">
        <Container className="relative pb-4">
          <div className="flex w-full flex-col items-start gap-8">
            <Badge variant={"ghost"}>{data?.category?.title}</Badge>
            <Title order="h1" className="text-primary-lighter">
              {data?.title}
            </Title>
          </div>
        </Container>
      </div>
    </section>
  );
};
