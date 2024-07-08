import React from "react";
import { Link } from "react-router-dom";

const MovieList = ({ movies, tempMovies }) => {
  if (!Array.isArray(movies) || movies.length === 0) {
    return (
      <div className="movie-list">
        {tempMovies.map((tempMovie) => (
          <div key={tempMovie.imdbID} className="movie-card">
            <Link to={`/movie/${tempMovie.imdbID}`}>
              <img src={tempMovie.Poster} alt={tempMovie.Title} />
              <h2>{tempMovie.Title}</h2>
            </Link>
          </div>
        ))}
      </div>
    );
  }


  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.imdbID} className="movie-card">
          <Link to={`/movie/${movie.imdbID}`}>
            <img src={movie.Poster} alt={movie.Title} />
            <h2>{movie.Title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
