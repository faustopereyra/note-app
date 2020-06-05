import React from "react"

import "./note.style.scss"


const Note = props => (
    <div className={`sticky ${ props.note.background == 1 ? "back-yellow" : props.note.background == 2 ? "back-green" : props.note.background == 3 ? "back-orange " : ""}`} >
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


export default Note