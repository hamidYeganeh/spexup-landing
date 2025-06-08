export type TBoxRevealDirections = "toLeft" | "toRight" | "toUp" | "toDown";

export interface IBoxRevealProps {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  boxColor?: string;
  duration?: number;
  revealDirection?: TBoxRevealDirections;
}
