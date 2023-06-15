const getTrendingMovies = () => {
  const api_key = '80849c20aa63241eb028c4e7b7d0f3a8';
  const getMovies = '/trending/all/day';

  return fetch(`https://api.themoviedb.org/3${getMovies}?api_key=${api_key}&page=1&language=un`)
  .then(r => r.json())
  .catch(err => alert(`${err}`));
};

const getSearchMovies = () => {
  const api_key = '80849c20aa63241eb028c4e7b7d0f3a8';
  const getMovies = '/search/movie';

  return fetch(`https://api.themoviedb.org/3${getMovies}?api_key=${api_key}&page=1&language=un`)
  .then(r => r.json())
  .catch(err => alert(`${err}`));
};

const getDetailsMovies = (movie_id) => {
  const api_key = '80849c20aa63241eb028c4e7b7d0f3a8';
  const getMovies = `/movie/${movie_id}`;
  
  return fetch(`https://api.themoviedb.org/3${getMovies}?api_key=${api_key}&page=1&language=un`)
  .then(r => r.json())
  .catch(err => alert(`${err}`));
};

const getCreditsMovies = (movie_id) => {
  const api_key = '80849c20aa63241eb028c4e7b7d0f3a8';
  const getMovies = `/movie/${movie_id}/credits`;

  return fetch(`https://api.themoviedb.org/3${getMovies}?api_key=${api_key}&page=1&language=un`)
  .then(r => r.json())
  .catch(err => alert(`${err}`));
};

const getReviewsMovies = (movie_id) => {
  const api_key = '80849c20aa63241eb028c4e7b7d0f3a8';
  const getMovies = `/movie/${movie_id}/reviews`;

  return fetch(`https://api.themoviedb.org/3${getMovies}?api_key=${api_key}&page=1&language=un`)
  .then(r => r.json())
  .catch(err => alert(`${err}`));
};

const get = {getTrendingMovies, getSearchMovies, getDetailsMovies, getCreditsMovies, getReviewsMovies}
export default get