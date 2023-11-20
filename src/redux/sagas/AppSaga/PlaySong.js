import { put, call } from 'redux-saga/effects';
import { 
    NEXT, NEXT_S, NEXT_F,
    PREVIOUS, PREVIOUS_S, PREVIOUS_F,
    PLAY, PLAY_S, PLAY_F,
    STOP, STOP_S, STOP_F,
    PAUSE, PAUSE_S, PAUSE_F,
    REPLAY, REPLAY_S, REPLAY_F,
    PROGRESS, PROGRESS_S, PROGRESS_F,
    AUTO_SONG, AUTO_SONG_S, AUTO_SONG_F,
    TIME_START, TIME_START_S, TIME_START_F,
    TIME_END, TIME_END_S, TIME_END_F,
    RANDOM, RANDOM_S, RANDOM_F,
    REPEAT, REPEAT_S, REPEAT_F,
    INIT_PLAYER, INIT_PLAYER_S, INIT_PLAYER_F,
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

function* autoSongSaga(action) {
    try {
        yield put({
            type: AUTO_SONG_S,
            payload: action.payload,
        });
    } catch (err) {
        yield put({
            type: AUTO_SONG_F,
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

function* progressSaga(action) {
    try {
        yield put({
            type: PROGRESS_S,
            payload: action.payload,
        });
    } catch (err) {
        yield put({
            type: PROGRESS_F,
            payload: err,
        });
    }
}

function* timeStartSaga(action) {
    try {
        yield put({
            type: TIME_START_S,
            payload: action.payload,
        });
    } catch (err) {
        yield put({
            type: TIME_START_F,
            payload: err,
        });
    }
}

function* timeEndSaga(action) {
    try {
        yield put({
            type: TIME_END_S,
            payload: action.payload,
        });
    } catch (err) {
        yield put({
            type: TIME_END_F,
            payload: err,
        });
    }
}

function* randomSaga(action) {
    try {
        yield put({
            type: RANDOM_S,
            payload: action.payload,
        });
    } catch (err) {
        yield put({
            type: RANDOM_F,
            payload: err,
        });
    }
}

function* repeatSaga(action) {
    try {
        yield put({
            type: REPEAT_S,
            payload: action.payload,
        });
    } catch (err) {
        yield put({
            type: REPEAT_F,
            payload: err,
        });
    }
}

function* initPlayerSaga(action) {
    try {
        yield put({
            type: INIT_PLAYER_S,
            payload: action.payload,
        });
    } catch (err) {
        yield put({
            type: INIT_PLAYER_F,
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
    }else if(action.type === PROGRESS) {
        yield call(progressSaga, action);
    }else if(action.type === AUTO_SONG) {
        yield call(autoSongSaga, action);
    }else if(action.type === TIME_START) {
        yield call(timeStartSaga, action);
    }else if(action.type === TIME_END) {
        yield call(timeEndSaga, action);
    }else if(action.type === RANDOM) {
        yield call(randomSaga, action);
    }else if(action.type === REPEAT) {
        yield call(repeatSaga, action);
    }else if(action.type === INIT_PLAYER) {
        yield call(initPlayerSaga, action);
    }
}