import express, { Router } from 'express';
import { protect } from '../middleware/authMiddleware';
import { 
    getAllMovies, 
    getMoviesByCategory, 
    getRandomMovie ,
    getMovie
} from '../controllers/movieController';


const router: Router = express.Router();

// GET all movies
router.get('/', protect, getAllMovies);

// GET all movies of a specific category
router.get('/category/:category', protect, getMoviesByCategory);

// GET a single movie randomly
router.get('/randomMovie', protect, getRandomMovie);

// GET a single movie
router.get('/:title',protect, getMovie);


export default router;
