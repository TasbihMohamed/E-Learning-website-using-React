import { Breadcrumbs, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";
import Ellipse73 from "../../../Assets/Images/Ellipse73.webp";
import Ellipse74 from "../../../Assets/Images/Ellipse74.webp";
import AvatarData from "../../../Atoms/SharedComponents/AvatarData";
import { useThemePalette } from "../../../Theme/useThemePalatte";
import CardVoteIcons from "../../../Atoms/SharedComponents/CardVoteIcons";
import info from "../../../Assets/Images/info.svg";
import LanguageIcon from "@mui/icons-material/Language";
import Loading from "../../../Atoms/SharedComponents/Loading";
import img from "../../../Assets/Images/Rectangle380.png";

export default function CoursesDetailsHeader({
  instructors,
  studentCoursesDetailsLoading,
  studentCoursesDetails,
  sectionsLoading,
}) {
  const { whiteThree, blackTwo, white } = useThemePalette();

  const breadcrumbs = [
    <Link
      key="1"
      to="/"
      style={{
        textDecoration: "none",
        color: white,
        fontWeight: "bold",
      }}
    >
      Design
    </Link>,
    <Typography key="2" color={white} fontWeight="bold">
      User Experience Design
    </Typography>,
  ];
  return (
    <Box bgcolor="primary.main" pl="20px" width="100%">
      {/* ------------------------------------------------ Courses Details Breadcrumbs ----------------------------------- */}
      <Stack direction={{ md: "row" }} justifyContent="space-between">
        <Stack pt="33px" width={{ lg: "715px", xs: "55%" }}>
          <Breadcrumbs
            separator={
              <NavigateNextIcon sx={{ color: white }} fontSize="small" />
            }
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
          {/* ------------------------------------------------ Courses Details Title and description ----------------------------------- */}
          <Box color="info.main">
            <Typography
              fontSize={{ lg: "32px", md: "20px" }}
              fontWeight="bold"
              m="37px 61px 17px 0px"
            >
              {studentCoursesDetails?.classified_product?.title}
            </Typography>
            <Typography fontSize={{ lg: "16px", xs: "13px" }} fontWeight="600">
              {studentCoursesDetails?.classified_product?.description
                .slice(0, 100)
                .trim()
                .concat("...")}
            </Typography>
          </Box>
          {/* ------------------------------------------------ Courses Details Title and Rating and LastUpdate and Language ----------------------------------- */}
          <Stack
            direction={{ lg: "row" }}
            justifyContent={{ lg: "flex-start", xs: "space-between" }}
            alignItems={{ lg: "center" }}
            rowGap={{ lg: 0, xs: "10px" }}
            m="16px 0 32px"
          >
            <CardVoteIcons
              rating_ml="9.9px"
              reviews_number_font_size="14px"
              final_rating_from_reviews_fontSize="19px"
              final_rating_from_reviews={
                studentCoursesDetails?.final_rating_from_reviews
              }
              reviews_number={`(${studentCoursesDetails?.reviews_number})`}
              rating_color={white}
              reviews_number_color={white}
            />
            <Stack direction="row" alignItems="center" mr={{ lg: "44px" }}>
              <img src={info} alt="icon" width="20px" height="20px" />
              <Typography color={white} ml="8px">
                Last Updated 3/2019
              </Typography>
            </Stack>
            <Stack direction="row" sx={{ color: white }}>
              <LanguageIcon />
              <Typography fontWeight="500" ml="8px">
                English
              </Typography>
            </Stack>
          </Stack>
          {/* ------------------------------------------------ Courses Details Title and Avatars ----------------------------------- */}
          <Stack direction="row" pb="25px">
            {instructors?.map((instructor) => (
              <AvatarData
                nameColor={white}
                key={instructor?.instructor_id}
                avatarImg={instructor?.profile_picture_url}
                avatarHeight="32px"
                avatarWidth="32px"
                name={instructor?.name}
              />
            ))}
          </Stack>
          {/* ------------------------------------------------ Courses Details Title and description ----------------------------------- */}
        </Stack>
        <Stack
          height="387px"
          width={{ md: "613px", xs: "100%" }}
          sx={{ clipPath: "polygon(56% 0, 100% 0, 100% 100%, 0% 100%)" }}
          position="relative"
        >
          <img
            alt="course img"
            height="387px"
            width="100%"
            src={
              studentCoursesDetails?.classified_product?.image_url
                ? studentCoursesDetails?.classified_product?.image_url
                : img
            }
          />
          <Box
            bgcolor="rgba(17, 138, 203, 0.32)"
            position="absolute"
            top="0"
            right="0"
            left="0"
            bottom="0"
          ></Box>
        </Stack>
      </Stack>
    </Box>
  );
}
