import { useEffect, useState, Suspense } from "react";
import { Outlet, Link, useParams, useSearchParams, useLocation } from "react-router-dom"
import get from '../themoviedbAPI';
import Svg from './SearchSvg';

const Movies = () => {
    const [movies, setMovies] = useState([])
    const [changeValue, setChangeValue] = useState('')
    const [submitValue, setSubmitValue] = useSearchParams()
    const {id} = useParams()
    const location = useLocation()

    useEffect(() => {
        const text = submitValue.get("query") ?? ''
        get.getSearchMovies(text).then(r => setMovies(r.results))
    },[submitValue]);

    const onChange = e => {
        setChangeValue(e.target.value)
    }

    const onSubmit = e => {
        e.preventDefault()
        if(changeValue === '')
        {return setSubmitValue({})}
        setSubmitValue({query: changeValue})
        e.target.reset();
    }

    return (
        <div>
            <form onSubmit={onSubmit} style={{display: 'flex'}}>
                <button type="submit"style={{fontSize: '40px', marginRight: '40px', height: '50px'}}> 
                Search <Svg/>
                </button>
                <input type="text" onChange={onChange}
                style={{height: '42px', width: '400px', fontSize: '40px', paddingLeft: '10px'}}/>
            </form>
            <ul>
                {movies && movies.map(movie => (
                <li key={movie.id}>
                    <Link to={`${movie.id}`} state={{from: location}}>
                    <p>{movie.original_title}</p>
                    </Link>
                </li>
                ))}
            </ul>
            {id && <ul>
                <li><Link to={'cast'}>Cast</Link></li>
                <li><Link to={'reviews'}>Reviews</Link></li>
            </ul>}
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </div>
    )
}

export default Movies