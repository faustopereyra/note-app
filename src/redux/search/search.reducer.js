const INITIAL_STATE = {
    searchField: ""
};

const SearchReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SEARCH_BOX_UPDATE":
            return {
                ...state,
                searchField: action.payload
            }
        default:
            return state;
    }
};

export default SearchReducer;