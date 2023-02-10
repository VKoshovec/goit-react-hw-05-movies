import { useState, useEffect, lazy, Suspense } from "react";
import { trendingMovies } from "components/moviesApi";
import Loader from "components/Loader/Loader";

const ListOfFilms = lazy(() => import("components/FilmList/FilmList"))

const TrendingTodayFilms = () => {

    const[films, setFilms] = useState([]);

    useEffect (()=>{
        trendingMovies().then(res=> setFilms(res)).catch(() => alert('Some problems with API'));
    }, []);


    return (
        <Suspense fallback={ <Loader/> }>   
           <ListOfFilms title="Trending today" films={ films } />    
        </Suspense>
    );
};

export default TrendingTodayFilms;