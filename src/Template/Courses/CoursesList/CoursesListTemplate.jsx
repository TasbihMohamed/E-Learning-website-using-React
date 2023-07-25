import React, { useState, useEffect } from "react";
import Pagination from "../../../Molecules/Courses/CoursesList/Pagination";
import { Box, Container, Typography, Stack } from "@mui/material";
import dataBase from "../../../edugramdb.json";
import DropDown from "../../../Organisms/Courses/CoursesList/DropDown";
import CoursesCard from "../../../Atoms/SharedComponents/CoursesCard";
import Layout from "../../../Organisms/Layout/Layout";
import CoursesListSlider from "../../../Organisms/Courses/CoursesList/CoursesListSlider";
// import Test from "../../../Pages/Courses/QuizView/Test";
// import DropDownTest from "../../../Organisms/Courses/CoursesList/DropDownTest";


export default function CoursesListTemplate({ allSubjectData, PageChanging, dataPerPage ,allCoursesList}) {

  const pageCount = Math.ceil(allSubjectData.length / dataPerPage);

  const [filters, setFilters] = useState();

  const PaginationPage = (ClickedPage) => {
    PageChanging(ClickedPage)
  };



  const onApply = (filter) => {
    setFilters(...filter);
  };

  const [existedchecks, setExistedchecks] = useState([]);

  const modalChecked = (ele) => {
    if (existedchecks.indexOf(ele) === -1) {
      setExistedchecks([...existedchecks, ele]);
    } else {
      const Delete = existedchecks.filter((check, index) => {
        return check !== ele;
      });
      setExistedchecks(Delete);
    }
  };

  return (
    <Layout>
      <Box sx={{ backgroundColor: "#f3f3f3", py: "5%",pb:"2%" , color: "black" }}>
        <Container maxWidth="lg">
          <Stack className="coursesListSlider" >
            <CoursesListSlider allSubjectData={allSubjectData} />
          </Stack>

          {/* ================================================ */}
          <Stack>
            <Typography sx={{ py: 3, fontSize: "23px", lineHeight: "45px", color: "#ffba00" }}> Filtered By</Typography>
          </Stack>
          <Stack direction="row" gap={2}>
            {dataBase.filterCategory.map((item, index) => {
              return (
                <Stack sx={{ width: "15%" }}>
                  <DropDown
                    data={item}
                    key={index}
                    onApply={onApply}
                    modalChecked={modalChecked}
                    existedchecks={existedchecks}
                  />
                </Stack>
              );
            })}
          </Stack>
          {/* test ====================== */}
{/*           
          <Stack direction="row" gap={2}>
            {dataBase.filterCategory.map((item, index) => {
              return (
                <Stack sx={{ width: "15%" }}>
                  <DropDownTest
                    data={item}
                    key={index}
                    onApply={onApply}
                    modalChecked={modalChecked}
                    existedchecks={existedchecks}
                  />
                </Stack>
              );
            })}
          </Stack>
   */}


          {/* ==========  cards  ========================== */}

          <Stack direction="row" sx={{ mt: 2, flexWrap: "wrap", 
          gap:3,
          justifyContent: { lg: "start", xs: "center" },
           alignItems: "center", }}>

            {allCoursesList?.map((item, index) => {
              return (
                <Box sx={{  maxWidth:"272px"   
                   // width: { lg: "24%", md: "30%",sm:"60%" , xs: "70%" }  ,     
                }}>
                  <CoursesCard data={item} />
                </Box>
              );
            })}
          </Stack>

          {/* =========================================== */}
          <Stack alignItems="center" sx={{ mt: "4%" }}>
            <Pagination PaginationPage={PaginationPage} pageCount={pageCount} />
          </Stack>
        </Container>
      </Box>
    </Layout>
  );
}
