import React from "react";
import { Box } from "@mui/material";
import { Grid, Typography } from "@mui/material";
import { useThemePalette } from "../../Theme/useThemePalatte";

export default function CertificatesCard({ data }) {
  const { blackTwo } = useThemePalette();
  const { imgSrc, title, companyName } = data;

  return (
    <>
      <Grid item lg={3} md={4} sm={6} xs={8}>
        <Box
          width={{ sm: "100%", md: "272px" }}
          boxShadow="0 3px 6px 0 rgba(0, 0, 0, 0.16)"
          borderRadius="13.3px"
          bgcolor="info.main"
          margin="auto"
        >
          <Box>
            <img src={imgSrc} alt="" className="w-100 CertificatesCard-img" />
          </Box>
          <Box px="1rem">
            <Typography fontSize="19px" fontWeight="600" pt="1.5rem">
              {title}
            </Typography>
            <Typography color={blackTwo} paddingY="1.5rem">
              {companyName}
            </Typography>
          </Box>
        </Box>
      </Grid>
    </>
  );
}
