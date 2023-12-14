import express, { Router } from 'express';
import { getUserWatchlist, addToWatchlist, removeFromWatchlist } from '../controllers/watchListController';

const router: Router = express.Router();

router.get('/', getUserWatchlist);
router.post('/add', addToWatchlist);
router.post('/remove', removeFromWatchlist);


export default router;