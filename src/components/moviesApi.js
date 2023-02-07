import axios from "axios";

const apiKey = '0bf9a11da9d083f4751315d07dcbd89b';

export async function trendingMovies () {
   return await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`).then(result => result.data.results);
};