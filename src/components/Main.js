import React, { Component } from 'react';
import Navigation from './Navigation';
import Movies from './Movies';

const apiKey = process.env.REACT_APP_TMDB_API_KEY;

const mainStyle = {
    display: "flex"
}

export default class Main extends Component {
    state = {        
        url: `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-GB`,
        moviesUrl: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-GB&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`,
        genre: "Comedy",
        genres: [],
        year: {
            label: "year",
            min: 1940,
            max: 2019,
            step: 1,
            value: { min: 2000, max: 2019 }
        },
        rating: {
            label: "rating",
            min: 0,
            max: 10,
            step: 1,
            value: { min: 7, max: 10 }            
        },
        runtime: {
            label: "runtime",
            min:0,
            max: 300,
            step: 15,
            value: { min: 120, max: 240 }
        }
    }

    onGenreChange = event => {
        this.setState({ genre: event.target.value });
        this.generateUrl();
    }

    setGenres = genres => {
        this.setState({ genres });
    }

    onChange = data => {
        this.setState({
            [data.type]: {
                ...this.state[data.type],
                value: data.value
            }
        });
    };

    generateUrl = () => {
        const {genres, year, rating, runtime} = this.state;        
        const selectedGenre = genres.find(genre => genre.name === this.state.genre);
        const genreId = selectedGenre.id

        const moviesUrl = `https://api.themoviedb.org/3/discover/movie?` + 
            `api_key=${apiKey}&` +
            `language=en-US&sort_by=popularity.desc&` +
            `with_genres=${genreId}&` +
            `primary_release_date.gte=${year.value.min}-01-01&` +
            `primary_release_date.lte=${year.value.max}-12-31&` +
            `vote_average.gte=${rating.value.min}&` +
            `vote_average.lte=${rating.value.max}&` +
            `with_runtime.gte=${runtime.value.min}&` +
            `with_runtime.lte=${runtime.value.max}&` +
            `page=1&`;

        console.log(moviesUrl);
        
        this.setState({ moviesUrl });
    }

    onSearchButtonClick = () => {
        this.generateUrl();
    }

    render() {
        return (
            <section style={mainStyle}>
                <Navigation 
                    genres={this.state.genres}
                    onChange={this.onChange}
                    onGenreChange={this.onGenreChange}
                    setGenres={this.setGenres}
                    onSearchButtonClick={this.onSearchButtonClick}                
                    {...this.state} />
                <Movies url={this.state.moviesUrl}/>
            </section>
        )
    }
}