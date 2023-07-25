import React from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Button, Stack } from '@mui/material';

export default function SessionPagination({ changeSession, nextBtnDisabled, preBtnDisabled, paginateContent, hideNext }) {

    return (
        <Stack direction='row' sx={{ justifyContent: 'space-between', alignItems: "baseline" }}>
            <Button variant="text" startIcon={<ArrowBackIosNewIcon />}
                onClick={() => changeSession(0)}
                disabled={preBtnDisabled}
            >
                Previous
            </Button>
            <Stack> {paginateContent}</Stack>
            {hideNext ? null : <Button variant="text" endIcon={<ArrowForwardIosIcon />}
                onClick={() => changeSession(1)}
                disabled={nextBtnDisabled}
            >  Next
            </Button>}
        </Stack>
    )
}

