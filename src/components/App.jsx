import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "components/Loader/Loader";

import Navigation from "./Navigation/Navigation";

const LazyHomePage = lazy(() => import("../pages/HomePage/HomePage"));
const LazyMoviesPage = lazy(() => import("../pages/MoviesPage/MoviesPage"));
const LazyMovieDetailsPage = lazy(() => import("../pages/MovieDetailsPage/MovieDetailsPage"));
const LazyCast = lazy(() => import("components/Cast/Cast"));
const LazyReviews = lazy(() => import("components/Reviews/Reviews"));

export const App = () => {

  return (
    <div>
      <Navigation/>
        <Suspense fallback={ <Loader/> }>
          <Routes>
            <Route path="/" element={<LazyHomePage/>} />
            <Route path="/movies" element={<LazyMoviesPage/>} />
            <Route path="/movies/:id" element={<LazyMovieDetailsPage/>}>
              <Route path='cast' element={<LazyCast/>}/>
              <Route path='reviews' element={<LazyReviews/>}/>
            </Route>
            <Route path="*" element={<LazyHomePage/>} />
          </Routes>
        </Suspense>
    </div>
  );

};
