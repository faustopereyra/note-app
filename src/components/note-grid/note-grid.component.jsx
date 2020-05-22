import React from "react";

import { Note } from "../note/note.component"

import "./note-grid.style.scss";

export const NoteGrid = props => (
    <div className="note-grid">
        {props.notes.map(note => (
            <Note key={note.id} note={note} />
        ))}
    </div>
);