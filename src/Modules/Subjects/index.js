import handleErrors from '../utils/handel_error';
import { getAllSubjecsError, getAllSubjecsLoading, getAllSubjecsSuccess, getFilteredCoursesError, getFilteredCoursesLoading, getFilteredCoursesSuccess, getFilteredSubjectsError, getFilteredSubjectsLoading, getFilteredSubjectsSuccess, getSubjecsError, getSubjecsSuccess, } from './Actions'
import axios from 'axios';
import { StatgingBaseURL } from '../utils/constant';


export const getSubjectRequest = ({ classes }) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${StatgingBaseURL}classes/${classes}/subjects`)
            dispatch(getSubjecsSuccess(data));
        } catch (error) {
            dispatch(getSubjecsError(true))
        }
    };
}

export const fetchAllSubjectsRequest = ({ page_number, page_size }) => {
    return async (dispatch) => {
        dispatch(getAllSubjecsLoading(true));
        try {
            const { data } = await axios.get(`${StatgingBaseURL}courses_filtering?page[number]=${page_number}&page[size]=${page_size}`)
            dispatch(getAllSubjecsSuccess(data));
        } catch (error) {
            dispatch(getAllSubjecsError(true));
        } finally {
            dispatch(getAllSubjecsLoading(false));
        }
    };
}

export const fetchFilteredSubjectsRequest = ({ page_number, page_size, subject_id }) => {
    return async (dispatch) => {
        dispatch(getFilteredSubjectsLoading(true));
        try {
            const { data } = await axios.get(`${StatgingBaseURL}courses_filtering?page[number]=${page_number}&page[size]=${page_size}&filter[subject_id]=${subject_id}`)
            dispatch(getFilteredSubjectsSuccess(data));
        } catch (error) {
            dispatch(getFilteredSubjectsError(true));
        } finally {
            dispatch(getFilteredSubjectsLoading(false));
        }
    };
}


// //////////////////////////////////////////////



export const fetchFilteredCoursesRequest = ({ page_number, page_size, curriculum_id, subject_id, instructor_id }) => {
    return async (dispatch) => {
        dispatch(getFilteredCoursesLoading(true));
        try {
            
            // const { data } = await axios.get(`${StatgingBaseURL}courses_filtering?page[number]=${page_number}&page[size]=${page_size}&filter[curriculum_id]=${curriculum_id}&filter[subject_id]=${subject_id}&filter[instructor_id]=${instructor_id}`)
            const { data } = await axios.get(`${StatgingBaseURL}courses_filtering?page[number]=${page_number}&page[size]=${page_size}&filter[curriculum_id]=${curriculum_id}&filter[subject_id]=${subject_id}&filter[instructor_id]=${instructor_id}`)
            dispatch(getFilteredCoursesSuccess(data));
        } catch (error) {
            dispatch(getFilteredCoursesError(true));
        } finally {
            dispatch(getFilteredCoursesLoading(false));
        }
    };
}
