const Router = require('express');
const movieController = require('../controllers/movieController');

const movieRouter = Router();
movieRouter.get('/popular', movieController.popular_movies);
movieRouter.get('/topmovies', movieController.top_movies);

module.exports = movieRouter;