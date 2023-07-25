import React ,{useEffect} from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Typography } from "@mui/material";
export default function Checkboxs({ item, modalChecked, existedchecks }) {
  const [checked, setChecked] = React.useState(false);
  
	useEffect(()=>{
    if(existedchecks.includes(item.title)){
      setChecked(true)
      console.log('yesssss');
      // console.log();
    }
    else{setChecked(false)}
	}, [])
  

  const handleChange = (event) => {
    setChecked(event.target.checked);
    /// checked =!checked vice verce ???????
    if (!checked) { 
      modalChecked(event.target.value)
      // modalChecked({ name: event.target.value, check: true });
    } 
    if(checked&&  existedchecks.indexOf(event.target.value)){
      modalChecked(event.target.value)
    }

  };

  return (
    <FormGroup key={item.title} sx={{ px: 1 }}>
      <FormControlLabel
        control={
          <Checkbox
            value={item.title}
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        }
        label={
          <Typography sx={{ color: "#343434", fontSize: ".9rem" }}>
            {item.title}{" "}
          </Typography>
        }
      />
    </FormGroup>
  );
}




// const [checked, setChecked] = React.useState(false);
// const [chec, setCheck] = React.useState([]);
// //  console.log(existedchecks);

// // // if(existedchecks.includes({name:item.title, check:true} ) && checked==false){ //if this item in the existdCheckedArray(coursesList.js make it checked)
// // if ( existedchecks.indexOf({ name: item.title, check: true })){
// //   //if this item in the existdCheckedArray(coursesList.js make it checked)
// //   console.log("true", item.title);
// //   // setChecked(true)
// // }

// // else if ( existedchecks.indexOf({ name: item.title, check: false })){
// //   console.log("false", item.title);
// //   // setChecked(true)
// // }
// const handleChange = (event) => {
//   setChecked(event.target.checked);
//   /// checked =!checked vice verce ???????
//   if (!checked) { 
//      //console.log(' checked ',event.target.value)
//     modalChecked(event.target.value)
//     // modalChecked({ name: event.target.value, check: true });
//   } 
//   if(checked&&  existedchecks.indexOf(event.target.value)){
//     console.log('deleteeee');
//     modalChecked(event.target.value)
//   }
//   // else { 
//   //   // console.log('not checked ',event.target.value)
//   //   modalChecked({ name: event.target.value, check: false });
//   // }
// };
