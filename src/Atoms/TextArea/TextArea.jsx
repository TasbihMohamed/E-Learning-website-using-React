import "./TextArea.css";
import React from "react";
import { TextareaAutosize } from "@mui/material";
import { useThemePalette } from "../../Theme/useThemePalatte";

function TextArea({ placeholder, value, onchange, textAreacolor, style, ...props }) {
  const { cardBgColor, mainFontColor } = useThemePalette()
  return (
    <TextareaAutosize
      style={{ width: '100%', background: cardBgColor, color: textAreacolor, ...style }}
      rowsMin={4}
      placeholder={placeholder}
      onChange={(e) => onchange(e.target.value)}
      value={value}
      className="area_text"
      {...props}
    />
  );
}

export default TextArea;
