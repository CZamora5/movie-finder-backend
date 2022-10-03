CREATE DATABASE IF NOT EXISTS moviesdb;
USE moviesdb;

CREATE TABLE IF NOT EXISTS genre (
  id            BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  name          VARCHAR(255) DEFAULT NULL,
  created_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
) AUTO_INCREMENT = 1;

CREATE TABLE IF NOT EXISTS movie (
  id            BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  title         VARCHAR(255) NOT NULL,
  poster_path   VARCHAR(255) DEFAULT NULL,
  backdrop_path VARCHAR(255) DEFAULT NULL,
  overview      TEXT DEFAULT NULL,
  release_date  VARCHAR(255) DEFAULT NULL,
  budget        BIGINT DEFAULT 0,
  homepage      VARCHAR(255) DEFAULT NULL,
  imdb_id       VARCHAR(9) DEFAULT NULL,
  vote_average  FLOAT DEFAULT NULL,
  vote_count    INT UNSIGNED DEFAULT NULL,
  created_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
) AUTO_INCREMENT = 1;

CREATE TABLE IF NOT EXISTS person (
  id                   BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  name                 VARCHAR(255) NOT NULL,
  birthdate            VARCHAR(255) DEFAULT NULL,
  deathdate            VARCHAR(255) DEFAULT NULL,
  known_for_department VARCHAR(255) DEFAULT NULL,
  biography            TEXT DEFAULT NULL,
  place_of_birth       VARCHAR(255) DEFAULT NULL,
  profile_path         VARCHAR(255) DEFAULT NULL,
  homepage             VARCHAR(255) DEFAULT NULL,
  imdb_id              VARCHAR(9) DEFAULT NULL,
  created_at           TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at           TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
) AUTO_INCREMENT = 1;

CREATE TABLE IF NOT EXISTS movie_genre (
    movie_id    BIGINT UNSIGNED NOT NULL,
    genre_id    BIGINT UNSIGNED NOT NULL,
    FOREIGN KEY (movie_id)
                REFERENCES movie (id)
                ON DELETE CASCADE
                ON UPDATE CASCADE,
    FOREIGN KEY (genre_id)
                REFERENCES genre (id)
                ON DELETE CASCADE
                ON UPDATE CASCADE,
    PRIMARY KEY (movie_id, genre_id)
);

CREATE TABLE IF NOT EXISTS movie_person (
    movie_id    BIGINT UNSIGNED NOT NULL,
    person_id   BIGINT UNSIGNED NOT NULL,
    FOREIGN KEY (movie_id)
                REFERENCES movie (id)
                ON DELETE CASCADE
                ON UPDATE CASCADE,
    FOREIGN KEY (person_id)
                REFERENCES person (id)
                ON DELETE CASCADE
                ON UPDATE CASCADE,
    PRIMARY KEY (movie_id, person_id)
);