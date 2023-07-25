import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getAllReviewsRequest,
  getStudentCoursesDetailsRequest,
  getStudentSessionsRequest,
} from "../../../Modules/Courses";
import { fetchFilteredSubjectsRequest } from "../../../Modules/Subjects";
import CoursesDetailsTemplate from "../../../Template/Courses/CoursesDetails/CoursesDetailsTemplate";

export default function CoursesDetailsPage() {
  const dispatch = useDispatch();
  const { course_id } = useParams();
  const {
    studentCoursesDetails,
    studentCoursesDetailsLoading,
    reviews,
    sessions,
  } = useSelector((state) => state.courses);
  const { filterdSubject } = useSelector((state) => state.subjects);
  const [filterdSubjectData, setFilterdSubjectData] = useState([]);

  useEffect(() => {
    dispatch(getStudentCoursesDetailsRequest({ course_id: course_id }));
    dispatch(
      fetchFilteredSubjectsRequest({
        page_number: 1,
        page_size: 10,
        subject_id: 3,
      })
    );
    dispatch(getStudentSessionsRequest({ course_id, section_id: 56 }));
  }, []);

  useEffect(() => {
    let extractedData = [];
    const filteredSubjectData = filterdSubject;
    for (const key in filteredSubjectData) {
      extractedData.push({ ...filteredSubjectData[key] });
    }
    setFilterdSubjectData(extractedData);
  }, [filterdSubject]);

  return (
    <>
      <CoursesDetailsTemplate
        studentCoursesDetails={studentCoursesDetails}
        studentCoursesDetailsLoading={studentCoursesDetailsLoading}
        filterdSubjectData={filterdSubjectData}
        reviews={reviews}
        sessions={sessions}
      />
    </>
  );
}
