import React from 'react';


const buttonStyle = {
    maxWidth: "100%",
    background: "#1c223e",
    color: "white",
    height: 40,
    width: "100%",
    borderRadius: 5
}

const SearchButton = ({ onClick }) => (
    <div>
        <button style={buttonStyle} onClick={onClick}>Search</button>
    </div>
)

export default SearchButton;