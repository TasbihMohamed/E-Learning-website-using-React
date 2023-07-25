import { Typography } from '@mui/material'
import { Box } from '@mui/material'
import React from 'react'
import { useThemePalette } from '../../Theme/useThemePalatte'

export default function CousresCardDetails({ description, instructorsNames }) {
    const { blackTwo } = useThemePalette()
    return <>
        <Box
            color={blackTwo}
        >
            {/* ------------------------------------------- instructors name --------------------------- */}
            <Typography
                fontSize='12px'
                whiteSpace='nowrap'
                overflow='hidden'
                textOverflow='ellipsis'
                minHeight='15px'
            >
                {instructorsNames}
            </Typography>
            {/* ---------------------------------------- description -----------------------------  */}
            <Typography
                fontSize='11px'
                marginY='1rem'
                whiteSpace='nowrap'
                overflow='hidden'
                textOverflow='ellipsis'
            >
                {description}
                <Typography
                    variant='span'
                    fontSize='10px'
                    fontWeight='600'
                    sx={{ cursor: 'pointer' }}
                    color='#000'
                >
                    See More
                </Typography>
            </Typography>
        </Box>
    </>
}
