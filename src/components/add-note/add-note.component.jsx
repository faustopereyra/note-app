import React from "react";

import NoteCreation from "../note-creation/note-creation.component";

import "./add-note.style.scss";

class AddNote extends React.Component {
    constructor() {
        super();

        this.state = {
            title: "Title",
            text: "Enter Text"
        }
    }

    render() {
        return (
            <div className="front-window">
                <NoteCreation title={this.state.title} text={this.state.text} />
            </div>
        )
    }
}

export default AddNote