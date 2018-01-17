/*
 * action types
 */

export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN'; 

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

export function login(data) {
    return {
        type: LOGIN,
        data 
    }
}