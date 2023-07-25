import { combineReducers } from "redux";
import { coursesReducer } from "./Courses/Reducer";
import { subjectsReducer } from "./Subjects/Reducer";

const rootReducer = combineReducers({
    courses: coursesReducer,
    subjects:subjectsReducer
});

export default rootReducer;