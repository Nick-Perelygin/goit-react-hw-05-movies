import { useEffect, useState, Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom"
import get from '../../components/themoviedbAPI';
import {MoviesSearchList} from '../../components/MoviesList/MoviesList'
import Form from '../../components/Form/Form'

const Movies = () => {
    const [movies, setMovies] = useState([])
    const [value, setValue] = useState('')
    const loc = useLocation()
    const location = useLocation(loc.state?.from)

    const onSubmitValue = (value) => {
        setValue(value)
    }
    
    useEffect(() => {
        get.getSearchMovies(value).then(r => {if(r.total_results === 0 && value)
            {alert(`Nothing found for your search ${value}`)} setMovies(r.results)})
        .catch(err => alert(`${err}`));
        setValue('')
    },[value]);

    return (
        <div>
            <Form onSubmitForm={onSubmitValue}/>
            <MoviesSearchList movies={movies} state={{from: location}}/>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </div>
    )
}

export default Movies