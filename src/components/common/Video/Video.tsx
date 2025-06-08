"use client";

// types
import { useRef, type FC } from "react";
import type { IVideoProps } from "./Video.types";
// lib
import { cn } from "@/lib/utils";
// components
import Image from "next/image";
import { Icon } from "../Icon";
import { Modal, ModalBody, ModalContent, ModalTrigger } from "../AnimatedModal";

export const Video: FC<IVideoProps> = (props) => {
  const { src, autoPlay, poster, loop, muted, ...otherProps } = props;

  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <div className={cn("relative h-screen w-full", "max-md:h-72")}>
      <div className="relative flex h-full w-full items-center justify-center">
        <Image
          src={poster!}
          alt={src!}
          width={1440}
          height={758}
          className="h-full w-full"
        />
        <div className="absolute inset-0 m-auto flex h-full w-full items-center justify-center bg-black/40">
          <Modal>
            <ModalTrigger>
              <div className="cursor-pointer rounded-full transition-all duration-200 hover:scale-110 hover:shadow-xl">
                <Image
                  src={
                    "/images/curve-texts/spexup-digital-creative-curve-textpng.png"
                  }
                  alt=""
                  width={176}
                  height={176}
                  className={cn(
                    "aspect-square w-[176px] animate-spin-slow",
                    "max-md:w-[120px]",
                  )}
                />
                <div
                  className={cn(
                    "bg-blur absolute inset-0 m-auto flex aspect-square w-[114px] items-center justify-center rounded-full bg-black/25",
                    "max-md:w-[85px]",
                  )}
                >
                  <Icon
                    name="spexup-play"
                    className={cn("text-3xl text-foreground", "max-md:text-xl")}
                  />
                </div>
              </div>
            </ModalTrigger>
            <ModalBody>
              <ModalContent className="">
                <video
                  ref={videoRef}
                  autoPlay={autoPlay}
                  muted={muted}
                  loop={loop}
                  controls
                  className="h-full max-h-[500px] w-full"
                  {...otherProps}
                >
                  <source src={src} type="video/MP4" />
                </video>
              </ModalContent>
            </ModalBody>
          </Modal>
        </div>
      </div>
    </div>
  );
};
