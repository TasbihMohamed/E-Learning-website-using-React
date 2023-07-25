import { Box } from "@mui/material";
import React, { useState } from "react";

export default function CardImg({ imgSrc }) {
  const [labelStyle, setLabelStyle] = useState({
    color: "#fff",
    bgcolor: "rgba(0, 0, 0, .2)",
  });
  const [isActive, setIsActive] = useState(false);
  return (
    <Box position="relative" width="100%" height="100%">
      <Box>
        <img
          src={imgSrc}
          alt=""
          className="w-100 cardImg"
          style={{ maxHeight: "170px", width: "100%" }}
        />
      </Box>
      {/* ------------------------ label icon div ----------------------- */}
      <Box
        sx={{ cursor: "pointer" }}
        position="absolute"
        top="16px"
        right="16px"
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          data-name="Group 10"
          height="34"
          viewBox="0 0 34 34"
        >
          <circle
            cx="17"
            cy="17"
            r="17"
            fill={isActive ? "#fff" : labelStyle.bgcolor}
          ></circle>
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M.387 19.961A.76.76 0 0 1 0 19.3V1.263A1.262 1.262 0 0 1 1.257 0h10.551a1.261 1.261 0 0 1 1.256 1.263v18.01a.759.759 0 0 1-.385.661.749.749 0 0 1-.762-.015L6.534 16.6 1.15 19.943a.75.75 0 0 1-.763.017z"
            transform="translate(10.534 6.978)"
            fill={isActive ? "#28a19c" : labelStyle.color}
          />
        </svg>
      </Box>
    </Box>
  );
}
