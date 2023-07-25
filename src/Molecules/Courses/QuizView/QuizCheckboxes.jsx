import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { postAnswerQuizRequest, putAnswerQuizRequest } from '../../../Modules/Courses';


export default function QuizCheckboxes({
  choiceIndex, clear, setClear, quiz,
  checked,
  setAfterAnswer,
  disabled,
  choiceId,
  quizQuestionId
}) {

  const dispatch = useDispatch();

  const handleCheck = (e) => {
    setClear(false)
    setAfterAnswer(true)
    dispatch(postAnswerQuizRequest({
      course_id: quiz.course_id, quiz_id: quiz.quiz_id, body:
        { "user_quiz_questions_answers": [{ "quiz_question_id": quizQuestionId, "quiz_question_choice_id": choiceId }] }

    }));
  }

  const answerQuiz = useSelector((state) => state.courses.answerQuiz);

  useEffect(() => {
    if (clear) {
      dispatch(putAnswerQuizRequest({ course_id: quiz.course_id, quiz_id: quiz.quiz_id, body: { "quiz_question_id": quizQuestionId } }));
    }
  }, [clear])

  // const clearQuiz = useSelector((state) => state.courses.clearQuiz);


  return (
    <>
      <input type="radio"
        className={clear ? 'checkboxInput ' : 'checkboxInput checkboxInputCheck'}
        name='quizCheckbox'
        value={choiceIndex}
        onClick={(e) => handleCheck(e)}
        disabled={disabled}
        checked={checked}
      />
    </>
  )
}
