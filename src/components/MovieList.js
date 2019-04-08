import React from 'react';
import MovieListItem from "./MovieListItem";

const MovieList = (props) => (
    <ul>
        {
            props.titles.map( (title, index) =>  (
                <MovieListItem title={title}/>
            ))
        }
    </ul>
)

export default MovieList;