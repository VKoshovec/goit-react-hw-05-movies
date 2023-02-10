import { NavLink, useLocation } from "react-router-dom";
import {useEffect, useState} from "react"
import scss from './navigation.module.scss';


const Navigation = () => {

  const location = useLocation();

  const [homeLink, setHomeLink] = useState('/');

  useEffect(()=>{
    setHomeLink( location.pathname ); 
  },[])


    return (
      <nav className={ scss.nav }>
        <NavLink className={ scss.link } to={ homeLink }>Home</NavLink>
        <NavLink className={ scss.link } to="/movies">Movies</NavLink>
      </nav>
    )
};

export default Navigation;