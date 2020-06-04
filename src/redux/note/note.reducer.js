const INITIAL_STATE = {
    addNoteActive: false,
    currentNote: null
};

const noteReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "TOGGLE_ADD_NEW_NOTE":
            return {
                ...state,
                addNoteActive: !state.addNoteActive
            };
        case "ADD_CURRENT_TITLE":
            return {
                ...state,
                currentNote: {
                    ...state.currentNote,
                    title: action.payload
                }
            }
        case "ADD_CURRENT_TEXT":
            return {
                ...state,
                currentNote: {
                    ...state.currentNote,
                    mainText: action.payload
                }
            }
        case "DELETE_CURRENT_NOTE":
            return {
                ...state,
                currentNote: null
            }
        default:
            return state;
    }
};

export default noteReducer;