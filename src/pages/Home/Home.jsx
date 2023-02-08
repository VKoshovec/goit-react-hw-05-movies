import { useState, useEffect } from "react";
import { trendingMovies } from "components/moviesApi";
import React from "react";
import FilmList from "components/FilmList/FilmList";


const TrendingTodayFilms = () => {

    const[films, setFilms] = useState([]);

    useEffect (()=>{
        trendingMovies().then(res=> setFilms(res));
        return ( setFilms([]))
    }, []);


    return (   
        <FilmList title="Trending today" films={ films } />    
    );
};

export default TrendingTodayFilms;