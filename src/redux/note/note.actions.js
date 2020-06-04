export const toggleAddNewNote = () => ({
    type: "TOGGLE_ADD_NEW_NOTE",
});

export const deleteCurrentNote = () => ({
    type: "DELETE_CURRENT_NOTE"
});

export const addCurrentTitle = (e) => ({
    type: "ADD_CURRENT_TITLE",
    payload: e
});

export const addCurrentText = (e) => ({
    type: "ADD_CURRENT_TEXT",
    payload: e
});