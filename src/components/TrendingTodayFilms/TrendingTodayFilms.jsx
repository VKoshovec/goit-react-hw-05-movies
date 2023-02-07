import { useState, useEffect } from "react";
import { trendingMovies } from "components/moviesApi";
import React from "react";
import { Link } from "react-router-dom";
import scss from './trendingTodayFilms.module.scss'


const TrendingTodayFilms = () => {

    const[films, setFilms] = useState([]);

    useEffect (()=>{
        if (!films.length) { 
           trendingMovies().then(res=> setFilms(res));
        }
        return ( setFilms([]))
    }, []);

     console.log(films);

    return (       
        <div >{ films.map((element)=>{ return <Link to = {`${element.id}`} className={ scss.filmLink }>{element.title}</Link> }) }</div>
    );
};

export default TrendingTodayFilms;