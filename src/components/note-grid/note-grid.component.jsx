import React from "react";

import Note from "../note/note.component"


import "./note-grid.style.scss";
import { connect } from "react-redux";

const NoteGrid = ({ userNotes, searchField }) => {

    const filteredNotes = () => {

        const p = userNotes.filter(note => note.docData.title.toLowerCase().includes(searchField.toLowerCase())
        )
        return p
    }

    return (
        <div className="note-grid">
            {userNotes ? filteredNotes().map(note => (
                <Note key={note.docId} note={note.docData} data={note} />
            )) : ""}
        </div>
    );
}

const mapStateToProps = state => ({
    userNotes: state.note.notes,
    searchField: state.search.searchField
})



export default connect(mapStateToProps)(NoteGrid)