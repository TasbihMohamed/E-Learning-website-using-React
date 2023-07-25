import { Button, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { useThemePalette } from '../../Theme/useThemePalatte'

export default function ReservationButtons({ sectionPrice, reservationClick, enrollFontSize, enrollMb,addToCardFontSize, enrollFontWeight, enrollPY, enrollPX, boxWidth, enrollType, boxMl }) {
    const { primaryColor } = useThemePalette()

    const addToCard = () => { }
    return <>
        <Stack width={boxWidth} ml={{ md: boxMl ? boxMl : '51px', xs: '15px' }} mb={{ md: '0', xs: '20px' }} rowGap='8px' >
            <Button
                variant='contained'
                sx={{
                    boxShadow: ' 0 3px 6px 0 rgba(0, 0, 0, 0.16)',
                    letterSpacing: '0.19px',
                    fontSize: enrollFontSize,
                    fontWeight: enrollFontWeight,
                    py: enrollPY,
                    px: enrollPX, 
                    mb:enrollMb
                }}
                onClick={reservationClick}
            >
                Enroll {enrollType} <Typography ml='6px' fontWeight='bold'  >{sectionPrice && '$'}{sectionPrice}</Typography>
            </Button>
            <Button variant='outlined'
                sx={{
                    boxShadow: ' 0 3px 6px 0 rgba(0, 0, 0, 0.16)',
                    border: `2px solid ${primaryColor}`,
                    fontSize: addToCardFontSize,
                    fontWeight: '600',
                    py: enrollPY,
                    px: enrollPX,
                    '&:hover': {
                        border: `2px solid ${primaryColor}`,
                    },
                }}
                
                onClick={addToCard}
            >
                Add to Cart
            </Button>
        </Stack>
    </>
}
