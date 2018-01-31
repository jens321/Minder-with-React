import { SIGNUP, UPDATE_USER, LOGIN } from '../actions/actionTypes'; 

const initialState = {
    loggedIn: 'false'
}

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case SIGNUP:
            return Object.assign({}, state, action.data); 
        case UPDATE_USER:
            return Object.assign({}, state, action.data); 
        case LOGIN:
            return Object.assign({}, state, action.data); 
        default: 
            return state;
    }
     
}

export default rootReducer; 
