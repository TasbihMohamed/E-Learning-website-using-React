import React from "react";
import FiberManualRecordSharpIcon from "@mui/icons-material/FiberManualRecordSharp";
import { Container, Typography } from "@mui/material";
import CourseDetailsBox from "./CourseDetailsBox";
import BenefitsList from "../../Home/BenefitsList";
import DoneIcon from "@mui/icons-material/Done";
import { Box, Stack } from "@mui/system";
import Syllabus from "./Syllabus";
import Instrucrtors from "./Instrucrtors";
import CoursesDetailsBoxTitle from "../../../Atoms/SharedComponents/CoursesDetailsBoxTitle";
import { useThemePalette } from "../../../Theme/useThemePalatte";
import Vimeo from "@u-wave/react-vimeo";
import CoursesDetailsQuizzes from "./CoursesDetailsQuizzes";
import CoursesDetailsAssignments from "./CoursesDetailsAssignments";

export default function CoursesDetailsOverview({ studentCoursesDetails }) {
  const { blackTwo, warmGrey3, secondryColor } = useThemePalette();

  const dotIcon = (
    <FiberManualRecordSharpIcon sx={{ width: "10px", color: blackTwo }} />
  );
  const checkIcon = <DoneIcon sx={{ color: secondryColor }} />;

  const requirementsList = [
    {
      title:
        "You will need a copy of Adobe XD 2019 or above. A free trial can be downloaded from Adobe",
      icon: dotIcon,
    },
    { title: "No previous design experience is needed.", icon: dotIcon },
    { title: "No previous Adobe XD skills are needed.", icon: dotIcon },
  ];

  const learnList = [
    { title: "Lorem ipsum dolor sit amet, consetetur", icon: checkIcon },
    { title: "Lorem ipsum dolor sit amet, consetetur", icon: checkIcon },
    {
      title:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy",
      icon: checkIcon,
    },
    { title: "Lorem ipsum dolor sit amet, consetetur", icon: checkIcon },
    { title: "Lorem ipsum dolor sit", icon: checkIcon },
    {
      title: "Lorem ipsum dolor sit amet, consetetur sadipscing",
      icon: checkIcon,
    },
    { title: "Lorem ipsum dolor sit amet, consetetur", icon: checkIcon },
    { title: "Lorem ipsum dolor amet", icon: checkIcon },
  ];
  const cardItems = [
    { title: "13 hours on-demand video", icon: "Group1175" },
    { title: "69 downloadable resources", icon: "Group1174" },
    { title: "Full lifetime access", icon: "Group1173" },
    { title: "Access on mobile and TV", icon: "Group1172" },
    { title: "Assignments", icon: "Group1171" },
    { title: "Certificate of completion", icon: "Group1170" },
  ];

  return (
    <Stack direction="row" justifyContent="space-between" alignItems="start">
      <Box width={{ xs: "100%", md: "70%" }}>
        <Container maxWidth="xl">
          <Stack direction="row" justifyContent="space-between" width="100%">
            <Box width="100%">
              <CourseDetailsBox
                title="About This Course"
                actionTitle="Show More"
                action
                description={
                  studentCoursesDetails?.classified_product?.description
                }
                childrenMb="32px"
                pt="32px"
                px="36px"
              >
                <Typography color={blackTwo} fontWeight="500">
                  {studentCoursesDetails?.classified_product?.description}
                </Typography>
              </CourseDetailsBox>
              <CourseDetailsBox
                title="Requirements"
                actionTitle="Show More"
                pt="32px"
                px="36px"
              >
                {requirementsList.map((item, i) => (
                  <BenefitsList
                    textColor={warmGrey3}
                    pl="5px"
                    mb="16px"
                    textMarginLeft="5px"
                    key={i}
                    ListIcon={item.icon}
                    fontSize="15px"
                  >
                    {item.title}
                  </BenefitsList>
                ))}
              </CourseDetailsBox>
              <CourseDetailsBox
                title="What you will learn"
                action
                actionTitle="Show More"
                pt="32px"
                px="36px"
              >
                <Stack direction="row" flexWrap="wrap">
                  {learnList.map((item, i) => (
                    <Box width={{ md: "327px" }} key={i}>
                      <BenefitsList
                        textColor={warmGrey3}
                        pl="5px"
                        mb="16px"
                        textMarginLeft="5px"
                        ListIcon={item.icon}
                        fontSize="15px"
                      >
                        {item.title}
                      </BenefitsList>
                    </Box>
                  ))}
                </Stack>
              </CourseDetailsBox>
            </Box>
          </Stack>
          <Syllabus studentCoursesDetails={studentCoursesDetails} />
          <Instrucrtors studentCoursesDetails={studentCoursesDetails} />
          {/* <CoursesDetailsReviews
          studentReviews={studentReviews}
          final_rating_from_reviews={
            studentCoursesDetails?.final_rating_from_reviews
          }
          reviews_number={studentCoursesDetails?.reviews_number}
          studentCoursesDetails={studentCoursesDetails}
          reviews={reviews}
        /> */}
          <CoursesDetailsQuizzes
            studentCoursesDetails={studentCoursesDetails}
          />
          <CoursesDetailsAssignments
            studentCoursesDetails={studentCoursesDetails}
          />
        </Container>
      </Box>
      {/* ----------------------------------------------- Courses Details Card ------------------------------------------------ */}
      <Box maxWidth="30%">
        <Stack
          ml="auto"
          sx={{ display: { lg: "block", xs: "none" }, my: "32px" }}
          boxShadow=" 1px 1px 6px 0 rgba(0, 0, 0, 0.16)"
          bgcolor="info.main"
          borderRadius="20px"
          height="fit-content"
        >
          <Box>
            <Vimeo
              video={
                studentCoursesDetails?.classified_product?.video_url
                  ? studentCoursesDetails?.classified_product?.video_url
                  : "https://vimeo.com/498071737"
              }
              autoplay={false}
              loop
              muted={false}
              // showPortrait
              // background={true}
              controls={true}
            />
            {/* <CoursesDetailsQuizzes
              studentCoursesDetails={studentCoursesDetails}
            />
            <CoursesDetailsAssignments
              studentCoursesDetails={studentCoursesDetails}
            /> */}
            <Box mt="32px" mb="28px">
              <Container maxWidth="xl">
                <CoursesDetailsBoxTitle
                  title="This course includes :"
                  fontSize="20px"
                  mb="0"
                  letterSpacing="-0.77px"
                />
                <Stack direction="row" mt="28px" flexWrap="wrap">
                  {cardItems.map((item, i) => (
                    <Box width={{ md: "327px" }} key={i}>
                      <BenefitsList
                        textColor={warmGrey3}
                        pl="5px"
                        iconMr="15px"
                        mb="16px"
                        textMarginLeft="5px"
                        imgSrc={item.icon}
                        fontSize="15px"
                      >
                        {item.title}
                      </BenefitsList>
                    </Box>
                  ))}
                </Stack>
              </Container>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
}
