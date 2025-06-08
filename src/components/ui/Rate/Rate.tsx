import { FC } from "react";
import { IRateProps } from "./Rate.types";
import { cn } from "@/lib/utils";

export const Rate: FC<IRateProps> = (props) => {
  const { value, readonly, slots = 5 } = props;

  const isActive = (index: number) => index <= value;

  return (
    <div className="flex flex-row items-center gap-1">
      {Array.from(Array(slots))?.map((_, index) => (
        <svg
          key={index}
          width="18"
          height="17"
          viewBox="0 0 18 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.9233 4.08231L9.86087 0.492111C9.47792 -0.174497 8.51734 -0.177687 8.12998 0.486363L5.95364 4.21724C5.66538 4.7114 5.1793 5.05846 4.61831 5.17065L1.6446 5.7654C0.874413 5.91943 0.574305 6.86052 1.11312 7.43199L3.26395 9.71317C3.72388 10.201 3.9088 10.8868 3.75645 11.5397L2.78292 15.7119C2.5828 16.5696 3.5089 17.2485 4.26657 16.7995L7.98078 14.5984C8.60947 14.2259 9.3913 14.2259 10.02 14.5984L13.7342 16.7995C14.4919 17.2485 15.418 16.5696 15.2179 15.7119L14.2358 11.5031C14.0882 10.8705 14.257 10.2055 14.6887 9.71994L16.8421 7.29727C17.3552 6.72004 17.0482 5.80379 16.2908 5.65233L13.2653 5.04722C12.6998 4.93412 12.2106 4.58239 11.9233 4.08231Z"
            className={cn(isActive(index + 1) ? "fill-primary" : "fill-accent")}
            fill={"var(--primary-lighter)"}
          />
        </svg>
      ))}
    </div>
  );
};
