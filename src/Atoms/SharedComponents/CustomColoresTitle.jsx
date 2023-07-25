import { Typography } from '@mui/material'
import { Box } from '@mui/material'
import React from 'react'

export default function CustomColoresTitle({ firstPart, secondPart, firstPartColor, secondPartColor, fontSize, component, variant, width }) {
    return <>
        <Typography
            variant={variant}
            component={component}
            sx={{
                color: firstPartColor,
                fontSize: fontSize
            }}
            fontWeight='600'
            width={width || 'auto'}
            lineHeight='1.25'
        >
            {firstPart}
            <Box
                component="span"
                sx={{ color: secondPartColor }}
                fontWeight='600'
            > {secondPart}
            </Box>
        </Typography>
    </>
}
