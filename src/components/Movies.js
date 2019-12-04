import React from "react";
import MovieListItem from './MovieListItem';
import Button from './Button';

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
  <section className="movie-wrapper">
      <ul className="movie-container">
          {
              movies.map(movie =>  (                   
                      <MovieListItem
                          key={movie.id}
                          movie={movie}
                      />                          
              ))
          }
      </ul>
      {/* <div style={paginationStyle}>
        <Button onClick={onPageDecrease} color="#ec15a0"> Prev </Button>
        <span>{`Page: ${page}`}</span>
        <Button onClick={onPageIncrease} color="#ec15a0"> Next </Button>
      </div> */}
  </section>
)

export default Movies;

