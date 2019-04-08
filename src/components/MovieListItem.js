import React from 'react';

const MovieListItem = ({ movie }) => {
    const { id, title, poster_path } = movie;
    const imgUrl = `https://image.tmdb.org/t/p/w342/${poster_path}`;

    return (
        <li key={id} className="movie-item">
            <img src={imgUrl} alt=""/>
            <span>{title}</span>
        </li> 
    )
}
    


export default MovieListItem;