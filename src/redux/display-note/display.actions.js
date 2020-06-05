export const toggleDisplayNote = () => ({
    type: "TOGGLE_DISPLAY_NOTE"
});

export const getNoteData = (data) => ({
    type:"GET_NOTE_DATA",
    payload: data
})