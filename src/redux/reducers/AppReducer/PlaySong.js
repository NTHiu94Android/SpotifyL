import {
    NEXT, NEXT_S, NEXT_F,
    PREVIOUS, PREVIOUS_S, PREVIOUS_F,
    PLAY, PLAY_S, PLAY_F,
    STOP, STOP_S, STOP_F,
    PAUSE, PAUSE_S, PAUSE_F,
    REPLAY, REPLAY_S, REPLAY_F,
} from '../../actions';

const initialState = {
    isShowControl: false,
    isPlaying: false,
    indexSong: 0,
    itemSongPlaying: {},
    listSong: [],
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
        default:
            return state;
    }
};

export default playSongReducer;