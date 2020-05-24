import React from "react";

import "./title-input.style.scss"

const TitleInput = props => (
    <div className="create-title">
        <input type="text" className="new-title" placeholder={props.defaultTitle}></input>
    </div>
)

export default TitleInput;