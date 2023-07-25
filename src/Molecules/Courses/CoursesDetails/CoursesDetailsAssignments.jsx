import { Button, Container, Typography } from "@mui/material";
import React from "react";
import CoursesDetailsBoxTitle from "../../../Atoms/SharedComponents/CoursesDetailsBoxTitle";
import CoursesDetailsList from "./CoursesDetailsList";
import learningIcon from "../../../Assets/Images/learningIcon.svg";
import lockIcon from "../../../Assets/Images/lockIcon.svg";
import { Box, Stack } from "@mui/system";
import { useThemePalette } from "../../../Theme/useThemePalatte";

export default function CoursesDetailsAssignments({ studentCoursesDetails }) {
  const { primaryColor } = useThemePalette();

  return (
    <Container id="Assignments" sx={{ bgcolor: "#fff" }}>
      <Stack pt="16px">
        <CoursesDetailsBoxTitle title="Assignments" />
        {studentCoursesDetails?.classified_product?.assignments?.length > 0 ? (
          <>
            {studentCoursesDetails?.classified_product?.assignments?.map(
              (quiz, i) => (
                <CoursesDetailsList
                  data={quiz}
                  titleIcon={learningIcon}
                  listTitle={`Assignment ${i + 1}`}
                  descriptionIcon={lockIcon}
                />
              )
            )}
            <Box Box alignSelf="center" pb="32px">
              <Button
                variant="outlined"
                sx={{
                  width: "100%",
                  px: { md: "80px" },
                  border: `1.66px solid ${primaryColor}`,
                  "&:hover": {
                    border: `1.66px solid ${primaryColor}`,
                  },
                }}
              >
                View All Assignments
              </Button>
            </Box>
          </>
        ) : (
          <Stack width="100%" alignItems="center" py="3rem">
            <Typography color={"error.main"}>No Assignments Yet</Typography>
          </Stack>
        )}
      </Stack>
    </Container>
  );
}
