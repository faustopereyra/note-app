import React, {useEffect} from 'react';

import { Header } from "../../components/header/header.component"
import NoteGrid from "../../components/note-grid/note-grid.component"
import OptionButton from "../../components/option-button/option-button.component"
import AddNote from "../../components/add-note/add-note.component"

import { connect } from 'react-redux';

import { toggleAddNewNote } from "../../redux/note/note.actions";
import {addNotes} from "../../redux/note/note.actions"
import {firestore} from "../../firebase/firebase.util"




const HomePage = (props) => {
    const getNotes = async (userId) => {

        const noteRef = firestore.collection("notes").where("user", "==", `${userId.id}`)
        noteRef.get().then(function (querySnapshot) {
            let notes = [];
            let test = {};
            querySnapshot.forEach(function (doc) {
                let docData = doc.data()
                let docId = doc.id
                const data= {docData, docId};
                notes.push(data)
            });
            /*for (let i =0; i< notes.length; i++){
                test[notes[i].docId]= notes[i].docData
            }*/
            
            props.addNotes(notes)
            
        })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            });
    }
  
   useEffect(()=>{    
       //console.log(props.userId)
        if (props.userId && props.userId.id) {
            getNotes(props.userId)
            
        }
    })
    return (
    <div className="App" >
        <Header />
        <NoteGrid />
        <OptionButton onClick={props.toggleAddNewNote} />
        <div>
            {props.addNoteActive ?
                <AddNote /> : null}
        </div>

    </div >
)};

const mapStateToProps = state => ({
    addNoteActive: state.note.addNoteActive,
    userId:state.user.currentUser
})

const mapDispatchToProps = dispatch => ({
    toggleAddNewNote: () => dispatch(toggleAddNewNote),
    addNotes: notes => dispatch(addNotes(notes))
})


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);




/*constructor() {
        super()

        //set up state with default values
        this.state = {
            notes: [],
            searchField: "",
            optionActive: false,
            addNoteActive: false //Tengo que
        };
    };

    componentDidMount() {
        //Load Notes
    }

    //Sets searchFields to what it is on the search field
    handleChange = (e) => {
        this.setState({ searchField: e.target.value })
    }


    render() {
    const { notes, searchField } = this.state;
    //Filter Notes
    const filteredNotes = notes.filter(note => {
        note.title.toLowerCase().includes(searchField.toLowerCase())
    })*/