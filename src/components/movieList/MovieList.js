import React from "react";
import MovieCard from "../movieCard/MovieCard";
import "./MovieList.css";
function MovieList({ movie, textSearch , searchRate }) {
  return (
    <div className="movies">
      {movie
        .filter((el) =>
          el.title.toUpperCase().includes(textSearch.toUpperCase()) && el.rate>= searchRate
        )
        .map((el, i) => (
          <MovieCard key={i} movies={el} />
        ))}
    </div>
  );
}

export default MovieList;