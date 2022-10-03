import { Router } from 'express';
import { getMovies, getMovie } from '../controllers/movie.controller.js';

const movieRoutes = Router();

movieRoutes.route('/')
  .get(getMovies);

movieRoutes.route('/:movieId')
  .get(getMovie);

export default movieRoutes;