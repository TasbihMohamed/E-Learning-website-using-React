import React from "react";

import PlayButton from "../../Assets/Images/PlayButton.png";
import { Box, Button, Stack, Typography } from "@mui/material";
// import TestVideoImg from "../../Assets/Images/TestVideoImg.png";
import Vimeo from "@u-wave/react-vimeo";

export default function ChapterVideo({ closed, sessionChossen }) {
console.log("in  ChapterVideo" ,sessionChossen);
  return (
    <Stack sx={{ width: "100%", 
    //maxWidth: "851px",
   // maxHeight: "479px",
    position: "relative",  height: "100%", justifyContent: "center", alignItems: "center", }} >

      <Vimeo
      width='500px'
        video={sessionChossen?.video_url}
        // video="https://vimeo.com/3155182"
        autoplay={false}
        loop
        muted={false}
        // paused={true}
      // controls={false}
      />

      <Box sx={{ position: "absolute", justifyContent: "center", alignItems: "center", }} >

        {/* <Button>
          <img src={PlayButton} />
        </Button> */}
      </Box>
      {closed ? (
        <Box sx={{ position: "absolute", background: "rgba(0,0,0,.65)", width: "100%", height: "100%", }}>
          <Box sx={{ position: "absolute", top: "37.67%", left: "32%", transform: 'translate("-50%","-50%")', textAlign: "center", }}>
            <Typography sx={{ my: 1, letterSpacing: "0.12rem", color: "white", fontSize: "1.1rem", fontWeight: 600, }}>
              Unlock this session and enjoy it
            </Typography>
            <Button variant="contained" sx={{ my: 1, px: "15%" }}> Enroll Chapter</Button>
          </Box>
        </Box>
      ) : null}

    




    </Stack>
  );
}
