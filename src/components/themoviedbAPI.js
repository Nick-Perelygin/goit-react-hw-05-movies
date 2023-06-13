const getMovies = () => {
  const api_key = '80849c20aa63241eb028c4e7b7d0f3a8';
  const trending = '/trending/all/day';

  return fetch(`https://api.themoviedb.org/3${trending}?api_key=${api_key}&page=1&language=un`)
  .then(r => r.json())
  .catch(err => alert(`${err}`));
};

export default getMovies