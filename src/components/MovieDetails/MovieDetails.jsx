import scss from './movieDetails.module.scss';
import { getMovieInfo } from 'components/moviesApi';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';


const MovieDetails=()=>{

    const movieId = useParams().id;
    const [ movie, setMovie ] = useState

    useEffect (()=>{
        getMovieInfo(movieId).then(res => setMovie(res));
    },[]);

    return (
        <div className={ scss.movieCard }>
            <div>
                {/* <img src={ img } alt={ alt } className={ scss.poster }/> */}
                <div>
                    <span className={ scss.title }>{ movie.title }</span>
                    {/* <span>{ score }</span> */}
                    <span className={ scss.category }>Overview</span>
                    {/* <p>{ about }</p> */}
                    <span className={ scss.category }>Genres</span>
                    {/* <p>{ genres }</p> */}
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