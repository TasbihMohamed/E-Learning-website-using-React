import { Stack, Typography } from '@mui/material'
import React from 'react'
import { useThemePalette } from '../../Theme/useThemePalatte';
import { Box } from '@mui/material';
import CardRating from './CardRating';

export default function CardVoteIcons({
    rating_color,
    reviews_number_direction,
    final_rating_from_reviews,
    reviews_number,
    final_rating_from_reviews_fontSize,
    reviews_number_font_size,
    rating_ml,
    final_rating_from_reviews_Font_Weight,
    reviews_number_direction_s,
    reviews_number_color
}) {
    const { yellow, warmGrey2, white } = useThemePalette()

    return <>
        <Stack
            direction='row'
            alignItems='center'
            mr={{ lg: '121px' }}
            color={yellow}
        >
            {/* ---------------------------------- display final rating from reviews ----------------- */}
            <Box>
                <Typography color={rating_color && rating_color} fontSize={final_rating_from_reviews_fontSize} fontWeight={final_rating_from_reviews_Font_Weight} >{final_rating_from_reviews}</Typography>
            </Box>
            <Stack direction={reviews_number_direction ? reviews_number_direction : 'row'} alignItems={reviews_number_direction_s ? reviews_number_direction_s : 'center'} >
                <Stack
                    direction='row'
                    justifyContent='center'
                    alignItems='center'
                    py="5px"
                    sx={{
                        '& > legend': { mt: 2 },
                    }}
                    ml={rating_ml}
                >
                    {/* ---------------------------------- Card Rating reviews ----------------------------- */}
                    <CardRating iconSize='small' final_rating_from_reviews={final_rating_from_reviews} />
                </Stack>
                <Box>
                    <Typography
                        color={reviews_number_color ? reviews_number_color : warmGrey2}
                        fontSize={reviews_number_font_size}
                        paddingX='5px'
                    >
                        {reviews_number}
                    </Typography>
                </Box>
            </Stack>
        </Stack>
    </>
}
