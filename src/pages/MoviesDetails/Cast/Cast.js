import get from "../../../components/themoviedbAPI"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";

const defaultImgCast = 'https://ornament.name/pic/no_result.jpg'

export default function Cast () {
    const [casts, setCasts] = useState([])
    const {id} = useParams()
    
    useEffect(() => {
        get.getCreditsMovies(id).then(r => setCasts(r.cast)).catch(err => alert(`${err}`));
    },[id]);

    return (
        <ul>
            {id && casts.map(cast => (
            <li key={cast.id}>
                <p>{cast.name}</p>
                <p>Character: {cast.character}</p>
                <img src={cast.profile_path ? `https://image.tmdb.org/t/p/original${cast.profile_path}` : defaultImgCast} 
                    alt={`${cast.name}`} width='200px'/>
            </li>
            ))}
        </ul>
    )
}
