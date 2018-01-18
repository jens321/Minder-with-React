import { SIGNUP } from '../actions/actionTypes'; 

const initialState = {
    loggedIn: 'false'
}

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case SIGNUP:
            return Object.assign({}, state, action.data); 
        default: 
            return state;
    }
     
}

export default rootReducer; 
