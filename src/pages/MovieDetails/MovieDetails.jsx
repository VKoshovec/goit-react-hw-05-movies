import scss from './movieDetails.module.scss';
import { getMovieInfo, getImageUrl, getGenresList } from 'components/moviesApi';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';


const MovieDetails=()=>{

    const movieId = useParams().id;
    const [ movie, setMovie ] = useState([]);

    useEffect (()=>{
        getMovieInfo(movieId).then(res => setMovie(res));
    },[]);


    console.log(movie);
    getGenresList();
    return (
        <div className={ scss.movieCard }>
            <div className={ scss.mainInfo}>
                <img src={ getImageUrl( movie.poster_path, 200 ) } alt={ movie.title } className={ scss.poster }/>
                <div className={ scss.leftInfo}>
                    <span className={ scss.title }>{ movie.title }</span>
                    {/* <span>{ score }</span> */}
                    <span className={ scss.category }>Overview</span>
                    <p className={ scss.overview }>{ movie.overview }</p>
                    <span className={ scss.category }>Genres</span>
                    {/* <p>{ getGenresList(movie.genres) }</p> */}
                </div> 
            </div>
                <span>Additional information</span>
                <ul>

                </ul>
            <div>

            </div>
        </div>
    )
}

export default MovieDetails;