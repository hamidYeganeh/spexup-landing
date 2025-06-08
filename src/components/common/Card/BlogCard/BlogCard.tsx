// types
import type { FC } from "react";
import type { IBlogCardProps } from "./BlogCard.types";
// components
import { Box } from "@/components/common/Box";
import Image from "next/image";
import { Text } from "@/components/ui/Text";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";
import { Avatar, AvatarFallback } from "@/components/ui/Avatar";
import { Icon } from "../../Icon";
// services
import { getMedia } from "@/api/api";
// utils
import { format } from "date-fns";

export const BlogCard: FC<IBlogCardProps> = (props) => {
  const { data } = props;
  const link = `/blogs/${data?._id}`;

  return (
    <div className="h-full max-h-[412px] w-full max-w-[429px]">
      <Box className="w-full" highlightClassName="p-4 flex flex-col gap-4">
        <div className="w-full">
          <Link href={link}>
            <Image
              src={getMedia(data?.heroImage)}
              alt={data?.title}
              width={397}
              height={208}
              className="h-auto max-h-[208px] w-full max-w-[397px] rounded"
            />
          </Link>
        </div>
        <Link href={link}>
          <Text
            size={"md"}
            weight={"extrabold"}
            className="line-clamp-1 text-primary-lighter"
          >
            {data?.title}
          </Text>
        </Link>
        <div className="flex w-full flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarFallback className="text-sm text-black">
                {data?.writer?.name.charAt(0).toLocaleUpperCase()}
              </AvatarFallback>
            </Avatar>
            <Text size={"sm"} weight={"semibold"} className="text-foreground">
              {data?.writer?.name}
            </Text>
          </div>
          <Text size={"sm"} weight={"semibold"} className="text-foreground">
            {format(data?.updatedAt, "MMMM dd, yyyy")}
          </Text>
        </div>
        <div className="flex w-full flex-row items-center justify-between">
          <Badge variant="ghost">{data?.category?.title}</Badge>

          <Link href={link} className="flex size-8 items-center justify-center">
            <Icon name="spexup-arrow_up-right" className="text-2xl" />
          </Link>
        </div>
      </Box>
    </div>
  );
};
