import Types from "./Types";

const COURSES_INIT_STATE = {
  subjects: [],
  filterdSubject: [],
  allSubjects: [],
  filterdCourses:[],////////////
  loading: false,
  errors: false,
};

export function subjectsReducer(state = COURSES_INIT_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case Types.GET_SUBJECTS_SUCCESS: {
      return {
        ...state,
        subjects: payload?.data?.subjects,
      };
    }
    case Types.GET_SUBJECTS_ERROR: {
      return {
        ...state,
        errors: payload,
      };
    }
    case Types.GET_ALL_SUBJECTS_SUCCESS: {
      return {
        ...state,
        allSubjects: payload?.data?.courses,
      };
    }
    case Types.GET_ALL_SUBJECTS_LOADING: {
      return {
        ...state,
        loading: payload,
      };
    }
    case Types.GET_ALL_SUBJECTS_ERROR: {
      return {
        ...state,
        errors: payload,
      };
    }
    case Types.GET_FILTERED_SUBJECTS_SUCCESS: {
      return {
        ...state,
        filterdSubject: payload?.data?.courses,
      };
    }
    case Types.GET_FILTERED_SUBJECTS_LOADING: {
      return {
        ...state,
        loading: payload,
      };
    }
    case Types.GET_FILTERED_SUBJECTS_ERROR: {
      return {
        ...state,
        errors: payload,
      };
    }
    /////////////////////////

    case Types.GET_FILTERED_COURSES_SUCCESS: {
      return {
        ...state,
        filterdCourses: payload?.data?.courses,//////////////////
        // filterdCourses: payload,//////////////////
      };
    }
    case Types.GET_FILTERED_COURSES_LOADING: {
      return {
        ...state,
        loading: payload,
      };
    }
    case Types.GET_FILTERED_COURSES_ERROR: {
      return {
        ...state,
        errors: payload,
      };
    }
    /////////////////////////
    default: {
      return state;
    }
  }
}
