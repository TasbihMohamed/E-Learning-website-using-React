import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import CoursesDetailsBoxTitle from "../../../Atoms/SharedComponents/CoursesDetailsBoxTitle";
import { useThemePalette } from "../../../Theme/useThemePalatte";
import instractorImg from "../../../Assets/Images/instractorImg.webp";
import starIcon from "../../../Assets/Images/starIcon.svg";
import groupIcon from "../../../Assets/Images/groupIcon.svg";
import playIcon from "../../../Assets/Images/playIcon.svg";

export default function InstractorsDetails({ studentCoursesDetails }) {
  const { blackTwo } = useThemePalette();

  const instrucrtorsDetails = [
    { icon: starIcon, number: "4.5", text: "Instractor rating" },
    { icon: groupIcon, number: "452.272", text: "Lerner" },
    { icon: playIcon, number: "30", text: "Courses" },
  ];

  return (
    <>
      <Stack
        direction={{ lg: "row" }}
        columnGap="45px"
        rowGap={{ lg: "0", xs: "32px" }}
      >
        {studentCoursesDetails?.classified_product?.instructors?.map(
          (data, i) => (
            <Stack direction="row" key={i}>
              <Box>
                <img
                  alt="instractor img"
                  src={
                    data?.profile_picture_url
                      ? data?.profile_picture_url
                      : instractorImg
                  }
                  width="100px"
                  height="100px"
                  style={{ borderRadius: "50%" }}
                />
              </Box>
              <Stack ml="16px">
                <CoursesDetailsBoxTitle
                  mb="8px"
                  title={data?.name}
                  fontSize="20px"
                />
                <Typography
                  sx={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    width: "248px",
                  }}
                  fontSize="15px"
                  mb="18px"
                >
                  {data?.bio}
                </Typography>
                {instrucrtorsDetails?.map((detail, i) => (
                  <Stack key={i} mt="8px" direction="row" alignItems="center">
                    <img
                      src={detail?.icon}
                      alt="start icon"
                      width="16px"
                      height="15px"
                    />
                    <Typography
                      ml="16px"
                      color={blackTwo}
                      display="inline-block"
                      fontWeight="bold"
                    >
                      {detail?.number}
                    </Typography>
                    <Typography
                      ml="5px"
                      display="inline-block"
                      color={blackTwo}
                    >
                      {detail?.text}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          )
        )}
      </Stack>
    </>
  );
}
