import React from "react";

import TitleInput from "../title-input/title-input.component";
import TextInput from "../text-input/text-input.component";

import { connect } from "react-redux";
import { toggleAddNewNote } from "../../redux/note/note.actions"
import { deleteCurrentNote } from "../../redux/note/note.actions"
import { addNotes } from "../../redux/note/note.actions"

import { createNote, firestore} from "../../firebase/firebase.util"

import "./note-creation.style.scss"
import CustomButton from "../custom-button/custom-button.component";

const NoteCreation = ({ toggleAddNewNote, currentNote, deleteCurrentNote, userId, addNotes }) => {
    const getNotes = async (userId) => {

        const noteRef = firestore.collection("notes").where("user", "==", `${userId.id}`)
        noteRef.get().then(function (querySnapshot) {
            let notes = [];
            querySnapshot.forEach(function (doc) {
                let docData = doc.data()
                let docId = doc.id
                const data= {docData, docId};
                notes.push(data)
            });
            /*for (let i =0; i< notes.length; i++){
                test[notes[i].docId]= notes[i].docData
            }*/
            addNotes(notes)
            
        })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            });
    }

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
    deleteCurrentNote: () => dispatch(deleteCurrentNote()),
    addNotes: notes => dispatch(addNotes(notes))
})


export default connect(mapStateToProps, mapDispatchToProps)(NoteCreation);