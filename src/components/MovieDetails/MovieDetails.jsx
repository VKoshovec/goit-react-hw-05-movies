import scss from './movieDetails.module.scss';

const MovieDetails=()=>{

    

    return (
        <div className={ scss.movieCard }>
            <div>
                <img src={ img } alt={ alt } className={ scss.poster }/>
                <div>
                    <span className={ scss.title }>{ title }</span>
                    <span>{ score }</span>
                    <span className={ scss.category }>Overview</span>
                    <p>{ about }</p>
                    <span className={ scss.category }>Genres</span>
                    <p>{ genres }</p>
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