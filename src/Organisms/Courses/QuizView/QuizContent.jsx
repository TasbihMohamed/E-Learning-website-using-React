import { Box, Button, Typography, Stack } from "@mui/material";
import React, { useState, useEffect } from "react";
import SessionPagination from "../../../Molecules/Courses/VideoView/SessionPagination";
import { postSubmitQuizRequest } from "../../../Modules/Courses";
import { useDispatch, useSelector } from "react-redux";
import QuizQuestion from "./QuizQuestion";

export default function QuizContent({
  quiz,
  setStartTheQuiz,
  setFinishTheQuiz,
  listAttemptsQuiz,
  startTheQuiz,
  viewAnswer,
  attemptId,
}) {
  // console.log("in quizContent : attempts", listAttemptsQuiz);
  const [paginationPage, sePaginationPage] = useState(1);
  const [afterAnswer, setAfterAnswer] = useState(false);
  const [clear, setClear] = useState(false);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);
  const [preBtnDisabled, setpreBtnDisabled] = useState(true);
  const [hideNext, setHideNext] = useState(false);

  const dispatch = useDispatch();

  const paginationContent = (
    <>
      {" "}
      {paginationPage} / {quiz?.questions?.length}
    </>
  );

  useEffect(() => {
    if (quiz?.questions?.length === 1) {
      setNextBtnDisabled(true);
      setHideNext(true);
    }
  }, []);

  const clearAnswer = () => {
    setClear(true);
  };

  const finishQuiz = () => {
    setStartTheQuiz(false);
    setFinishTheQuiz(true);
    dispatch(
      postSubmitQuizRequest({
        course_id: quiz.course_id,
        quiz_id: quiz.quiz_id,
      })
    );
  };

  const finishShowingAnswer = () => {
    setStartTheQuiz(false);
    setFinishTheQuiz(true);
  };

  const changeSession = (i) => {
    //i =1 next or 0 prev
    if (i == 1) {
      sePaginationPage(paginationPage + 1);
      if (paginationPage + 1 === quiz?.questions?.length) {
        setNextBtnDisabled(true);
        setHideNext(true);
      }

      setpreBtnDisabled(false);
    } else if (i == 0) {
      sePaginationPage(paginationPage - 1);
      setHideNext(false);
      setNextBtnDisabled(false);
      if (paginationPage - 1 === 1) {
        setpreBtnDisabled(true);
      }
    }
  };

  return (
    <Box>
      <Stack direction="row" sx={{ my: 2, justifyContent: "space-between" }}>
        <Typography
          sx={{
            color: "#343434",
            fontWeight: 600,
            fontSize: "1.55rem",
            lineHeight: "41px",
            letterSpacing: "0.93px",
          }}
        >
          Answer The following question :
        </Typography>
        <Typography
          sx={{
            color: "#FFBA00",
            fontWeight: 600,
            fontSize: "1.35rem",
            lineHeight: "41px",
            letterSpacing: "0.93px",
          }}
        >
          4 Points
        </Typography>
      </Stack>

      {/* ============== */}

      {quiz?.questions.map((question, index) => {
        if (paginationPage - 1 == index) {
          return (
            <QuizQuestion
              question={question}
              afterAnswer={afterAnswer}
              clearAnswer={clearAnswer}
              listAttemptsQuiz={listAttemptsQuiz}
              attemptId={attemptId}
              viewAnswer={viewAnswer}
              setAfterAnswer={setAfterAnswer}
              setClear={setClear}
              clear={clear}
              quiz={quiz}
            />
          );
        }
      })}

      {/* ============== */}

      <Stack
        sx={{ my: 2, width: "100%", justifyContent: "space-between" }}
        direction="row"
      >
        <Stack sx={{ width: hideNext ? 2.2 / 4 : 6 / 6 }}>
          <SessionPagination
            paginateContent={paginationContent}
            changeSession={changeSession}
            nextBtnDisabled={nextBtnDisabled}
            preBtnDisabled={preBtnDisabled}
            hideNext={hideNext}
          />
        </Stack>
        {hideNext && startTheQuiz && (
          <Stack sx={{ width: 1 / 4, alignItems: "end" }}>
            <Button onClick={() => finishQuiz()}>Finish Quiz </Button>
          </Stack>
        )}
        {hideNext && viewAnswer && (
          <Stack sx={{ width: 1 / 4, alignItems: "end" }}>
            <Button onClick={() => finishShowingAnswer()}>Finish </Button>
          </Stack>
        )}
      </Stack>
    </Box>
  );
}
