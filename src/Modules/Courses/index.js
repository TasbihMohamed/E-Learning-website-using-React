import handleErrors from "../utils/handel_error";
import {
  getAllCoursesError,
  getAllCoursesSuccess,
  getAllReviewsSussess,
  getCoursesListError,
  getCoursesListLoading,
  getCoursesListSuccess,
  getQuizAttemptsSuccess,
  getSectionsLoading,
  getStudentAssignmentDetailsSuccess,
  getStudentCoursesDetailsSuccess,
  getStudentQuizDetailsSuccess,
  getStudentSectionsSuccess,
  getStudentSessionDetailsSuccess,
  getStudentSessionSuccess,
  postAnswerQuizSuccess,
  postStartQuizSuccess,
  postSubmitQuizSuccess,
  putAnswerQuizSuccess,
} from "./Actions";
import axios from "axios";
import { StatgingBaseURL } from "../utils/constant";

export const getCoursesRequest = ({
  page_number,
  page_size,
  school_class_id,
}) => {
  return async (dispatch) => {
    dispatch(getSectionsLoading({ type: "list", loading: true }));
    try {
      const { data } = await axios.get(
        `${StatgingBaseURL}courses?page_number=${page_number}&page_size=${page_size}&school_class_id=${school_class_id}`
      );
      dispatch(getAllCoursesSuccess(data));
    } catch (error) {
      dispatch(getAllCoursesError(true));
    } finally {
      dispatch(getSectionsLoading({ type: "", loading: false }));
    }
  };
};

export const getStudentCoursesDetailsRequest = ({ course_id }) => {
  return async (dispatch) => {
    dispatch(getSectionsLoading({ type: "details", loading: true }));
    try {
      const { data } = await axios.get(
        `${StatgingBaseURL}courses/${course_id}`
      );
      dispatch(getStudentCoursesDetailsSuccess(data));
    } catch (error) {
      handleErrors(error);
    } finally {
      dispatch(getSectionsLoading({ type: "", loading: false }));
    }
  };
};

export const getStudentSectionsRequest = ({ course_id }) => {
  return async (dispatch) => {
    dispatch(getSectionsLoading({ type: "sections", loading: true }));
    try {
      const { data } = await axios.get(
        `${StatgingBaseURL}my-learning/courses/${course_id}/materials/sections`
      );
      dispatch(getStudentSectionsSuccess(data));
    } catch (error) {
      handleErrors(error);
    } finally {
      dispatch(getSectionsLoading({ type: "", loading: false }));
    }
  };
};

export const getStudentSessionsRequest = ({ course_id, section_id }) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `${StatgingBaseURL}my-learning/courses/${course_id}/materials/sections/${section_id}/sessions`
      );
      dispatch(getStudentSessionSuccess(data));
    } catch (error) {
      handleErrors(error);
    }
  };
};
export const getStudentSessionDetailsRequest = (
  course_id,
  section_id,
  course_session_id
) => {
  return async (dispatch) => {
    console.log(course_id, section_id, course_session_id, "bye");
    try {
      const { data } = await axios.get(
        `${StatgingBaseURL}my-learning/courses/${course_id}/materials/sections/${section_id}/sessions/${course_session_id}`
      );
      dispatch(getStudentSessionDetailsSuccess(data));
    } catch (error) {
      handleErrors(error);
    }
  };
};

export const getAllReviewsRequest = ({ product_id }) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `${StatgingBaseURL}products/${product_id}/reviews`
      );
      dispatch(getAllReviewsSussess(data));
    } catch (error) {
      handleErrors(error);
    }
  };
};

export const getCoursesListRequest = ({ page_number, page_size, school_class_id }) => {
  return async (dispatch) => {
    dispatch(getCoursesListLoading(true));
      try {
          const { data } = await axios.get(`${StatgingBaseURL}courses?page[number]=${page_number}&page[size]=${page_size}&school_class_id=${school_class_id}`)
          dispatch(getCoursesListSuccess(data));
      } catch (error) {
          dispatch(getCoursesListError(true));
      } finally {
          dispatch(getCoursesListLoading(false));
      }
  };
}


export const getStudentAssignmentDetailsRequest = (
  course_id,
 assignment_id
) => {
  return async (dispatch) => {
    console.log(course_id, assignment_id, "www");
    try {
      const { data } = await axios.get(
        `${StatgingBaseURL}my-learning/courses/${course_id}/assignments/${assignment_id}?page=1 `
      );
      dispatch(getStudentAssignmentDetailsSuccess(data));
    } catch (error) {
      handleErrors(error);
    }
  };
};


export const getStudentQuizDetailsRequest = (course_id, quiz_id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `${StatgingBaseURL}my-learning/courses/${course_id}/quizzes/${quiz_id}`
      );
      dispatch(getStudentQuizDetailsSuccess(data));
    } catch (error) {
      handleErrors(error);
    }
  };
};

export const postStartQuizRequest = ({course_id, quiz_id , body}) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${StatgingBaseURL}/courses/${course_id}/quizzes/${quiz_id}/start_quiz`, body);
     
      dispatch(postStartQuizSuccess(data));
    } catch (error) {
      handleErrors(error);
    }
  };
};

//answer Quiz
export const postAnswerQuizRequest = ({course_id, quiz_id , body}) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${StatgingBaseURL}/courses/${course_id}/quizzes/${quiz_id}/save_answers`, body);
      dispatch(postAnswerQuizSuccess(data));
    } catch (error) {
      handleErrors(error);
    }
  };
};

//clear answer Quiz
export const putAnswerQuizRequest = ({course_id, quiz_id , body}) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`${StatgingBaseURL}/courses/${course_id}/quizzes/${quiz_id}/clear_answer`, body);
  
      dispatch(putAnswerQuizSuccess(data));
    } catch (error) {
      handleErrors(error);
    }
  };
};

//submit Quiz
export const postSubmitQuizRequest = ({course_id, quiz_id }) => {
  return async (dispatch) => {
    console.log(course_id, quiz_id, "submit quiz");
    try {
      const { data } = await axios.post(`${StatgingBaseURL}/my-learning/courses/${course_id}/quizzes/${quiz_id}/submit-and-evaluate`);

      dispatch(postSubmitQuizSuccess(data));
    } catch (error) {
      handleErrors(error);
    }
  };
};

//list attempts Quiz
export const getQuizAttemptsRequest = ({course_id, quiz_id }) => {
  
  return async (dispatch) => {
    console.log(course_id, quiz_id, "attempts");

    try {
      const { data } = await axios.get(`${StatgingBaseURL}/my-learning/courses/${course_id}/quizzes/${quiz_id}/attempts`);

      dispatch(getQuizAttemptsSuccess(data));
    } catch (error) {
      handleErrors(error);
    }
  };
};

