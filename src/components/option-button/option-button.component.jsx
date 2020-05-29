import React from "react";
import { connect } from "react-redux";
import { toggleAddNewNote } from "../../redux/note/note.actions"
import { toggleOption } from "../../redux/option/option.actions"
import { BsFillPersonFill } from "react-icons/bs";
import { BsImages } from "react-icons/bs";
import { FaStickyNote } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

import "./option-button.style.scss"

const OptionButton = ({ optionActive, toggleOption, toggleAddNewNote }) => (
  <div className={`plus btn-position ${optionActive ? "plus--active" : ""}`} onClick={toggleOption} >
    <div className="plus__line plus__line--v">
      <a href="#" className="plus__link"><BsFillPersonFill /></a>
      <a href="#" className="plus__link"><BsImages /></a>
      <a href="#" className="plus__link" onClick={toggleAddNewNote} ><FaStickyNote /></a>
      <a href="#" className="plus__link"><GoLocation /></a>
    </div>
    <div className="plus__line plus__line--h"></div>
  </div>
);

const mapStateToProps = state => ({
  optionActive: state.option.optionActive
})

const mapDispatchToProps = dispatch => ({
  toggleAddNewNote: () => dispatch(toggleAddNewNote()),
  toggleOption: () => dispatch(toggleOption())
})

export default connect(mapStateToProps, mapDispatchToProps)(OptionButton);