import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CoursesDetailsBoxTitle from "../../../Atoms/SharedComponents/CoursesDetailsBoxTitle";
import { useThemePalette } from "../../../Theme/useThemePalatte";
import CoursesDetailsAccordion from "./CustomAccordion";

export default function Syllabus({ studentCoursesDetails }) {
  const { warmGrey3 } = useThemePalette();
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(0);
  const [sessions, setSessions] = useState([]);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    setSections(studentCoursesDetails?.classified_product?.sections);
  }, [studentCoursesDetails]);

  useEffect(() => {
    let extractedData = [];
    const myCoursesResponse =
      studentCoursesDetails?.classified_product?.sections?.map(
        (section) => section?.sessions
      );
    for (const key in myCoursesResponse) {
      extractedData.push(...myCoursesResponse[key]);
    }
    setSessions(extractedData);
  }, [studentCoursesDetails?.classified_product?.sections]);

  useEffect(() => {
    setCount(
      sections?.reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue?.sessions?.length,
        0
      )
    );
    setTime(
      sessions?.reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue?.expected_time,
        0
      )
    );
  }, [sections]);

  return (
    <>
      <Stack
        id="Syllabus"
        borderRadius="10px"
        pt="16px"
        boxShadow="1px 1px 6px 0 rgba(0, 0, 0, 0.16)"
        bgcolor="#fff"
        mx={{ md: "0px", xs: "0px" }}
        mt="4px"
        mb="32px"
        width={{ xs: "100%" }}
      >
        <Box px="36px">
          <CoursesDetailsBoxTitle title="Syllabus" mb="10px" />
          <Typography fontWeight="500" color={warmGrey3}>
            {sections?.length} sections • {count} lectures • {time}h 45m total
            length
          </Typography>
        </Box>
        <Box my="32px">
          <CoursesDetailsAccordion
            studentCoursesDetails={studentCoursesDetails}
            sections={sections}
          />
        </Box>
      </Stack>
    </>
  );
}
