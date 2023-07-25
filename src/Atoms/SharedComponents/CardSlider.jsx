
import React, { useState } from "react";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DefaultCard from "./DefaultCard";
import { Box } from "@mui/material";


function CardSlider({ data }) {

    const arrowStyle = { color: '#28a19c', px: 3, "&:hover": { color: 'black' } }

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        prevArrow: <ArrowBackIosIcon sx={{ color: '#28a19c' }} />,
        nextArrow: <ArrowForwardIosIcon sx={{ color: '#28a19c' }} />,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Slider {...settings}>
            {data.map((item, index) => (
                <Box sx={{ width: '24%', m: 2 }}>
                    <DefaultCard data={item} />
                </Box>
            ))}
        </Slider>

    );
}
export default CardSlider;

