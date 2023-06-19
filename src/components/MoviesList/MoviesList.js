import { Link, useLocation } from "react-router-dom"

const MoviesSearchList = ({movies}) => {
    const location = useLocation()

    return (
    <ul>
        {movies && movies.map(movie => (
            <li key={movie.id}>
            <Link to={`${movie.id}`} state={{from: location}}>
            <p>{movie.original_title}</p>
            </Link>
            </li>
        ))}
   </ul>
)}

const MoviesHomeList = ({movies}) => {
    return (
        <ul>
        {movies && movies.map(movie => (
            <li key={movie.id}>
                <Link to={`movies/${movie.id}`}>
                    {movie.title ?? movie.name}
                </Link>
            </li>
        ))}
    </ul>
)}

export {MoviesSearchList, MoviesHomeList}