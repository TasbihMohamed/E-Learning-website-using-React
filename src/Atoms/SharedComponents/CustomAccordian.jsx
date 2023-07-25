
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function CustomAccordian2(
  { accordianTitle, accordianDetails, fullAccordianStyle, isExpanded, accordianTitleStyle }) {
  const [expand, setExpand] = React.useState(isExpanded);

  return (

    <Accordion expanded={expand}
      sx={fullAccordianStyle}
    >
      <AccordionSummary onClick={() => setExpand(!expand)}
        expandIcon={<ExpandMoreIcon sx={{ color: '#28A19C' }} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography sx={accordianTitleStyle}>{accordianTitle}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {accordianDetails}

      </AccordionDetails>
    </Accordion>


  );
}