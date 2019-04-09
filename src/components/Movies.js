import React from "react";
import MovieListItem from './MovieListItem';


const moviesStyle = {
    flexBasis: "80%",
    display: "flex",
    flexWrap: "wrap",
    padding: "20px 0",
    margin: 0,    
}

export default class Movies extends React.Component {
  state = {
    movies: []
  };

  componentDidMount() {
      this.fetchMovies(this.props.url);
  }

  componentWillReceiveProps(nextProps) {
      if (this.props.url !== nextProps.url) {
          this.fetchMovies(nextProps.url);
      }
  }

  fetchMovies = (url) => {
      fetch(url)
          .then(response => response.json())
          .then(data => this.storeMovies(data))
          .catch(error => console.log(error))
  }

  storeMovies = data => {
      const movies = data.results.map( result => {
          const  { vote_count, id, genre_ids, poster_path, title, vote_average, release_date } = result;
          return { vote_count, id, genre_ids, poster_path, title, vote_average, release_date };
      });

      this.setState({ movies })
  }

  render() {
      return (
          <section>
              <ul style={moviesStyle}>
                  {
                      this.state.movies.map(movie =>  {                    
                          return (
                              <MovieListItem
                                  key={movie.id}
                                  movie={movie}
                              />                          
                          )
                      }) 
                  }
              </ul>
          </section>
      )
  }
}

