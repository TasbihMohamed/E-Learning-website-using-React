import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useThemePalette } from "../../../Theme/useThemePalatte";
import CoursesCard from "../../../Atoms/SharedComponents/CoursesCard";
import CustomSlider from "../../../Atoms/SharedComponents/CustomSlider";
import CoursesDetailsHeader from "../../../Molecules/Courses/CoursesDetails/CoursesDetailsHeader";
import CoursesDetailsBoxTitle from "../../../Atoms/SharedComponents/CoursesDetailsBoxTitle";
import CustomTabs from "../../../Molecules/Courses/CoursesDetails/CustomTabs";
import Loading from "../../../Atoms/SharedComponents/Loading";
import StudentSubmitAssignment from "../../../Molecules/Courses/CoursesDetails/StudentSubmitAssignment";

export default function CoursesDetails({
  studentCoursesDetails,
  reviews,
  studentCoursesDetailsLoading,
  filterdSubjectData,
  sessions,
}) {
  const { whiteTwo } = useThemePalette();

  const { courses, sectionsLoading } = useSelector((state) => state.courses);
  const [coursesArr, setCoursesArr] = useState([]);
  // ------------------------ Extraction Needed data from Courses api response ---------------------------------
  useEffect(() => {
    let extractedData = [];
    const myCoursesResponse = courses?.courses;
    for (const key in myCoursesResponse) {
      extractedData.push(...myCoursesResponse[key]);
    }
    setCoursesArr(extractedData);
  }, [courses]);

  return (
    <>
      {/* <StudentSubmitAssignment
        sessions={sessions}
        studentCoursesDetails={studentCoursesDetails}
      /> */}
      <Stack bgcolor={whiteTwo}>
        {sectionsLoading ? (
          <Stack
            height="424px"
            maxWidth={{ lg: "715px" }}
            justifyContent="center"
            alignItems="center"
          >
            <Loading />
          </Stack>
        ) : (
          <CoursesDetailsHeader
            instructors={studentCoursesDetails?.classified_product?.instructors}
            studentCoursesDetailsLoading={studentCoursesDetailsLoading}
            studentCoursesDetails={studentCoursesDetails}
            sectionsLoading={sectionsLoading}
          />
        )}
        <Stack>
          <CustomTabs
            studentCoursesDetails={studentCoursesDetails}
            studentCoursesDetailsLoading={studentCoursesDetailsLoading}
            reviews={reviews}
          />
        </Stack>
        <Box bgcolor="#fff" px={{ lg: "80px" }} mt="32px" py="32px">
          <Box textAlign={{ md: "start", xs: "center" }}>
            <CoursesDetailsBoxTitle
              title={`${"Variable"} User Experience Design Courses`}
            />
          </Box>
          <CustomSlider
            className="courses-details"
            slides1024={3}
            slides1020={1}
            slides600={1}
          >
            {filterdSubjectData.map((data, i) => (
              
              <Stack key={i} maxWidth="272px">
                <CoursesCard data={data} />
              </Stack>
            ))}
          </CustomSlider>
        </Box>
      </Stack>
    </>
  );
}
