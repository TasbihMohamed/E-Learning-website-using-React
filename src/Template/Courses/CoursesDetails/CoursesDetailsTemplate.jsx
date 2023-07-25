import { Box } from "@mui/material";
import React from "react";
import CoursesDetails from "../../../Organisms/Courses/CoursesDetails/CoursesDetails";
import Layout from "../../../Organisms/Layout/Layout";

export default function CoursesDetailsTemplate({
  studentCoursesDetails,
  reviews,
  studentCoursesDetailsLoading,
  filterdSubjectData,
}) {
  return (
    <Layout>
      <CoursesDetails
        studentCoursesDetails={studentCoursesDetails}
        studentCoursesDetailsLoading={studentCoursesDetailsLoading}
        filterdSubjectData={filterdSubjectData}
        reviews={reviews}
      />
    </Layout>
  );
}
