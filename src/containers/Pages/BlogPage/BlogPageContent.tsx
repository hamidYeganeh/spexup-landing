// types
import type { FC } from "react";
import type { IBlog } from "@/types/blogs.types";
// components
import { Container } from "@/components/common/Container";
import { Avatar, AvatarFallback } from "@/components/ui/Avatar";
import { Text } from "@/components/ui/Text";
import { format } from "date-fns";
import { Badge } from "@/components/ui/Badge";
import { Heart } from "lucide-react";

interface IBlogPageContentProps {
  data: IBlog;
}

export const BlogPageContent: FC<IBlogPageContentProps> = (props) => {
  const { data } = props;
  return (
    <section className="rounded-b bg-accent-foreground">
      <Container>
        <div className="py-4">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-2">
              <Avatar className="size-8">
                <AvatarFallback>
                  {data?.writer?.username?.charAt(0).toLocaleUpperCase()}
                </AvatarFallback>
              </Avatar>
              <Text size={"sm"} weight={"semibold"} className="text-black">
                {data?.writer?.name}
              </Text>
            </div>

            <div className="flex flex-row items-center gap-2">
              <Text
                size={"sm"}
                weight={"semibold"}
                className="text-black"
              >{`${data?.readTime} min read`}</Text>
              <span className="text-black">.</span>
              <Text size={"sm"} weight={"semibold"} className="text-black">
                {format(data?.updatedAt, "MMMM dd, yyyy")}
              </Text>

              <Badge
                variant={"standard"}
                className="flex cursor-pointer flex-row items-center gap-1"
              >
                <Heart className="size-5 text-black" />
                {data?.likes}
              </Badge>
            </div>
          </div>
          <div
            className="text-black"
            dangerouslySetInnerHTML={{ __html: data?.content }}
          />
        </div>
      </Container>
    </section>
  );
};
