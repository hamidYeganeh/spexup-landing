// types
import type { FC } from "react";
import type { IBlogCardStretchedProps } from "./BlogCard.types";
// components
import { Box } from "../../Box";
import { Badge } from "@/components/ui/Badge";
import { Title } from "@/components/ui/Title";
import { Text } from "@/components/ui/Text";
import { Avatar, AvatarFallback } from "@/components/ui/Avatar";
import { format } from "date-fns";

export const BlogCardStretched: FC<IBlogCardStretchedProps> = (props) => {
  const { data } = props;
  return (
    <div className="w-full">
      <Box className="w-full" highlightClassName="p-4">
        <div className="flex w-full flex-col items-start gap-4">
          <Badge variant={"ghost"}>{data?.category?.title}</Badge>
          <Title order="h2" className="text-primary-lighter">
            {data?.title}
          </Title>

          <div className="flex w-full flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="text-black">
                  {data?.writer?.name.charAt(0).toLocaleUpperCase()}
                </AvatarFallback>
              </Avatar>
              <Text
                size={"sm"}
                weight={"semibold"}
                className="text-text-muted-foreground"
              >
                {data?.writer?.name}
              </Text>
            </div>

            <Text size={"sm"} className="text-muted-foreground">
              {data?.updatedAt ? format(data?.updatedAt, "MMMM dd, yyyy") : "-"}
            </Text>
          </div>
        </div>
      </Box>
    </div>
  );
};
