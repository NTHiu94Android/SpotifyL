import { all, takeEvery } from 'redux-saga/effects';
import { 
    LOGIN, CHANGE_DARK_MODE, CHANGE_LIGHT_MODE,
    NEXT, PLAY, PREVIOUS, PAUSE, REPLAY, PROGRESS,
    AUTO_SONG, TIME_START, TIME_END,
} from "../actions";
import loginSaga from './LoginSaga';
import appSaga from './AppSaga/ChangMode';
import playSongSaga from './AppSaga/PlaySong';

const sagas = function* () {
    yield all([
        takeEvery(LOGIN, loginSaga),
        takeEvery(CHANGE_DARK_MODE, appSaga),
        takeEvery(CHANGE_LIGHT_MODE, appSaga),
        takeEvery(NEXT, playSongSaga), 
        takeEvery(PLAY, playSongSaga),
        takeEvery(PREVIOUS, playSongSaga),
        takeEvery(PAUSE, playSongSaga),
        takeEvery(REPLAY, playSongSaga),
        takeEvery(PROGRESS, playSongSaga),
        takeEvery(AUTO_SONG, playSongSaga),
        takeEvery(TIME_START, playSongSaga),
        takeEvery(TIME_END, playSongSaga),
    ]);
}

export default sagas;