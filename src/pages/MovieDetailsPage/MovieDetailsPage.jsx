import scss from './movieDetails.module.scss';
import { getMovieInfo, getImageUrl, getGenresList } from 'components/moviesApi';
import { Outlet, useParams, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const MovieDetails=()=>{

    const location = useLocation();
    const backLink = location.state?.from ?? "/movies";

    console.log(location);
    console.log(backLink);

    const movieId = useParams().id;
    const [ movie, setMovie ] = useState([]);
    const [ genres, setGenres ] = useState([]);
    const [ img, setImg] = useState('');  
      

    useEffect (()=>{
        getMovieInfo(movieId).then(res => { 
            setMovie(res);
            setImg(getImageUrl(res.poster_path, 300));
            const genresIdList =  res.genres.map((elem)=>{ return elem.id });
            getGenresList(genresIdList).then(res=>setGenres(res)).catch(() => alert('Some problems with API'));      
        }).catch(() => alert('Some problems with API'));

    },[movieId]);
       
    return (
        <>
        <Link to={ backLink } className={ scss.movieBackButton }>{`<-`} Go Back</Link>
        <div className={ scss.movieCard }>
            <div className={ scss.mainInfo }>
                <img src={ img } alt={ movie.title } className={ scss.poster }/>
                <div className={ scss.leftInfo}>
                    <span className={ scss.title }>{ movie.title }</span>
                    <span className={ scss.overview }>{`User score: ${movie.vote_average}`}</span>
                    <span className={ scss.category }>Overview</span>
                    <p className={ scss.overview }>{ movie.overview }</p>
                    <span className={ scss.category }>Genres</span>
                    
                        <ul className={ scss.genresList }>
                        { genres.map((elem)=> <li key={ elem }>{ elem }</li> ) }
                        </ul>
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
        </>
    )
}

export default MovieDetails;