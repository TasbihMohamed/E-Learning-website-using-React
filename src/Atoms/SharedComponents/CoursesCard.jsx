/* eslint-disable no-unused-vars */
import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import CardImg from "./CardImg";
import CardVoteIcons from "./CardVoteIcons";
import motionGraphic from "../../Assets/Images/motionGraphic.webp";
import CousresCardDetails from "./CousresCardDetails";
import { useThemePalette } from "../../Theme/useThemePalatte";
import { Stack } from "@mui/system";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useNavigate } from "react-router-dom";

export default function CoursesCard({ data, flexWrap, ...rest }) {
  const {
    final_rating_from_reviews,
    reviews_number,
    original_price,
    is_price_hidden,
    original_price_currency,
    discount_percentage,
    classified_product,
    classified_product: { instructors },
  } = data;
  let namesArray = [];
  instructors?.filter((name) => namesArray.push(name.name));
  const instructorsNames = namesArray.join();
  const { warmGrey } = useThemePalette();
  const navigate = useNavigate();
  const handleClick = (course_id) => {
    navigate(`courses-details/${course_id}`);
  };
  return (
    <Box
      boxShadow="0 3px 6px 0 rgba(0, 0, 0, 0.16)"
      borderRadius="20px"
      marginY="0.5rem"
      bgcolor="info.main"
      width="100%"
    >
      {/* --------------------------- Top Img Container ------------------------- */}
      <CardImg
        imgSrc={
          classified_product?.image_url
            ? classified_product?.image_url
            : motionGraphic
        }
      />
      {/* ----------------------------- Cart Content ---------------------------- */}
      <Box sx={{ px: "16px" }} pt="24px">
        {/* -------------------------- Cart Title ----------------------------- */}
        <Typography
          minHeight="48px"
          fontWeight="700"
          onClick={(_) => handleClick(classified_product?.course_id)}
          sx={{ cursor: "pointer" }}
        >
          {classified_product?.title}
        </Typography>
        {/* ---------------------------- Vote Icons Container ----------------- */}
        <CardVoteIcons
          final_rating_from_reviews_fontSize="14px"
          reviews_number_font_size="11px"
          final_rating_from_reviews={final_rating_from_reviews}
          reviews_number={`(${reviews_number})`}
        />
        {/* --------------------------------  Cart Description  ------------------------------------ */}
        <CousresCardDetails
          description={classified_product?.description}
          instructorsNames={instructorsNames}
        />
        {/* ----------------------------------- Cart Pricing ------------------------------ */}
        <Stack direction="row" spacing={1}>
          <Typography fontWeight="700">
            {is_price_hidden ? "" : original_price_currency}{" "}
            {is_price_hidden ? "Free" : original_price}
          </Typography>
          <Box position="relative">
            <Typography
              color={warmGrey}
              component="span"
              fontWeight="500"
              sx={{ textDecoration: "line-through" }}
            >
              {discount_percentage === 0 ? "" : `$ ${discount_percentage}`}
            </Typography>
          </Box>
        </Stack>
        {/* --------------------------------------- Cart Actions  -------------------------------------- */}
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          gap={3}
        >
          {/* -------------------------------- Enroll Now Button ------------------------- */}
          <Button
            sx={{ my: "1.5rem", flexGrow: 1 }}
            variant="outlined"
            aria-label="enroll now"
          >
            Enroll Now
          </Button>
          {/* ---------------------------------------- icons  ---------------------------- */}
          <Button
            variant="outlined"
            sx={{ cursor: "pointer" }}
            aria-label="shopping card"
          >
            <AddShoppingCartIcon sx={{ cursor: "pointer" }} />
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
