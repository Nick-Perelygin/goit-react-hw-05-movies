import { useEffect, useState } from "react";
import styled from "styled-components";
import { Routes, Route, NavLink } from "react-router-dom";
import getMovies from "./themoviedbAPI"
import Movies from "./Movies/Movies";
import Home from "./Home/Home";
import NotFound from "./NotFound/NotFound";

const StyledLink = styled(NavLink)`
  color: black;
  &.active {
    color: red;
  }
`;

const App = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    getMovies().then(r => setMovies(r.results))
  },[]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        paddingLeft: '40px',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <nav>
        <StyledLink to="/" style={{marginRight: '200px'}}>Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>
      <h1>Trending today</h1>
      <ul>
      {movies && movies.map(movie => (
        <li key={movie.id}>
          <a href='/goit-react-hw-05-movies'>{movie.title ?? movie.name}</a>
        </li>
      ))}
      </ul>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
};

export default App