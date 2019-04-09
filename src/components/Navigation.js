import React, { Component } from 'react';
import Selection from './Selection';
import Slider from './Slider';

const navigationStyle = {
    flexBasis: '20%',
    minWidth: 300,
    padding: 20,
}

export default class Navigation extends Component {
    state = {
        genre: "horror",
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

    componentDidMount() {
        const apiKey = process.env.REACT_APP_TMDB_API_KEY
        const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-gb`

        fetch (apiUrl) 
            .then(response => response.json())
            .then(data => this.storeGenres(data))        
    }

    storeGenres = data => {
        const genres = data.genres.map( result => {
            return result;
        });

        this.setState({ genres })
    }

    onGenreChange = event => {
        this.setState({ genre: event.target.value });
    }

    onChange = data => {
        this.setState({
            [data.type]: {
                ...this.state[data.type],
                value: data.value
            }
        });
    };

    render() {
        return (
            <section style={navigationStyle}>
                <h2>Navigation</h2>
                <Selection 
                    genre={this.state.genre}
                    genres={this.state.genres}
                    onGenreChange={this.onGenreChange}
                />

                <Slider data={this.state.year} onChange={this.onChange}/>
                <Slider data={this.state.rating} onChange={this.onChange}/>
                <Slider data={this.state.runtime} onChange={this.onChange}/>                

            </section>
            
        )
    }
}
