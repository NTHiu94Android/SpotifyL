export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';

export const fetchLoginAction = (payload) => {
    return {
        type: LOGIN,
        payload: payload,
    };
};

export const fetchLoginSuccessAction = (payload) => {
    return {
        type: LOGIN_SUCCESS,
        payload: payload,
    };
};

export const fetchLoginFailedAction = (payload) => {
    return {
        type: LOGIN_FAILED,
        payload: payload,
    };
};