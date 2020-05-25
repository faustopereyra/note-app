import { combineReducers } from "redux";

import userReducer from "./user/user.reducer"
import noteReducer from "./note/note.reducer";

export default combineReducers({
    user: userReducer,
    note: noteReducer
});