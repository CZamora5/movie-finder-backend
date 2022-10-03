export const MOVIE_QUERIES = {
  SELECT_MOVIES: 'SELECT * FROM movie ORDER BY updated_at DESC LIMIT 50;',
  SELECT_MOVIE: 'SELECT * FROM movie WHERE id = ?;',
  CREATE_MOVIE: 'INSERT INTO movie (id, title, poster_path, backdrop_path, overview, release_date, budget, homepage, imdb_id, vote_average, vote_count) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);',
  UPDATE_MOVIE: 'UPDATE movie SET id = ?, title = ?, poster_path = ?, backdrop_path = ?, overview = ?, release_date = ?, budget = ?, homepage = ?, imdb_id = ?, vote_average = ?, vote_count = ?, updated_at = CURRENT_TIMESTAMP() WHERE id = ?;'
};