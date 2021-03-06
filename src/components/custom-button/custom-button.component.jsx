import React from "react"

import "./custom-button.style.scss"

const CustomButton = ({ children, isGoogleSignIn, setClass, toggleAddNote, ...otherProps }) => (
    <button className={`${isGoogleSignIn ? "google-sign-in" : " "} custom-button ${setClass} `} {...otherProps} >
        {children}
    </button>
);

export default CustomButton;

//onClick={toggleAddNote ? toggleAddNote() : ""} 