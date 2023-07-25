import React, { useState, useRef } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CustomModal from "./CustomModal";
import { Button, Stack, TextField } from "@mui/material";
import Checkboxs from "../../../Molecules/Courses/CoursesList/Checkboxs";
import CheckboxsContainer from "./CheckboxsContainer";
import ApplyFilterButton from "../../../Molecules/Courses/CoursesList/ApplyFilterButton";
const ITEM_HEIGHT = 57;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function DropDown({
  data,
  onApply,
  modalChecked,
  existedchecks,
}) {
  const [selectedTitle, setSelectedTitle] = React.useState([]);
  const [search, setSearch] = React.useState("");

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedTitle(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleFilter = () => {
    onApply(selectedTitle);
    console.log("mmm", selectedTitle);
  };

  return (
    <Stack
      sx={{
        "& .MuiPaper-root": {
          border: "1px solid rgba(52, 52, 52, 0.5)",
          borderRadius: "2% ",
        }
      }}

    >
      <FormControl sx={{ width: "100%" }}>
        <InputLabel
          id="demo-multiple-checkbox-label"
          sx={{ top: "-32%", p: 0, color: "#707070" }}
        >
          {data.name}
        </InputLabel>
        <Select
          sx={{ background: "white", height: "2.1em" }}
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={selectedTitle}
          onChange={handleChange}
          input={<OutlinedInput label={data.name} />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          <TextField
            variant="standard"
            sx={{
              boxShadow: "0 5px 6px 0 rgba(0, 0, 0, 0.16)",
              width: '100%',
              "& .MuiInputBase-input": {
                pl: 2, color: '#707070'
              },

            }}
            placeholder="Search..."
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />

   {/* <CheckboxsContainer data= {data.types} search={search} modalChecked={modalChecked} existedchecks={existedchecks} /> */}

       {data.types
            .filter((item) => {
              if (search === "") {
                return item;
              } else if (
                item.title.toLowerCase().includes(search.toLowerCase())
              ) {
                return item;
              }
            })
            .map((item, index) =>
              index > 3 ? null : (
                <Checkboxs
                  item={item}
                  modalChecked={modalChecked}
                  existedchecks={existedchecks}
                />
              )
            )
          } 

          


          <MenuItem direction="row" sx={{ justifyContent: "space-between" }}>
            <CustomModal
              data={data.types}
              modalChecked={modalChecked}
              existedchecks={existedchecks}
            />
            {/* <Button sx={{ color: "#28a19c", fontSize: ".8rem", fontWeight: 600 }}
              onClick={handleFilter} > Apply</Button> */}
            <ApplyFilterButton onApply={onApply} selectedTitle= {selectedTitle} />
          </MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
}
