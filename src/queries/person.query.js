export const PERSON_QUERIES = {
  SELECT_PERSONS: 'SELECT * FROM person ORDER BY updated_at DESC LIMIT 20;',
  SELECT_PERSON: 'SELECT * FROM person WHERE id = ?;',
  CREATE_PERSON: 'INSERT INTO person (id, name, birthdate, deathday, known_for_department, biography, place_of_birth, profile_path, imdb_id, homepage) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);',
  UPDATE_PERSON: 'UPDATE person SET id = ?, name = ?, birthdate = ?, deathday = ?, known_for_department = ?, biography = ?, place_of_birth = ?, profile_path = ?, imdb_id = ?, homepage = ?, updated_at = CURRENT_TIMESTAMP() WHERE id = ?;'
};