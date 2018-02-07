import { SIGNUP_REQUEST, 
         SIGNUP_SUCCESS,
         SIGNUP_FAILURE,

         UPDATE_USER_REQUEST, 
         UPDATE_USER_SUCCESS,
         UPDATE_USER_FAILURE,

         LOGIN_REQUEST,
         LOGIN_SUCCESS,
         LOGIN_FAILURE,

         LOGOUT_REQUEST,
         LOGOUT_SUCCESS,
         LOGOUT_FAILURE } from '../actions/actionTypes'; 

const initialState = {
    loggedIn: false,
    loginRequest: false,
    signupRequest: false,
    updateUserRequest: false,
    logoutRequest: false 
}

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case SIGNUP_REQUEST:
            return Object.assign({}, state, { signupRequest: true }); 
        case SIGNUP_SUCCESS:
            return Object.assign({}, state, action.json, { loggedIn: true, signupRequest: false});
        case SIGNUP_FAILURE:
            return Object.assign({}, state, { error: action.error }); 

        case UPDATE_USER_REQUEST:
            return Object.assign({}, state, { updateUserRequest: true }); 
        case UPDATE_USER_SUCCESS:
            return Object.assign({}, state, action.json, { updateUserRequest: false });
        case UPDATE_USER_FAILURE:
            return Object.assign({}, state, { error: action.error });

        case LOGIN_REQUEST:
            return Object.assign({}, state, { loginRequest: true }); 
        case LOGIN_SUCCESS:
            return Object.assign({}, state, action.json, { loggedIn: true, loginRequest: false }); 
        case LOGIN_FAILURE: 
            return Object.assign({}, state, { error: action.error }); 

        case LOGOUT_REQUEST:
            return Object.assign({}, state, { logoutRequest: true }); 
        case LOGOUT_SUCCESS:
            return Object.assign({}, initialState); 
        case LOGOUT_FAILURE:
            return Object.assign({}, state, { error: action.error }); 
        default: 
            return state;
    }
     
}

export default rootReducer; 
