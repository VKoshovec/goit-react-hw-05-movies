import { useState, useEffect, lazy, Suspense } from 'react';
import { getMoviesByName } from 'components/moviesApi';
import { useSearchParams } from "react-router-dom";
import scss from './moviesPage.module.scss';
import Loader from "components/Loader/Loader";

const LazyFilmList = lazy(() => import("components/FilmList/FilmList"));

const MoviesPage = () => {

    const [fdFilms, setFdFilm ] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
   
    const queryFilm = searchParams.get('query');

    const hendleSubmit = (e) => {
       e.preventDefault();
       const query = e.target.elements.searchWord.value;
       setSearchParams({'query': query});
    }

    useEffect (()=>{
       !queryFilm || getMoviesByName(queryFilm).then(res => setFdFilm(res)).catch(() => alert('Some problems with API'));
    },[queryFilm]);

    return(
        <>
        <form className={ scss.form } onSubmit={ hendleSubmit }>
            <input type="text" name="searchWord" defaultValue={ queryFilm }/>
            <button type="submit">Search</button>
        </form>
         <Suspense fallback={ <Loader/> }>
             <LazyFilmList films={ fdFilms }/>
         </Suspense>
        </>
    );
}

export default MoviesPage;