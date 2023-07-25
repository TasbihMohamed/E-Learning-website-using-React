import { Button, Container, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import CoursesDetailsBoxTitle from "../../../Atoms/SharedComponents/CoursesDetailsBoxTitle";
import CardVoteIcons from "../../../Atoms/SharedComponents/CardVoteIcons";
import CustomProgressBar from "../../../Atoms/SharedComponents/CustomProgressBar";
import StudentsReviews from "../../../Atoms/SharedComponents/StudentsReviews";
import { useThemePalette } from "../../../Theme/useThemePalatte";

export default function CoursesDetailsReviews({
  studentReviews,
  final_rating_from_reviews,
  reviews_number,
  studentCoursesDetails,
  reviews,
}) {
  const { blackTwo, primaryColor } = useThemePalette();
  const reviewsData = [
    {
      startsNumber: "5",
      chartLine: 86.24,
    },
    {
      startsNumber: "4",
      chartLine: 11.38,
    },
    {
      startsNumber: "3",
      chartLine: 1.33,
    },
    {
      startsNumber: "2",
      chartLine: 0.35,
    },
    {
      startsNumber: "1",
      chartLine: 0.68,
    },
  ];
  return (
    <Container>
      <Stack id="Reviews" py="32px" pl={{ md: "20px" }}>
        <CoursesDetailsBoxTitle title="Reviews" />
        <Stack columnGap="100px" direction={{ md: "row", xs: "column" }}>
          <Stack width="30%" width="389px">
            <Box mb="10px">
              <CardVoteIcons
                final_rating_from_reviews={final_rating_from_reviews}
                final_rating_from_reviews_Font_Weight="bold"
                reviews_number_direction="column"
                final_rating_from_reviews_fontSize="54px"
                rating_color={blackTwo}
                reviews_number={
                  <Stack direction="row" color={blackTwo} ml="8px">
                    <Typography fontWeight="600">{reviews_number} </Typography>
                    <Typography ml="4px">Reviews</Typography>
                  </Stack>
                }
                rating_ml="11px"
                reviews_number_direction_s="flex-start"
              />
            </Box>
            <Box>
              {reviewsData.map((data, i) => (
                <Stack
                  key={i}
                  direction="row"
                  mb="16px"
                  width="389px"
                  alignItems="center"
                >
                  <Typography fontWeight="500" mr="10px" color={blackTwo}>
                    {data.startsNumber} stars
                  </Typography>
                  <CustomProgressBar custom={data?.chartLine} />
                </Stack>
              ))}
            </Box>
          </Stack>
          <Stack width="55%" mr={{ lg: "80px" }}>
            {reviews.map((review) => (
              <StudentsReviews
                key={review?.product_review_id}
                review={review}
                studentReviews={studentReviews}
              />
            ))}
          </Stack>
        </Stack>
        <Box justifySelf="center" alignSelf="center" mt={{ lg: "40px" }}>
          <Button
            sx={{
              padding: "15px 95px",
              fontWeight: "600",
              border: `2px solid ${primaryColor}`,
              "&:hover": {
                border: `2px solid ${primaryColor}`,
              },
            }}
            variant="outlined"
          >
            View All Reviews
          </Button>
        </Box>
      </Stack>
    </Container>
  );
}
