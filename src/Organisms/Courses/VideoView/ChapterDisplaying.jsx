
import { Grid, Stack,  Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import ChapterLeftSide from "./ChapterLeftSide";
import Breadcrumb from "../../../Atoms/SharedComponents/Breadcrumb";
import ChapterRightSide from "../../../Organisms/Courses/VideoView/ChapterRightSide";
import VideoSkeleton from "../../../Atoms/SharedComponents/VideoSkeleton";
import { useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getStudentAssignmentDetailsRequest, getStudentQuizDetailsRequest, getStudentSessionDetailsRequest } from "../../../Modules/Courses";
import SessionPagination from "../../../Molecules/Courses/VideoView/SessionPagination";

export default function ChapterDisplaying({ studentCoursesDetails }) {
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);
  const [preBtnDisabled, setpreBtnDisabled] = useState(true);

  const { courseId, sectionId, sessionId } = useParams();
 
  const [searchParama, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();         
  const sessionDetails = useSelector((state) => state.courses.sessionDetails);


  useEffect(() => {
    if (courseId && sectionId && sessionId)
      if (searchParama.get('type') === "video" || searchParama.get('type') === "video_and_text") {
        dispatch(getStudentSessionDetailsRequest(courseId, sectionId, sessionId));
      }
      else if (searchParama.get('type') === "assignment") {
        dispatch(getStudentAssignmentDetailsRequest(courseId, sessionId));
      }
      else if (searchParama.get('type') === "quiz") {
        dispatch(getStudentQuizDetailsRequest(courseId, sessionId));
      }

  }, [courseId, sectionId, sessionId ]
  );

  const changeSession = (i) => {
    // 1 for next , 0 for previous
    // if (i) {
    //     setpreBtnDisabled(false)
    //     if (videoChossen < accordianData.length - 1) {
    //         setVideoChossen(videoChossen + 1)
    //     }
    //     if (videoChossen == accordianData.length - 2) {
    //         setNextBtnDisabled(true)
    //     }
    // }
    // else {
    //     setNextBtnDisabled(false)
    //     if (!videoChossen == 0) {
    //         setVideoChossen(videoChossen - 1)
    //     }
    //     if (videoChossen == 1) {
    //         setpreBtnDisabled(true)
    //     }
    // }
  };

  return (
    <VideoSkeleton>
      <Grid xs={12} >
        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <Stack sx={{ width: 3 / 4 }}>
            <Breadcrumb />
          </Stack>
          <Stack sx={{ width: 1 / 4 }}>
            <SessionPagination
              changeSession={changeSession}
              disableNext={nextBtnDisabled}
              disablePre={preBtnDisabled}
            />
          </Stack>
        </Stack>
      </Grid>

      <Stack flexDirection={{ sm: "column", md: "row" }} gap={1}>
        <Box width={{ sm: "100%", md: "30%"}}>
          <ChapterLeftSide
            studentCoursesDetails={studentCoursesDetails}
            sessionChossen={sessionDetails}
          />
        </Box>
        <Box width={{ sm: "100%", md: "70%" }}>
          <ChapterRightSide sessionChossen={sessionDetails} />
        </Box>
      </Stack>
    </VideoSkeleton>
  );
}
