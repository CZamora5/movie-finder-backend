import { MOVIE_QUERIES } from '../queries/movie.query.js';

export async function storeMovieData(pool, data) {
  const {
    id, title, poster_path, backdrop_path,
    overview, release_date, budget, homepage,
    imdb_id, vote_average, vote_count
  } = data;

  poster_path ||= null;
  backdrop_path ||= null;
  overview ||= null;
  release_date ||= null;
  budget ||= null;
  homepage ||= null;
  imdb_id ||= null;
  vote_average ||= null;
  vote_count ||= null;

  await pool.query(
    MOVIE_QUERIES.CREATE_MOVIE,
    [
      id, title, poster_path, backdrop_path,
      overview, release_date, budget, homepage,
      imdb_id, vote_average, vote_count
    ]
  );
}