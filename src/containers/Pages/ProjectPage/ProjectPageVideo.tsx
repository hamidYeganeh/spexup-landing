// components
import { Video } from "@/components/common/Video";
// types
import type { FC } from "react";
import type { IProject } from "@/types/projects.types";
import Image from "next/image";
import { getMedia } from "@/api/api";

interface IProjectPageVideoProps {
  data: IProject;
}

export const ProjectPageVideo: FC<IProjectPageVideoProps> = (props) => {
  const { data } = props;
  return (
    <section className="mt-4 w-full">
      <Video
        src="/videos/_mock/random.mp4"
        poster={getMedia(data?.slides?.[0])}
      />
    </section>
  );
};
