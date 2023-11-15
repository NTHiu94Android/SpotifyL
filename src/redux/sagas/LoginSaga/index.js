import { put, call } from 'redux-saga/effects';
import { LOGIN_SUCCESS, LOGIN_FAILED } from '../../actions';
import { Api } from '../Api';

function* loginSaga(action) {
    try {
        const dataUser = yield Api.logintUserFromApi(
            action.payload.user_name,
            action.payload.pass_word,
            action.payload.machine_id,
        );
        if (dataUser.results === 'S') {
            yield put({
                type: LOGIN_SUCCESS,
                payload: dataUser,
                username: action.payload.user_name,
                password: action.payload.pass_word,
            });
        } else if (dataUser.results === 'F') {
            yield put({
                type: LOGIN_FAILED,
                payload: dataUser,
            });
        }
    } catch (err) {
        console.log('err', err);
    }
}

export default function* (action) {
    yield call(loginSaga, action);
}