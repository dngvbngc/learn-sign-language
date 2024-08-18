import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme(
  { config },
  {
    colors: {
      brand: {
        100: "#ADD0B3",
        200: "#79ad94",
      },
    },
  }
);

export default theme;
