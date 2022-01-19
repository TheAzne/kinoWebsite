import express from "express";
import { engine } from "express-handlebars";
import { marked } from "marked";
import { loadMovie, loadMovies } from "./src/movies.js";

const app = express();

app.engine("handlebars", engine({
  helpers: {
    markdown: md => marked(md),
  },
}));
app.set("view engine", "handlebars");
app.set("views", "./templates");


const menu =[
    {
        label: 'Home',
        link: '/',
      },

      {
        label: 'Movies',
        link: '/allMovies',
      },

      {
        label: 'About',
        link: '/about',
      },
      {
        label: 'Contact',
        link: '/contact',
      },
     
]

const menuWithActive = path => menu.map(item => {
    return {
      link: item.link,
      label: item.label,
      active: item.link == path,
    };
  });

  app.get("/", async (req, res) => {
    res.render("Home", {
      menu: menuWithActive(req.path)
    });
  });

  app.get("/allMovies", async (req, res) => {
    res.render("allMovies", {
      menu: menuWithActive(req.path)
    });
  });

  app.get("/about", async (req, res) => {
    res.render("about", {
      menu: menuWithActive(req.path)
    });
  });

  app.get("/contact", async (req, res) => {
    res.render("contact", {
      menu: menuWithActive(req.path)
    });
  });



app.get("/allMovies", async (req, res) => {
  const movies = await loadMovies();
  res.render("allmovies", { movies });
   
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

app.listen(5090);