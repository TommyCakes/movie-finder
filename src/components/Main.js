import React, { Component } from 'react';
import Navigation from './Navigation';
import Movies from './Movies';
import '../index.css'
const apiKey = process.env.REACT_APP_TMDB_API_KEY;

export default class Main extends Component {
    state = {   
        done: false,    
        page: 1, 
        total_pages: 1,
        url: `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-GB`,
        moviesUrl: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-GB&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`,
        genre: "Comedy",
        genres: [],
        movies: [],
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

    componentDidMount() {
        setTimeout(() => {
            this.fetchMovies(this.state.moviesUrl);
        }, 1200);        
    }

    componentWillUpdate(nextProps, nextState) {
        if (this.state.moviesUrl !== nextState.moviesUrl) {        
            this.fetchMovies(this.state.moviesUrl);
        }
        
        if (this.state.page !== nextState.page) {            
            this.generateUrl();            
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
        this.generateUrl();
    };

    fetchMovies = (url) => {
        this.setState({ done: false })
        fetch(url)
            .then(response => response.json())
            .then(data => this.storeMovies(data))
            .then(json => this.setState({ done: true }))
            .catch(error => console.log(error))
    }
  
    storeMovies = data => {
        const movies = data.results.map( result => {
            const  { 
                vote_count, 
                id,     
                genre_ids, 
                poster_path, 
                title, 
                vote_average, 
                release_date 
            } = result;
            return { vote_count, id, genre_ids, poster_path, title, vote_average, release_date };
        });
  
        this.setState({ movies, total_pages: data.total_pages })
    }

    generateUrl = () => {
        const {genres, year, rating, runtime, page} = this.state;        
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
            `page=${page}`;
        
        this.setState({ moviesUrl });
        
    }

    onSearchButtonClick = () => {
        if (this.state.page > 1) {
            this.setState({ page: 1})
        } 
        this.generateUrl();
    }

    onPageIncrease = () => {
        const { page, total_pages } = this.state
        const nextPage = page + 1;
        if (nextPage <= total_pages) {
            this.setState({ page: nextPage })
        }
    }

    onPageDecrease = () => {
        const { page, total_pages } = this.state
        const previousPage = page - 1;
        if (previousPage > 0) {
            this.setState({ page: previousPage })
        }
    }

    render() {
        return (
            <section className="main-container">                
                <Navigation 
                    genres={this.state.genres}
                    onChange={this.onChange}
                    onGenreChange={this.onGenreChange}
                    setGenres={this.setGenres}
                    /* onSearchButtonClick={this.onSearchButtonClick}*/
                    {...this.state} />
                    { !this.state.done ? (
                    <h1>Loading...</h1>
                ) : (
                    <Movies 
                    movies={this.state.movies} 
                    page={this.state.page}
                    onPageIncrease={this.onPageIncrease}
                    onPageDecrease={this.onPageDecrease}
                    />
                )}                
            </section>
        )
    }
}