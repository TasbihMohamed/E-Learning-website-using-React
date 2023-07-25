import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import QuizTimer from './QuizTimer'

export default function QuizTitle({ startTheQuiz, setStartTheQuiz, quiz }) {

  return (
    <Stack sx={{
      borderBottom: 1, borderColor: 'rgba(52, 52, 52,.3)',
      justifyContent: 'space-between'
    }} direction='row'>
      <Typography sx={{
        py: 1,
        color: 'rgba(52, 52, 52)', fontWeight: "500", fontSize: "1.8rem", lineHeight: '41px', letterSpacing: "0.93px"
      }}> Quiz : <span style={{ color: 'rgba(52, 52, 52,.7)' }}>{quiz?.description}</span> </Typography>

      {
        startTheQuiz ? <Typography sx={{
          py: 1,
          color: '#00AF46', fontWeight: 500, fontSize: "1.4rem", lineHeight: '41px', letterSpacing: "0.93px"
        }}>
    
          <QuizTimer setStartTheQuiz={setStartTheQuiz} quiz={quiz}/> min remain
        </Typography>
          : null
      }


    </Stack>
  )
}
