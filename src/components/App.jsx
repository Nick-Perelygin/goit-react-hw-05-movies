import styled from "styled-components";
import { Routes, Route, NavLink } from "react-router-dom";
import Movies from "./Movies/Movies";
import MoviesDetails from "./MoviesDetails/MoviesDetails"
import Home from "./Home/Home";
import NotFound from "./NotFound/NotFound";

const StyledLink = styled(NavLink)`
  color: black;
  &.active {
    color: red;
  }
`;

const App = () => {
  
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
      <nav style={{marginBottom: '100px'}}>
        <StyledLink to="/" style={{marginRight: '200px'}}>Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/movies/:id" element={<MoviesDetails/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
};

export default App