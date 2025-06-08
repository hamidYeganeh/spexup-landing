import { Button } from "../Button";
import { Input } from "./Input";

export const HeroInput = () => {
  return (
    <div className="relative max-w-sm">
      <Input variant={"outlined"} placeholder="Enter your email" />
      <Button
        variant={"standard"}
        className="absolute right-2 top-2 h-10 rounded-xl"
      >
        SEND EMAIL
      </Button>
    </div>
  );
};
