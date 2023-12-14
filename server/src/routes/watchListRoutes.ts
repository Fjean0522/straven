import express, { Router } from 'express';
import { addToWatchlist, removeFromWatchlist } from '../controllers/watchListController';

const router: Router = express.Router();

router.post('/add', addToWatchlist);
router.post('/remove', removeFromWatchlist);


export default router;