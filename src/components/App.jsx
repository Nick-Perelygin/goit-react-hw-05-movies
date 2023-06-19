import { lazy } from "react";
import { Routes, Route} from "react-router-dom";
import Layout from '../components/Layout';

const Movies = lazy(() => import('../pages/Movies/Movies'))
const MoviesDetails = lazy(() => import('../pages/MoviesDetails/MoviesDetails'))
const Home = lazy(() => import('../pages/Home/Home'))
const NotFound = lazy(() => import('../pages/NotFound/NotFound'))
const Cast = lazy(() => import('../pages/MoviesDetails/Cast/Cast'))
const Reviews = lazy(() => import('../pages/MoviesDetails/Reviews/Reviews'))

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