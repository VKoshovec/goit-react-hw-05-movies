import { Routes, Route } from "react-router-dom";

import Navigation from "./Navigation/Navigation";
import HomePage from "../pages/HomePage/HomePage";
import MoviesPage from "../pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "../pages/MovieDetailsPage/MovieDetailsPage";

import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';


export const App = () => {

  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/movies" element={<MoviesPage/>} />
        <Route path="/movies/:id" element={<MovieDetailsPage/>}>
          <Route path='/movies/:id/cast' element={<Cast/>}/>
          <Route path='/movies/:id/reviews' element={<Reviews/>}/>
        </Route>
      </Routes>
    </div>
  );

};
