import fetch from "node-fetch";

const link = 'https://lernia-kino-cms.herokuapp.com/api/movies/';

// function simplifyMovieObject(movie) {
//   return {
//     id: movie.id,
//     ...movie.attributes,
//   };
// }

export async function loadMovies() {
  const res = await fetch(link);
  const payload = await res.json();
  return payload.data;
}
export async function loadMovie(id) {
  const res = await fetch(link + id);
  const payload = await res.json();
  return payload.data;
}
