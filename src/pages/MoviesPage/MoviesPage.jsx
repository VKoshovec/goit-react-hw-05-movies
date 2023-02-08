import { useState } from 'react';
import scss from './moviesPage.module.scss';
import { getMoviesByName } from 'components/moviesApi';
import FilmList from 'components/FilmList/FilmList';

const Movies =()=>{

    const [fdFilms, setFdFilm ] = useState([]);

    const hendleSubmit = (e) => {
       e.preventDefault();
       const query = e.target.elements.searchWord.value;
       getMoviesByName(query).then(res => setFdFilm(res));
    }

    return(
        <>
        <form className={ scss.form } onSubmit={ hendleSubmit }>
            <input type="text" name="searchWord"/>
            <button type="submit">Search</button>
        </form>
        <FilmList films={ fdFilms }/>
        </>
    );
}

export default Movies;