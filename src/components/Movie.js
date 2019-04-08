import React, { Component } from 'react';
import MovieListItem from './MovieListItem';

export default class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        const API_URL = `http://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`

        fetch(API_URL)
            .then(response => response.json())
            .then(data => this.storeMovies(data))
            .catch(error => console.log(error))
    }


    storeMovies = data => {
        const movies = data.results.map( result => {
            const  { vote_count, id, genre_ids, poster_path, title, vote_average, release_date } = result;
            return { vote_count, id, genre_ids, poster_path, title, vote_average, release_date };
        });

        this.setState({ movies })
    }

    render() {
        return (
            <section>
                <ul>
                    {
                        this.state.movies.map(movie =>  {                    
                            return (
                                <MovieListItem
                                    key={movie.id}
                                    movie={movie}
                                />                          
                            )
                        }) 
                    }
                </ul>
            </section>
        )
    }
}