import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import home from "../../Assets/Images/home.webp";
import CustomColoresTitle from "../../Atoms/SharedComponents/CustomColoresTitle";

export default function Home() {
  return (
    <>
      <Stack
        justifyContent="space-between"
        alignItems={{ lg: "center", xs: "flex-end" }}
        sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}
        // height="100vh"
      >
        {/* ------------------------------------ Home page content ---------------------- */}
        <Box
          sx={{
            mt: { lg: "9rem" },
            mb: { lg: "12.5rem" },
          }}
          width={{ lg: "560px" }}
        >
          {/* -------------------------------- custom colored title ------------------------- */}
          <CustomColoresTitle
            firstPart="Take The Next Step"
            secondPart="Toward Your Success"
            firstPartColor="primary.main"
            secondPartColor="secondary.main"
            fontSize="2.5rem"
            component="h1"
            variant="h4"
          />
          {/* ------------------------------ home page description --------------------------------- */}
          <Typography
            variant="subtitle2"
            sx={{ mt: "2rem", fontSize: "0.8125rem" }}
          >
            Join hundreds of learners from the middle-east alreadylearning on
            E-learning Platform ! We qualify you to be a highly competent
            programmer through a myriad of software development courses covering
            a variety of programming languages.
          </Typography>
        </Box>

        {/* -------------------------------------- Home Page Img ----------------------------------- */}
        <Box
          alignSelf={{ md: "self-start" }}
          width={{ lg: "540px", md: "550px", sm: "400px", xs: "300px" }}
          display={{ sm: "none", md: "block" }}
        >
          <img src={home} alt="Home" className="w-100" />
        </Box>
      </Stack>
    </>
  );
}
