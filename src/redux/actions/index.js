import {
    LOGIN, LOGIN_SUCCESS, LOGIN_FAILED,
    fetchLoginAction, fetchLoginSuccessAction, fetchLoginFailedAction
} from '../actions/LoginAction';
import {
    CHANGE_DARK_MODE, CHANGE_DARK_MODE_S, CHANGE_DARK_MODE_F,
    CHANGE_LIGHT_MODE, CHANGE_LIGHT_MODE_S, CHANGE_LIGHT_MODE_F,
    changDarkMode, changDarkModeS, changDarkModeF,
    changLightMode, changLightModeS, changLightModeF
} from '../actions/AppAction';

import {
    NEXT, NEXT_S, NEXT_F,
    PREVIOUS, PREVIOUS_S, PREVIOUS_F,
    PLAY, PLAY_S, PLAY_F,
    next, nextS, nextF,
    previous, previousS, previousF,
    play, playS, playF,
    PAUSE, PAUSE_S, PAUSE_F,
    pause, pauseS, pauseF,
    REPLAY, REPLAY_S, REPLAY_F,
    replay, replayS, replayF,
    PROGRESS, PROGRESS_S, PROGRESS_F,
    progress, progressS, progressF,
    AUTO_SONG, AUTO_SONG_S, AUTO_SONG_F,
    autoSong, autoSongS, autoSongF,
    TIME_START, TIME_START_S, TIME_START_F,
    timeStart, timeStartS, timeStartF,
    TIME_END, TIME_END_S, TIME_END_F,
    timeEnd, timeEndS, timeEndF,
    RANDOM, RANDOM_S, RANDOM_F,
    random, randomS, randomF,
    REPEAT, REPEAT_S, REPEAT_F,
    repeat, repeatS, repeatF,
} from '../actions/AppAction/PlaySong';

export {
    // Login action
    LOGIN, LOGIN_SUCCESS, LOGIN_FAILED,
    fetchLoginAction, fetchLoginSuccessAction, fetchLoginFailedAction,
    // App action
    CHANGE_DARK_MODE, CHANGE_DARK_MODE_S, CHANGE_DARK_MODE_F,
    CHANGE_LIGHT_MODE, CHANGE_LIGHT_MODE_S, CHANGE_LIGHT_MODE_F,
    changDarkMode, changDarkModeS, changDarkModeF,
    changLightMode, changLightModeS, changLightModeF,

    // Play song action
    NEXT, NEXT_S, NEXT_F,
    PREVIOUS, PREVIOUS_S, PREVIOUS_F,
    PLAY, PLAY_S, PLAY_F,
    next, nextS, nextF,
    previous, previousS, previousF,
    play, playS, playF,
    PAUSE, PAUSE_S, PAUSE_F,
    pause, pauseS, pauseF,
    REPLAY, REPLAY_S, REPLAY_F,
    replay, replayS, replayF,
    PROGRESS, PROGRESS_S, PROGRESS_F,
    progress, progressS, progressF,
    AUTO_SONG, AUTO_SONG_S, AUTO_SONG_F,
    autoSong, autoSongS, autoSongF,
    TIME_START, TIME_START_S, TIME_START_F,
    timeStart, timeStartS, timeStartF,
    TIME_END, TIME_END_S, TIME_END_F,
    timeEnd, timeEndS, timeEndF,
    RANDOM, RANDOM_S, RANDOM_F,
    random, randomS, randomF,
    REPEAT, REPEAT_S, REPEAT_F,
    repeat, repeatS, repeatF,

}