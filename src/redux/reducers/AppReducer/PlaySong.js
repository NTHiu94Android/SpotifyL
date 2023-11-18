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
} from '../../actions';

const initialState = {
    isShowControl: false,
    isPlaying: false,
    indexSong: 0,
    itemSongPlaying: {},
    listSong: [],
    progress: 0,
    timeStart: '',
    timeEnd: '',
    isRandom: false,
    isRepeat: 0,
};

const playSongReducer = (state = initialState, action) => {
    switch (action.type) {
        case PLAY:
            return {
                ...state,
            };
        case PLAY_S:
            return {
                ...state,
                isShowControl: true,
                isPlaying: action.payload.isPlaying,
                indexSong: action.payload.indexSong,
                listSong: action.payload.listSong,
                itemSongPlaying: action.payload.itemSongPlaying,
            };
        case PLAY_F:
            return {
                ...state,
                error: action.payload
            };
        case PAUSE:
            return {
                ...state,
            };
        case PAUSE_S:
            return {
                ...state,
                isPlaying: false,
            };
        case PAUSE_F:
            return {
                ...state,
                error: action.payload
            };
        case REPLAY:
            return {
                ...state,
            };
        case REPLAY_S:
            return {
                ...state,
                isPlaying: true,
            };
        case REPLAY_F:
            return {
                ...state,
                error: action.payload
            };
        case STOP:
            return {
                ...state,
            };
        case STOP_S:
            return {
                ...state,
                isShowControl: false,
                isPlaying: false,
                indexSong: 0,
                itemSongPlaying: {},
                listSong: [],
            };
        case STOP_F:
            return {
                ...state,
                error: action.payload
            };
        case NEXT:
            return {
                ...state,
            };
        case NEXT_S:
            return {
                ...state,
                indexSong: state.indexSong + 1,
                isPlaying: true,
                itemSongPlaying: state.listSong[state.indexSong + 1],
            };
        case NEXT_F:
            return {
                ...state,
                error: action.payload
            };
        case AUTO_SONG:
            return {
                ...state,
            };
        case AUTO_SONG_S:
            return {
                ...state,
                itemSongPlaying: action.payload.itemSongPlaying,
            };
        case AUTO_SONG_F:
            return {
                ...state,
                error: action.payload
            };
        case PREVIOUS:
            return {
                ...state,
            };
        case PREVIOUS_S:
            return {
                ...state,
                indexSong: state.indexSong - 1,
                isPlaying: true,
                itemSongPlaying: state.listSong[state.indexSong - 1],
            };
        case PREVIOUS_F:
            return {
                ...state,
                error: action.payload,

            };
        case PROGRESS:
            return {
                ...state,
            };
        case PROGRESS_S: 
            return {
                ...state,
                progress: action.payload,
            };
        case PROGRESS_F:
            return {
                ...state,
                error: action.payload
            };
        case TIME_START:
            return {
                ...state,
            };
        case TIME_START_S:
            return {
                ...state,
                timeStart: action.payload,
            };
        case TIME_START_F:
            return {
                ...state,
                error: action.payload
            };
        case TIME_END:
            return {
                ...state,
            };
        case TIME_END_S:
            return {
                ...state,
                timeEnd: action.payload,
            };
        case TIME_END_F:
            return {
                ...state,
                error: action.payload
            };
        case RANDOM:
            return {
                ...state,
            };
        case RANDOM_S:
            return {
                ...state,
                isRandom: action.payload.isRandom,
            };
        case RANDOM_F:
            return {
                ...state,
                error: action.payload
            };
        case REPEAT:
            return {
                ...state,
            };
        case REPEAT_S:
            return {
                ...state,
                isRepeat: action.payload.isRepeat,
            };
        case REPEAT_F:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default playSongReducer;