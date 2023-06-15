import { useEffect, useState } from "react";
import get from "../themoviedbAPI"
import Svg from './SearchSvg'

export default function Movies () {
    const [movies, setMovies] = useState([])
    const [changeValue, setChangeValue] = useState('')
    const [submitValue, setSubmitValue] = useState('')

    console.log(movies)
    console.log([submitValue])
    useEffect(() => {
        get.getSearchMovies(submitValue).then(r => setMovies(r.results))
    },[submitValue]);

    const onChange = e => {
        setChangeValue(e.target.value)
    }

    const onSubmit = e => {
        e.preventDefault()
        setSubmitValue(changeValue)
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
                <p>{movie.original_title}</p>
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
                    alt={`${movie.original_title}`} width='200px'/>
            </li>
            ))}
        </ul>
        </div>
    )
}
