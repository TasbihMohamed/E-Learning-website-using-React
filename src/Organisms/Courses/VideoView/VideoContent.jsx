import { Grid, Box, Typography } from "@mui/material";
import React from "react";
import ChapterVideo from "../../../Atoms/SharedComponents/ChapterVideo";

export default function VideoContent({ sessionChossen }) {
  return (
    <>
      <Box sx={{ height: "12%" }}>
        <Typography
          sx={{ color: "rgb(52, 52, 52)", fontWeight: 600, fontSize: "1.6rem" }}
        >
          {sessionChossen?.text}
        </Typography>
      </Box>
      <Box sx={{ my: 2, height: "88%", width: "100%" }}>
        <ChapterVideo
          closed={sessionChossen.is_blocked}
          sessionChossen={sessionChossen}
        />
      </Box>
    </>
  );
}
