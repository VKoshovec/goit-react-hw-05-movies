import axios from "axios";

const apiKey = '0bf9a11da9d083f4751315d07dcbd89b';

export async function trendingMovies () {
   return await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`).then(result => result.data.results);
};

export async function getMoviesByName (filmName) {
   return await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${filmName}&page=1&include_adult=false`).then(result => result.data.results);
};

export async function getMovieInfo (filmid) {
   return await axios.get(`https://api.themoviedb.org/3/movie/${filmid}?api_key=${apiKey}&language=en-US`).then(result => result);
};
