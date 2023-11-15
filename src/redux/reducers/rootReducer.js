import { combineReducers } from "redux";
import loginReducer from "../reducers/LoginReducer";
import appReducer from "../reducers/AppReducer";
import playSongReducer from "../reducers/AppReducer/PlaySong";

const rootReducer = combineReducers({
    loginReducer: loginReducer,
    appReducer: appReducer,
    playSongReducer: playSongReducer
});

export default rootReducer;