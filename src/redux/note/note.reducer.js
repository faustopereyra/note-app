const INITIAL_STATE = {
    addNoteActive: false
};

const noteReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "TOGGLE_ADD_NEW_NOTE":
            return {
                ...state,
                addNoteActive: !state.addNoteActive
            };
        default:
            return state;
    }
};

export default noteReducer;