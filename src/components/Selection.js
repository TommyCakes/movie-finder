import React from 'react';

// .selection {
//     display: flex;
//     flex-direction: column;
//     margin-bottom: 60px;
//   }
  
//   .selection label {
//     margin-bottom: 10px;
//     color: #555;
//     font-size: 1rem;
//   }
  
//   .selection select {
//     max-width: 150px;
//   }

const Selection = ({ genre, onGenreChange }) =>  (

    <select value={genre} onChange={onGenreChange}>
        <option value="comedy">Comedy</option>
        <option value="horror">Horror</option>
        <option value="drama">Drama</option>
    </select>
)

export default Selection;