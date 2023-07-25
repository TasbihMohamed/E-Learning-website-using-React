import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { useParams } from "react-router-dom";
import AccordianList from "./AccordianList";

export default function ChapterLeftSide({
  studentCoursesDetails,
  sessionChossen,
}) {
  const { courseId, sectionId, sessionId } = useParams();

  return (
    <Stack sx={{background:"#FFFFFF"}}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "rgba(155, 155, 155 ,.45)",
        }}
      >
        <Typography
          sx={{
            px: 2,
            py: 3,
            fontSize: "1.2rem",
            width: { lg: "70%", xs: "100%" },
            fontWeight: 600,
            lineHeight: " 22px",
          }}
        >
          {studentCoursesDetails?.classified_product?.title}
        </Typography>
      </Box>
      {studentCoursesDetails?.classified_product?.sections?.map(
        (section, sectionIndex) => {
          return (
            <Stack key={section.section_id}>
              <AccordianList
                section={section}
                session={sessionChossen}
                sectionIndex={sectionIndex}
              />
            </Stack>
          );
        }
      )}
    </Stack>
  );
}
