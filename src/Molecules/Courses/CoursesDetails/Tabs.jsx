import { Box, Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { useLocation } from "react-router-dom";
import { useThemePalette } from "../../../Theme/useThemePalatte";
import CoursesDetailsOverview from "./CoursesDetailsOverview";

export default function Tabs({
  studentReviews,
  studentCoursesDetails,
  sections,
  sessions,
  studentCoursesDetailsLoading,
  reviews,
}) {
  const path = useLocation();
  const { gray, blackTwo, primaryColor } = useThemePalette();
  const navLinks = [
    {
      label: "Overview",
      path: "#Overview",
    },
    {
      label: "Syllabus",
      path: "#Syllabus",
    },
    {
      label: "Instructors",
      path: "#Instructors",
    },
    {
      label: "Reviews",
      path: "#Reviews",
    },
    {
      label: "Quizzes",
      path: "#Quizzes",
    },
    {
      label: "Assignments",
      path: "#Assignments",
    },
  ];
  return (
    <>
      <Stack
        direction="row"
        bgcolor="#fff"
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack direction="row" flexWrap="wrap" id="Overview">
          {navLinks.map((link, i) => (
            <Button
              href={link?.path}
              sx={
                path?.hash === link.path
                  ? {
                      color: "primary,main",
                      fontWeight: "600",
                      borderBottom: "solid 2px #28A19C",
                      borderRadius: "0",
                      py: "24px",
                      px: { lg: "35px" },
                    }
                  : {
                      color: gray,
                      fontWeight: "600",
                      borderRadius: "0",
                      py: "24px",
                      px: { lg: "35px" },
                      // width: '140px'
                    }
              }
            >
              {link?.label}
            </Button>
          ))}
        </Stack>
        {path?.hash !== "#Overview" &&
          path?.hash !== "#Syllabus" &&
          path?.hash !== "" && (
            <Stack direction="row" mr="35px" gap="24px">
              <Stack>
                <Typography
                  textAlign="center"
                  color={blackTwo}
                  fontWeight="700"
                >
                  {studentCoursesDetails?.original_price_currency}{" "}
                  {studentCoursesDetails?.original_price}
                </Typography>
                <Button
                  sx={{
                    p: 0,
                    fontSize: "13px",
                    fontWeight: 500,
                    borderBottom: `1px solid ${primaryColor}`,
                    borderRadius: 0,
                  }}
                >
                  Add to cart
                </Button>
              </Stack>
              <Button variant="contained" sx={{ px: "24px" }}>
                Enroll Now
              </Button>
            </Stack>
          )}
      </Stack>
      <CoursesDetailsOverview
        studentCoursesDetails={studentCoursesDetails}
        studentReviews={studentReviews}
        sections={sections}
        sessions={sessions}
        studentCoursesDetailsLoading={studentCoursesDetailsLoading}
        reviews={reviews}
      />
    </>
  );
}
