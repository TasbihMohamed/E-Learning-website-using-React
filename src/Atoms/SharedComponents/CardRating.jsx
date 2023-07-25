import React from 'react'
import Rating from '@mui/material/Rating';

export default function CardRating({ final_rating_from_reviews , iconSize}) {
    const [value, setValue] = React.useState(final_rating_from_reviews);
    const handleChange = (e, newValue) => {
        setValue(newValue)
    }
    return <>
        <Rating
            name="simple-controlled"
            value={value}
            onChange={handleChange}
            precision={0.5}
            size={iconSize}
            sx={{
                '& .MuiRating-iconEmpty': {
                    color: 'secondary.main',
                },
            }}
        />
    </>
}
