import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationComponent({ PaginationPage, pageCount }) {
  console.log(pageCount,"pageCount");
  const handlePagination = (e, value) => {
    //value to handle the arrow سهم // e to handle the numbers
    if (!isNaN(+value)) {
      PaginationPage(value);
    } //if value == number then pass it (as onclick the value=NAN)
    if (!isNaN(+Number(e.target.innerText)) === Number) {
      PaginationPage(Number(e.target.innerText)); //if e.target.innerText == number then pass it (as onclick the e.target.innerText=NAN)
    }
  };
  return (
    <Stack spacing={2}>
      <Pagination
        count={pageCount}
        onChange={handlePagination}
        onClick={(e) => handlePagination(e)}
        sx={{
          "& .MuiButtonBase-root": { color: "#707070" },
          ".MuiButtonBase-root.Mui-selected": {
            color: "#343434",
            backgroundColor: "transparent",
          },
          "& .css-g2z002-MuiSvgIcon-root-MuiPaginationItem-icon": {
            color: "#28a19c",
          },
        }}
      />
    </Stack>
  );
}
