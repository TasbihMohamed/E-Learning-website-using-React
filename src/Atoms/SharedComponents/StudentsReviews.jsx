import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import { useThemePalette } from "../../Theme/useThemePalatte";
import CardRating from "./CardRating";
import CoursesDetailsBoxTitle from "./CoursesDetailsBoxTitle";
// import CoursesDetailsBoxTitle from '../CoursesDetailsBoxTitle'

export default function StudentsReviews({ studentReviews, review }) {
  const { blackTwo } = useThemePalette();
  const months = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    September: "09",
    10: "October",
    11: "November",
    12: "December",
  };

  const monthIndex = review?.date?.slice(3, 5);

  return (
    <>
      <Box mb="32px">
        <CardRating />
        <Stack direction="row" alignItems="center">
          <CoursesDetailsBoxTitle
            title={review?.user?.name}
            fontSize="20px"
            mb="0"
          />
          <Typography color={blackTwo} variant="span" ml="12px">
            {" "}
            {months[monthIndex]} {review?.date.slice(0, 2)} ,{" "}
            {review?.date?.slice(6)}{" "}
          </Typography>
        </Stack>
        <Typography
          color={blackTwo}
          fontWeight="600"
          mr="80px"
          margin=" 16px 0 0 2px"
          width="650px"
        >
          {review?.comment}
        </Typography>
      </Box>
    </>
  );
}
