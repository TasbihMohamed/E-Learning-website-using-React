import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllSubjectsRequest } from "../../../Modules/Subjects";
import CoursesListTemplate from "../../../Template/Courses/CoursesList/CoursesListTemplate";
import { fetchFilteredCoursesRequest } from "../../../Modules/Subjects";
import { getCoursesListRequest } from "../../../Modules/Courses";


export default function CoursesListPage() {
  const [pageNumber, setPageNumber] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(3);

  const diptach = useDispatch();

  useEffect(() => {
    diptach(fetchAllSubjectsRequest({
      page_number: pageNumber
      , page_size: 5
    }));
  }, [pageNumber]);

  const { allSubjects } = useSelector((state) => state.subjects);

  useEffect(() => {
    diptach(getCoursesListRequest({
      page_number: pageNumber,
      page_size: 3,
       school_class_id: 1
    }));
  }, [pageNumber]);

  const { coursesList } = useSelector((state) => state.courses);
  console.log('coursesList', coursesList?.courses?.STEAM);

  const PageChanging = (ClickedPage) => {
    setPageNumber(ClickedPage);
  };
  // ////////////////////////////////
  // useEffect(() => {

  //   diptach(fetchFilteredCoursesRequest({
  //     page_number: 1, page_size: 10, curriculum_id: 16, subject_id: 2, instructor_id: 4
  //   }));
  // }, []);
  // const { filterdCourses } = useSelector((state) => state.subjects);
  // // console.log('ggfgfg', filterdCourses);
  // ////////////////////////////////

   // ////////////////////////////////
   //quiz
  // useEffect(() => {

  //   diptach(fetchFilteredCoursesRequest({
  //     page_number: 1, page_size: 10, curriculum_id: 16, subject_id: 2, instructor_id: 4
  //   }));
  // }, []);
  // const { filterdCourses } = useSelector((state) => state.subjects);
  // // console.log('ggfgfg', filterdCourses);
  // ////////////////////////////////

  return <CoursesListTemplate allSubjectData={allSubjects}
    allCoursesList={coursesList?.courses?.STEAM}
    PageChanging={PageChanging} dataPerPage={dataPerPage}
  />;
}


