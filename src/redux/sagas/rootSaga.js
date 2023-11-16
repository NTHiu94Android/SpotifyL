import { all, takeEvery } from 'redux-saga/effects';
import { 
    LOGIN, CHANGE_DARK_MODE, CHANGE_LIGHT_MODE,
    NEXT, PLAY, PREVIOUS, PAUSE, REPLAY, PROGRESS,
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
    ]);
}

export default sagas;