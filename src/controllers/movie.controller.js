import { connection } from '../config/mysql.config.js';
import { MOVIE_QUERIES } from '../queries/movie.query.js';
import { API } from '../services/tmdb.service.js';
import { storeMovieData } from '../utils/storeData.js';

export const getMovie = async (req, res) => {
  try {
    const pool = await connection();
    const result = await pool.query(MOVIE_QUERIES.SELECT_MOVIE, [req.params.movieId]);
    if (result[0].length > 0) {
      return res.status(200).send({ message: 'Movie retrieved', data: result[0] });
    }

    const apiResponse = await API.fetchMovie(req.params.movieId);
    if (apiResponse.status === 200) {
      await storeMovieData(pool, apiResponse.data);
      return res.status(200).send({ message: 'Movie retrieved', data: apiResponse.data });
    }
  } catch (err) {
    return res.status(err?.response?.status ?? 500)
      .send({ message: err?.response?.statusText ?? 'An error occurred' });
  }
};

export const getMovies = async (req, res) => {
  try {
    const pool = await connection();
    const result = await pool.query(MOVIE_QUERIES.SELECT_MOVIES);
    if (result[0].length > 0) {
      return res.status(200).send({ message: 'Movies retrieved', data: result[0] });
    } else {
      return res.status(404).send({ message: 'No movies found' });
    }
  } catch (err) {
    return res.status(500).send({ message: 'An error ocurred' });
  }
};