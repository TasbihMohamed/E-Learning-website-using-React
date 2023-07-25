/* eslint-disable react-hooks/exhaustive-deps */
import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CoursesCard from "../../Atoms/SharedComponents/CoursesCard";

export default function TopCategoriesCards({ isActive, error, finalData }) {
  return (
    <Stack
      width="100%"
      flexDirection={{ sm: "column", md: "row" }}
      justifyContent="center"
      gap={2}
      alignItems="center"
      marginTop="2rem"
      flexWrap="wrap"
    >
      {/* -------------------------------- Maping into final data to display course details ------------------------ */}
      {finalData?.map((cardData, i) => (
        <Stack key={i} width={{ xs: "100%", md: "272px" }}>
          <CoursesCard data={cardData} />
        </Stack>
      ))}
    </Stack>
  );
}
