import { Grid, Stack } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import VideoContent from "./VideoContent";
import ChapterQuiz from "../QuizView/ChapterQuiz";
import { useParams, useSearchParams } from "react-router-dom";
import AssignmentContent from "./AssignmentContent";

export default function ChapterRightSide({ sessionChossen }) {
  const [content, setContent] = useState("");

  const { courseId, sectionId, sessionId } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();
 

  useEffect(() => {
    if (searchParams.get('type') === "video" || searchParams.get('type') === "video_and_text") {
      setContent(<VideoContent sessionChossen={sessionChossen} />);
    }
    else if (searchParams.get('type') === "quiz") {

      setContent(<ChapterQuiz quiz={sessionChossen} />); 
 
    }
    else if (searchParams.get('type') === "assignment") {
      setContent(<AssignmentContent sessionChossen={sessionChossen}/>)

    }
  }, [sessionChossen]);

  return (
    <Grid

      sx={{
        px: 2,
        py: 2,
        height: "full",
        width: "100% ",
        minHeight: "500px",
        maxHeight: "550px",
      }}
    >

      {content}
    </Grid>
  );
}
