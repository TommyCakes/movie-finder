import React from 'react';

const HeaderStyle = {
    display: "flex",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "1px solid #a9adac"
}

const title = {
  fontSize: "2rem",
  color: "#2d40ab"
}

const Header = () => (
    <header style={HeaderStyle}>
        <h1 style={title}>FIND ME A FILM!</h1>
    </header>
    
);

export default Header;