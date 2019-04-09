import React from 'react';

const HeaderStyle = {
    display: "flex",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "1px solid #a9adac",
    background: "black"
}

const title = {
  fontSize: "2rem",
  color: 'white'
}

const Header = () => (
    <header style={HeaderStyle}>
        <h1 style={title}>FIND ME A FILM!</h1>
    </header>
    
);

export default Header;