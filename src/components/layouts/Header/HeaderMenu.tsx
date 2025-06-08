// components
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/Sheet";
import { Fade as Hamburger } from "hamburger-react";
import { HeaderLogo } from "./HeaderLogo";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/common/Icon";
// lib
import { useState } from "react";
// configs
import { NAVBAR, SOCIAL_MEDIA } from "@/config";

export const HeaderMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  function handleToggleMenu() {
    setOpenMenu(!openMenu);
  }

  return (
    <div className="hidden max-md:block">
      <Sheet open={openMenu} defaultOpen>
        <SheetTrigger asChild className="z-header">
          <div className="z-header" onClick={handleToggleMenu}>
            <Hamburger size={24} toggled={openMenu} hideOutline />
          </div>
        </SheetTrigger>
        <SheetContent
          side={"top"}
          className="flex flex-col justify-between bg-background-paper"
        >
          <div className="flex h-full flex-col items-center gap-4">
            <SheetHeader className="w-full">
              <div className="flex h-[56px] w-full flex-row items-center justify-between rounded border border-border bg-transparent p-2">
                <HeaderLogo />

                <div className="flex-1" />

                <div className="z-header" onClick={handleToggleMenu}>
                  <Hamburger size={24} toggled={openMenu} hideOutline />
                </div>
              </div>
            </SheetHeader>
            <div className="flex w-full flex-col items-center gap-4 px-4">
              {NAVBAR.map((navItem) => (
                <Link
                  key={navItem.id}
                  href={navItem.link}
                  className="w-full rounded p-4 text-center hover:bg-primary-light"
                >
                  {navItem.title}
                </Link>
              ))}
            </div>
            <SheetFooter className="mt-auto">
              <div className="flex flex-row flex-wrap items-center justify-center gap-2">
                {SOCIAL_MEDIA.map((media) => (
                  <Link href={"/"} target="_blank">
                    <Button variant={"standard"} size={"icon"}>
                      <Icon name={media.icon} />
                    </Button>
                  </Link>
                ))}
              </div>
            </SheetFooter>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
