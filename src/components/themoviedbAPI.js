const URL = 'https://api.themoviedb.org/3'

const getTrendingMovies = () => {
  const api_key = '80849c20aa63241eb028c4e7b7d0f3a8';
  const getMovies = '/trending/all/day';

  return fetch(`${URL}${getMovies}?api_key=${api_key}&page=1&language=en-US`)
  .then(response => response.json())
};

const getSearchMovies = (text) => {
  const api_key = '80849c20aa63241eb028c4e7b7d0f3a8';
  const getMovies = '/search/movie';

  return fetch(`${URL}${getMovies}?api_key=${api_key}&query=${text}&page=1&language=en-US`)
  .then(response => response.json())
};

const getDetailsMovies = (movie_id) => {
  const api_key = '80849c20aa63241eb028c4e7b7d0f3a8';
  const getMovies = `/movie/${movie_id}`;
  
  return fetch(`${URL}${getMovies}?api_key=${api_key}&page=1&language=en-US`)
  .then(response => response.json())
};

const getCreditsMovies = (movie_id) => {
  const api_key = '80849c20aa63241eb028c4e7b7d0f3a8';
  const getMovies = `/movie/${movie_id}/credits`;

  return fetch(`${URL}${getMovies}?api_key=${api_key}&page=1&language=en-US`)
  .then(response => response.json())
};

const getReviewsMovies = (movie_id) => {
  const api_key = '80849c20aa63241eb028c4e7b7d0f3a8';
  const getMovies = `/movie/${movie_id}/reviews`;

  return fetch(`${URL}${getMovies}?api_key=${api_key}&page=1&language=en-US`)
  .then(response => response.json())
};

const get = {getTrendingMovies, getSearchMovies, getDetailsMovies, getCreditsMovies, getReviewsMovies}
export default get