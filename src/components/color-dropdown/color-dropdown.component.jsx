import React from "react"

import {connect} from "react-redux"

import { setBackground } from "../../redux/note/note.actions";

const ColorDropdown = ({setBackground})=>(
    <div className="color-dropdown">
        <div className="color-dropdown__color-selector color-dropdown__color-selector--1" onClick={() => setBackground(1)}></div>
        <div className="color-dropdown__color-selector color-dropdown__color-selector--2" onClick={() => setBackground(2)}></div>
        <div className="color-dropdown__color-selector color-dropdown__color-selector--3" onClick={() => setBackground(3)}></div>
    </div>
)
const mapDispatchToProps = dispatch => ({
    setBackground: color => dispatch(setBackground(color))
})
export default connect(null, mapDispatchToProps)(ColorDropdown);