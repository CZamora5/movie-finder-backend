export const GENRE_QUERIES = {
  SELECT_GENRES: 'SELECT * FROM genre ORDER BY id ASC;',
  SELECT_GENRE: 'SELECT * FROM genre WHERE id = ?;',
  CREATE_GENRE: 'INSERT INTO genre (id, name) VALUES (?, ?);',
  UPDATE_GENRE: 'UPDATE genre SET id = ?, name = ?, updated_at = CURRENT_TIMESTAMP() WHERE id = ?;'
};