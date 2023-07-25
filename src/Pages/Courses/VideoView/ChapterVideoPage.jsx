import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChapterVideoTemplate from "../../../Template/Courses/VideoView/ChapterVideoTemplate";
import { getStudentCoursesDetailsRequest } from "../../../Modules/Courses";

export default function ChapterVideoPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStudentCoursesDetailsRequest({ course_id: 88 }));
  }, []);

  const { studentCoursesDetails } = useSelector((state) => state.courses);
  // console.log("studentCoursesDetails", studentCoursesDetails);
  
  return <ChapterVideoTemplate studentCoursesDetails={studentCoursesDetails} />;
}
