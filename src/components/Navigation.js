import React, { Component } from 'react';
import Selection from './Selection'
const navigationStyle = {
    flexBasis: '20%',
    minWidth: 300,
    padding: 20,
}

export default class Navigation extends Component {
    state = {
        genre: "horror"
    }

    onGenreChange = event => {
        this.setState({ genre: event.target.value });
    }

    render() {
        return (
            <section style={navigationStyle}>
                <h2>Navigation</h2>
                <Selection 
                    genre={this.state.genre}
                    onGenreChange={this.onGenreChange}
                />
            </section>
        )
    }
}
