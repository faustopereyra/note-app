import React from "react";

import { addCurrentTitle, toggleAddNewNote, deleteCurrentNote } from "../../redux/note/note.actions"


import "./title-input.style.scss"
import { connect } from "react-redux";

const TitleInput = props => {
    const trigfunc = () =>{
        props.toggleAddNewNote()
        props.deleteCurrentNote()
    }
    return(
    <div className="create-title">
        <div className="close" onClick={trigfunc} > &times; </div>
        <input type="text" className="new-title" placeholder={props.defaultTitle} onBlur={(e) => props.addCurrentTitle(e.target.value)} ></input>
    </div>
)}

const mapDispatchToProps = dispatch => ({
    addCurrentTitle: e => dispatch(addCurrentTitle(e)),
    deleteCurrentNote: () => dispatch(deleteCurrentNote()),
    toggleAddNewNote: () => dispatch(toggleAddNewNote())
})

export default connect(null, mapDispatchToProps)(TitleInput);