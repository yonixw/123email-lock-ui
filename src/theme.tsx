import { extendTheme, useColorModeValue } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const UltraTheme = extendTheme({
  semanticTokens: {
    colors: {
      error: "red.500",
      aaa: {
        default: "#0f0",
        _dark: "#f0f",
      },
    },
  },
});
