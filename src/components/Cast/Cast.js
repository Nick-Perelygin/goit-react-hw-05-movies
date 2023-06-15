import get from "../themoviedbAPI"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";

export default function Cast () {
    const [casts, setCasts] = useState([])
    const {id} = useParams()
    
    useEffect(() => {
        get.getCreditsMovies(id).then(r => setCasts(r.cast))
    },[id]);

    return (
        <ul>
            {casts && casts.map(cast => (
            <li key={cast.id}>
                <p>{cast.name}</p>
                <p>Character: {cast.character}</p>
                <img src={`https://image.tmdb.org/t/p/original${cast.profile_path}`} 
                    alt={`${cast.name}`} width='200px'/>
            </li>
            ))}
        </ul>
    )
}
