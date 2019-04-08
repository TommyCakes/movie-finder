import React, { Component } from 'react';
import Navigation from './Navigation';
import Movies from './Movies';

export default class Main extends Component {
    render() {
        return (
            <section className="main">
                <Navigation />
                <Movies />
            </section>
        )
    }
}