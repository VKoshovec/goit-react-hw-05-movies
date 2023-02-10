import scss from './movieDetailsPage.module.scss';
import { getMovieInfo, getImageUrl, getGenresList } from 'components/moviesApi';
import { Outlet, useParams, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const MovieDetails = () => {

    const location = useLocation();
    const movieId = useParams().id;
    const [ movie, setMovie ] = useState([]);
    const [ genres, setGenres ] = useState([]);
    const [ img, setImg] = useState('');  
    const [ defaultBackLink, setdefaultBackLink] = useState('');

    useEffect(()=>{
        location.state && setdefaultBackLink(location.state.from);
    },[location.state]);  

    useEffect (()=>{
        getMovieInfo(movieId).then(res => { 
            setMovie(res);
            setImg(res.poster_path? 
                   getImageUrl(res.poster_path, 300):"https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder");
            const genresIdList =  res.genres.map((elem)=>{ return elem.id });
            getGenresList(genresIdList).then(res=>setGenres(res)).catch(() => alert('Some problems with API'));      
        }).catch(() => alert('Some problems with API'));
    },[movieId]);
       
    const backLink = location.state?.from ?? defaultBackLink;

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
                <ul className={ scss.aditionalul }>
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