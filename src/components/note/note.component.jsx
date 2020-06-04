import React from "react"

import "./note.style.scss"

export const Note = props => (
    <div className={`sticky back-green`} >
        <div className="note ">
            <div className="note-title ">
                {props.note.title}
            </div>
            <div className="note-text">
                {props.note.mainText}
            </div>

        </div>
    </div>
)