import axios from 'axios';

import {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  BASE_URL,
  API_KEY
} from '../config/tmdb.config.js';

export const API = {
  fetchMovies: async (searchTerm) => {
    const endpoint = searchTerm
      ? `${SEARCH_BASE_URL}${searchTerm}`
      : `${POPULAR_BASE_URL}`;
    // ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
    // : `${POPULAR_BASE_URL}&page=${page}`;
    return await axios.get(endpoint);
  },
  fetchMovie: async movieId => {
    const endpoint = `${BASE_URL}movie/${movieId}?api_key=${API_KEY}`;
    return await axios.get(endpoint);
  },
  fetchCredits: async movieId => {
    const creditsEndpoint = `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
    return await axios.get(creditsEndpoint);
  }
};