import { combineReducers } from "redux";

import userReducer from "./user/user.reducer"
import noteReducer from "./note/note.reducer";
import optionReducer from "./option/option.reducer";
import displayReducer from "./display-note/display.reducer";

export default combineReducers({
    user: userReducer,
    note: noteReducer,
    option: optionReducer,
    display: displayReducer
});