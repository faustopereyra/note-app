import React from "react";

import { addCurrentTitle } from "../../redux/note/note.actions"

import "./title-input.style.scss"
import { connect } from "react-redux";

const TitleInput = props => (
    <div className="create-title">
        <input type="text" className="new-title" placeholder={props.defaultTitle} onBlur={(e) => props.addCurrentTitle(e.target.value)} ></input>
    </div>
)

const mapDispatchToProps = dispatch => ({
    addCurrentTitle: e => dispatch(addCurrentTitle(e))
})

export default connect(null, mapDispatchToProps)(TitleInput);