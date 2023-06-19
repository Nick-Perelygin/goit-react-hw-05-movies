import { useEffect, useRef, useState, Suspense } from "react";
import { Outlet, useParams, Link, useLocation } from "react-router-dom"
import get from '../../components/themoviedbAPI';

const MoviesDetails = () => {
    const [movie, setMovie] = useState({})
    const {id} = useParams()
    const location = useLocation()
    const locationRef = useRef(location.state?.from ?? '/')
    
    useEffect(() => {
        get.getDetailsMovies(id).then(movie => setMovie(movie)).catch(err => alert(`${err}`));
    },[id]);

    return (
        <>
        <Link to={locationRef.current}>Go back</Link>
        <div style={{display: 'flex', marginTop: '40px'}}>
            {movie && <>
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
                    alt={`${movie.title ?? movie.name}`} width='300px'/>
                <div style={{marginLeft: '100px'}}>
                    <h3 style={{marginTop: '0px'}}>{movie.title ?? movie.name}</h3>
                    <h3>Overview:</h3>
                    <p>{movie.overview}</p>
                    <h3>Average rating: {movie.vote_average} </h3>
                </div>
            </>}
        </div>
        <h2>Additional information</h2>
        <ul>
            <li><Link to={'cast'}>Cast</Link></li>
            <li><Link to={'reviews'}>Reviews</Link></li>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
            <Outlet/>
        </Suspense>
        </>
    )
}

export default MoviesDetails