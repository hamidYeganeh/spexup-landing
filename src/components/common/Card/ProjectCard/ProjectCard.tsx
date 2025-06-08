// types
import type { FC } from "react";
import type { IProjectCardProps } from "./ProjectCard.types";
// components
import { Title } from "@/components/ui/Title";
import { Badge } from "@/components/ui/Badge/Badge";
// lib
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { getMedia } from "@/api/api";

export const ProjectCard: FC<IProjectCardProps> = (props) => {
  const { project } = props;
  const { _id, name, workArea, slides } = project;

  const link = `/projects/${_id}`;

  return (
    <div className={cn("relative h-[472px] w-80 overflow-hidden rounded p-4")}>
      <div className="absolute inset-0 -z-10 m-auto h-full w-full">
        <Image
          src={getMedia(slides[0])}
          alt={name}
          width={320}
          height={472}
          className="h-full w-full object-cover"
        />
      </div>

      <Link href={link}>
        <div className="z-10 flex h-full w-full flex-col items-start justify-start gap-2 text-black/50">
          <Badge variant={"ghost"}>{workArea}</Badge>

          <Title order="h4" className="font-extrabold text-foreground">
            <Link href={link}>{name}</Link>
          </Title>
        </div>
      </Link>
    </div>
  );
};
