const INITIAL_STATE = {
    addNoteActive: false,
    colorOptionActive: false,
    currentNote: {
        background: 1
    }
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
                currentNote: {
                    background: 1
                }
            }
        case "ADD_NOTES":
            return{
                ...state,
                notes: action.payload
            }
        case "SET_BACKGROUND":
            return{
                ...state,
                currentNote: {
                    ...state.currentNote,
                    background: action.payload
                }
            }
        case "TOGGLE_COLOR_OPTIONS":
            return{
                ...state,
                colorOptionActive: !state.colorOptionActive

            }
        default:
            return state;
    }
};

export default noteReducer;