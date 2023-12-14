import express, { Router } from 'express';
import { getUserWatchlist, addToWatchlist, removeFromWatchlist } from '../controllers/watchListController';

const router: Router = express.Router();

router.get('/:userId', getUserWatchlist);
router.post('/add/:userId/:movieId', addToWatchlist);
router.post('/remove/:userId/:movieId', removeFromWatchlist);


export default router;