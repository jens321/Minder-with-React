import { SIGNUP } from '../actions/actionTypes'; 

const intialState = {
    loggedIn: 'false'
}

function rootReducer(state = intialState, action) {
    switch(action.type) {
        case SIGNUP:
            return Object.assign({}, state, action.data); 
        default: 
            return state;
    }
     
}

export default rootReducer; 
