import React from 'react';


const buttonStyle = {
    maxWidth: "100%",    
    color: "white",
    height: 40,
    width: "100%",
    borderRadius: 5
}

const Button = ({ onClick, color, children }) => (
    <div>
        <button 
            style={{...buttonStyle, background: color}}
            onClick={onClick}>
            { children }
        </button>
    </div>
)

export default Button;