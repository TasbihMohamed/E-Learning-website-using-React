import { Box, Typography, Stack } from "@mui/material";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const QuizViewAnswes = ({ listAttemptsQuiz, attemptId, question }) => {
  return (
    <>
      {listAttemptsQuiz?.attempts
        ?.find((element) => element.id === attemptId)
        .answers?.map((answer) => answer)
        .find((ele) => ele.quiz_question_id === question.quiz_question_id)
        .is_correct_answer ? (
        <Box sx={{ background: "#0D8C401F", borderRadius: 2, p: 2 }}>
          <Stack direction="row" gap={1}>
            <CheckIcon
              sx={{
                color: "#00AF46",
                fontWeight: 600,
                fontSize: "2rem",
                lineHeight: "41px",
                letterSpacing: "0.93px",
              }}
            />
            <Typography
              sx={{
                color: "#00AF46",
                fontWeight: 600,
                fontSize: "1.55rem",
                lineHeight: "41px",
                letterSpacing: "0.93px",
              }}
            >
              Correct answer
            </Typography>
          </Stack>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "1.55rem",
              lineHeight: "41px",
              letterSpacing: "0.93px",
            }}
          >
            {
              listAttemptsQuiz?.attempts
                ?.find((element) => element.id === attemptId)
                .answers?.map((answer) => answer)
                .find(
                  (ele) => ele.quiz_question_id === question.quiz_question_id
                ).answer_explanation
            }
          </Typography>
        </Box>
      ) : (
        <Box sx={{ background: "#FF000026", borderRadius: 2, p: 2 }}>
          <Stack direction="row" gap={1}>
            <CloseIcon
              sx={{
                color: " #FF0000",
                fontWeight: 600,
                fontSize: "2rem",
                lineHeight: "41px",
                letterSpacing: "0.93px",
              }}
            />
            <Typography
              sx={{
                color: " #FF0000",
                fontWeight: 600,
                fontSize: "1.55rem",
                lineHeight: "41px",
                letterSpacing: "0.93px",
              }}
            >
              In Correct answer
            </Typography>
          </Stack>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "1.55rem",
              lineHeight: "41px",
              letterSpacing: "0.93px",
            }}
          >
            {
              listAttemptsQuiz?.attempts
                ?.find((element) => element.id === attemptId)
                .answers?.map((answer) => answer)
                .find(
                  (ele) => ele.quiz_question_id === question.quiz_question_id
                ).answer_explanation
            }
          </Typography>
        </Box>
      )}
    </>
  );
};

export default QuizViewAnswes;
