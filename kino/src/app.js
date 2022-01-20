import express from "express";
import { engine } from "express-handlebars";
import { marked } from "marked";
import { loadMovie, loadMovies } from "./movies.js";

const app = express();

app.engine("handlebars", engine({
  helpers: {
    markdown: md => marked(md),
  },
}));
app.set("view engine", "handlebars");
app.set("views", "./templates");

app.get("/", async (req, res) => {
  res.render("./partials/home");
});

app.get("/about", async (req, res) => {
    res.render("./partials/about");
  });

  app.get("/contact", async (req, res) => {
    res.render("./partials/contact");
  });

  app.get("/movies", async (req, res) => {
    const movies = await loadMovie();
    res.render("./partials/allMovies", { movies });
  });
  


app.get("/movies/:movieId", async (req, res) => {
  const movie = await loadMovie(req.params.movieId);
  if (movie) {
    res.render("movie", { movie });
  } else {
    res.status(404).render("404");
  }
});

app.use("/static", express.static("./static"));

export default app;


/* app.get("/", async (req, res) => {
  res.render("index");
});

app.get("/movies", async (req, res) => {
  const movies = await fetchAllMovies();
  res.render("./partials/allmovies", { movies });
});

app.get("/movies/:movieId", async (req, res) => {
  const movie = await fetchChosenMovie(req.params.movieId);
  if (movie) {
    res.render("./partials/movie", { movie });
  } else {
    res.status(404).render("404");
  }
});

app.get('/covidinformation', (req, res) => {
  res.render('./partials/covidinformation')
}); */