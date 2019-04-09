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
    maxWidth: "100%",
    background: "#1c223e",
    color: "white",
    height: 40
  }

const Selection = ({ genre, genres, onGenreChange }) =>  (
    <div style={selection}>
        <select value={genre} onChange={onGenreChange} style={select}>
          {
            genres.map( genre => (
              <option key={genre.id} value={genre.name}>
                  {genre.name}
              </option>
            ))
          }            
        </select>
    </div>
)

export default Selection;