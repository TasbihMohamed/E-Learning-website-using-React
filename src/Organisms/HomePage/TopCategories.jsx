/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import FrequentSkelton from "../../Atoms/SharedComponents/FrequentSkelton";
import TopCategoriesSubjects from "../../Molecules/Home/TopCategoriesSubjects";
import TopCategoriesCards from "../../Molecules/Home/TopCategoriesCards";
import { Box, Button } from "@mui/material";
import Loading from "../../Atoms/SharedComponents/Loading";
import { Stack } from "@mui/system";

export default function TopCategories({
  loading,
  isActive,
  setIsActive,
  finalData,
  categoriesSubjects,
  handleClick,
}) {
  return (
    <FrequentSkelton
      title="Top Categories"
      subtitle="Learn the latest skills to reach your professional goals"
    >
      {loading ? (
        <Loading />
      ) : (
        <Stack alignItems="center" justifyContent="center" width="100%">
          {/* ------------------------------------------------- Slider Shows subjects name ---------------------------------------- */}
          <TopCategoriesSubjects
            setIsActive={setIsActive}
            isActive={isActive}
            categoriesSubjects={categoriesSubjects}
            handleClick={handleClick}
          />
          {/* --------------------------------------------- Card shows courses details ---------------------------------------- */}
          <TopCategoriesCards finalData={finalData} />
          <Box>
            <Button
              variant="contained"
              sx={{ mb: "6.25rem", mt: "4rem" }}
              aria-label="view more courses"
            >
              View More Courses
            </Button>
          </Box>
        </Stack>
      )}
    </FrequentSkelton>
  );
}
