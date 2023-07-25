import React from 'react'
import { Box, Container, Typography, Stack } from "@mui/material";
// import MySlider from '../../../Atoms/SharedComponents/MySlider';
// import DefaultCard from '../../../Atoms/SharedComponents/DefaultCard';
// import CardSlider from '../../../Atoms/SharedComponents/CardSlider';
import CustomSlider from '../../../Atoms/SharedComponents/CustomSlider';
import CoursesCard from '../../../Atoms/SharedComponents/CoursesCard';

export default function CoursesListSlider({ allSubjectData }) {
  return (
    <>
      <Stack alignItems="center">
        <Typography sx={{
          fontSize: '1.6rem', lineHeight: "45px",
          fontWeight: 700, letterSpacing: "1.2px", color: "#343434",
        }}
        >Design Courses
        </Typography>
      </Stack>
      <Stack alignItems="center">
        <Typography sx={{ fontSize: "23px", fontWeight: 700, lineHeight: "45px", color: "#ffba00" }}>
          Courses to get you started
        </Typography>
      </Stack>
      <Stack sx={{ py: 2 ,mb:"6%" }}>

        <CustomSlider
          className="courses-details"
          slides1024={4}
          slides1020={1}
          slides600={1}
        >
          {allSubjectData?.map((data, i) => (

            <Stack key={i} maxWidth="272px">
              <CoursesCard data={data} />
            </Stack>
          ))}
        </CustomSlider>

      </Stack>

    </>
  )
}
