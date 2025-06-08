import { Text } from "@/components/ui/Text";
import { NAVBAR } from "@/config";
import Link from "next/link";

export const FooterItems = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-8 max-md:flex-col">
      {NAVBAR.map((item) => (
        <Link href={item.link} key={item.id}>
          <Text
            size={"md"}
            weight={"black"}
            className="text-foreground transition-all duration-200 hover:text-primary"
          >
            {item.title}
          </Text>
        </Link>
      ))}
    </div>
  );
};
