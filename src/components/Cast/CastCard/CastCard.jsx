import { getImageUrl } from "components/moviesApi";
 import  scss  from './castCard.module.scss';

const CastCard =({ castImg, castName, castCharacter })=> {
    return (
        <div className={ scss.castCard }>
            <div className={ scss.castLeftInfo }>
                <img className={ scss.castImg } src={ getImageUrl(castImg, 300)} alt = { castImg }/>
            </div>
            <div>
                <p>{ `Name : ${ castName }` }</p>
                <p>{ `Character : ${ castCharacter }` }</p>
            </div>
        </div>
    )
};

export default CastCard;