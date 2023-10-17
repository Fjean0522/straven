import express, { Router } from 'express';
import { getAllMovies, getMoviesByCategory, getMovie } from '../controllers/movieController';


const router: Router = express.Router();

router.get('/', getAllMovies);
router.get('/:movieId', getMovie);
router.get('/category/:category', getMoviesByCategory);

export default router;