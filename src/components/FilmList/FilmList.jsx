import scss from './filmList.module.scss';
import PropTypes  from 'prop-types';
import { Link, useLocation } from "react-router-dom";

const FilmList =({ title , films })=> {

    const location = useLocation();

    return (
        <>
           { title && <h2 className={ scss.filmlisttitle }>{ title }</h2> }
            <ul className={ scss.filmlist }>
               { films.map((element)=>{ return <li key={ element.id }>
                <Link to = {`/movies/${element.id}`} state={{ from: location } }>{element.title}</Link>
                </li> }) }
            </ul>
        </>
    );
};

FilmList.propTypes = {
    title: PropTypes.string,
}

export default FilmList;