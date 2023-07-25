import { Typography } from '@mui/material'
import React from 'react'
import { useThemePalette } from '../../Theme/useThemePalatte'

export default function CoursesDetailsBoxTitle({ title, mb, fontSize, letterSpacing }) {
    const { blackTwo } = useThemePalette()

    return <>
        <Typography
            color={blackTwo}
            fontSize={{ md: fontSize ? fontSize : '24px', xs: '18px' }}
            fontWeight='bold'
            mb={mb ? mb : '18px'}
            letterSpacing={letterSpacing}
        >
            {title}
        </Typography>
    </>
}
