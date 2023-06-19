import { useEffect, useState, Suspense } from "react";
import { Outlet, useLocation, useSearchParams } from "react-router-dom"
import get from '../../components/themoviedbAPI';
import {MoviesSearchList} from '../../components/MoviesList/MoviesList'
import Form from '../../components/Form/Form'

const Movies = () => {
    const [movies, setMovies] = useState([])
    const [value, setValue] = useSearchParams()
    
    const loc = useLocation()
    const location = useLocation(loc.state?.from)

    const onSubmit = (data) => {
        if(data === '')
        {return setValue({})}
        setValue({query: data})
    }
    
    useEffect(() => {
        const text = value.get("query") ?? '';
        get.getSearchMovies(text).then(r => {if(r.total_results === 0 && text)
            {alert(`Nothing found for your search ${text}`); setValue({})} setMovies(r.results)})
        .catch(err => alert(`${err}`));
    },[setValue, value]);

    return (
        <div>
            <Form onSubmitForm={onSubmit}/>
            <MoviesSearchList movies={movies} state={{from: location}}/>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </div>
    )
}

export default Movies