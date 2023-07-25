import { Box, Container, Stack } from "@mui/material";
import React from "react";
import img from "../../Assets/Images/Group248.webp";
import LearningBenefitsContent from "../../Molecules/Home/LearningBenefitsContent";

export default function LearningBenfits() {
  return (
    <>
      <Container>
        <Stack
          sx={{
            flexDirection: { xs: "column", md: "row" },
            my: { xs: "5rem" },
          }}
          justifyContent="space-between"
          alignItems="center"
          marginY="2.5rem"
          // mx={{ lg: '56px' }}
        >
          {/* -------------------------------------- Learning Benefits img ------------------------------ */}
          <Box width={{ lg: "488px", md: "400px" }}>
            <img src={img} className="w-100" alt="" />
          </Box>
          {/* ------------------------------------- Learning Benefits Content ----------------------------*/}
          <Box ml={{ lg: "auto", md: "20px" }}>
            <LearningBenefitsContent />
          </Box>
        </Stack>
      </Container>
    </>
  );
}
