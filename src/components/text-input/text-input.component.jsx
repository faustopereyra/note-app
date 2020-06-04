import React from "react";

import { addCurrentText } from "../../redux/note/note.actions"

import "./text-input.style.scss"
import { connect } from "react-redux";

const TextInput = props => (
    <div className="create-text">
        <textarea type="text" className="new-text" placeholder={props.defaultText} onBlur={e => props.addCurrentText(e.target.value)}></textarea>
    </div>
)

const mapDispatchToProps = dispatch => ({
    addCurrentText: e => dispatch(addCurrentText(e))
})

export default connect(null, mapDispatchToProps)(TextInput);