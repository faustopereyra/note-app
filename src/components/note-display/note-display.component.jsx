import React from "react";

import {connect} from "react-redux"

import TitleInput from "../title-input/title-input.component"
import TextInput from "../text-input/text-input.component"
import SetUpColor from "../set-up-color/set-up-color.component"
import CustomButton from "../custom-button/custom-button.component";
import { updateNote } from "../../firebase/firebase.util";
import {toggleDisplayNote} from "../../redux/display-note/display.actions"
import {deleteCurrentNote} from "../../redux/note/note.actions"

const NoteDisplay = ({note, currentNote, toggleDisplayNote, deleteCurrentNote})=>{

    console.log("note objet: ", note)
    
    const triggerFunc = () => {
        toggleDisplayNote();
        updateNote(note.docId, currentNote);
        deleteCurrentNote();
        //getNotes(userId)
    }

    return (
        <div className="front-window">
            <div className={`note-creation ${ currentNote.background == 1 ? "back-yellow" : currentNote.background == 2 ? "back-green" : currentNote.background == 3 ? "back-orange " : ""}
        `}>
            <TitleInput defaultTitle={`${note.docData.title}`} type="display"/>
            <TextInput defaultText={`${note.docData.mainText}`} />
            <div>
            <SetUpColor  type="display"/>
            <CustomButton setClass="btn-black"  onClick={()=> triggerFunc()}  >Done!</CustomButton>
            </div>
        </div>
        </div>
        
    )
}

const mapStateToProps = state => ({
    note: state.display.noteData,
    currentNote: state.note.currentNote
    //userId: state.user.currentUser,
})

const mapDispatchToProps = dispatch => ({
    toggleDisplayNote: () => dispatch(toggleDisplayNote()),
    deleteCurrentNote: () => dispatch(deleteCurrentNote())
    //addNotes: notes => dispatch(addNotes(notes))
})

export default connect(mapStateToProps, mapDispatchToProps)(NoteDisplay)