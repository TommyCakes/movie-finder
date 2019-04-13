import React from "react";
import MovieListItem from './MovieListItem';
import Button from './Button';

const moviesStyle = {
    flexBasis: "80%",
    display: "flex",
    flexWrap: "wrap",
    padding: "20px 0",
    margin: 0,    
}

const paginationStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: "40px 20px"
}

const Movies = ({
  movies, 
  page,
  onPageIncrease,
  onPageDecrease
}) => (
  <section>
      <ul style={moviesStyle}>
          {
              movies.map(movie =>  (                   
                      <MovieListItem
                          key={movie.id}
                          movie={movie}
                      />                          
              ))
          }
      </ul>
      <div style={paginationStyle}>
        <Button onClick={onPageDecrease} color="#ec15a0"> Prev </Button>
        <span>{`Page: ${page}`}</span>
        <Button onClick={onPageIncrease} color="#ec15a0"> Next </Button>
      </div>
  </section>
)

export default Movies;

