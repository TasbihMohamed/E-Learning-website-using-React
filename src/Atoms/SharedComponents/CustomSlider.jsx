import React, { useCallback } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "@mui/material";
import { SampleNextArrow, SamplePrevArrow } from "../SliderArrows";

export default function CustomSlider({
  children,
  slides1024,
  slides600,
  slides1020,
  className,
}) {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: slides1024,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: slides1024,
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: slides1020,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: slides600,
          slidesToScroll: 1,
          initialSlide: 2,
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
    <>
      <Container maxWidth="lg">
        <Slider {...settings} className={className}>
          {children}
        </Slider>
      </Container>
    </>
  );
}
