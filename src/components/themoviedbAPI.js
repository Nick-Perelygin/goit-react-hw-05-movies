import axios from 'axios';

axios.defaults.baseURL = `https://api.themoviedb.org/3`;
axios.defaults.params = {
    api_key: `80849c20aa63241eb028c4e7b7d0f3a8`,
    language: 'uk'
}

export const getMovies = async () => {
    try {
      const { data } = await axios.get('trending/all/day', {
        params: {
          page: 1,
        },
      });
      return data;
    } catch (error) {
      throw new Error('Oops, there is no movies');
    }
  };