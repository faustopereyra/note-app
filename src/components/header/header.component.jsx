import React from "react"

import { Search } from "../search/search.component"

import { connect } from "react-redux"

import { currentSearch } from "../../redux/search/search.actions"

import { ReactComponent as Logo } from "../../Media/Logo.svg"
import { ReactComponent as Option } from "../../Media/Option.svg"
import { ReactComponent as Lupa } from "../../Media/lupa.svg"

import "./header.style.scss"

//Add Functionality to Option 

const Header = ({currentSearch}) => {

    const handleChange = (e) => {
        currentSearch(e.target.value)
    }

    return (
        <div className="header">
            <div className="Option">
                <Option className="header-img" />
            </div>
            <div className="header-text-area">
                <Search handleChange={handleChange} placeholder="Search by title" />
                <Lupa className="lupa" />
            </div>
            <div className="header-logo">
                <Logo className="header-img" />
            </div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    currentSearch: e => dispatch(currentSearch(e)),
})

export default connect(null, mapDispatchToProps)(Header)