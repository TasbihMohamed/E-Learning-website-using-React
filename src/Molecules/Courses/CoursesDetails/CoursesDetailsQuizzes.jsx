import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import CoursesDetailsBoxTitle from "../../../Atoms/SharedComponents/CoursesDetailsBoxTitle";
import CoursesDetailsList from "./CoursesDetailsList";
import learningIcon from "../../../Assets/Images/learningIcon.svg";
import lockIcon from "../../../Assets/Images/lockIcon.svg";
import { Stack } from "@mui/system";
import { useThemePalette } from "../../../Theme/useThemePalatte";

export default function CoursesDetailsQuizzes({ studentCoursesDetails }) {
  const { primaryColor } = useThemePalette();

  return (
    <>
      <Container id="Quizzes" sx={{ bgcolor: "#fff", mb: "32px" }}>
        <Stack pt="16px">
          <CoursesDetailsBoxTitle title="Quizzes" />
          {studentCoursesDetails?.classified_product?.quizzes.length > 0 ? (
            <>
              {studentCoursesDetails?.classified_product?.quizzes?.map(
                (quiz, i) => (
                  <CoursesDetailsList
                    data={quiz}
                    titleIcon={learningIcon}
                    listTitle={`Quiz ${i + 1}`}
                    descriptionIcon={lockIcon}
                  />
                )
              )}
              <Box alignSelf="center" pb="32px">
                <Button
                  variant="outlined"
                  sx={{
                    px: { md: "98px" },
                    border: `1.66px solid ${primaryColor}`,
                    "&:hover": {
                      border: `1.66px solid ${primaryColor}`,
                    },
                  }}
                >
                  View All Quizzes
                </Button>
              </Box>
            </>
          ) : (
            <Stack width="100%" alignItems="center" py="3rem">
              <Typography color={"error.main"}>No Quizzes Yet</Typography>
            </Stack>
          )}
        </Stack>
      </Container>
    </>
  );
}
