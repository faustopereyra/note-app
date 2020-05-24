import React from "react";

import "./text-input.style.scss"

const TextInput = props => (
    <div className="create-text">
        <textarea type="text" className="new-text" placeholder={props.defaultText}></textarea>
    </div>
)

export default TextInput;