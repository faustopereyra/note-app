import React from "react";

import TitleInput from "../title-input/title-input.component";
import TextInput from "../text-input/text-input.component";

import { connect } from "react-redux";
import { toggleAddNewNote } from "../../redux/note/note.actions"


import "./note-creation.style.scss"
import CustomButton from "../custom-button/custom-button.component";

const NoteCreation = ({ toggleAddNewNote }) => (
    <div className="note-creation">
        <TitleInput defaultTitle="{props.title}" />
        <TextInput defaultText="{props.text}" />
        <CustomButton setClass="btn-black" onClick={toggleAddNewNote} >Done!</CustomButton>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleAddNewNote: () => dispatch(toggleAddNewNote()),
})


export default connect(null, mapDispatchToProps)(NoteCreation);