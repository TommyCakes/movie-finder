import React from 'react';

const MovieListItem = ({ movie }) => {
    const { id, title, poster_path } = movie;
    const imgUrl = `https://image.tmdb.org/t/p/w342/${poster_path}`;

    return (
        <li key={movie.id} className="movie-item">
            <img src={imgUrl} alt=""/>
            <span>{movie.title}</span>
        </li> 
    )
}
    


export default MovieListItem;