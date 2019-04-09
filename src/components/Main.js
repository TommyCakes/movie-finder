import React, { Component } from 'react';
import Navigation from './Navigation';
import Movies from './Movies';

const mainStyle = {
    display: "flex"
}

export default class Main extends Component {
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

    setGenres = genres => {
        this.setState({ genres });
    }

    render() {
        return (
            <section style={mainStyle}>
                <Navigation 
                    onChange={this.onChange}
                    onGenreChange={this.onGenreChange}
                    setGenres={this.setGenres}
                    {...this.state}/>
                <Movies />
            </section>
        )
    }
}