
////https://codesandbox.io/s/69640376-material-ui-react-multiple-checkbox-using-tabs-8jogw?file=/demo.js:0-1507


import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const listItem = [
  {
    name: "one",
    weight: 1,
    category: "a"
  },
  {
    name: "two",
    weight: 2,
    category: "a"
  },
  {
    name: "three",
    weight: 3,
    category: "a"
  },
  {
    name: "four",
    weight: 4,
    category: "a"
  }
];

export default function Test() {
  const [isChecked, setIsChecked] = React.useState(() =>
    listItem.map((i) => false)
  );

  const isCheckboxChecked = (index, checked) => {
    setIsChecked((isChecked) => {
      return isChecked.map((c, i) => {
        if (i === index) return checked;
        return c;
      });
    });
  };
  console.log(isChecked);

  return (
    <div>
      {listItem.map((checkbox, index) => {
        return (
          <FormControlLabel
            key={index + checkbox.name}
            className="twocolelement"
            control={
              <Checkbox
                name={checkbox.name}
                value={checkbox.weight}
                id={checkbox.category}
                checked={isChecked[index]}
                color="primary"
                onChange={(e) => isCheckboxChecked(index, e.target.checked)}
              />
            }
            label={checkbox.name}
          />
        );
      })}
      <pre>{JSON.stringify(isChecked, null, 4)}</pre>
    </div>
  );
}
