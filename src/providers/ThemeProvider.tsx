// lib
import { ThemeProvider as NextThemesProvider } from "next-themes";
// types
import type { ThemeProviderProps } from "next-themes/dist/types";
import type { FC } from "react";

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const { children, ...otherProps } = props;
  return (
    <NextThemesProvider
      attribute="class"
      forcedTheme="dark"
      defaultTheme="dark"
      {...otherProps}
    >
      {children}
    </NextThemesProvider>
  );
};
