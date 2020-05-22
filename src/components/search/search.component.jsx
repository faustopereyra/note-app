import React from "react";

import "./search.style.scss";

export const Search = ({ placeholder, handleChange }) => (
    <input
        className="Search"
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
    />
);