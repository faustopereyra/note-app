import React from "react";

import TitleInput from "../title-input/title-input.component";
import TextInput from "../text-input/text-input.component";

import { connect } from "react-redux";
import { toggleAddNewNote } from "../../redux/note/note.actions"
import { deleteCurrentNote } from "../../redux/note/note.actions"

import { createNote, getNotes } from "../../firebase/firebase.util"

import "./note-creation.style.scss"
import CustomButton from "../custom-button/custom-button.component";

const NoteCreation = ({ toggleAddNewNote, currentNote, deleteCurrentNote, userId }) => {
    const triggerFunc = () => {
        toggleAddNewNote();
        createNote(userId, currentNote);
        deleteCurrentNote();
        getNotes(userId)
    }
    return (
        <div className="note-creation">
            <TitleInput defaultTitle="title" />
            <TextInput defaultText="text" />
            <CustomButton setClass="btn-black" onClick={triggerFunc} >Done!</CustomButton>
        </div>
    )
}

const mapStateToProps = state => ({
    userId: state.user.currentUser,
    currentNote: state.note.currentNote
})
const mapDispatchToProps = dispatch => ({
    toggleAddNewNote: () => dispatch(toggleAddNewNote()),
    deleteCurrentNote: () => dispatch(deleteCurrentNote())
})


export default connect(mapStateToProps, mapDispatchToProps)(NoteCreation);