import { Box } from "@/components/common/Box";
import { Container } from "@/components/common/Container";
import { FooterLogo } from "./FooterLogo";
import { FooterItems } from "./FooterItems";
import { FooterSocialMedia } from "./FooterSocialMedia";
import { FooterCopyright } from "./FooterCopyright";

export const Footer = () => {
  return (
    <footer className="my-8 w-full">
      <Container>
        <Box highlightClassName="py-8">
          <div className="flex flex-col items-center gap-8">
            <FooterLogo />
            <FooterItems />
            <FooterSocialMedia />
            <FooterCopyright />
          </div>
        </Box>
      </Container>
    </footer>
  );
};
