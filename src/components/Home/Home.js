import { useEffect, useState, lazy } from "react";
import { Link } from "react-router-dom";

const get = lazy(() => import('../themoviedbAPI'))

export default function Home () {
    const [movies, setMovies] = useState([])
    
    useEffect(() => {
        get.getTrendingMovies().then(r => setMovies(r.results))
    },[]);

    return (
        <>
            <h1>Trending today</h1>
            <ul>
                {movies && movies.map(movie => (
                    <li key={movie.id}>
                        <Link to={`movies/${movie.id}`}>
                            {movie.title ?? movie.name}
                        </Link>
                    </li>
                ))}
            </ul>
            
        </>
    )
}