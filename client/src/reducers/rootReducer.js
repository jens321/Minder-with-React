import { SIGNUP, 
         UPDATE_USER, 
         LOGIN, LOGOUT } from '../actions/actionTypes'; 

const initialState = {
    loggedIn: 'false'
}

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case SIGNUP:
            return Object.assign({}, state, action.data, { loggedIn: true }); 
        case UPDATE_USER:
            return Object.assign({}, state, action.data); 
        case LOGIN:
            return Object.assign({}, state, action.data, { loggedIn: true }); 
        case LOGOUT:
            return Object.assign({}, initialState); 
        default: 
            return state;
    }
     
}

export default rootReducer; 
