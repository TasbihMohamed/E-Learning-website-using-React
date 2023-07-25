import { Box, Container, Stack } from "@mui/material";
import React from "react";
import { useThemePalette } from "../../Theme/useThemePalatte";
import PageHeaderTitle from "./PageHeaderTitle";

export default function FrequentSkelton({
  children,
  title,
  subtitle,
  bg = "white",
  ...rest
}) {
  return (
    <>
      <Box sx={{ bgcolor: bg, width: "100%" }} {...rest}>
        <Stack alignItems="center" justifyContent="center">
          <PageHeaderTitle title={title} subtitle={subtitle} />
          {children}
        </Stack>
      </Box>
    </>
  );
}
