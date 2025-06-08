// types
import { cloneElement, createElement, type FC } from "react";
import type { IServiceCardProps } from "./ServiceCard.types";
// lib
import { cn } from "@/lib/utils";
// components
import { Title } from "@/components/ui/Title";
import { Text } from "@/components/ui/Text";
import { Icon } from "@/components/common/Icon";

export const ServiceCard: FC<IServiceCardProps> = (props) => {
  const { service } = props;
  const { title, subtitle, height, icon } = service;

  return (
    <div>
      <div
        key={title}
        className={cn(
          "group/card w-full max-w-72 rounded-2xl bg-primary-lighter will-change-transform *:transition-all *:duration-700 max-lg:max-w-full",
          "relative z-30 overflow-hidden after:absolute after:bottom-0 after:left-5 after:-z-20 after:h-1 after:w-1 after:translate-y-full after:rounded-md after:bg-primary after:transition-all after:duration-700 hover:fill-foreground hover:text-foreground after:hover:scale-[300] after:hover:transition-all after:hover:duration-700",
        )}
        style={{ height: `${height}px` }}
      >
        <div className="z-40 flex h-full w-full flex-col items-start justify-between p-4 max-md:p-2">
          <div className="flex w-full flex-row items-center justify-between">
            <div className="flex size-10 items-center justify-center rounded-full bg-primary-lighter bg-white text-primary duration-700 group-hover/card:bg-primary-dark">
              <Icon
                name={icon}
                className="text-xl text-primary duration-700 group-hover/card:text-white"
              />
            </div>
          </div>

          <div>
            <Title
              order="h4"
              className="break-all font-extrabold text-primary group-hover/card:text-white max-md:text-lg"
            >
              {title}
            </Title>
            {subtitle && (
              <Text
                size={"sm"}
                weight={"bold"}
                className="text-black opacity-50 group-hover/card:text-white max-md:text-xs"
              >
                {subtitle}
              </Text>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
