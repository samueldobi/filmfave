const Router = require('express');
const movieController = require('../controllers/movieController');

const movieRouter = Router();
movieRouter.get('/popular', movieController.popular_movies);
movieRouter.get('/topmovies', movieController.top_movies);
movieRouter.get('/topseries', movieController.top_series);
movieRouter.get('/genre/:id', movieController.genre_by_id);
movieRouter.get('/filter', movieController.movie_filter);

module.exports = movieRouter;