import { Routes, Route } from "react-router-dom";

import Navigation from "./Navigation/Navigation";
import HomePage from "../pages/HomePage/HomePage";
import Movies from "../pages/MoviesPage/MoviesPage";
import MovieDetails from "../pages/MovieDetailsPage/MovieDetailsPage";


export const App = () => {

  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/movies/:id" element={<MovieDetails /> }/>
      </Routes>
    </div>
  );

};
