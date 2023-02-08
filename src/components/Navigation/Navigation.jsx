import { NavLink } from "react-router-dom";
import scss from './navigation.module.scss';


const Navigation = () => {
    return (
      <nav className={ scss.nav }>
        <NavLink className={ scss.link } to="/">Home</NavLink>
        <NavLink className={ scss.link } to="/movies">Movies</NavLink>
      </nav>
    )
};
export default Navigation;