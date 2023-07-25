// import React, { useEffect, useState } from 'react'

// export default function Test() {
//     const data= [
//         { name: "orange", boxes: [1, 2, 3], selected: null },
//         { name: "apple", boxes: [1, 2, 3], selected: null },
//         { name: "pineapple", boxes: [1, 2, 3], selected: null }

//         ]


// const [test,setTest]=useState([])
//  const   handleOnChange = (e) => {
//   console.log(e);
//         // const { name, value } = e.target;
//         const updatedData = data.map(group => {
//           if (group.name === e.target.name) {
//             return {
//               ...group,
//               selected: group.selected === e.target.value ? null : e.target.value
//             };
//           } else {
//             return group;
//           }
//         });

//         setTest({ data: updatedData }, () => console.log(test));
//       };


//       const createInputGroups = () => {

//         const groups = data.map(group => {
//           return (
//             <div style={{ display: "flex" }}>
//               <div>{group.name}</div>
//               <div>
//                 {group.boxes.map(box => {
//                   return (<>
//                     <input
//                       onChange={handleOnChange}
//                       type="checkbox"
//                       name={group.name}
//                       value={box}
//                       checked={group.selected == box}
//                     />
//                     <input
//                       onChange={handleOnChange}
//                       type="checkbox"
//                       name={group.name}
//                       value={box}
//                       checked={true}
//                     />
//                     </>
//                   );
//                 })}
//               </div>
//             </div>
//           );
//         });
//         return groups;
//       };

//       useEffect(() => {
//         createInputGroups();
//       }, []);

//   return (<div>{createInputGroups()}</div>


//   )
// }




import { Checkbox } from '@mui/material'
import React from 'react'


export default function Test() {
const name='f';
const value=2

  return (
    <div>
      <Checkbox type="radio" className='checkboxInput' name="f" id="c03" value="Yes"  />
      <input type="radio" className='checkboxInput' name="f" id="c01" value="Yes"  />Yes
      {/* <input type="radio" className='checkboxInput' name="creditCheck" id="c01" value="Yes" checked />Yes */}
      <input type="radio" className='checkboxInput' name="f" id="c02" value="No" />No
      <input type="radio" className='checkboxInput' name={name} id="c02" value={value} />No
    </div>
  )
}
