"use client";

import { Button } from "@/components/ui/Button";
import { NAVBAR } from "@/config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export const HeaderNavbar = () => {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(0);
  return (
    <nav className="h-full w-fit px-4 max-md:invisible">
      {NAVBAR.map(({ id, link, title }) => (
        <Link href={link}>
          <Button
            variant={"ghosted"}
            className={cn("relative z-10 rounded")}
            onClick={() => setActiveTab(id)}
          >
            {(activeTab === id || pathname === link) && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 -z-10 rounded-full bg-primary-dark",
                )}
                onHoverStart={() => setActiveTab(id)}
              />
            )}
            {title}
          </Button>
        </Link>
      ))}
    </nav>
  );
};
