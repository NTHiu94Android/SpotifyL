// ---------------------play song---------------------
export const PLAY = 'PLAY';
export const PLAY_S = 'PLAY_SUCCESS';
export const PLAY_F = 'PLAY_FAILED';

export const play = (payload) => {
    return {
        type: PLAY,
        payload
    }
}

export const playS = (payload) => {
    return {
        type: PLAY_S,
        payload
    }
}

export const playF = (payload) => {
    return {
        type: PLAY_F,
        payload
    }
}

export const PAUSE = 'PAUSE';
export const PAUSE_S = 'PAUSE_SUCCESS';
export const PAUSE_F = 'PAUSE_FAILED';

export const pause = (payload) => {
    return {
        type: PAUSE,
        payload
    }
}

export const pauseS = (payload) => {
    return {
        type: PAUSE_S,
        payload
    }
}

export const pauseF = (payload) => {
    return {
        type: PAUSE_F,
        payload
    }
}

export const REPLAY = 'REPLAY';
export const REPLAY_S = 'REPLAY_SUCCESS';
export const REPLAY_F = 'REPLAY_FAILED';

export const replay = (payload) => {
    return {
        type: REPLAY,
        payload
    }
}

export const replayS = (payload) => {
    return {
        type: REPLAY_S,
        payload
    }
}

export const replayF = (payload) => {
    return {
        type: REPLAY_F,
        payload
    }
}

export const STOP = 'STOP';
export const STOP_S = 'STOP_SUCCESS';
export const STOP_F = 'STOP_FAILED';
export const stop = (payload) => {
    return {
        type: STOP,
        payload
    }
}

export const stopS = (payload) => {
    return {
        type: STOP_S,
        payload
    }
}

export const stopF = (payload) => {
    return {
        type: STOP_F,
        payload
    }
}

// ---------------------next song---------------------
export const NEXT = 'NEXT';
export const NEXT_S = 'NEXT_SUCCESS';
export const NEXT_F = 'NEXT_FAILED';

export const next = (payload) => {
    return {
        type: NEXT,
        payload
    }
}

export const nextS = (payload) => {
    return {
        type: NEXT_S,
        payload
    }
}

export const nextF = (payload) => {
    return {
        type: NEXT_F,
        payload
    }
}

export const AUTO_SONG = 'AUTO_SONG';
export const AUTO_SONG_S = 'AUTO_SONG_SUCCESS';
export const AUTO_SONG_F = 'AUTO_SONG_FAILED';

export const autoSong = (payload) => {
    return {
        type: AUTO_SONG,
        payload
    }
}

export const autoSongS = (payload) => {
    return {
        type: AUTO_SONG_S,
        payload
    }
}

export const autoSongF = (payload) => {
    return {
        type: AUTO_SONG_F,
        payload
    }
}


// ---------------------previous song---------------------
export const PREVIOUS = 'PREVIOUS';
export const PREVIOUS_S = 'PREVIOUS_SUCCESS';
export const PREVIOUS_F = 'PREVIOUS_FAILED';

export const previous = (payload) => {
    return {
        type: PREVIOUS,
        payload
    }
}

export const previousS = (payload) => {
    return {
        type: PREVIOUS_S,
        payload
    }
}

export const previousF = (payload) => {
    return {
        type: PREVIOUS_F,
        payload
    }
}

// ---------------------progress---------------------
export const PROGRESS = 'PROGRESS';
export const PROGRESS_S = 'PROGRESS_SUCCESS';
export const PROGRESS_F = 'PROGRESS_FAILED';

export const progress = (payload) => {
    return {
        type: PROGRESS,
        payload
    }
} 

export const progressS = (payload) => {
    return {
        type: PROGRESS_S,
        payload
    }
}

export const progressF = (payload) => {
    return {
        type: PROGRESS_F,
        payload
    }
}

export const TIME_START = 'TIME_START';
export const TIME_START_S = 'TIME_START_SUCCESS';
export const TIME_START_F = 'TIME_START_FAILED';

export const timeStart = (payload) => {
    return {
        type: TIME_START,
        payload
    }
}

export const timeStartS = (payload) => {
    return {
        type: TIME_START_S,
        payload
    }
}

export const timeStartF = (payload) => {
    return {
        type: TIME_START_F,
        payload
    }
}

export const TIME_END = 'TIME_END';
export const TIME_END_S = 'TIME_END_SUCCESS';
export const TIME_END_F = 'TIME_END_FAILED';

export const timeEnd = (payload) => {
    return {
        type: TIME_END,
        payload
    }
}

export const timeEndS = (payload) => {
    return {
        type: TIME_END_S,
        payload
    }
}

export const timeEndF = (payload) => {
    return {
        type: TIME_END_F,
        payload
    }
}