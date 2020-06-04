import React from "react";

import { Note } from "../note/note.component"


import "./note-grid.style.scss";
import { connect } from "react-redux";

const NoteGrid= ({userNotes}) => {

    if(userNotes){
        console.log("note added")
    }
    console.log(userNotes)
    return (
            <div className="note-grid">
   {userNotes ? userNotes.map(note => (
                <Note key={note.docId} note={note.docData} />
            )) : ""}
            </div>
        ); 
}

const mapStateToProps = state => ({
    userId: state.user.currentUser,
    userNotes: state.note.notes
})



export default connect(mapStateToProps)(NoteGrid)

/* */