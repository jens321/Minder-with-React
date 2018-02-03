/*
 * action types
 */

export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN'; 
export const UPDATE_USER = 'UPDATE_USER'; 
export const LOGOUT = 'LOGOUT'; 

/*
 * other constants
 */



/*
 * action creators
 */

export function signup(data) {
    return {
        type: SIGNUP,
        data
    }
}

export function updateUser(data) {
    return {
        type: UPDATE_USER,
        data
    }
}

export function login(data) {
    return {
        type: LOGIN,
        data 
    }
}

export function logout() {
    return {
        type: LOGOUT
    }
}