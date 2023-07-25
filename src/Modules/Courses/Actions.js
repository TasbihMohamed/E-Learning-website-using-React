import Types from "./Types";

export const getAllCoursesSuccess = (payload) => ({
  type: Types.GET_ALL_COURSES_SUCCESS,
  payload,
});

export const getAllCoursesLoading = (payload) => ({
  type: Types.GET_ALL_COURSES_LOADING,
  payload,
});

export const getAllCoursesError = (payload) => ({
  type: Types.GET_ALL_COURSES_ERROR,
  payload,
});

export const getStudentCoursesDetailsSuccess = (payload) => ({
  type: Types.GET_STUDENT_COURSES_DETAILS_SUCCESS,
  payload,
});

export const getStudentSectionsSuccess = (payload) => ({
  type: Types.GET_STUDENT_SECTIONS_SUCCESS,
  payload,
});

export const getStudentSessionSuccess = (payload) => ({
  type: Types.GET_STUDENT_SESSIONS_SUCCESS,
  payload,
});

export const getStudentSessionDetailsSuccess = (payload) => ({
  type: Types.GET_STUDENT_SESSION_DETAILS_SUCCESS,
  payload,
});

export const getSectionsLoading = (payload) => ({
  type: Types.GET_SECTIONS_LOADING,
  payload,
});

export const getAllReviewsSussess = (payload) => ({
  type: Types.GET_ALL_REVIEWS_SUSSESS,
  payload,
});
////////////////////////////
export const getCoursesListSuccess = (payload) => ({
  type: Types.GET_COURSES_LIST_SUCCESS,
  payload,
});

export const getCoursesListLoading = (payload) => ({
  type: Types.GET_COURSES_LIST_LOADING,
  payload,
});

export const getCoursesListError = (payload) => ({
  type: Types.GET_COURSES_LIST_ERROR,
  payload,
});

///
export const getStudentAssignmentDetailsSuccess = (payload) => ({
  type: Types.GET_STUDENT_ASSIGNMENT_DETAILS_SUCCESS,
  payload,
});
export const getStudentQuizDetailsSuccess = (payload) => ({
  type: Types.GET_STUDENT_Quiz_DETAILS_SUCCESS,
  payload,
});
//start Quiz
export const postStartQuizSuccess = (payload) => ({
  type: Types.POST_STUDENT_START_QUIZ_SUCCESS,
  payload,
});
//answer Quiz
export const postAnswerQuizSuccess = (payload) => ({
  type: Types.POST_STUDENT_ANSWER_QUIZ_SUCCESS ,
  payload,
});
//clear answer  
export const putAnswerQuizSuccess = (payload) => ({
  type: Types.PUT_STUDENT_ANSWER_QUIZ_SUCCESS,
  payload,
});

//submit quiz
export const postSubmitQuizSuccess = (payload) => ({
  type: Types.POST_STUDENT_SUBMIT_QUIZ_SUCCESS,
  payload,
});
//ATTEMPTS quiz
export const getQuizAttemptsSuccess = (payload) => ({
  type: Types.GET_STUDENT_QUIZ_ATTEMPTS_SUCCESS,
  payload,
});
