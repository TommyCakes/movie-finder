import React from 'react';

const selection = {
    display: "flex",
    flexDirection: "column",
    marginBottom: 60,
  }
  
  const selectionLabel =  {
    marginBottom: 10,
    color: "#555",
    fontSize: "1rem",
  }
  
  const select = {
    maxWidth: 150,
  }

const Selection = ({ genre, onGenreChange }) =>  (
    <div style={selection}>
        <select value={genre} onChange={onGenreChange} style={select}>
            <option style={selectionLabel} value="comedy">Comedy</option>
            <option style={selectionLabel} value="horror">Horror</option>
            <option style={selectionLabel} value="drama">Drama</option>
        </select>
    </div>
)

export default Selection;