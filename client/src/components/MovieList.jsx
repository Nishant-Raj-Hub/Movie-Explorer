import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {

  if (!Array.isArray(movies) || movies.length === 0) {
    return <p>No movies found</p>;
  }

  
  return (
    <div>
      {movies.map(movie => (
        <div key={movie.id}>
          <Link to={`/movie/${movie.id}`}>
            <h2>{movie.title}</h2>
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
