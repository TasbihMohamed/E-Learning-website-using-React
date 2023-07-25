import { Box, Button, Grid, Stack } from "@mui/material";
import React from "react";
import { useState } from "react";
import FrequentSkelton from "../../Atoms/SharedComponents/FrequentSkelton";
import googleCard from "../../Assets/Images/GoogleCard.webp";
import ibmCard from "../../Assets/Images/ibmCard.webp";
import googleCloudCard from "../../Assets/Images/googleCloudCard.webp";
import CertificatesCard from "../../Atoms/SharedComponents/CertificatesCard";
import PopularCertificatesSlider from "../../Molecules/Home/PopularCertificatesSlider";

export default function PopularCertificates() {
  const [isActive, setIsActive] = useState(0);

  // -------------------------- Slider title ----------------------------
  const certificates = [
    { id: 0, title: "Master Track Certificates" },
    { id: 1, title: "IT Certificates" },
    { id: 2, title: "University Certificates" },
    { id: 3, title: "Master Certificates" },
    { id: 4, title: "IT Certificates" },
    { id: 5, title: "Master Certificates" },
    { id: 6, title: "IT Certificates" },
  ];
  // ------------------------------ Card Content ---------------------------
  const cardContents = [
    {
      imgSrc: googleCard,
      title: "Google IT Support Professional Certificate",
      companyName: "Google",
    },
    {
      imgSrc: ibmCard,
      title: "IBM Cybersecurity Analyst Professional Certificate",
      companyName: "IBM",
    },
    {
      imgSrc: googleCloudCard,
      title: "Cloud Security Engineer Professional Certificate",
      companyName: "Google Cloud",
    },
    {
      imgSrc: ibmCard,
      title: "IBM Cybersecurity Analyst Professional Certificate",
      companyName: "IBM",
    },
  ];

  return (
    <>
      <FrequentSkelton
        title="Popular Certificates"
        subtitle="Break into a new field. No prior experience necessary to get started"
      >
        <PopularCertificatesSlider
          setIsActive={setIsActive}
          isActive={isActive}
          certificates={certificates}
        />
        <Stack
          width="100%"
          my={4}
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          gap={5}
          flexDirection={{ sm: "column", md: "row" }}
        >
          {/* -------------------------------- Maping on card contents to display card details --------------------------- */}
          {cardContents.map((content, i) => (
            <Box width={{ sm: "100%", md: "272px" }}>
              <CertificatesCard key={i} data={content} />
            </Box>
          ))}
        </Stack>
        <Button
          variant="contained"
          sx={{ mb: "6.25rem", mt: "4rem" }}
          aria-label="view more"
        >
          View More Certificates
        </Button>
      </FrequentSkelton>
    </>
  );
}
