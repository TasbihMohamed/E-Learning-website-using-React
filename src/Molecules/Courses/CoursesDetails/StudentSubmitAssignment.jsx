import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import TextArea from "../../../Atoms/TextArea/TextArea";
import { useThemePalette } from "../../../Theme/useThemePalatte";
import attachment from "../../../Assets/Images/attachment-icon.svg";
import microphone from "../../../Assets/Images/micfophone-icon.svg";

export default function StudentSubmitAssignment({
  studentCoursesDetails,
  sessions,
}) {
  const { blackTwo } = useThemePalette();
  const [assignment, setAssignment] = useState([]);
  const [value, setValue] = useState();

  useEffect(() => {
    setAssignment(sessions?.map((session) => session?.assignments).flat(1)[0]);
  }, [sessions]);

  return (
    <>
      <Stack maxWidth="60%">
        <Stack direction="row">
          <Typography fontSize="32px" color={blackTwo} fontWeight="500">
            Assignment :{" "}
          </Typography>
          <Typography fontSize="32px" color={blackTwo} fontWeight="400">
            {" "}
            {assignment?.title}
          </Typography>
        </Stack>
        <Stack direction="row">
          <Typography fontSize="24px" color={blackTwo} fontWeight="500">
            Due Date :{" "}
          </Typography>
          <Typography fontSize="24px" color={blackTwo}>
            {assignment?.due_date}
          </Typography>
        </Stack>
        <Stack direction="row">
          <Typography fontSize="24px" color={blackTwo} fontWeight="500">
            Grade :{" "}
          </Typography>
          <Typography fontSize="24px" color={blackTwo}>
            To pass 80% or higher
          </Typography>
        </Stack>
        <Stack>
          <Typography fontSize="28px" color={blackTwo} fontWeight="500">
            Answer The following question :{" "}
          </Typography>
          <Typography fontSize="22px" color={blackTwo}>
            {assignment?.title}
          </Typography>
        </Stack>
        <Stack>
          <Typography fontSize="28px" color={blackTwo} fontWeight="500">
            Answer :{" "}
          </Typography>
          <Box position="relative">
            <TextArea
              style={{
                borderRadius: "12px",
                color: blackTwo,
                fontSize: "18px",
                fontWeight: 500,
              }}
              placeholder="Type your answer here ..."
              value={value}
              onchange={(val) => setValue(val)}
            />
            <Stack position="absolute" bottom="24px" width="100%">
              <Stack direction="row" justifyContent="space-between" px="20px">
                <Stack direction="row" alignItems="center">
                  <IconButton
                    disableRipple
                    sx={{
                      borderRadius: "0",
                      "&:hover": {
                        bgcolor: "#28A19C10",
                      },
                    }}
                    aria-label="upload picture"
                    component="label"
                  >
                    <input hidden accept="*" type="file" />
                    <img src={microphone} width="40px" height="40px" alt="" />
                  </IconButton>
                  <Divider orientation="vertical" flexItem />
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="label"
                    disableRipple
                    sx={{
                      borderRadius: "0",
                      "&:hover": {
                        bgcolor: "#28A19C10",
                      },
                    }}
                  >
                    <input hidden accept="*" type="file" />
                    <img src={attachment} width="40px" height="40px" alt="" />
                  </IconButton>
                </Stack>
                <Box alignSelf="center">
                  <Button
                    variant="contained"
                    disabled={value ? false : true}
                    sx={{
                      boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
                      px: "32px",
                      py: "7px",
                      fontWeight: 600,
                      "&:disabled": {
                        color: "rgba(255, 255, 255, 0.4)",
                        backgroundColor: "#28A19C",
                      },
                    }}
                  >
                    Submit
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </>
  );
}
