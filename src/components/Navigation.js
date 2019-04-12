import React, { Component } from 'react';
import Selection from './Selection';
import Slider from './Slider';
import SearchButton from './SearchButton';

const navigationStyle = {
    flexBasis: '20%',
    minWidth: 300,
    padding: 30,
    marginTop: "1%"
}

export default class Navigation extends Component {
    
    componentDidMount() {        
        fetch (this.props.url) 
            .then(response => response.json())
            .then(data => this.props.setGenres(data.genres))  
            .catch(error => console.log(error));
    }

    render() {
        const { genre, genres, onGenreChange, onChange, year, rating, runtime, onSearchButtonClick, onValueChange } = this.props;
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

                <SearchButton onClick={onSearchButtonClick} />
            </section>
            
        )
    }
}
