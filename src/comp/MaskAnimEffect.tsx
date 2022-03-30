import { Box, Text } from "@chakra-ui/react";
import React from "react";
import "./MaskAnimEffect.css";

export function MaskAnimeEffect(props: { fontSize?: string }) {
  return (
    <Box
      as="div"
      display="inline-block"
      overflowY="clip"
      border="solid 1px transparent"
      width={props.fontSize || "12pt"}
      height={props.fontSize || "12pt"}
      fontSize={props.fontSize || "12pt"}
    >
      <Box as="div" className="roll" textAlign="center">
        <Text as="code">0?1?2?3?4?5?6?7?8?9?0?1?2?3?4?5?6?7?8?9</Text>
      </Box>
    </Box>
  );
}
