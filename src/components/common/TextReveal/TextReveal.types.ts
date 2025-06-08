import { ReactNode } from "react";

export interface ITextRevealProps {
  children: string;
}
export interface ITextRevealWordProps {
  children: ReactNode;
  progress: any;
  range: [number, number];
}
