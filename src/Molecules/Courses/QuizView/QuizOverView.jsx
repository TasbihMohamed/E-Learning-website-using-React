import { Box, Typography, Button, Stack } from '@mui/material'
import React from 'react'
import QuizTable from './QuizTable';

export default function QuizOverView({ setStartTheQuiz, quiz, tryAgainButton,
     isAttemptsExist, listAttemptsQuiz,setFinishTheQuiz 
    ,showAnswer}) {


    const startQuiz = () => {
        setStartTheQuiz(true);
        setFinishTheQuiz(false);
    }

    const tryAgainButtonHide = <>
        {tryAgainButton ?
            <Box textAlign='center'>
                <Button onClick={() => startQuiz()} variant='contained' sx={{ px: "10%", }}>
                    Try Again
                </Button>
            </Box>
            :
            null
        }
    </>

    return (<>
        {isAttemptsExist ?

            <Box >
                <Typography sx={{
                    py: 1, color: 'rgba(52, 52, 52)', fontWeight: "500", fontSize: "1.4rem", lineHeight: '41px', letterSpacing: "0.93px"
                }}> Due Date :  <span style={{ color: 'rgba(52, 52, 52,.7)' }}>{quiz?.due_date}</span> </Typography>
                <Typography sx={{
                    py: 1, color: 'rgba(52, 52, 52)', fontWeight: "500", fontSize: "1.4rem", lineHeight: '41px', letterSpacing: "0.93px"
                }}> Attemps :  <span style={{ color: 'rgba(52, 52, 52,.7)' }}>
                        {quiz?.quiz_attempts?.length} /   {quiz?.quiz_configuration?.max_no_of_attempts} </span> </Typography>
                <Typography sx={{
                    py: 1, color: 'rgba(52, 52, 52)', fontWeight: "500", fontSize: "1.4rem", lineHeight: '41px', letterSpacing: "0.93px"
                }}> Time of quiz : <span style={{ color: 'rgba(52, 52, 52,.7)' }}>
                        25 min
                    </span> </Typography>
                <Stack direction='row'>
                    <Typography sx={{
                        py: 1, color: 'rgba(52, 52, 52)', fontWeight: "500", fontSize: "1.4rem", lineHeight: '41px', letterSpacing: "0.93px"
                    }}> Grade :
                    </Typography>
                    <Typography sx={{
                        py: 1, color: quiz?.final_grade?.percentage >= 85 ? '#00AF46' : "#FF0000",
                        fontWeight: "500", fontSize: "1.4rem", lineHeight: '41px', letterSpacing: "0.93px"
                    }}>
                        &nbsp;
                        {quiz?.final_grade?.percentage} %
                        &nbsp;
                        {quiz?.final_grade?.status?.value}

                    </Typography>
                </Stack>


                <Typography sx={{
                    py: 1, color: '#343434', fontWeight: "500", fontSize: "1.4rem", lineHeight: '41px', letterSpacing: "0.93px"
                }}>The highest attemps</Typography>

                <Stack
                    sx={{
                        py: 1, pb: 3,
                        // maxWidth:200
                    }}
                >
                    <QuizTable listAttemptsQuiz={listAttemptsQuiz} showAnswer={showAnswer}/>
                </Stack>

                <Stack>
                    {tryAgainButtonHide}
                </Stack>
            </Box>


            :

            <Box >
                <Typography sx={{
                    py: 1, color: 'rgba(52, 52, 52)', fontWeight: "500", fontSize: "1.4rem", lineHeight: '41px', letterSpacing: "0.93px"
                }}> Due Date :  <span style={{ color: 'rgba(52, 52, 52,.7)' }}>{quiz?.due_date}</span> </Typography>
                <Typography sx={{
                    py: 1, color: 'rgba(52, 52, 52)', fontWeight: "500", fontSize: "1.4rem", lineHeight: '41px', letterSpacing: "0.93px"
                }}> Attemps :  <span style={{ color: 'rgba(52, 52, 52,.7)' }}>
                        {quiz?.quiz_attempts?.length} / {quiz?.quiz_configuration?.max_no_of_attempts} </span> </Typography>
                <Typography sx={{
                    py: 1, color: 'rgba(52, 52, 52)', fontWeight: "500", fontSize: "1.4rem", lineHeight: '41px', letterSpacing: "0.93px"
                }}> Time of quiz : <span style={{ color: 'rgba(52, 52, 52,.7)' }}>
                        25 min
                    </span> </Typography>
                <Typography sx={{
                    py: 1, color: 'rgba(52, 52, 52)', fontWeight: "500", fontSize: "1.4rem", lineHeight: '41px', letterSpacing: "0.93px"
                }}> Grade :
                    <span style={{
                        color: 'rgba(52, 52, 52,.7)'
                    }}>
                        To pass 80% or higher

                    </span> </Typography>

                <Typography sx={{
                    py: 1, color: '#FFBA00', fontWeight: "500", fontSize: "1.4rem", lineHeight: '41px', letterSpacing: "0.93px"
                }}>The highest attemp will be consider</Typography>



                <Button onClick={() => startQuiz()} variant='contained' sx={{ px: '4%', }}>
                    Start
                </Button>


            </Box>

        }
    </>



    )
}
