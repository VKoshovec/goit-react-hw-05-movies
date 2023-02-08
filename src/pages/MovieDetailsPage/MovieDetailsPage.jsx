import scss from './movieDetails.module.scss';
import { getMovieInfo, getImageUrl, getGenresList } from 'components/moviesApi';
import { Outlet, useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const MovieDetails=()=>{

    const movieId = useParams().id;
    const [ movie, setMovie ] = useState([]);
    const [ genres, setGenres ] = useState([]);
    

    useEffect (()=>{
        getMovieInfo(movieId).then(res => { 
            setMovie(res);
            const genresIdList =  res.genres.map((elem)=>{ return elem.id });
            getGenresList(genresIdList).then(res=>setGenres(res)); 
        });
    },[movieId]);
       

    console.log(movie)
    return (
        <div className={ scss.movieCard }>
            <div className={ scss.mainInfo}>
                <img src={ getImageUrl( movie.poster_path, 200 ) } alt={ movie.title } className={ scss.poster }/>
                <div className={ scss.leftInfo}>
                    <span className={ scss.title }>{ movie.title }</span>
                    <span className={ scss.overview }>{`User score: ${movie.vote_average}`}</span>
                    <span className={ scss.category }>Overview</span>
                    <p className={ scss.overview }>{ movie.overview }</p>
                    <span className={ scss.category }>Genres</span>
                    <p className={ scss.overview }>
                        <ul className={ scss.genresList }>
                        { genres.map((elem)=> <li>{ elem }</li> ) }
                        </ul>
                    </p>
                </div> 
            </div>
                <p className={ scss.aditional }>Additional information</p>
                <ul >
                   <li><Link to={`/movies/${movieId}/cast`}>Cast</Link></li>
                   <li><Link to={`/movies/${movieId}/reviews`} >Reviews</Link></li>
                </ul>
            <div className={ scss.linkInfo }>
                <Outlet/>
            </div>
        </div>
    )
}

export default MovieDetails;