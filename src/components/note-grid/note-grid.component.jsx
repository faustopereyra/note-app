import React from "react";

import Note from "../note/note.component"


import "./note-grid.style.scss";
import { connect } from "react-redux";

const NoteGrid= ({userNotes}) => {

    
    return (
            <div className="note-grid">
   {userNotes ? userNotes.map(note => (
                <Note key={note.docId} note={note.docData} data={note} />
            )) : ""}
            </div>
        ); 
}

const mapStateToProps = state => ({
    userNotes: state.note.notes
})



export default connect(mapStateToProps)(NoteGrid)