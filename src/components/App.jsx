import { lazy } from "react";
import { Routes, Route} from "react-router-dom";
import Layout from '../components/Layout';

const Movies = lazy(() => import('../components/Movies/Movies'))
const MoviesDetails = lazy(() => import('../components/MoviesDetails/MoviesDetails'))
const Home = lazy(() => import('../components/Home/Home'))
const NotFound = lazy(() => import('../components/NotFound/NotFound'))
const Cast = lazy(() => import('../components/Cast/Cast'))
const Reviews = lazy(() => import('../components/Reviews/Reviews'))

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
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="movies" element={<Movies/>}>
            <Route path="cast" element={<Cast/>}/>
            <Route path="reviews" element={<Reviews/>}/>
          </Route>
          <Route path="movies/:id" element={<MoviesDetails/>}>
            <Route path="cast" element={<Cast/>}/>
            <Route path="reviews" element={<Reviews/>}/>
          </Route>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </div>
  );
};

export default App