import  PropTypes  from "prop-types";
import  scss  from './castCard.module.scss';

const CastCard =({ 
    castImg,
    castName,
    castCharacter }) => {

    return (
        <div className={ scss.castCard }>
            <div className={ scss.castLeftInfo }>
                <img className={ scss.castImg } src={ castImg } alt = { castImg }/>
            </div>
            <div>
                <p>{ `Name : ${ castName }` }</p>
                <p>{ `Character : ${ castCharacter }` }</p>
            </div>
        </div>
    )
};

CastCard.propTypes = {
    castImg: PropTypes.string.isRequired,
    castName: PropTypes.string.isRequired,
    castCharacter: PropTypes.string.isRequired
}

export default CastCard;