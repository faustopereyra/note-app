import React from "react"

import { Search } from "../search/search.component"

import { ReactComponent as Logo } from "../../Media/Logo.svg"
import { ReactComponent as Option } from "../../Media/Option.svg"
import { ReactComponent as Lupa } from "../../Media/lupa.svg"

import "./header.style.scss"

//Add Functionality to Option 

export const Header = props => (
    <div className="header">
        <div className="Option">
            <Option className="header-img" />
        </div>
        <div className="header-text-area">
            <Search handleChange={props.handleChange} placeholder="Search by title" />
            <Lupa className="lupa" />
        </div>
        <div className="header-logo">
            <Logo className="header-img" />
        </div>
    </div>
);