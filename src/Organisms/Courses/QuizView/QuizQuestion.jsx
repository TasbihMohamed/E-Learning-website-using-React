import React from "react";
import { Box, Button, Typography, Stack } from "@mui/material";
import CustomAccordian from "../../../Atoms/SharedComponents/CustomAccordian";
import QuizCheckboxes from "../../../Molecules/Courses/QuizView/QuizCheckboxes";
import QuizViewAnswes from "../../../Molecules/Courses/QuizView/QuizViewAnswes";

const QuizQuestion = ({
  question,
  afterAnswer,
  clearAnswer,
  listAttemptsQuiz,
  attemptId,
  viewAnswer,
  setAfterAnswer,
  setClear,
  clear,
  quiz,
}) => {
  const fullAccordianStyle = {
    boxShadow: 0,
    borderTop: 1,
    borderBottom: 1,
    borderColor: "rgba(186, 179, 183, 0.45)",
    background: " rgb(248, 248, 248)",
  };
  const accordianTitleStyle = {
    color: "#28A19C",
    fontWeight: 600,
    fontSize: "1.5rem",
  };
  return (
    <Stack key={question.quiz_question_id}>
      <Typography
        sx={{
          my: 1,
          color: "rgba(52, 52, 52 ,.85)",
          fontSize: "1.4rem",
          lineHeight: "29px",
          fontWeight: 600,
          letterSpacing: "0.93px",
        }}
      >
        {question?.text_question}
      </Typography>
      <Stack sx={{ my: 2 }}>
        {question?.quiz_question_choices?.map((choice, index) => {
          return (
            <Stack
              direction="row"
              sx={{ justifyContent: "space-between", my: 1 }}
            >
              <Typography
                sx={{
                  color: "#343434",
                  fontSize: "1.2rem",
                  fontWeight: 300,
                }}
              >
                {index + 1} - {choice.text_choice}
              </Typography>

              <QuizCheckboxes
                checked={
                  viewAnswer
                    ? listAttemptsQuiz?.attempts
                        ?.find((element) => element.id === attemptId)
                        .answers?.map((answer) => answer)
                        .find(
                          (ele) =>
                            ele.quiz_question_id === question.quiz_question_id
                        ).quiz_question_choice_id ===
                      choice?.quiz_question_choice_id
                    : null
                }
                disabled={false}
                clear={viewAnswer ? null : clear}
                setClear={setClear}
                choiceIndex={choice.quiz_question_choice_id}
                quiz={quiz}
                choiceId={choice.quiz_question_choice_id}
                quizQuestionId={question.quiz_question_id}
                setAfterAnswer={setAfterAnswer}
              />
            </Stack>
          );
        })}
      </Stack>
      {afterAnswer ? (
        <Box sx={{ pb: 2 }}>
          <Button
            sx={{ color: "#FF0000", fontWeight: 200 }}
            onClick={clearAnswer}
          >
            Clear Answer
          </Button>
        </Box>
      ) : null}
      {/* hint */}
      <Stack>
        <CustomAccordian
          accordianTitle={"Hints"}
          accordianTitleStyle={accordianTitleStyle}
          fullAccordianStyle={fullAccordianStyle}
          isExpanded={false}
          accordianDetails={
            <Stack
              sx={{
                color: "#343434",
                fontWeight: 300,
                fontSize: "1.5rem",
              }}
            >
              {" "}
              {question?.hint}{" "}
            </Stack>
          }
        />
      </Stack>
      <Stack sx={{ mb: 2, mt: 4 }}>
        {viewAnswer ? (
          <QuizViewAnswes
            listAttemptsQuiz={listAttemptsQuiz}
            attemptId={attemptId}
            question={question}
          />
        ) : null}
      </Stack>
    </Stack>
  );
};

export default QuizQuestion;
