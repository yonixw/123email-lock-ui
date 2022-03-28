import { extendTheme, useColorModeValue } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

// https://chakra-ui.com/docs/styled-system/theming/theme
// https://www.quackit.com/html/codes/color/color-tester.cfm?colorname=tomato

export const UltraTheme = extendTheme({
  colors: {
    brand: {
      50: "sandybrown",
      100: "sandybrown",
      200: "coral",
      300: "coral",
      400: "tomato",
      500: "tomato",
      600: "tomato",
      700: "orangered",
      800: "orangered",
      900: "orangered",
    },
  },
  semanticTokens: {
    colors: {
      boxbg: {
        default: "white.700",
        _dark: "grey.700",
      },
    },
  },
});
