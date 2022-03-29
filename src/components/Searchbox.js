import React from "react";
import "./Searchbox.css";

const SearchBox = ({ searchChange }) => {
	return <input className="search shadow" type="search" placeholder="search robots" onChange={searchChange} />;
};

export default SearchBox;
