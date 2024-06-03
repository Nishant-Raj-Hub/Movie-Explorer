import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieList from '../components/MovieList';

const Home = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [tempMovies, setTempMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();
    const response = await axios.get(`http://localhost:8000/api/movies/search?query=${query}`);
    setMovies(response.data);
  };

  useEffect(() => {
    const fetchTempMovieDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/movies/search?query=endgame`);

        setTempMovies(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching movie details');
        setLoading(false);
        console.error(err);
      }
    };
    fetchTempMovieDetails();
  }, []);

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
      <MovieList movies={movies} tempMovies={tempMovies}/>
    </div>
  );
};

export default Home;
