// components
import { Title } from "@/components/ui/Title";
import { format } from "date-fns";

export const FooterCopyright = () => {
  return (
    <div>
      <Title order="h6">{format(new Date().toISOString(), "yyyy")}</Title>
    </div>
  );
};
