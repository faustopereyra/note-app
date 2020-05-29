import { combineReducers } from "redux";

import userReducer from "./user/user.reducer"
import noteReducer from "./note/note.reducer";
import optionReducer from "./option/option.reducer";

export default combineReducers({
    user: userReducer,
    note: noteReducer,
    option: optionReducer
});