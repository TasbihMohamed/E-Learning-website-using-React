import { Box, Container, Grid, Stack } from "@mui/material";
import React from "react";
import Layout from "../../Organisms/Layout/Layout";

export default function VideoSkeleton({ children }) {
  return (
    <Layout>
      <Box sx={{ minHeight: "850px",  backgroundColor: "#f3f3f3", py: "5%" }}>
        <Container maxWidth="lg" >
          <Grid container spacing={2}>
            {children}
          </Grid>
        </Container>
      </Box>
    </Layout>

  );
}
