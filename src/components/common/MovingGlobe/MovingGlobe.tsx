import { cn } from "@/lib/utils";
import Image from "next/image";

export const MovingGlobe = () => {
  return (
    <div className="relative h-fit w-fit">
      <Image
        src={"/images/globe/moving-globe.png"}
        alt="Moving Globe"
        width={251}
        height={251}
        className="absolute inset-0 z-10 m-auto h-[251px] w-[251px]"
      />
      <div className={cn("z-0 rounded-full bg-[#C66BF9] opacity-20 blur-2xl")}>
        <Image
          src={"/images/globe/moving-globe-shadow.png"}
          alt="Moving Globe Shadow"
          width={325}
          height={325}
        />
      </div>
    </div>
  );
};
