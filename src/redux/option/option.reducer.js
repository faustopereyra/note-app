const INITIAL_STATE = {
    optionActive: false
};

const optionReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "TOGGLE_OPTION":
            return {
                ...state,
                optionActive: !state.optionActive
            };
        default:
            return state;
    }
};

export default optionReducer;