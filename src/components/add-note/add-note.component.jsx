import React from "react";

import NoteCreation from "../note-creation/note-creation.component";

import "./add-note.style.scss";
import { connect } from "react-redux";
//import { toggleAddNewNote } from "../../redux/note/note.actions"

class AddNote extends React.Component {
    constructor(props, { AddNoteActive }) {
        super(props, { AddNoteActive });

        this.state = {
            title: "Title",
            text: "Enter Text"
        }
    }

    render() {
        return (
            <div className={`front-window`}>
                <NoteCreation title={this.state.title} text={this.state.text} toggleAddNote={this.props.toggleAddNote} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    AddNoteActive: state.note.addNoteActive
});

export default connect(mapStateToProps)(AddNote); 