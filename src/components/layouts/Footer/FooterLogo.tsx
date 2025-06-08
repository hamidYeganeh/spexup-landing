import Image from "next/image";

export const FooterLogo = () => {
  return (
    <div className="">
      <Image
        src={"/images/logo/logo-white.png"}
        alt="SPEX LOGO"
        width={101}
        height={24}
      />
    </div>
  );
};
