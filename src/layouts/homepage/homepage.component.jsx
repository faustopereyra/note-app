import React from 'react';

import { Header } from "../../components/header/header.component"
import { NoteGrid } from "../../components/note-grid/note-grid.component"
import OptionButton from "../../components/option-button/option-button.component"




class HomePage extends React.Component {
    constructor() {
        super()

        //set up state with default values
        this.state = {
            notes: [],
            searchField: "",
            optionActive: false,
            addNoteActive: false
        };
    };

    componentDidMount() {
        //Load Notes
    }

    //Sets searchFields to what it is on the search field
    handleChange = (e) => {
        this.setState({ searchField: e.target.value })
    }

    toggle = (stateObject) => {
        let toggle = !this.state.stateObject;
        console.log(toggle)
        //this.setState({ stateObject: toggle })
    }

    togglePlus = (e) => {
        //toggle(!this.state.optionActive)
        let toggle = !this.state.optionActive;
        this.setState({ optionActive: toggle })
    };

    render() {
        const { notes, searchField } = this.state;
        //Filter Notes
        const filteredNotes = notes.filter(note => {
            note.title.toLowerCase().includes(searchField.toLowerCase())
        })
        return (
            <div className="App">
                <Header handleChange={this.handleChange} />
                <NoteGrid notes={filteredNotes} />
                <OptionButton active={this.state.optionActive} togglePlus={this.togglePlus}/>
            </div>
        )
    }

}

export default HomePage;
