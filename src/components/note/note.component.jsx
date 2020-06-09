import React from "react"


import {connect} from "react-redux"

import {toggleDisplayNote, getNoteData} from "../../redux/display-note/display.actions"


import "./note.style.scss"


const Note = props => {
    
    const triggerFunc = () => {
        props.getNoteData(props.data)
        props.toggleDisplayNote();
        console.log(props.data)
        
        //getNotes(userId)
    }

    return(
    <div onClick={triggerFunc} className={`sticky ${ props.note.background == 1 ? "back-yellow" : props.note.background == 2 ? "back-green" : props.note.background == 3 ? "back-orange " : ""}`} >
        <div className="note ">
            <div className="note-title ">
                {props.note.title}
            </div>
            <div className="note-text">
                {props.note.mainText}
            </div>

        </div>
    </div>
)}

const mapDispatchToProps = dispatch => ({
    toggleDisplayNote: () => dispatch(toggleDisplayNote()),
    getNoteData: data => dispatch(getNoteData(data))
    //addNotes: notes => dispatch(addNotes(notes))
})

export default connect(null, mapDispatchToProps)(Note)