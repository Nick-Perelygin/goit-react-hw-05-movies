import { useEffect, useState } from "react";
import get from '../../components/themoviedbAPI';
import {MoviesHomeList} from '../../components/MoviesList/MoviesList'

const Home = () => {
    const [movies, setMovies] = useState([])
    
    useEffect(() => {
        get.getTrendingMovies().then(r => setMovies(r.results)).catch(err => alert(`${err}`));
    },[]);

    return (
        <>
            <h1>Trending today</h1>
            <MoviesHomeList movies={movies}/>            
        </>
    )
}

export default Home