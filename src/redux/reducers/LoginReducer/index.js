
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILED } from "../../actions";

const initState = {
    data: {},
    user_name: '',
    pass_word: '',
    isLoading: false,
    error: '',
};

const loginReducer = (state = initState, action) => {
    switch (action.type) {
        case LOGIN:
            console.log('LOGIN: ', action.payload);
            return {
                ...state,
                isLoading: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                data: action.payload,
                user_name: action.payload.user_name,
                pass_word: action.payload.pass_word,
                isLoading: false,
                error: ''
            }
        case LOGIN_FAILED:
            return {
                ...state,
                data: action.payload,
                error: 'Login failed. Please try again!',
                isLoading: false
            }
        default:
            return state;
    }
};

export default loginReducer;