import { put, call } from 'redux-saga/effects';
import { 
    NEXT, NEXT_S, NEXT_F,
    PREVIOUS, PREVIOUS_S, PREVIOUS_F,
    PLAY, PLAY_S, PLAY_F,
    STOP, STOP_S, STOP_F,
    PAUSE, PAUSE_S, PAUSE_F,
    REPLAY, REPLAY_S, REPLAY_F,
} from '../../actions';

function* playSaga(action) {
    try {
        yield put({
            type: PLAY_S,
            payload: action.payload,
        });
    } catch (err) {
        yield put({
            type: PLAY_F,
            payload: err,
        });
    }
}

function* previousSaga(action) {
    try {
        yield put({
            type: PREVIOUS_S,
            payload: action.payload,
        });
    } catch (err) {
        yield put({
            type: PREVIOUS_F,
            payload: err,
        });
    }
}

function* nextSaga(action) {
    try {
        yield put({
            type: NEXT_S,
            payload: action.payload,
        });
    } catch (err) {
        yield put({
            type: NEXT_F,
            payload: err,
        });
    }
}

function* pauseSaga(action) {
    try {
        yield put({
            type: PAUSE_S,
            payload: action.payload,
        });
    } catch (err) {
        yield put({
            type: PAUSE_F,
            payload: err,
        });
    }
}

function* replaySaga(action) {
    try {
        yield put({
            type: REPLAY_S,
            payload: action.payload,
        });
    } catch (err) {
        yield put({
            type: REPLAY_F,
            payload: err,
        });
    }
}

function* stopSaga(action) {
    try {
        yield put({
            type: STOP_S,
            payload: action.payload,
        });
    } catch (err) {
        yield put({
            type: STOP_F,
            payload: err,
        });
    }

}

export default function* playSongSaga (action) {
    if (action.type === PLAY) {
        yield call(playSaga, action);
    } else if (action.type === PREVIOUS) {
        yield call(previousSaga, action);
    } else if(action.type === NEXT) {
        yield call(nextSaga, action);
    }else if(action.type === PAUSE) {
        yield call(pauseSaga, action);
    }else if(action.type === STOP) {
        yield call(stopSaga, action);
    }else if(action.type === REPLAY) {
        yield call(replaySaga, action);
    }
}