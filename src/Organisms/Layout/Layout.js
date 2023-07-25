import { Stack } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children, bg = "white" }) {
  return (
    <Box bgcolor={bg} width="100%">
      <Container maxWidth="lg">
        <Navbar />
        {children}
        <Footer />
      </Container>
    </Box>
  );
}
