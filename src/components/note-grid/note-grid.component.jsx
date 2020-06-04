import React, { useEffect } from "react";

import { Note } from "../note/note.component"

import { getNotes } from "../../firebase/firebase.util"


import "./note-grid.style.scss";
import { connect } from "react-redux";

const NoteGrid = props => {
    let notes;

    useEffect(() => {
        //console.log(props.userId)
        if (props.userId && props.userId.id) {
            getNotes(props.userId)
        }
    })
    return (
        <div className="note-grid">

        </div>
    );
}

const mapStateToProps = state => ({
    userId: state.user.currentUser
})

export default connect(mapStateToProps)(NoteGrid)

/*{notes.map(note => (
                <Note key={note.id} note={note} />
            ))}*/