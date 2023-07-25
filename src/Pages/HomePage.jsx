import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoursesRequest } from "../Modules/Courses";
import {
  fetchAllSubjectsRequest,
  fetchFilteredSubjectsRequest,
  getSubjectRequest,
} from "../Modules/Subjects";
import HomeTemplate from "../Template/HomeTemplate";

export default function HomePage() {
  const [isActive, setIsActive] = useState(0);
  const [categoriesSubjects, setCategoriesSubjects] = useState([]);
  const [finalData, setFinalData] = useState([]);
  const dispatch = useDispatch();
  // --------------------------------------------- Subiects Api Response ---------------------------------
  const { allSubjects, filterdSubject } = useSelector(
    (state) => state.subjects
  );
  const { loading } = useSelector((state) => state.subjects);
  const { subjects } = useSelector((state) => state.subjects);
  // ------------------------- Fetch Subjects Name and unFiltered Subjects Details when the copmonent rendering for the first time ----------------
  useEffect(() => {
    dispatch(getSubjectRequest({ classes: 25 }));
    dispatch(fetchAllSubjectsRequest({ page_number: 1, page_size: 10 }));
  }, []);

  // ----------------------- Set final data by data depends user Click --------------------------------------------
  useEffect(() => {
    isActive === 0 ? setFinalData(allSubjects) : setFinalData(filterdSubject);
  }, [allSubjects, filterdSubject, isActive]);

  // ------------------------ Extraction Needed data from subkects api respone and adding All into it ---------------------------------
  useEffect(() => {
    subjects && setCategoriesSubjects([{ id: 0, name: "All" }, ...subjects]);
  }, [subjects]);
  // --------------------------------------- handle fetch request depends on user click -----------------------------------------------

  const handleClick = (id) => {
    setIsActive(id);
    id === 0
      ? dispatch(fetchAllSubjectsRequest({ page_number: 1, page_size: 10 }))
      : dispatch(
          fetchFilteredSubjectsRequest({
            page_number: 1,
            page_size: 10,
            subject_id: id,
          })
        );
  };
  // ------------------------------------------- Most Popular request ---------------------------------------------
  const { courses, isLoading } = useSelector((state) => state.courses);
  const [coursesArr, setCoursesArr] = useState([]);
  // ------------------------- Fetching Courses when the copmonent rendering for the first time ----------------
  useEffect(() => {
    dispatch(
      getCoursesRequest({ page_number: 1, page_size: 9, school_class_id: 25 })
    );
  }, []);
  // ------------------------ Extraction Needed data from Courses api response ---------------------------------
  useEffect(() => {
    let extractedData = [];
    const myCoursesResponse = courses?.courses;
    for (const key in myCoursesResponse) {
      extractedData.push(...myCoursesResponse[key]);
    }
    setCoursesArr(extractedData);
  }, [courses]);
  return (
    <>
      <HomeTemplate
        loading={loading}
        handleClick={handleClick}
        isActive={isActive}
        setIsActive={setIsActive}
        finalData={finalData}
        categoriesSubjects={categoriesSubjects && categoriesSubjects}
        coursesArr={coursesArr}
        coursesLoading={isLoading?.type == "list" ? isLoading?.loading : false}
      />
    </>
  );
}
