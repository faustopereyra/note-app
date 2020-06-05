import React from "react";
import {connect} from "react-redux"

import { IoMdColorPalette } from 'react-icons/io';

import ColorDropdown from "../color-dropdown/color-dropdown.component"

import {togglecolorOption} from "../../redux/note/note.actions"
import "./set-up-color.style.scss"

const SetUpColor = ({colorOptionActive, togglecolorOption}) =>(
    <div className="color-set-up">
        <a href="#" className="color-palette" onClick={togglecolorOption}><IoMdColorPalette /></a>
        {colorOptionActive ?  <ColorDropdown/> : ""}
        
    </div>
)

const mapStateToProps = state => ({
    colorOptionActive: state.note.colorOptionActive
})

const mapDispatchToProps = dispatch => ({
    togglecolorOption: () => dispatch(togglecolorOption())
})

export default connect(mapStateToProps, mapDispatchToProps)(SetUpColor)

//