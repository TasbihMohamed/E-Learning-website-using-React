import { configureStore } from "@reduxjs/toolkit";
import getCoursesSlice from "../Courses/Slices/getCoursesSlice";
import fetchAllSubjectsSlice from "../Subjects/Slices/fetchAllSubjectsSlice";
import filteredSubjectSlice from "../Subjects/Slices/filteredSubjectSlice";
import getSubjectsSlice from "../Subjects/Slices/getSubjectsSlice";

const store = configureStore({
    reducer:{
        courses: getCoursesSlice,
        subjects: getSubjectsSlice,
        filteredSubject : filteredSubjectSlice,
        allSubjects: fetchAllSubjectsSlice
    }
})

export default store