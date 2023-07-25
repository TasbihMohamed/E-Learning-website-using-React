import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import AccordionDetails from "./AccordionDetails";
import AccordionSummary from "./AccordionSummary";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { useThemePalette } from "../../../Theme/useThemePalatte";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  // border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummaryTheme = styled((props) => (
  <MuiAccordionSummary
    style={{
      width: "100%",
    }}
    // expandIcon={<Button>Show Less</Button>}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: "row-reverse",
  width: "100%",
  "& .MuiAccordionSummary-expandIconWrapper": { width: "100%" },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(0deg)",
  },
}));

const AccordionDetailsTheme = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  width: "100%",
  // borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions({
  sections,
  studentCoursesDetails,
}) {
  const [expanded, setExpanded] = React.useState("panel");
  const { warmGrey4 } = useThemePalette();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div>
      {studentCoursesDetails?.classified_product?.sections?.map((data, i) => (
        <Box key={i}>
          <AccordionSummary
            sections={data}
            expanded={expanded === `panel${i}`}
          />
          <Accordion
            expanded={expanded === `panel${i}`}
            onChange={handleChange(`panel${i}`)}
          >
            <AccordionSummaryTheme
              style={{ width: "100%" }}
              aria-controls="panel1d-content"
              id="panel1d-header"
              expandIcon={
                expanded === `panel${i}` ? (
                  <Stack direction="column" width="100%">
                    <Button sx={{ my: "32px", alignSelf: "flex-start" }}>
                      Show Less
                    </Button>
                    <Divider style={{ width: "100%", color: warmGrey4 }} />
                  </Stack>
                ) : (
                  <Stack direction="column" width="100%">
                    <Button sx={{ my: "32px", alignSelf: "flex-start" }}>
                      Show More
                    </Button>
                    <Divider style={{ width: "100%", color: warmGrey4 }} />
                  </Stack>
                )
              }
            ></AccordionSummaryTheme>
            <AccordionDetailsTheme
              sx={{
                p: "0",
              }}
            >
              <AccordionDetails
                studentCoursesDetails={studentCoursesDetails}
                sections={data}
                sessions={data?.sessions}
              />
            </AccordionDetailsTheme>
          </Accordion>
        </Box>
      ))}
    </div>
  );
}
