import React from "react";

import NoteCreation from "../note-creation/note-creation.component";

import "./add-note.style.scss";

class AddNote extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "Title",
            text: "Enter Text"
        }
    }

    render() {
        return (
            <div className={`front-window ${this.props.addNoteActive ? "" : "front-window--off"}`}>
                <NoteCreation title={this.state.title} text={this.state.text} toggleAddNote={this.props.toggleAddNote} />
            </div>
        )
    }
}

export default AddNote