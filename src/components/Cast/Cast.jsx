import { getMovieCast } from "components/moviesApi";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import scss from './cast.module.scss'
import CastCard from "./CastCard/CastCard";

const Cast =()=> {

    const [cast, setCast] = useState([])
    const movieId = useParams().id;

    useEffect(()=>{
        getMovieCast (movieId).then(res => setCast(res.cast.slice(0,5)));
    },[movieId]);
    
    return (
        <ul className={ scss.list }>
            { cast.map((element)=>{ return <li key={ element.id }>
                <CastCard 
                    castImg = { element.profile_path}
                    castName = { element.name }
                    castCharacter = { element.character}
                />
            </li>}) }            
        </ul>
    )
};

export default Cast;