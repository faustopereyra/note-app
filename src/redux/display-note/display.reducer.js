const INITIAL_STATE = {
    displayNoteActive: false,
    noteData: null
};

const displayReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "TOGGLE_DISPLAY_NOTE":
            return {
                ...state,
                displayNoteActive: !state.displayNoteActive
            };
        case "GET_NOTE_DATA":
            return {
                ...state,
                noteData:action.payload
            }
        default:
            return state;
    }
}

export default displayReducer;