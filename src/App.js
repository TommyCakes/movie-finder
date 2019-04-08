import React, { Component } from 'react';
import MovieList from './components/MovieList';

const titles = ["Breaking Bad", "Game of Thrones", "Brooklyn 99"];

class App extends Component {
  render() {
    return (
      <div className="App">
        <MovieList titles={titles}/>         
      </div>
    );
  }
}

export default App;
