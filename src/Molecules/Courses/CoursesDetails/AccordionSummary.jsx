import { Box, Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import bookIcon from "../../../Assets/Images/bookIcon.svg";
import CoursesDetailsBoxTitle from "../../../Atoms/SharedComponents/CoursesDetailsBoxTitle";
import { useThemePalette } from "../../../Theme/useThemePalatte";

export default function AccordionSummary({ expanded, sections }) {
  const { blackTwo, warmGrey3 } = useThemePalette();
  const [time, setTime] = useState(0);
  const [quizzesLength, setQuizzesLength] = useState(0);

  const [timeUnit, setTimeUnit] = useState([]);
  useEffect(() => {
    setTime(
      sections?.sessions?.reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue?.expected_time,
        0
      )
    );
    setTimeUnit(
      sections?.sessions?.reduce(
        (accumulator, currentValue) => currentValue?.expected_time_unit,
        0
      )
    );
    setQuizzesLength(
      sections?.sessions?.reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue?.quizzes?.length,
        0
      )
    );
  }, [sections]);

  return (
    <>
      <Stack sx={{ px: { md: "36px", xs: "10px" } }} mt="30px">
        <Stack direction="row">
          <Stack justifyContent="flex-start" alignItems="center" width="54px">
            <Typography
              mt="13px"
              fontSize={{ md: "14px", xs: "11px" }}
              fontWeight="600"
              lineHeight="0.86"
            >
              {sections?.title.replace(/[0-9]/g, "")}
            </Typography>
            <Typography
              color={blackTwo}
              fontSize={{ md: "48px", xs: "20px" }}
              fontWeight="500"
              m="8px 18px 0 19px"
            >
              {sections?.position}
            </Typography>
          </Stack>
          <Stack ml={{ md: "57px" }} direction={{ lg: "row" }}>
            <Stack
              width={{ lg: "390px", md: "300px", sm: "420px", xs: "300px" }}
              mb={{ md: "0", xs: "20px" }}
              ml={{ lg: "0", xs: "15px" }}
              alignItems="flex-start"
            >
              <CoursesDetailsBoxTitle title={sections?.course_name} />
              <Stack direction="row" alignItems="center">
                <img
                  src={bookIcon}
                  alt="book icon"
                  width="42px"
                  height="42px"
                />
                <Typography
                  fontWeight="500"
                  ml="8px"
                  color={warmGrey3}
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",

                    width: { xs: "200px", md: "fit-content" },
                  }}
                >
                  {sections?.sessions?.length} Lectures (Total {time} {timeUnit}
                  ), 3 readings, {quizzesLength} quizze
                </Typography>
              </Stack>
            </Stack>
            <Stack
              width={{ lg: "230px", xs: "150px" }}
              ml={{ lg: "51px", xs: "15px" }}
              mb={{ md: "0", xs: "20px" }}
              rowGap="8px"
            >
              <Button
                variant="contained"
                sx={{
                  boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)",
                  letterSpacing: "0.19px",
                  fontSize: { lg: "18px" },
                  fontWeight: "600",
                  py: "8px",
                  px: "15px",
                  mt: "10px",
                }}
              >
                Enroll Chapter
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
