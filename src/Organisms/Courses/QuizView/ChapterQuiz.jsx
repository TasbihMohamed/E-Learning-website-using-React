import React, { useState } from "react";
import QuizContent from "./QuizContent";
import QuizOverView from "../../../Molecules/Courses/QuizView/QuizOverView";
import QuizTitle from "../../../Molecules/Courses/QuizView/QuizTitle";
import { useDispatch, useSelector } from "react-redux";
import {
  getQuizAttemptsRequest,
  postStartQuizRequest,
} from "../../../Modules/Courses";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ChapterQuiz({ quiz }) {
  const [startTheQuiz, setStartTheQuiz] = useState(false);
  const [finishTheQuiz, setFinishTheQuiz] = useState(false); //to display the new attemp in quizOverview
  const [tryAgainButton, setTryAgainButton] = useState(false);
  const [viewAnswer, setViewAnswer] = useState(false);
  const [attemptId, setAttemptId] = useState(null);

  const [isAttemptsExist, setIsAttemptsExist] = useState(false);
  const { courseId, sectionId, sessionId } = useParams();
  const dispatch = useDispatch();

  //current time
  useEffect(() => {
    if (startTheQuiz) {
      var d = new Date(),
        h = (d.getHours() < 10 ? "0" : "") + d.getHours(),
        m = (d.getMinutes() < 10 ? "0" : "") + d.getMinutes();

      dispatch(
        postStartQuizRequest({
          course_id: quiz.course_id,
          quiz_id: quiz.quiz_id,
          body: {
            start_time: `${h}:${m}`,
          },
        })
      );
    }
  }, [startTheQuiz]);

  ////getting attempts list
  useEffect(() => {
    dispatch(
      getQuizAttemptsRequest({ course_id: courseId, quiz_id: sessionId })
    );
  }, [quiz, finishTheQuiz]); //and when finsish the quiz also ???????

  const listAttemptsQuiz = useSelector(
    (state) => state.courses.listAttemptsQuiz
  );

  useEffect(() => {
    // setStartTheQuiz(false);
    setViewAnswer(false);
    if (listAttemptsQuiz?.attempts?.length >= 1) {
      setIsAttemptsExist(true);

      if (
        quiz?.quiz_configuration?.max_no_of_attempts >
        listAttemptsQuiz?.attempts?.length
      ) {
        /////if max_no_of_attempts > attempts that i made
        setTryAgainButton(true);
      } else if (
        quiz?.quiz_configuration?.max_no_of_attempts ==
        listAttemptsQuiz?.attempts?.length
      ) {
        setTryAgainButton(false);
      }
    } else if (listAttemptsQuiz?.attempts?.length === 0) {
      setIsAttemptsExist(false);
      // setStartButton(true)
    }
  }, [listAttemptsQuiz]);

  const startQuiz = useSelector((state) => state.courses.startQuiz);


  // console.log("startTheQuiz", startTheQuiz);
  // console.log("viewAnswer", viewAnswer);
  // console.log("list attempts :", listAttemptsQuiz);
  // console.log("quiz", quiz);

  const showAnswer = (attemptId) => {
    setViewAnswer(true);
    setAttemptId(attemptId);
  };

  return (
    <>
      <QuizTitle
        startTheQuiz={startTheQuiz}
        setStartTheQuiz={setStartTheQuiz}
        quiz={quiz}
      />
      {startTheQuiz || viewAnswer ? (
        <QuizContent
          quiz={quiz}
          setStartTheQuiz={setStartTheQuiz}
          setFinishTheQuiz={setFinishTheQuiz}
          listAttemptsQuiz={listAttemptsQuiz}
          startTheQuiz={startTheQuiz}
          viewAnswer={viewAnswer}
          attemptId={attemptId}
        />
      ) : (
        <QuizOverView
          setStartTheQuiz={setStartTheQuiz}
          quiz={quiz}
          tryAgainButton={tryAgainButton}
          isAttemptsExist={isAttemptsExist}
          listAttemptsQuiz={listAttemptsQuiz}
          setFinishTheQuiz={setFinishTheQuiz}
          showAnswer={showAnswer}
        />
      )}
    </>
  );
}
