import React, { Component } from 'react';
import Selection from './Selection';
import Slider from './Slider';

const navigationStyle = {
    flexBasis: '20%',
    minWidth: 300,
    padding: 30,
    marginTop: "1%"
}

export default class Navigation extends Component {
    
    componentDidMount() {
        const apiKey = process.env.REACT_APP_TMDB_API_KEY
        const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-gb`

        fetch (apiUrl) 
            .then(response => response.json())
            .then(data => this.storeGenres(data))  
            .catch(error => console.log(error));
    }

    render() {
        const { genre, genres, onGenreChange, onChange, year, rating, runtime } = this.props;
        return (
            <section style={navigationStyle}>
                <Selection 
                    genre={genre}
                    genres={genres}
                    onGenreChange={onGenreChange}
                />

                <Slider data={year} onChange={onChange}/>
                <Slider data={rating} onChange={onChange}/>
                <Slider data={runtime} onChange={onChange}/>                

            </section>
            
        )
    }
}
