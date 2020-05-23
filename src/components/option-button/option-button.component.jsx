import React from "react";
import {BsFillPersonFill} from "react-icons/bs"
import {BsImages} from "react-icons/bs"
import {FaStickyNote} from "react-icons/fa"
import {GoLocation} from "react-icons/go"

import "./option-button.style.scss"

const OptionButton = (props) =>(
    <div className={ `plus btn-position ${props.active ? "plus--active" : "" }`} onClick={props.togglePlus} >
        <div className="plus__line plus__line--v">
        <a href="#" className="plus__link"><BsFillPersonFill/></a>
        <a href="#" className="plus__link"><BsImages/></a>
        <a href="#" className="plus__link"><FaStickyNote/></a>
        <a href="#" className="plus__link"><GoLocation/></a>
        </div>
    <div className="plus__line plus__line--h"></div>
  </div>
);

export default OptionButton;