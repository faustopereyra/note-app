import React from 'react';

import { Header } from "../../components/header/header.component"
import { NoteGrid } from "../../components/note-grid/note-grid.component"




class HomePage extends React.Component {
    constructor() {
        super()

        //set up state with default values
        this.state = {
            notes: [],
            searchField: ""
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
        })
        return (
            <div className="App">
                <Header handleChange={this.handleChange} />
                <NoteGrid notes={filteredNotes} />
            </div>
        )
    }

}

export default HomePage;
