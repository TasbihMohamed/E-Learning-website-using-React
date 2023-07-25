import { Stack } from "@mui/system";
import React from "react";
import videoIcon from "../../../Assets/Images/videoIcon.svg";
import { Button, Typography } from "@mui/material";
import { useThemePalette } from "../../../Theme/useThemePalatte";
import lockIcon from "../../../Assets/Images/lockIcon.svg";

export default function CoursesDetailsVideosSummary({
  sessionsData,
  studentCoursesDetails,
  quizzes,
  book,
  sessions,
}) {
  const { blackTwo, warmGrey3 } = useThemePalette();

  const checkType = (obj) => {
    if (obj?.book_id) return "Reading";
    else if (obj.quiz_id)
      return `${
        quizzes?.length === 1
          ? `${quizzes?.length} Quiz`
          : `${quizzes?.length} Quizzes`
      } `;
    else if (obj.course_session_id) return `${sessions?.length} Video`;
  };
  // console.log(sessions, 'sessions');
  // console.log(studentCoursesDetails, 'studentCoursesDetails');

  return (
    <>
      <Stack direction="column" width="100%" mb={{ sm: "0", xs: "10px" }}>
        <Stack direction="row">
          <img
            width="24px"
            style={{ marginTop: "3px" }}
            height="24px"
            src={videoIcon}
            alt="video icon"
          />
          <Typography
            width="409px"
            ml="8px"
            sx={{ color: blackTwo }}
            fontSize="18px"
            fontWeight="500"
          >
            {checkType(sessionsData)}
          </Typography>
        </Stack>

        <Stack
          direction="row"
          width="100%"
          mt="16px"
          justifyContent="space-between"
          alignSelf="flex-start"
        >
          <Typography
            minWidth={{ lg: "367px" }}
            mt="11px"
            fontSize="15px"
            color={warmGrey3}
          >
            {sessionsData?.title}
          </Typography>
          <Typography mt="11px" fontSize="15px" color={warmGrey3}>
            {sessionsData?.expected_time}
          </Typography>
          {studentCoursesDetails?.is_purchased_by_current_user ||
          !studentCoursesDetails?.original_price ? (
            <Button>Preview</Button>
          ) : (
            <img src={lockIcon} alt="lock" />
          )}
        </Stack>
      </Stack>
    </>
  );
}
