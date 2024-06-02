import React, { useState } from 'react';
import axios from 'axios';
import MovieList from '../components/MovieList';

const Home = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();
    const response = await axios.get(`http://localhost:8000/api/movies/search?query=${query}`);
    setMovies(response.data);
  };

  return (
    <div>
      <form onSubmit={searchMovies}>
        <input 
          type="text" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Search for movies by title or genre" 
        />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
