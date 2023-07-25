import React from 'react'
import { useState, useEffect } from 'react';
import { postSubmitQuizRequest } from '../../../Modules/Courses';
import { useDispatch, useSelector } from 'react-redux';

const QuizTimer = ({ setStartTheQuiz, quiz }
    // props
) => {

    // const {initialMinute = 1,initialSeconds = 1} = props;
    const [minutes, setMinutes] = useState(quiz?.quiz_configuration?.duration);
    const [seconds, setSeconds] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
            if (seconds === 0 && minutes === 0) {
                console.log("BOOOM");
                setStartTheQuiz(false);
                dispatch(postSubmitQuizRequest({ course_id: quiz.course_id, quiz_id: quiz.quiz_id }));
            }
        }, 1000)
        return () => {
            clearInterval(myInterval);
        };
    });

    const submitQuiz = useSelector((state) => state.courses.submitQuiz);

    return (
        <>
            {minutes === 0 && seconds === 0
                ? null
                : <> {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</>
            }
        </>
    )
}

export default QuizTimer;