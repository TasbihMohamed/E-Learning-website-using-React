import { Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CoursesDetailsVideosSummary from "./CoursesDetailsVideosSummary";
import { useThemePalette } from "../../../Theme/useThemePalatte";
import lockIcon from "../../../Assets/Images/lockIcon.svg";
import videoIcon from "../../../Assets/Images/videoIcon2.svg";
import quizIcon from "../../../Assets/Images/quizIcon.svg";
import readingIcon from "../../../Assets/Images/readingIcon.svg";
import { Box } from "@mui/system";

export default function AccordionDetails({
  studentCoursesDetails,
  sessions,
  sections,
}) {
  const [assignment, setAssignment] = useState([]);
  const [videosData, setVideosData] = useState([]);
  const [readingData, setReadingData] = useState([]);
  const [quizData, setQuizData] = useState([]);
  const { blackTwo, warmGrey3, warmGrey4 } = useThemePalette();

  useEffect(() => {
    setAssignment(sessions?.map((session) => session?.assignments)?.flat(1));
    setQuizData(sessions?.map((session) => session?.quizzes).flat(1));
    setVideosData(sessions?.filter((video) => video?.video_url?.length >= 1));
    setReadingData(sessions?.filter((reading) => reading?.book));
  }, [sessions]);

  const courseData = [
    {
      title: `${videosData?.length} Video`,
      data: videosData,
      icon: videoIcon,
    },
    {
      title: `${readingData?.length} Reading`,
      data: readingData,
      icon: readingIcon,
    },
    {
      title: `${quizData?.length} Quiz`,
      data: quizData,
      icon: quizIcon,
    },
  ];
  return (
    <>
      <Stack ml={{ md: "40px" }} mb="28px" justifyContent="space-between">
        {courseData?.map((course, index) => {
          if (course?.data?.length > 0)
            return (
              <Stack
                key={index}
                borderBottom={`0.5px solid ${warmGrey4}`}
                direction="column"
                width={{ lg: "100%", md: "95.5% !important" }}
                mx={{ md: "0", xs: "15px" }}
                py={{ lg: "32px", xs: "10px" }}
              >
                <Stack direction="row">
                  <img
                    style={{ marginTop: "3px" }}
                    src={course?.icon}
                    alt="video icon"
                  />
                  <Typography
                    width={{ sm: "100%", md: "409px" }}
                    ml="8px"
                    sx={{ color: blackTwo }}
                    fontSize="18px"
                    fontWeight="700"
                  >
                    {course.title}
                  </Typography>
                </Stack>
                {course?.data?.map((quiz, i) => (
                  <Stack
                    ml="8px"
                    width="100%"
                    key={i}
                    direction="row"
                    mt="16px"
                    justifyContent="space-between"
                    alignSelf="flex-start"
                  >
                    <Typography
                      minWidth={{ lg: "367px", xs: "50%" }}
                      mt="11px"
                      fontSize="15px"
                      color={warmGrey3}
                    >
                      {quiz?.title}
                    </Typography>
                    <Typography mt="11px" fontSize="15px" color={warmGrey3}>
                      {quiz?.expected_time}
                    </Typography>
                    {studentCoursesDetails?.is_purchased_by_current_user ||
                    !studentCoursesDetails?.original_price ? (
                      <Box>
                        <Button>Preview</Button>
                      </Box>
                    ) : (
                      <img src={lockIcon} alt="lock" />
                    )}
                  </Stack>
                ))}
              </Stack>
            );
        })}
      </Stack>
    </>
  );
}
