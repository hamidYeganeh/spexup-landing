import { ComponentPropsWithoutRef } from "react";

export interface IRateProps {
  value: number;
  slots: number;
  onChange?: () => void;
  readonly?: boolean;
}
