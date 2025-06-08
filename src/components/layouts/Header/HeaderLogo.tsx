import { paths } from "@/config";
import Image from "next/image";
import Link from "next/link";

export const HeaderLogo = () => {
  return (
    <Link href={paths.home} className="h-auto w-40">
      <Image
        src={"/images/logo/logo-white.png"}
        alt="SPEX LOGO"
        width={93}
        height={29}
        className=""
      />
    </Link>
  );
};
