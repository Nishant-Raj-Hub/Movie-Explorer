import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './MovieDetails.css'; // Import the updated CSS

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`https://movie-explorer-3mef.onrender.com/api/movies/${id}`);
        setMovie(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching movie details');
        setLoading(false);
        console.error(err);
      }
    };
    fetchMovieDetails();
  }, [id]);

  if (loading) return <div id='loading'>Loading...</div>;

  return (
    <div className='movie-details'>
      <img src={movie.Poster} alt={movie.Title} />
      <div className='details'>
        <h1>{movie.Title}</h1>
        <p>{movie.Plot}</p>
        <p className='release-date'>Release Date: {movie.Released}</p>
        <p className='rating'>Rated: {movie.Rated}</p>
        <p className='runtime'>Runtime: {movie.Runtime}</p>
        <p className='actors'>Actors: {movie.Actors}</p>
        <p className='language'>Language: {movie.Language}</p>
        <p className='imdb-rating'>IMDB Rating: {movie.imdbRating}</p>
        <p className='box-office'>Box Office: {movie.BoxOffice}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
