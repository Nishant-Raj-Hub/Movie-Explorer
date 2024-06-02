const axios = require('axios');

const API_KEY = process.env.API_KEY

const searchMovies = async (req, res) => {
  try {
    const { query } = req.query;
    const response = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);

    res.json(response.data.results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getMovieDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`);

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { searchMovies, getMovieDetails };
