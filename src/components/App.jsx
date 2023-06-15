import { Routes, Route} from "react-router-dom";
import Movies from "./Movies/Movies";
import MoviesDetails from "./MoviesDetails/MoviesDetails"
import Home from "./Home/Home";
import NotFound from "./NotFound/NotFound";
import Layout from "./Layout"
import Cast from "./Cast/Cast"
import Reviews from "./Reviews/Reviews"

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
          <Route path="movies" element={<Movies/>}/>
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