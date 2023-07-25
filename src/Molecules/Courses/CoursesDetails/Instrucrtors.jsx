import { Stack } from "@mui/system";
import React from "react";
import InstractorsDetails from "./InstractorsDetails";
import CoursesDetailsBoxTitle from "../../../Atoms/SharedComponents/CoursesDetailsBoxTitle";
import { useThemePalette } from "../../../Theme/useThemePalatte";

export default function Instrucrtors({ studentCoursesDetails }) {
  const { whiteThree } = useThemePalette();

  return (
    <>
      <Stack
        id="Instructors"
        bgcolor={whiteThree}
        width="100%"
        pt="32px"
        pb="40px"
        px={{ lg: "44px", xs: "20px" }}
      >
        <CoursesDetailsBoxTitle title="Instrucrtors" />
        <InstractorsDetails studentCoursesDetails={studentCoursesDetails} />
      </Stack>
    </>
  );
}
