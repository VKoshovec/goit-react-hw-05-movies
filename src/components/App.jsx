import { Routes, Route, NavLink } from "react-router-dom";
import TrendingTodayFilms from "./TrendingTodayFilms/TrendingTodayFilms";
import scss from './app.module.scss';
import styled from 'styled-components'; 

export const App = () => {
 
  const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-size: 20px;
  margin-left: 30px;
  

  &.active {
    color: red;
  }`;

  return (
    <div>
      <nav className={ scss.nav }>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>
      <Routes>
        <Route path="/" element={<TrendingTodayFilms/>} />
      </Routes>
    </div>
  );
};
