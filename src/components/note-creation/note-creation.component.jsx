import React from "react";

import TitleInput from "../title-input/title-input.component";
import TextInput from "../text-input/text-input.component";

import "./note-creation.style.scss"
import CustomButton from "../custom-button/custom-button.component";

const NoteCreation = props => (
    <div className="note-creation">
        <TitleInput defaultTitle={props.title} />
        <TextInput defaultText={props.text} />
        <CustomButton setClass="btn-black" >Done!</CustomButton>
    </div>
)

export default NoteCreation;