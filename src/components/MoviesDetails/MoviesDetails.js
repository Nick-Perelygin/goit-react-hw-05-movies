import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import get from "../themoviedbAPI"

export default function MoviesDetails () {
    const [movie, setMovie] = useState({})
    const {id} = useParams()
    
    useEffect(() => {
        get.getDetailsMovies(id).then(movie => setMovie(movie))
    },[id]);

    return (
        <div style={{display: 'flex'}}>
            {movie && <>
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
                    alt={`${movie.title ?? movie.name}`} width='300px'/>
                <div style={{marginLeft: '100px'}}>
                    <h3 style={{marginTop: '0px'}}>{movie.title ?? movie.name}</h3>
                    <h3>Overview:</h3>
                    <p>{movie.overview}</p>
                    <h3>Genres 
                    </h3>
                </div>
            </>}
        </div>
    )
}