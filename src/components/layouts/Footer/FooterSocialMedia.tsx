// components
import { Icon } from "@/components/common/Icon";
import { Button } from "@/components/ui/Button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/Tooltip";
import Link from "next/link";
// config
import { SOCIAL_MEDIA } from "@/config";

export const FooterSocialMedia = () => {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center gap-2">
      <TooltipProvider>
        {SOCIAL_MEDIA.map((media) => (
          <Tooltip key={media.id}>
            <TooltipTrigger asChild>
              <Link href={media.link!} target="_blank">
                <Button variant={"standard"} size={"icon"}>
                  <Icon name={media.icon} />
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <Link
                href={media.link!}
                target="_blank"
                className="text-sm font-semibold"
              >
                {media.title}
              </Link>
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </div>
  );
};
