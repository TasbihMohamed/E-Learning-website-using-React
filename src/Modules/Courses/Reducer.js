import Types from "./Types";

const COURSES_INIT_STATE = {
  courses: [],
  error: false,
  sections: [],
  studentCoursesDetails: [],
  sessionDetails: {},
  coursesList: [],
  sessions: [],
  startQuiz: [],
  answerQuiz: [],
  clearQuiz: [],
  submitQuiz:{},
  listAttemptsQuiz:[],
  isLoading: {
    type: "",
    loading: false,
  },
  reviews: [],
};

export function coursesReducer(state = COURSES_INIT_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case Types.GET_ALL_COURSES_SUCCESS: {
      return {
        ...state,
        courses: payload?.data?.courses,
      };
    }
    case Types.GET_ALL_COURSES_LOADING: {
      return {
        ...state,
        coursesLoading: payload,
      };
    }
    case Types.GET_ALL_COURSES_ERROR: {
      return {
        ...state,
        error: payload,
      };
    }
    case Types.GET_STUDENT_COURSES_DETAILS_SUCCESS: {
      return {
        ...state,
        studentCoursesDetails: payload.data,
      };
    }
    case Types.GET_STUDENT_SECTIONS_SUCCESS: {
      return {
        ...state,
        sections: payload.data,
      };
    }
    case Types.GET_STUDENT_SESSIONS_SUCCESS: {
      return {
        ...state,
        sessions: payload.data,
      };
    }

    case Types.GET_STUDENT_SESSION_DETAILS_SUCCESS: {
      return {
        ...state,
        sessionDetails: payload.data,
      };
    }

    case Types.GET_SECTIONS_LOADING: {
      return {
        ...state,
        isLoading: payload,
      };
    }
    case Types.GET_ALL_REVIEWS_SUSSESS: {
      return {
        ...state,
        reviews: payload.data,
      };
    }

    ///////////


    case Types.GET_COURSES_LIST_SUCCESS: {

      return {
        ...state,
        coursesList: payload?.data
      };
    }
    case Types.GET_COURSES_LIST_LOADING: {
      return {
        ...state,
        loading: payload,
      };
    }
    case Types.GET_COURSES_LIST_ERROR: {
      return {
        ...state,
        errors: payload,
      };
    }
    case Types.GET_STUDENT_ASSIGNMENT_DETAILS_SUCCESS: {
      return {
        ...state,
        sessionDetails: payload.data,
      };
    }
    case Types.GET_STUDENT_Quiz_DETAILS_SUCCESS: {
      return {
        ...state,
        sessionDetails: payload.data,
      };
    }
    /////// start Quiz
    case Types.POST_STUDENT_START_QUIZ_SUCCESS: {
      return {
        ...state,
        startQuiz: payload.data,
      };
    }
    /////// answer Quiz
    case Types.POST_STUDENT_ANSWER_QUIZ_SUCCESS : {
      return {
        ...state,
        answerQuiz: payload.data,
      };
    }
    /////// clear answer Quiz
    case Types.PUT_STUDENT_ANSWER_QUIZ_SUCCESS: {
      return {
        ...state,
        clearQuiz: payload.data,
      };
    }
      /////// submit Quiz
      case Types.POST_STUDENT_SUBMIT_QUIZ_SUCCESS: {
        return {
          ...state,
          submitQuiz: payload.data,
        };
      }
      ////list attempts Quiz
       case Types.GET_STUDENT_QUIZ_ATTEMPTS_SUCCESS: {
        return {
          ...state,
          listAttemptsQuiz: payload.data,
        };
      }
    default: {
      return state;
    }
  }
}
