import React from 'react';


const buttonStyle = {
    maxWidth: "100%",
    background: "#1c223e",
    color: "white",
    height: 40,
    width: "100%",
    borderRadius: 5
}

const Button = ({ onClick, children }) => (
    <div>
        <button 
            style={buttonStyle} 
            onClick={onClick}>
            { children }
        </button>
    </div>
)

export default Button;