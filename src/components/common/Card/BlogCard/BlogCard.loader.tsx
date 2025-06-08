import { Skeleton } from "@/components/ui/Skeleton";

export const BlogCardLoader = () => {
  return (
    <div className="flex h-[412px] w-full max-w-[429px] flex-col gap-4 rounded bg-muted-foreground p-4">
      <Skeleton className="h-[208px] w-full" />

      <Skeleton className="h-8 w-full" />

      <div className="flex w-full flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-2">
          <Skeleton className="size-8 rounded-full" />
          <Skeleton className="h-4 w-16" />
        </div>
        <Skeleton className="h-4 w-12" />
      </div>
      <Skeleton className="h-8 w-16" />
    </div>
  );
};

export const BlogStretchedCardLoader = () => {
  return (
    <div className="flex h-48 w-full max-w-[var(--container)] flex-col gap-4 rounded bg-muted-foreground p-4">
      <Skeleton className="size-8 w-16" />

      <Skeleton className="h-12 w-full" />

      <div className="flex w-full flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-2">
          <Skeleton className="size-8 rounded-full" />
          <Skeleton className="h-4 w-16" />
        </div>
        <Skeleton className="h-4 w-12" />
      </div>
    </div>
  );
};
