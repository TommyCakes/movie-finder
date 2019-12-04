import React, { Component } from 'react';
import Selection from './Selection';
import Slider from './Slider';
import Button from './Button';

const navigationStyle = {
    flexBasis: '20%',
    minWidth: 300,
    padding: 30,
    marginTop: "1%",
    top:'65px',    
}

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            done: false
        }
    }

    componentDidMount() {                
        fetch (this.props.url) 
            .then(response => response.json())
            .then(data => this.props.setGenres(data.genres)) 
            .then(json => this.setState({ done: true })) 
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

                {/* <Button 
                    onClick={onSearchButtonClick}
                    color="#1c223e">
                    Search
                </Button> */}
            </section>
            
        )
    }
}
