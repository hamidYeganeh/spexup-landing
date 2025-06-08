import { Container } from "@/components/common/Container";
import { Skeleton } from "@/components/ui/Skeleton";

export default function ProjectsLoadingLoading() {
  return (
    <div className="mt-32">
      <Container className="flex flex-col gap-4">
        <div className="grid w-full grid-cols-2 items-stretch gap-4">
          <div className="flex flex-col gap-4">
            <Skeleton className="h-10 w-52" />
            <Skeleton className="h-36 w-full" />
          </div>
          <div className="flex flex-col gap-4">
            <Skeleton className="h-14 w-full" />
            <Skeleton className="h-14 w-full" />
            <Skeleton className="h-14 w-full" />
          </div>
        </div>
        <div className="h-[758px] w-full">
          <Skeleton className="h-[758px] w-full" />
        </div>
      </Container>
    </div>
  );
}
