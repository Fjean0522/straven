import express, { Router } from 'express';
import { getAllMovies, getMoviesByCategory, getMovie, getHeroMovie } from '../controllers/movieController';


const router: Router = express.Router();

// GET all movies
router.get('/', getAllMovies);

// GET all movies of a specific category
router.get('/category/:category', getMoviesByCategory);

// GET a single movie randomly
router.get('/heroMovie', getHeroMovie);

// GET a single movie
router.get('/:title', getMovie);

export default router;