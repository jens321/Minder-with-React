import axios from 'axios'; 

/*
 * action types
 */

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'; 

export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST'; 
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';  

/*
 * other constants
 */



/*
 * action creators
 */

export function signupRequest(data) {
    return {
        type: SIGNUP_REQUEST,
        data
    }
}

export function signupSuccess(json) {
    return {
        type: SIGNUP_SUCCESS,
        json
    }
}

export function signupFailure(error) {
    return {
        type: SIGNUP_FAILURE,
        error 
    }
}

export function signup(data) {
    return function(dispatch) {
        dispatch(signupRequest(data)); 

        return axios.post('/api/signup', {
            name: data.name,
            email: data.email,
            password: data.password
        })
        .then(
            response => response.data,
            error => dispatch(signupFailure(error))
        )
        .then((json) => {
            return dispatch(signupSuccess(json)); 
        })
    }
}

export function updateUserRequest(data) {
    return {
        type: UPDATE_USER_REQUEST,
        data
    }
}

export function updateUserSuccess(json) {
    return {
        type: UPDATE_USER_SUCCESS,
        json
    }
}

export function updateUserFailure(error) {
    return {
        type: UPDATE_USER_FAILURE,
        error 
    }
}

export function updateUser(data, id) {
    return function(dispatch) {
        dispatch(updateUserRequest(data));
        axios.patch(`/api/user/${id}`, {
            name: data.name,
            description: data.description,
            src: data.src,
            email: data.email,
            tags: data.tags,
            education: data.education,
            location: data.location 
        })
        .then(
            response => response.data,
            error => dispatch(updateUserFailure(error))
        )
        .then((json) => {
            return dispatch(updateUserSuccess(json)); 
        })
    }
}

export function loginRequest(data) {
    return {
        type: LOGIN_REQUEST,
        data
    }
}

export function loginSuccess(json) {
    return {
        type: LOGIN_SUCCESS,
        json
    }
}

export function loginFailure(error) {
    return {
        type: LOGIN_FAILURE,
        error 
    }
}

export function login(data) {
    return function(dispatch) {
        dispatch(loginRequest(data)); 
        axios.post('/api/login', {
            email: data.email,
            password: data.password
        })
        .then(
            response => response.data,
            error => dispatch(loginFailure(error))
        )
        .then((json) => {
            return dispatch(loginSuccess(json)); 
        })
    }
}


export function logoutRequest() {
    return {
        type: LOGOUT_REQUEST
    }
}

export function logoutSuccess() {
    return {
        type: LOGOUT_SUCCESS
    }
}

export function logoutFailure() {
    return {
        type: LOGOUT_FAILURE
    }
}

export function logout() {
    return function(dispatch) {
        dispatch(logoutRequest()); 

        return axios.post('/api/logout')
            .then(
                response => response.data,
                error => dispatch(logoutFailure(error))
            )
            .then((json) => dispatch(logoutSuccess(json))); 
    }
}