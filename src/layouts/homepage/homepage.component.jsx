import React from 'react';

import { Header } from "../../components/header/header.component"
import NoteGrid from "../../components/note-grid/note-grid.component"
import OptionButton from "../../components/option-button/option-button.component"
import AddNote from "../../components/add-note/add-note.component"

import { connect } from 'react-redux';

import { toggleAddNewNote } from "../../redux/note/note.actions";




const HomePage = (props) => (
    <div className="App" >
        <Header />
        <NoteGrid />
        <OptionButton onClick={props.toggleAddNewNote} />
        <div>
            {props.addNoteActive ?
                <AddNote /> : null}
        </div>

    </div >
);

const mapStateToProps = state => ({
    addNoteActive: state.note.addNoteActive,
})

const mapDispatchToProps = dispatch => ({
    toggleAddNewNote: () => dispatch(toggleAddNewNote)
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

    //tengo que hacerlo actualizar el note reducer.
    toggleAddNote = (e) => {
        let toggle = !this.state.addNoteActive;
        this.setState({ addNoteActive: toggle })
        console.log("note added")
    };

    toggleOption = (e) => {
        //toggle(!this.state.optionActive)
        let toggle = !this.state.optionActive;
        this.setState({ optionActive: toggle })
    };

    render() {
    const { notes, searchField } = this.state;
    //Filter Notes
    const filteredNotes = notes.filter(note => {
        note.title.toLowerCase().includes(searchField.toLowerCase())
    })*/