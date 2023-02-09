import { getMovieReviews } from "components/moviesApi";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

const Reviews =()=> {

    const [reviews, setReviews] = useState([])
    const movieId = useParams().id;

    useEffect(()=>{
        getMovieReviews(movieId).then(res => setReviews(res.results)).catch(() => alert('Some problems with API'));
    },[movieId]);

    return (
        <ul>
            { reviews.length > 0 ? 
              reviews.map((element)=>{ return <li key={ nanoid() }>
              <p>{`Autor: ${ element.author }`}</p>
              <p>{ element.content }</p>
              </li>}) :
              <li>There are no reviews.</li>
            } 
        </ul>
    )
};

export default Reviews;