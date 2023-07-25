import React from 'react'
import Checkboxs from '../../../Molecules/Courses/CoursesList/Checkboxs';

export default function CheckboxsContainer({data   , search, modalChecked, existedchecks}) {

    console.log('data' ,data);
    console.log('modalChecked' ,modalChecked);
    console.log('existedchecks' ,existedchecks);

  return (
    <>
    { 
    data.map((item, index) =>
          index > 3 ? null : (
            <Checkboxs
              item={item}
              modalChecked={modalChecked}
              existedchecks={existedchecks}
            // existedchecks={existedchecks}
            />
          )
        )
      }


      {/* 
      
        { search ? 
    data.filter((item) => {
      if (search === "") {
        return item;
      } 
    //   else if (item.title.toLowerCase().includes(search.toLowerCase()) ) {
    //     return item;
    //   }
    })
    .map((item, index) =>
      index > 3 ? null : (
        <Checkboxs
          item={item}
          modalChecked={modalChecked}
          existedchecks={existedchecks}
        // existedchecks={existedchecks}
        />
      )
    )
    
    : 
    data.map((item, index) =>
          index > 3 ? null : (
            <Checkboxs
              item={item}
              modalChecked={modalChecked}
              existedchecks={existedchecks}
            // existedchecks={existedchecks}
            />
          )
        )
      }
      
      */}
      </>
  )
}
