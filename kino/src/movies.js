import fetch from "node-fetch";

const link = 'https://lernia-kino-cms.herokuapp.com/api/movies/';


export async function loadMovies() {
  const res = await fetch(link);
  const loading = await res.json();
  return loading.data;
}
export async function loadMovie(id) {
  const res = await fetch(link + id);
  const loading = await res.json();
  return loading.data;
}
