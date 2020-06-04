import React from "react"

import "./note.style.scss"

export const Note = props => (
    <div className={`sticky ${props.note.bgColor}`} >
        <div class="note ">
            <div class="note-title ">
                {props.note.title}
            </div>
            <div class="note-text">
                {props.note.maintext}
            </div>

        </div>
    </div>
)