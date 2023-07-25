import Types from './Types';

export const getSubjecsSuccess = (payload) => ({
    type: Types.GET_SUBJECTS_SUCCESS,
    payload
});

export const getSubjecsError = (payload) => ({
    type: Types.GET_SUBJECTS_ERROR,
    payload
});

export const getAllSubjecsSuccess = (payload) => ({
    type: Types.GET_ALL_SUBJECTS_SUCCESS,
    payload
});

export const getAllSubjecsLoading = (payload) => ({
    type: Types.GET_ALL_SUBJECTS_LOADING,
    payload
});

export const getAllSubjecsError = (payload) => ({
    type: Types.GET_ALL_SUBJECTS_ERROR,
    payload
});

export const getFilteredSubjectsSuccess = (payload) => ({
    type: Types.GET_FILTERED_SUBJECTS_SUCCESS,
    payload
});

export const getFilteredSubjectsLoading = (payload) => ({
    type: Types.GET_FILTERED_SUBJECTS_LOADING,
    payload
});

export const getFilteredSubjectsError = (payload) => ({
    type: Types.GET_FILTERED_SUBJECTS_ERROR,
    payload
});


// ///////////////////////////////////////////////////



export const getFilteredCoursesSuccess = (payload) => ({
    type: Types.GET_FILTERED_COURSES_SUCCESS,
    payload
});

export const getFilteredCoursesLoading = (payload) => ({
    type: Types.GET_FILTERED_COURSES_LOADING,
    payload
});

export const getFilteredCoursesError = (payload) => ({
    type: Types.GET_FILTERED_COURSES_ERROR,
    payload
});

