import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Stack, Typography, Box } from '@mui/material';




export default function QuizTable({ listAttemptsQuiz, showAnswer}) {
  // console.log("listAttemptsQuiz5", listAttemptsQuiz.attempts);

const handleShowAnswer=(attemptId)=>{
  showAnswer(attemptId) 
}

  return (
    <TableContainer component={Paper} sx={{ border: 2, borderColor: "rgba(155, 155, 155,.5)", boxShadow: 0, borderRadius: 2, background: 'transparent' }}>
      <Table sx={{ minWidth: 150 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell align="center" sx={{ borderRight: 2, borderColor: "rgba(155, 155, 155,.5)" }}><Typography sx={{ color: "#343434", fontWeight: 600, fontSize: "1.2rem" }}>ATTEMPS</Typography></TableCell>
            <TableCell align="center"> <Typography sx={{ color: "#343434", fontWeight: 600, fontSize: "1.2rem" }}>GRADES</Typography></TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {listAttemptsQuiz.attempts.map((attempt, index) => (
            <TableRow
              key={attempt.id}
              sx={{ '&:last-child td, &:last-child th': { borderBottom: 0 } }}
            >
              <TableCell component="th" scope="row" align="center"
                sx={{ borderRight: 2, borderColor: "rgba(155, 155, 155,.6)" }}>

                <Typography sx={{ color: "#343434", fontWeight: 600, fontSize: "1.2rem" }}> Attemp {index + 1}</Typography>
              </TableCell>
              <TableCell align="center" >
                <Stack direction="row" sx={{ justifyContent: "center", alignItems: "baseline" }}>
                  <Typography sx={{
                    width: 1 / 3,
                    color: attempt?.evaluation?.grade >= 85 ? "#30BE69" : "#FF0000"
                    , fontWeight: 600, fontSize: "1.2rem"
                  }}>
                    {attempt?.evaluation?.grade} % {attempt?.evaluation?.status?.value}

                  </Typography>
                  <Button variant='outlined' sx={{
                    width: 1 / 4,
                    background: 'white'
                  }}
                    onClick={() => handleShowAnswer(attempt.id)}>View Answer</Button>
                </Stack>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

